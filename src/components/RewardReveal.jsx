import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Home, CheckCircle, XCircle, Circle } from "lucide-react";

/* ── Reward pool ─────────────────────────────────────────────── */
const REWARDS = [
  { emoji: "🏆", title: "Outstanding!",      msg: "Take a proper 30-min chill break 😌",    color: "from-amber-500 to-orange-500" },
  { emoji: "🎯", title: "Topper Mindset!",   msg: "Your consistency is paying off.",         color: "from-indigo-500 to-purple-500" },
  { emoji: "🚀", title: "You're Improving!", msg: "Small progress becomes big success.",      color: "from-blue-500 to-indigo-500"   },
  { emoji: "✨", title: "Consistency Wins!", msg: "You earned a reward. Keep going!",         color: "from-purple-500 to-pink-500"   },
];

/* ── Confetti burst ──────────────────────────────────────────── */
const CONFETTI_COLORS = ["#5B4DFF","#F59E0B","#10B981","#F43F5E","#8B5CF6","#06B6D4","#FBBF24"];
function Confetti({ active }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => {
        const angle   = (i / 24) * 360;
        const dist    = 65 + Math.random() * 90;
        const color   = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        const size    = 3 + Math.random() * 4;
        const dx      = Math.cos((angle * Math.PI) / 180) * dist;
        const dy      = Math.sin((angle * Math.PI) / 180) * dist;
        return (
          <motion.div key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{ x: dx, y: dy, opacity: 0, scale: 0.3, rotate: angle * 2 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: Math.random() * 0.18 }}
            className="absolute top-1/2 left-1/2 rounded-sm"
            style={{ width: size, height: size, backgroundColor: color, marginLeft: -size/2, marginTop: -size/2 }}
          />
        );
      })}
    </div>
  );
}

/* ── Animated counter ────────────────────────────────────────── */
function Counter({ to, delay = 0 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0;
      const steps = 30;
      const iv = setInterval(() => {
        i++;
        setVal(Math.round((to * i) / steps));
        if (i >= steps) clearInterval(iv);
      }, 40);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [to, delay]);
  return <>{val}</>;
}

/* ── PHASE 0: Rich Performance Review ───────────────────────── */
function PerformanceScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
      className="absolute inset-0 bg-[#0D0F1C] flex flex-col overflow-hidden z-10"
    >
      {/* Top nav */}
      <div className="flex items-center justify-between px-4 pt-12 pb-3">
        <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center">
          <ArrowLeft size={14} className="text-white/60" />
        </div>
        <p className="text-[12px] font-bold text-white tracking-tight">Performance Review</p>
        <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center">
          <Home size={13} className="text-white/60" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-3">

        {/* ── Main analytics card ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative rounded-[22px] overflow-hidden p-4"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1060] to-[#0A0820]" />
          <motion.div
            animate={{ x: ["-100%","200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none"
          />

          <div className="relative z-10">
            {/* Test name */}
            <p className="text-[9px] font-bold text-indigo-300/60 tracking-widest uppercase mb-3">Mock Test 4 · Quant</p>

            <div className="flex items-center justify-between mb-4">
              {/* Score */}
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-[38px] font-black text-white leading-none">
                    <Counter to={19} delay={300} />
                  </span>
                  <span className="text-[11px] text-white/40 mb-1 font-medium">marks</span>
                </div>
                <p className="text-[9px] text-white/30 mt-1">out of 30</p>
              </div>

              {/* Circular accuracy ring */}
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5"/>
                  <motion.circle cx="28" cy="28" r="22" fill="none"
                    stroke="url(#ringGrad)" strokeWidth="5" strokeLinecap="round"
                    strokeDasharray="138"
                    initial={{ strokeDashoffset: 138 }}
                    animate={{ strokeDashoffset: 138 * (1 - 0.78) }}
                    transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818CF8"/>
                      <stop offset="100%" stopColor="#5B4DFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Glow */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[13px] font-black text-white leading-none">78%</span>
                  <span className="text-[7px] text-indigo-300/70">Accuracy</span>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Attempted", val: 9, total: 10, color: "text-blue-400"   },
                { label: "Correct",   val: 7, total: 9,  color: "text-emerald-400"},
                { label: "Wrong",     val: 2, total: 9,  color: "text-rose-400"   },
              ].map(({ label, val, total, color }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/[0.05] rounded-xl py-2 px-2 text-center"
                >
                  <p className={`text-[14px] font-black ${color} leading-none`}>
                    <Counter to={val} delay={500 + i * 120} />
                    <span className="text-[9px] text-white/20">/{total}</span>
                  </p>
                  <p className="text-[8px] text-white/35 mt-0.5">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Question Breakdown ── */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Question Breakdown</p>
          </div>
          {/* Legend */}
          <div className="flex gap-3 mb-2.5">
            {[["#10B981","Correct"],["#F43F5E","Wrong"],["rgba(255,255,255,0.2)","Skipped"]].map(([c,l])=>(
              <div key={l} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                <span className="text-[9px] text-white/40">{l}</span>
              </div>
            ))}
          </div>

          {/* Q card */}
          <div className="rounded-[18px] bg-white/[0.04] border border-white/[0.06] p-3">
            <div className="flex items-start justify-between mb-2.5">
              <div>
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider mb-1">Q1. Arithmetic</p>
                <p className="text-[12px] font-semibold text-white leading-snug">Evaluate: (−2) + 5</p>
              </div>
              <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/12 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">Easy</span>
            </div>
            {/* Options */}
            <div className="grid grid-cols-2 gap-1.5">
              {[["A","1","correct"],["B","3",""],["C","-3",""],["D","7",""]].map(([k,v,state])=>(
                <div key={k} className={`flex items-center gap-2 rounded-xl px-2.5 py-2 border ${
                  state === "correct" ? "bg-emerald-500/15 border-emerald-500/30" : "bg-white/[0.03] border-white/[0.05]"
                }`}>
                  <span className={`text-[9px] font-black ${state==="correct" ? "text-emerald-400" : "text-white/30"}`}>{k}</span>
                  <span className={`text-[11px] font-semibold ${state==="correct" ? "text-emerald-300" : "text-white/60"}`}>{v}</span>
                  {state==="correct" && <CheckCircle size={10} className="text-emerald-400 ml-auto" />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── PHASE 1: Mystery Reward Modal ───────────────────────────── */
function RewardModal({ onReveal }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 flex items-center justify-center"
      style={{ backdropFilter: "blur(10px)", background: "rgba(8,9,20,0.72)" }}
    >
      <motion.div
        initial={{ scale: 0.72, opacity: 0, y: 16 }}
        animate={{ scale: 1,    opacity: 1, y: 0  }}
        exit={{   scale: 0.82, opacity: 0        }}
        transition={{ type: "spring", stiffness: 290, damping: 24 }}
        className="mx-5 rounded-[26px] bg-white/[0.07] border border-white/20 backdrop-blur-2xl p-5 text-center shadow-[0_24px_64px_rgba(0,0,0,0.55)]"
      >
        <motion.div
          animate={{ y: [0,-7,0], rotate: [-4,4,-4] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-[46px] mb-3"
        >🎁</motion.div>

        {/* Pulse ring */}
        <motion.div animate={{ scale:[1,1.35,1], opacity:[0.35,0,0.35] }}
          transition={{ duration:2, repeat:Infinity }}
          className="absolute inset-0 rounded-[26px] border border-indigo-400/20 pointer-events-none"
        />

        <p className="text-[14px] font-black text-white mb-1">Mystery Reward Box</p>
        <p className="text-[10px] text-white/45 mb-5 leading-snug">Tap to reveal your motivation reward!</p>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={onReveal}
          className="w-full py-3 rounded-2xl text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(91,77,255,0.4)]"
          style={{ background: "linear-gradient(135deg,#5B4DFF,#8B5CF6)" }}
        >
          Reveal Reward ✨
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

/* ── PHASE 2: Motivation Reward Card ─────────────────────────── */
function RewardCard({ reward }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 flex items-center justify-center"
      style={{ backdropFilter: "blur(12px)", background: "rgba(8,9,20,0.85)" }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mx-5 rounded-[28px] overflow-hidden shadow-[0_28px_64px_rgba(91,77,255,0.35)] border border-white/12"
      >
        {/* Gradient header */}
        <div className={`bg-gradient-to-br ${reward.color} px-5 pt-6 pb-5 flex flex-col items-center`}>
          <motion.div
            animate={{ scale:[1,1.22,1], rotate:[0,10,0] }}
            transition={{ duration:0.75, repeat:3, ease:"easeInOut" }}
            className="text-[48px] mb-2"
          >{reward.emoji}</motion.div>
          <p className="text-[16px] font-black text-white tracking-tight">{reward.title}</p>
        </div>

        {/* Content */}
        <div className="bg-[#0D0F1C]/96 px-5 py-4 text-center">
          <p className="text-[11px] text-white/65 leading-relaxed mb-4">{reward.msg}</p>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="py-3 rounded-2xl text-[13px] font-bold text-white cursor-pointer shadow-[0_6px_16px_rgba(91,77,255,0.3)]"
            style={{ background: "linear-gradient(135deg,#5B4DFF,#8B5CF6)" }}
          >
            Claim Motivation 🎯
          </motion.div>
          <p className="text-[9px] text-white/25 mt-2 font-semibold">+50 XP earned</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main export ─────────────────────────────────────────────── */
export default function RewardReveal() {
  // phase: 0=perf review, 1=modal, 2=reward card
  const [phase, setPhase]         = useState(0);
  const [rewardIdx, setRewardIdx] = useState(0);
  const [confetti, setConfetti]   = useState(false);

  useEffect(() => {
    let t;
    if (phase === 0) t = setTimeout(() => setPhase(1), 4000);
    if (phase === 1) t = setTimeout(() => triggerReveal(), 3200); // auto-tap
    if (phase === 2) t = setTimeout(() => {
      setPhase(0);
      setRewardIdx(n => (n + 1) % REWARDS.length);
    }, 4200);
    return () => clearTimeout(t);
  }, [phase]);

  function triggerReveal() {
    setConfetti(true);
    setPhase(2);
    setTimeout(() => setConfetti(false), 1500);
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[38px]">
      <AnimatePresence mode="wait">
        {phase === 0 && <PerformanceScreen key="perf" />}
        {phase === 1 && (
          <div key="perf-modal" className="absolute inset-0">
            <PerformanceScreen />
            <RewardModal onReveal={triggerReveal} />
          </div>
        )}
        {phase === 2 && <RewardCard key="card" reward={REWARDS[rewardIdx]} />}
      </AnimatePresence>
      <Confetti active={confetti} />
    </div>
  );
}
