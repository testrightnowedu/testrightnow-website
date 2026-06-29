import { useAnimationFrame, useMotionValue, useTransform, motion, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BookOpen, Brain, TrendingUp, Trophy,
  User, Zap, Target, Lightbulb,
  Map, RefreshCw, Clock, Flame,
  Filter, BarChart2, Shield, MessageCircle
} from "lucide-react";

const DEG = Math.PI / 180;

/* ── Full card pool ──────────────────────────────────────────── */
const CARD_POOL = [
  { Icon: BookOpen,      label:"Guided",        sub:"Learning",         accent:"#6D5FFA", iconBg:"#EEF0FF" },
  { Icon: Brain,         label:"Smart",          sub:"Practice",         accent:"#9333EA", iconBg:"#F5EDFF" },
  { Icon: TrendingUp,    label:"Track",          sub:"Progress",         accent:"#3B82F6", iconBg:"#EFF6FF" },
  { Icon: Trophy,        label:"Earn",           sub:"Rewards",          accent:"#D97706", iconBg:"#FFFBEB" },
  { Icon: User,          label:"Self-Study",     sub:"Success",          accent:"#059669", iconBg:"#ECFDF5" },
  { Icon: Zap,           label:"Smart Skip",     sub:"Strategy",         accent:"#DC2626", iconBg:"#FEF2F2" },
  { Icon: Target,        label:"Mission",        sub:"Learning",         accent:"#7C3AED", iconBg:"#F5F3FF" },
  { Icon: Lightbulb,     label:"Topper",         sub:"Thinking",         accent:"#D97706", iconBg:"#FFFBEB" },
  { Icon: Map,           label:"Guided",         sub:"Prep Path",        accent:"#0891B2", iconBg:"#ECFEFF" },
  { Icon: RefreshCw,     label:"Revision",       sub:"Cycles",           accent:"#7C3AED", iconBg:"#F5F3FF" },
  { Icon: Clock,         label:"Time",           sub:"Intelligence",     accent:"#0284C7", iconBg:"#F0F9FF" },
  { Icon: Flame,         label:"Motivation",     sub:"System",           accent:"#EA580C", iconBg:"#FFF7ED" },
  { Icon: Filter,        label:"Smart Q",        sub:"Selection",        accent:"#6D5FFA", iconBg:"#EEF0FF" },
  { Icon: BarChart2,     label:"Consistency",    sub:"Building",         accent:"#16A34A", iconBg:"#F0FDF4" },
  { Icon: Shield,        label:"Mock",           sub:"Recovery",         accent:"#9333EA", iconBg:"#F5EDFF" },
  { Icon: MessageCircle, label:"Coaching",       sub:"Psychology",       accent:"#BE185D", iconBg:"#FDF2F8" },
];

/* ── Desktop orbit slots (Widened to encircle phone + desktop) ── */
const ORBITS_DESKTOP = [
  { orbitRx:340, orbitRy:85,  orbitRot:0,   speed:32, startDeg:195, waveAmp:4, waveFq:0.55 },
  { orbitRx:280, orbitRy:185, orbitRot:22,  speed:26, startDeg:152, waveAmp:6, waveFq:0.40 },
  { orbitRx:360, orbitRy:75,  orbitRot:-20, speed:38, startDeg:348, waveAmp:3, waveFq:0.65 },
  { orbitRx:310, orbitRy:165, orbitRot:-32, speed:28, startDeg:30,  waveAmp:5, waveFq:0.48 },
];

/* ── Mobile orbit slots (smaller radii, slower) ──────────────── */
const ORBITS_MOBILE = [
  { orbitRx:165, orbitRy:42,  orbitRot:0,   speed:20, startDeg:195, waveAmp:3, waveFq:0.55 },
  { orbitRx:138, orbitRy:108, orbitRot:22,  speed:16, startDeg:152, waveAmp:4, waveFq:0.40 },
  { orbitRx:170, orbitRy:38,  orbitRot:-20, speed:22, startDeg:348, waveAmp:2, waveFq:0.65 },
  { orbitRx:145, orbitRy:98,  orbitRot:-32, speed:17, startDeg:30,  waveAmp:3, waveFq:0.48 },
];

/* ── Purple spheres ──────────────────────────────────────────── */
const SPHERES = [
  { size:20, top:"8%",  left:"14%",  delay:0,   dur:4.8 },
  { size:14, top:"18%", right:"6%",  delay:0.9, dur:3.9 },
  { size:16, top:"68%", left:"8%",   delay:1.3, dur:5.4 },
  { size:11, top:"78%", right:"10%", delay:0.4, dur:3.6 },
  { size:18, top:"44%", right:"3%",  delay:1.7, dur:5.0 },
  { size:10, top:"56%", left:"4%",   delay:0.6, dur:3.3 },
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
        boxShadow:`0 ${Math.round(size/3)}px ${size}px rgba(109,95,250,0.50), inset 0 1px 2px rgba(255,255,255,0.4)`,
      }}
    />
  );
}

/* ── Single orbiting card ────────────────────────────────────── */
function OrbitalCard({ orbit, card, cardKey, isMobile }) {
  const { orbitRx, orbitRy, orbitRot, speed, startDeg, waveAmp, waveFq } = orbit;
  const { Icon, label, sub, accent, iconBg } = card;

  const theta = useMotionValue(startDeg * DEG);
  const waveT = useMotionValue(startDeg);
  const cosR  = Math.cos(orbitRot * DEG);
  const sinR  = Math.sin(orbitRot * DEG);

  const rawX = useTransform(theta, t => {
    const ex = Math.cos(t)*orbitRx, ey = Math.sin(t)*orbitRy;
    return ex*cosR - ey*sinR;
  });
  const rawY = useTransform(theta, t => {
    const ex = Math.cos(t)*orbitRx, ey = Math.sin(t)*orbitRy;
    return ex*sinR + ey*cosR;
  });
  const wave = useTransform(waveT, t => Math.sin(t*waveFq)*waveAmp);

  const sx = useSpring(rawX, { stiffness:85, damping:26 });
  const sy = useSpring(rawY, { stiffness:85, damping:26 });
  const combinedY = useTransform([sy, wave], ([yv, wv]) => yv+wv);

  const maxY    = orbitRx*Math.abs(sinR) + orbitRy*Math.abs(cosR);
  const scale   = useTransform(rawY, [-maxY, maxY], [0.72, 1.08]);
  const zIndex  = useTransform(rawY, [-maxY, maxY], [2, 30]);
  const depthOp = useTransform(rawY, [-maxY, maxY], [0.35, 1.0]);
  const tiltZ   = useTransform(theta, t => -Math.sin(t)*6);
  const glowOp  = useTransform(rawY, [0, maxY], [0, 0.40]);

  useAnimationFrame((_, delta) => {
    theta.set(theta.get() + speed*DEG*delta/1000);
    waveT.set(waveT.get() + delta/1000);
  });

  return (
    <motion.div
      style={{
        position:"absolute",
        x:sx, y:combinedY,
        scale, zIndex, opacity:depthOp, rotateZ:tiltZ,
        translateX:"-50%", translateY:"-50%",
        willChange:"transform",
      }}
    >
      <motion.div className="absolute inset-0 rounded-[18px] pointer-events-none"
        style={{ background:`radial-gradient(circle, ${accent}40 0%, transparent 70%)`, opacity:glowOp, scale:1.6, filter:"blur(8px)" }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={cardKey}
          initial={{ opacity:0, scale:0.80, y:5 }}
          animate={{ opacity:1, scale:1, y:0 }}
          exit={{ opacity:0, scale:0.80, y:-5 }}
          transition={{ duration:0.4, ease:"easeInOut" }}
          className="flex items-center gap-2 rounded-[18px] cursor-default"
          style={{
            background:"rgba(255,255,255,0.92)",
            backdropFilter:"blur(16px)",
            border:"1.5px solid rgba(255,255,255,0.96)",
            boxShadow:"0 6px 24px rgba(91,77,255,0.10), 0 2px 6px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)",
            padding: isMobile ? "6px 10px 6px 6px" : "10px 14px 10px 10px",
            minWidth: isMobile ? 100 : 130,
          }}
        >
          <div className="rounded-xl flex items-center justify-center shrink-0"
            style={{
              width: isMobile ? 30 : 40, height: isMobile ? 30 : 40,
              background:iconBg,
            }}>
            <Icon size={isMobile ? 14 : 18} style={{ color:accent }}/>
          </div>
          <div>
            <p style={{ fontSize: isMobile ? 10 : 12.5, fontWeight:700, color:"#1e293b", lineHeight:1.2 }}>{label}</p>
            <p style={{ fontSize: isMobile ? 9 : 10.5, color:"#64748b", marginTop:1, lineHeight:1.2 }}>{sub}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main export ─────────────────────────────────────────────── */
export default function OrbitalSystem() {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check, { passive:true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices(prev => {
        const slot = Math.floor(Math.random() * 4);
        const available = CARD_POOL.map((_,i)=>i).filter(i=>!prev.includes(i));
        if (!available.length) return prev;
        const next = [...prev];
        next[slot] = available[Math.floor(Math.random()*available.length)];
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const orbits = isMobile ? ORBITS_MOBILE : ORBITS_DESKTOP;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {SPHERES.map((s,i) => <PurpleSphere key={i} {...s}/>)}
      <div className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-auto lg:ml-[40px]">
        {orbits.map((orbit, i) => (
          <OrbitalCard
            key={i}
            orbit={orbit}
            card={CARD_POOL[activeIndices[i]]}
            cardKey={activeIndices[i]}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
