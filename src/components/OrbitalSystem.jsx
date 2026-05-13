import { useAnimationFrame, useMotionValue, useTransform, motion, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BookOpen, Brain, TrendingUp, Trophy,
  User, Zap, Target, Lightbulb,
  Map, RefreshCw, Clock, Flame,
  Filter, BarChart2, Shield, MessageCircle
} from "lucide-react";

const DEG = Math.PI / 180;

/* ── Full card pool (16 cards, 4 shown at a time) ────────────── */
const CARD_POOL = [
  { Icon: BookOpen,      label:"Guided",        sub:"Learning",          accent:"#6D5FFA", iconBg:"#EEF0FF" },
  { Icon: Brain,         label:"Smart",          sub:"Practice",          accent:"#9333EA", iconBg:"#F5EDFF" },
  { Icon: TrendingUp,    label:"Track",          sub:"Progress",          accent:"#3B82F6", iconBg:"#EFF6FF" },
  { Icon: Trophy,        label:"Earn",           sub:"Rewards",           accent:"#D97706", iconBg:"#FFFBEB" },
  { Icon: User,          label:"Self-Study",     sub:"Driven Success",    accent:"#059669", iconBg:"#ECFDF5" },
  { Icon: Zap,           label:"Intelligent",    sub:"Skip Strategy",     accent:"#DC2626", iconBg:"#FEF2F2" },
  { Icon: Target,        label:"Mission-Based",  sub:"Learning",          accent:"#7C3AED", iconBg:"#F5F3FF" },
  { Icon: Lightbulb,     label:"Topper",         sub:"Thinking System",   accent:"#D97706", iconBg:"#FFFBEB" },
  { Icon: Map,           label:"Guided",         sub:"Prep Path",         accent:"#0891B2", iconBg:"#ECFEFF" },
  { Icon: RefreshCw,     label:"Revision",       sub:"Cycles",            accent:"#7C3AED", iconBg:"#F5F3FF" },
  { Icon: Clock,         label:"Time",           sub:"Intelligence",      accent:"#0284C7", iconBg:"#F0F9FF" },
  { Icon: Flame,         label:"Motivation",     sub:"System",            accent:"#EA580C", iconBg:"#FFF7ED" },
  { Icon: Filter,        label:"Smart Question", sub:"Selection",         accent:"#6D5FFA", iconBg:"#EEF0FF" },
  { Icon: BarChart2,     label:"Consistency",    sub:"Building",          accent:"#16A34A", iconBg:"#F0FDF4" },
  { Icon: Shield,        label:"Mock Recovery",  sub:"System",            accent:"#9333EA", iconBg:"#F5EDFF" },
  { Icon: MessageCircle, label:"Coaching",       sub:"Psychology",        accent:"#BE185D", iconBg:"#FDF2F8" },
];

/* ── 4 fixed orbit slots (physics only) ─────────────────────── */
const ORBITS = [
  { orbitRx:255, orbitRy:55,  orbitRot:0,   speed:28, startDeg:195, waveAmp:4, waveFq:0.55 },
  { orbitRx:195, orbitRy:148, orbitRot:22,  speed:22, startDeg:152, waveAmp:6, waveFq:0.40 },
  { orbitRx:260, orbitRy:48,  orbitRot:-20, speed:32, startDeg:348, waveAmp:3, waveFq:0.65 },
  { orbitRx:210, orbitRy:135, orbitRot:-32, speed:24, startDeg:30,  waveAmp:5, waveFq:0.48 },
];

/* ── Purple sphere accents ───────────────────────────────────── */
const SPHERES = [
  { size:24, top:"8%",  left:"16%",  delay:0,   dur:4.8 },
  { size:16, top:"18%", right:"6%",  delay:0.9, dur:3.9 },
  { size:20, top:"65%", left:"10%",  delay:1.3, dur:5.4 },
  { size:13, top:"75%", right:"11%", delay:0.4, dur:3.6 },
  { size:22, top:"42%", right:"3%",  delay:1.7, dur:5.0 },
  { size:12, top:"54%", left:"5%",   delay:0.6, dur:3.3 },
  { size:15, top:"3%",  right:"24%", delay:1.0, dur:4.2 },
  { size:18, top:"82%", left:"30%",  delay:0.3, dur:4.6 },
];

function PurpleSphere({ size, top, left, right, delay, dur }) {
  return (
    <motion.div
      animate={{ y:[0,-10,0], scale:[1,1.07,1] }}
      transition={{ duration:dur, repeat:Infinity, ease:"easeInOut", delay }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width:size, height:size, top, left, right,
        background:"radial-gradient(circle at 32% 26%, rgba(255,255,255,0.70), #8B5CF6 50%, #3B1FA8 90%)",
        boxShadow:`0 ${Math.round(size/3)}px ${size*1.2}px rgba(109,95,250,0.55), 0 0 ${size*0.5}px rgba(167,139,250,0.4), inset 0 1px 2px rgba(255,255,255,0.4)`,
      }}
    />
  );
}

/* ── OrbitalCard: orbit never stops, card content fades/cycles ─ */
function OrbitalCard({ orbit, card, cardKey }) {
  const { orbitRx, orbitRy, orbitRot, speed, startDeg, waveAmp, waveFq } = orbit;
  const { Icon, label, sub, accent, iconBg } = card;

  const theta = useMotionValue(startDeg * DEG);
  const waveT = useMotionValue(startDeg);
  const cosR  = Math.cos(orbitRot * DEG);
  const sinR  = Math.sin(orbitRot * DEG);

  const rawX = useTransform(theta, t => {
    const ex = Math.cos(t) * orbitRx, ey = Math.sin(t) * orbitRy;
    return ex * cosR - ey * sinR;
  });
  const rawY = useTransform(theta, t => {
    const ex = Math.cos(t) * orbitRx, ey = Math.sin(t) * orbitRy;
    return ex * sinR + ey * cosR;
  });
  const wave = useTransform(waveT, t => Math.sin(t * waveFq) * waveAmp);

  const sx = useSpring(rawX, { stiffness:85, damping:26 });
  const sy = useSpring(rawY, { stiffness:85, damping:26 });
  const combinedY = useTransform([sy, wave], ([yv, wv]) => yv + wv);

  const maxY    = orbitRx * Math.abs(sinR) + orbitRy * Math.abs(cosR);
  const scale   = useTransform(rawY, [-maxY, maxY], [0.76, 1.10]);
  const zIndex  = useTransform(rawY, [-maxY, maxY], [2, 30]);
  const depthOp = useTransform(rawY, [-maxY, maxY], [0.40, 1.0]);
  const blur    = useTransform(rawY, [-maxY, maxY], [3.5, 0]);
  const tiltZ   = useTransform(theta, t => -Math.sin(t) * 7);
  const glowOp  = useTransform(rawY, [0, maxY], [0, 0.40]);

  useAnimationFrame((_, delta) => {
    theta.set(theta.get() + speed * DEG * delta / 1000);
    waveT.set(waveT.get() + delta / 1000);
  });

  return (
    <motion.div
      style={{
        position:"absolute",
        x:sx, y:combinedY,
        scale, zIndex, opacity:depthOp, rotateZ:tiltZ,
        translateX:"-50%", translateY:"-50%",
        willChange:"transform",
        filter: useTransform(blur, b => `blur(${b}px)`),
      }}
    >
      {/* Depth glow behind card */}
      <motion.div className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{ background:`radial-gradient(circle, ${accent}44 0%, transparent 70%)`, opacity:glowOp, scale:1.7, filter:"blur(10px)" }}
      />

      {/* Card content — fades when cycling to new card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cardKey}
          initial={{ opacity:0, scale:0.82, y:6 }}
          animate={{ opacity:1, scale:1, y:0 }}
          exit={{ opacity:0, scale:0.82, y:-6 }}
          transition={{ duration:0.45, ease:"easeInOut" }}
          className="hidden lg:flex items-center gap-3 px-4 py-3.5 rounded-[22px] cursor-default"
          style={{
            background:"rgba(255,255,255,0.90)",
            backdropFilter:"blur(20px)",
            border:"1.5px solid rgba(255,255,255,0.96)",
            boxShadow:"0 8px 32px rgba(91,77,255,0.11), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)",
            minWidth:138,
          }}
        >
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background:iconBg, boxShadow:`0 0 0 1px ${accent}20` }}>
            <Icon size={19} style={{ color:accent }}/>
          </div>
          <div>
            <p className="text-[12.5px] font-bold text-slate-800 leading-tight">{label}</p>
            <p className="text-[10.5px] text-slate-500 mt-0.5 font-medium leading-tight">{sub}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main export ─────────────────────────────────────────────── */
export default function OrbitalSystem() {
  // activeIndices: which card from CARD_POOL is in each of the 4 orbit slots
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices(prev => {
        // Pick a random slot to swap
        const slot = Math.floor(Math.random() * 4);
        // Find cards not currently shown
        const available = CARD_POOL
          .map((_, i) => i)
          .filter(i => !prev.includes(i));
        if (available.length === 0) return prev;
        const next = [...prev];
        next[slot] = available[Math.floor(Math.random() * available.length)];
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Purple sphere accents */}
      {SPHERES.map((s,i) => <PurpleSphere key={i} {...s}/>)}

      {/* 4 orbiting slots, each cycling through the card pool */}
      <div style={{ position:"absolute", top:"50%", left:"50%", width:0, height:0, pointerEvents:"auto" }}>
        {ORBITS.map((orbit, i) => (
          <OrbitalCard
            key={i}
            orbit={orbit}
            card={CARD_POOL[activeIndices[i]]}
            cardKey={activeIndices[i]}
          />
        ))}
      </div>
    </div>
  );
}
