import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Home, FileText, Gift, User, Lock, CheckCircle } from "lucide-react";
import RewardReveal from "./RewardReveal";
import OrbitalSystem from "./OrbitalSystem";
import AnimatedLaptopScreen from "./AnimatedLaptopScreen";

/* ── Learning path ───────────────────────────────────────────── */
const LEARNING_PATH = [
  { title: "Milestones 0–2", sub: "Foundations & Qualifiers", status: "completed" },
  { title: "Milestones 3–5", sub: "Core Contenders", status: "completed" },
  { title: "Milestones 6–8", sub: "Elite (In Progress)", status: "active", pct: 68 },
  { title: "Milestones 9–10", sub: "Mock Slots", status: "locked" },
];

/* ── Bottom tabs ─────────────────────────────────────────────── */
const TABS = [
  { Icon: Home, label: "Home", active: true },
  { Icon: BookOpen, label: "Practice", active: false },
  { Icon: FileText, label: "Mock Tests", active: false },
  { Icon: Gift, label: "Rewards", active: false },
  { Icon: User, label: "Profile", active: false },
];

/* ── XP counter ──────────────────────────────────────────────── */
function useCountUp(target, dur = 1800, delay = 600) {
  const [v, setV] = useState(target - 60);
  useEffect(() => {
    let iv;
    const t = setTimeout(() => {
      let i = 0, steps = 40;
      iv = setInterval(() => {
        i++;
        setV(Math.round((target - 60) + (60 * i / steps)));
        if (i >= steps) clearInterval(iv);
      }, dur / steps);
    }, delay);
    return () => {
      clearTimeout(t);
      if (iv) clearInterval(iv);
    };
  }, [target, dur, delay]);
  return v;
}


/* ── Main component ──────────────────────────────────────────── */
export default function PhoneMockup() {
  const xp = useCountUp(1560);
  const containerRef = useRef(null);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    let innerTimeout;
    const cycle = () => {
      setShowReward(true);
      innerTimeout = setTimeout(() => setShowReward(false), 12000);
    };
    const t = setTimeout(cycle, 9000);
    const iv = setInterval(cycle, 22000);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
      if (innerTimeout) clearTimeout(innerTimeout);
    };
  }, []);

  // Base cinematic tilt + subtle mouse influence
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const BASE_TILT = { rotateX: 6, rotateY: -24, rotateZ: 8 };

  const onMouseMove = (e) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setMouseOffset({
      x: ((e.clientY - r.top - r.height / 2) / r.height) * -4,
      y: ((e.clientX - r.left - r.width / 2) / r.width) * 4,
    });
  };
  const onMouseLeave = () => setMouseOffset({ x: 0, y: 0 });

  return (
    <div className="relative flex justify-center items-center h-full select-none min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">
      {/* Scale wrapper for responsive sizing */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="scale-[0.52] sm:scale-[0.68] md:scale-[0.82] lg:scale-100 origin-center lg:-ml-[100px] xl:-ml-[160px]"
        style={{ perspective: "1200px" }}
      >
        {/* ── Atmospheric haze behind phone ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Outer bloom */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(91,77,255,0.06) 45%, transparent 72%)" }}
          />
          {/* Inner volumetric core */}
          <motion.div
            animate={{ scale: [1, 1.14, 1], opacity: [0.22, 0.38, 0.22] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 70%)", filter: "blur(24px)" }}
          />
        </div>

        {/* ── Orbital card + ring system ── */}
        <OrbitalSystem />

        {/* ── Desktop webapp showcase (floating independently behind) ── */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.82 }}
          animate={{ opacity: 1, x: [60, 45, 60], y: [0, -18, 0], scale: 0.82 }}
          transition={{
            opacity: { duration: 1.1, delay: 0.5 },
            x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ y: -5, transition: { duration: 0.4 } }}
          className="absolute hidden lg:block pointer-events-auto"
          style={{
            left: "calc(50% + 50px)",
            top: "50%",
            marginTop: -240, // Pushed further up to separate from phone
            zIndex: 5, // Sits firmly behind phone
            perspective: "1200px",
          }}
        >
          {/* Subtle depth blur wrapper to avoid breaking 3D transform */}
          <div style={{ opacity: 0.95 }}>
            <motion.div
              animate={{ rotateY: [28, 22, 28], rotateX: [8, 12, 8], rotateZ: [-2, -1, -2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* ── 3D LAPTOP SCREEN LID ── */}
              <div style={{ position: "relative", transformStyle: "preserve-3d", zIndex: 2 }}>
                {/* Display Edge (Thickness) */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-[#5c5d73] to-[#1a1b1e] border border-[#2d2d30]" style={{ transform: `translateZ(-${i}px)` }} />
                ))}

                {/* Browser frame / Bezel */}
                <div className="relative" style={{
                  width: 450, borderRadius: 16,
                  background: "#080a0f", // Black Apple-style bezel
                  padding: "10px 6px 6px 6px",
                  boxShadow: "0 60px 120px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transform: "translateZ(0)",
                  border: "1px solid rgba(255,255,255,0.15)"
                }}>
                {/* Webcam Cutout */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#050505] rounded-full border border-white/5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,1)]">
                  <div className="w-[1px] h-[1px] bg-[#1a4b8c] rounded-full shadow-[0_0_1px_rgba(255,255,255,0.6)]" />
                </div>
                {/* Screen Content Wrapper */}
                <div style={{ background: "#F8FAFC", borderRadius: 10, overflow: "hidden", position: "relative" }}>
                  {/* Premium Glass Glare Overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 40%)", zIndex: 50 }} />

                  <AnimatedLaptopScreen />
                </div>
              </div>
            </div>

              {/* ── 3D LAPTOP KEYBOARD BASE (Silver Aluminum) ── */}
              <div className="absolute top-[100%] left-0 w-[450px] h-[280px] border border-white/60 flex flex-col items-center"
                style={{
                  transformOrigin: "top center", transform: "rotateX(72deg) translateZ(-1px)", borderRadius: "4px 4px 24px 24px",
                  background: "linear-gradient(to bottom, #e5e7eb 0%, #9ca3af 40%, #4b5563 100%)",
                  boxShadow: "0 80px 100px rgba(0,0,0,0.7), inset 0 2px 10px rgba(255,255,255,0.9)", zIndex: 1
                }}>
                {/* Hinge */}
                <div className="w-[340px] h-3 bg-[#111] rounded-b-md shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]" />

                {/* Keyboard Deck */}
                <div className="w-[360px] h-[130px] bg-[#1c1c1e] rounded-lg mt-6 shadow-[inset_0_4px_10px_rgba(0,0,0,0.9),0_1px_1px_rgba(255,255,255,0.5)] overflow-hidden">
                  <div className="w-full h-full opacity-80" style={{ backgroundImage: "linear-gradient(to right, #2a2a2e 1px, transparent 1px), linear-gradient(to bottom, #2a2a2e 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                </div>

                {/* Trackpad */}
                <div className="w-[140px] h-[80px] rounded-md mt-4 border border-zinc-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.5)]" style={{ background: "linear-gradient(to bottom, #d1d5db, #c1c5cb)" }} />

                {/* Front lip 3D edge (Polished Silver Highlight) */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-zinc-300 via-white to-zinc-300" style={{ transformOrigin: "bottom", transform: "rotateX(-90deg)", borderRadius: "0 0 24px 24px" }} />
              </div>

            </motion.div>
          </div>

          {/* Glow under desktop */}
          <div style={{ position: "absolute", bottom: -16, left: "10%", right: "10%", height: 30, background: "radial-gradient(ellipse, rgba(91,77,255,0.30) 0%, transparent 80%)", filter: "blur(10px)", pointerEvents: "none" }} />
        </motion.div>

        {/* ── Floating info cards (from reference) ── */}
        {/* Seamless Sync - top right */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{ opacity: { duration: 0.6, delay: 1.2 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl pointer-events-none"
          style={{ top: "4%", right: -180, zIndex: 35, background: "rgba(255,255,255,0.90)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.95)", boxShadow: "0 6px 24px rgba(91,77,255,0.12)" }}
        >
          <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(91,77,255,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 12 }}>🔄</span></div>
          <div><p style={{ fontSize: 11, fontWeight: 700, color: "#1E293B" }}>Seamless Sync</p><p style={{ fontSize: 9.5, color: "#64748B" }}>Across all devices</p></div>
        </motion.div>

        {/* Mobile App - bottom left */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl pointer-events-none"
          style={{ bottom: "10%", left: -40, zIndex: 35, background: "rgba(255,255,255,0.90)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.95)", boxShadow: "0 6px 24px rgba(91,77,255,0.12)" }}
        >
          <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(91,77,255,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 12 }}>📱</span></div>
          <div><p style={{ fontSize: 11, fontWeight: 700, color: "#1E293B" }}>Mobile App</p><p style={{ fontSize: 9.5, color: "#64748B" }}>Practice on the go</p></div>
        </motion.div>

        {/* Web App - bottom right */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl pointer-events-none"
          style={{ bottom: "4%", right: -180, zIndex: 35, background: "rgba(255,255,255,0.90)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.95)", boxShadow: "0 6px 24px rgba(91,77,255,0.12)" }}
        >
          <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(91,77,255,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 12 }}>💻</span></div>
          <div><p style={{ fontSize: 11, fontWeight: 700, color: "#1E293B" }}>Web App</p><p style={{ fontSize: 9.5, color: "#64748B" }}>Deep analysis & insights</p></div>
        </motion.div>

        {/* Your Progress - center bottom */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl pointer-events-none"
          style={{ bottom: "18%", right: -90, zIndex: 35, background: "rgba(255,255,255,0.90)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.95)", boxShadow: "0 6px 24px rgba(91,77,255,0.12)" }}
        >
          <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(5,150,105,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 12 }}>☁️</span></div>
          <div><p style={{ fontSize: 11, fontWeight: 700, color: "#1E293B" }}>Your Progress</p><p style={{ fontSize: 9.5, color: "#059669" }}>Always in Sync</p></div>
        </motion.div>

        {/* ── Ambient Floating Particles (Replaced rigid SVG line) ── */}
        <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
           <motion.div animate={{y:[-10,10,-10], x:[-5,5,-5], opacity:[0,0.6,0]}} transition={{duration:6, repeat:Infinity, ease:"easeInOut"}} className="absolute top-[30%] left-[45%] w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
           <motion.div animate={{y:[10,-10,10], x:[5,-5,5], opacity:[0,0.4,0]}} transition={{duration:8, repeat:Infinity, ease:"easeInOut", delay:2}} className="absolute top-[60%] left-[55%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />
           <motion.div animate={{y:[-15,15,-15], opacity:[0,0.8,0]}} transition={{duration:5, repeat:Infinity, ease:"easeInOut", delay:1}} className="absolute top-[45%] left-[50%] w-1 h-1 rounded-full bg-white shadow-[0_0_5px_#fff]" />
        </div>
        {/* ── Phone with cinematic tilt + idle float ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, x: -80 }}
          animate={{
            opacity: 1, y: [0, -10, 0], x: -80,
            rotateX: BASE_TILT.rotateX + mouseOffset.x,
            rotateY: BASE_TILT.rotateY + mouseOffset.y,
            rotateZ: BASE_TILT.rotateZ,
          }}
          transition={{
            opacity: { duration: 0.9 }, scale: { duration: 0.9 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { type: "spring", stiffness: 60, damping: 24 },
            rotateY: { type: "spring", stiffness: 60, damping: 24 },
            rotateZ: { duration: 0.8 },
          }}
          className="relative z-20"
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-20"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Ground glow ring - matches reference bright circular halo */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 280, height: 56 }}>
            {/* Outer wide glow */}
            <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ background: "radial-gradient(ellipse,rgba(109,95,250,0.50) 0%,rgba(91,77,255,0.12) 60%,transparent 80%)", filter: "blur(10px)" }} />
            {/* Inner bright core */}
            <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1.0, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute inset-[25%_10%] rounded-full"
              style={{ background: "radial-gradient(ellipse,rgba(167,139,250,0.80) 0%,rgba(124,58,237,0.40) 50%,transparent 80%)", filter: "blur(4px)" }} />
            {/* Thin ring border */}
            <div className="absolute inset-[30%_5%] rounded-full" style={{ border: "1px solid rgba(196,181,253,0.60)", filter: "blur(0.5px)" }} />
          </div>

          {/* ── 3D PHONE HARDWARE ── */}
          <div className="relative w-[268px] h-[548px] xl:w-[290px] xl:h-[596px]" style={{ transformStyle: "preserve-3d" }}>

            {/* Backplate & deep shadow */}
            <div className="absolute inset-0 rounded-[46px] bg-[#1a1b22] border border-[#2d2e3d]" style={{ transform: "translateZ(-14px)" }}>
              <div className="absolute inset-0 rounded-[46px] shadow-[0_60px_100px_-15px_rgba(0,0,0,0.85),0_30px_50px_-20px_rgba(91,77,255,0.45)]" />
            </div>

            {/* Extruded Titanium Frame (Stacked layers for 3D edge) */}
            {[12, 10, 8, 6, 4, 2].map((z) => (
              <div key={z} className="absolute inset-0 rounded-[46px] border border-[#4a4b5e]" style={{ transform: `translateZ(-${z}px)`, background: "linear-gradient(135deg, #3a3b4a 0%, #1a1c25 50%, #2a2c3a 100%)" }}>
                {/* Edge highlight/reflection */}
                <div className="absolute inset-0 rounded-[46px] bg-gradient-to-tr from-white/[0.25] via-transparent to-white/[0.08] pointer-events-none" />
                {/* Antenna bands (continuous across all z-layers) */}
                <div className="absolute top-[80px] -left-[1px] w-[2px] h-[3px] bg-[#1e2029]" />
                <div className="absolute top-[80px] -right-[1px] w-[2px] h-[3px] bg-[#1e2029]" />
                <div className="absolute bottom-[80px] -left-[1px] w-[2px] h-[3px] bg-[#1e2029]" />
                <div className="absolute bottom-[80px] -right-[1px] w-[2px] h-[3px] bg-[#1e2029]" />

                {/* Hardware buttons on the sides */}
                {z === 6 && (
                  <>
                    {/* Volume and Action Buttons (Left) */}
                    <div className="absolute -left-[3.5px] top-[92px] w-[4px] h-9 bg-[#a1a1aa] rounded-l-[3px] shadow-[inset_1px_0_2px_rgba(255,255,255,0.9),0_0_3px_rgba(255,255,255,0.4)]" />
                    <div className="absolute -left-[3.5px] top-[140px] w-[4px] h-9 bg-[#a1a1aa] rounded-l-[3px] shadow-[inset_1px_0_2px_rgba(255,255,255,0.9),0_0_3px_rgba(255,255,255,0.4)]" />
                    {/* Power Button (Right) */}
                    <div className="absolute -right-[2.5px] top-[116px] w-[3px] h-14 bg-[#71717a] rounded-r-[2px] shadow-[inset_-1px_0_2px_rgba(255,255,255,0.4)]" />
                  </>
                )}

                {/* Bottom Ports (charging & speakers) */}
                {(z === 2 || z === 4) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-[#0c0d12] rounded-t-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.9)] flex justify-between items-center px-1">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                )}
              </div>
            ))}

            {/* Front Bezel & Screen Assembly */}
            <div className="absolute inset-0 rounded-[46px] bg-[#080A0F] p-[9px] border border-white/[0.25]" style={{ transform: "translateZ(0)", boxShadow: "inset 0 2px 4px rgba(255,255,255,0.15)" }}>
              <div className="absolute inset-0 rounded-[46px] bg-gradient-to-tr from-white/[0.15] via-transparent to-white/[0.04] pointer-events-none" />
              <div className="absolute top-0 left-[15%] w-[40%] h-[30%] bg-white/[0.04] rounded-full blur-2xl pointer-events-none" />

              {/* ── SCREEN ── */}
              <div className="relative w-full h-full rounded-[38px] bg-[#0D0F1C] overflow-hidden ring-1 ring-white/[0.15] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                {/* Premium Screen Glass Reflection Overlay */}
                <div className="absolute inset-0 pointer-events-none z-50" style={{ background: "linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%)" }} />
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-7 bg-black rounded-full z-40 flex items-center justify-between px-4">
                  <div className="w-1 h-1 rounded-full bg-indigo-500/40" />
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-inner" />
                </div>
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 h-10 text-[9px] font-semibold text-white/50 relative z-30 pt-[14px]">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor" opacity="0.6"><path d="M0 9h2V4H0zM3 9h2V2H3zM6 9h2V0H6zM9 9h2V3H9z" /></svg>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"><path d="M1 5.5C2.2 4.3 3.5 3.7 5 3.7s2.8.6 4 1.8M2.5 4C3.4 3 4.1 2.5 5 2.5S6.6 3 7.5 4M4 2.5C4.4 2 4.7 1.7 5 1.7s.6.3 1 .8" /><circle cx="5" cy="7" r=".8" fill="currentColor" /></svg>
                    <div className="w-5 h-2.5 border border-white/40 rounded-[2px] flex items-center px-0.5">
                      <div className="flex-1 h-1.5 bg-green-400 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App content */}
                <div className="flex flex-col h-full px-4 pb-16 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-start justify-between mt-1 mb-3">
                    <div>
                      <p className="text-[11px] text-white/50 font-medium">Hello, Arjun 👋</p>
                      <h2 className="text-[16px] font-bold text-white leading-tight tracking-tight">Ready to learn today?</h2>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[10px]">🔥</span>
                        <span className="text-[10px] text-orange-400 font-semibold">12 Day Streak</span>
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex flex-col items-center justify-center shadow-[0_0_14px_rgba(91,77,255,0.25)]">
                      <span className="text-[12px] font-black text-white leading-none">{xp}</span>
                      <span className="text-[8px] font-bold text-indigo-400">XP</span>
                    </div>
                  </div>

                  {/* Mission card */}
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    className="relative rounded-[20px] overflow-hidden mb-3 p-4 shadow-[0_0_24px_rgba(91,77,255,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B2FBE] to-[#1A1060]" />
                    <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                    <div className="relative flex justify-between items-start z-10">
                      <div>
                        <p className="text-[8px] font-bold tracking-widest text-indigo-300/70 uppercase mb-1">Current Mission</p>
                        <h3 className="text-[17px] font-black text-white leading-tight tracking-tight">Arithmetic<br />Mastery</h3>
                        <p className="text-[9px] text-white/40 mt-2">34 of 50 Topics Completed</p>
                        <div className="mt-1.5 w-28 h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "68%" }} transition={{ delay: 0.8, duration: 1 }} className="h-full bg-white/70 rounded-full" />
                        </div>
                      </div>
                      <div className="relative w-12 h-12">
                        <svg viewBox="0 0 44 44" className="w-full h-full -rotate-90">
                          <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                          <motion.circle cx="22" cy="22" r="18" fill="none" stroke="white" strokeWidth="4"
                            strokeLinecap="round" strokeDasharray="113"
                            initial={{ strokeDashoffset: 113 }} animate={{ strokeDashoffset: 113 * 0.32 }}
                            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }} />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[10px] font-black text-white leading-none">68%</span>
                          <span className="text-[7px] text-white/50">Progress</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Learning path */}
                  <p className="text-[11px] font-bold text-white mb-2">Your Preparation Milestones</p>
                  <div className="flex flex-col gap-1.5 overflow-y-auto flex-1 custom-scrollbar pb-1">
                    {LEARNING_PATH.map(({ title, sub, status, pct }, i) => (
                      <motion.div key={title}
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.12 }}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-[14px] border transition-all ${status === "active" ? "bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_12px_rgba(91,77,255,0.15)]" :
                            status === "completed" ? "bg-white/[0.04] border-white/[0.05]" :
                              "bg-white/[0.02] border-white/[0.03]"}`}
                      >
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${status === "completed" ? "bg-emerald-500/20 text-emerald-400" :
                            status === "active" ? "bg-indigo-500/30 text-indigo-400 shadow-[0_0_8px_rgba(91,77,255,0.3)]" :
                              "bg-white/5 text-white/20"}`}>
                          {status === "completed" ? <CheckCircle size={13} /> : status === "locked" ? <Lock size={11} /> : <span className="text-[10px] font-black">A</span>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-[11px] font-bold leading-none ${status === "locked" ? "text-white/25" : "text-white"}`}>{title}</p>
                          <p className={`text-[9px] mt-0.5 ${status === "locked" ? "text-white/15" : "text-white/40"}`}>{sub}</p>
                          {status === "active" && pct && (
                            <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden w-full">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ delay: 1, duration: 1 }}
                                className="h-full bg-indigo-400 rounded-full" />
                            </div>
                          )}
                        </div>
                        {status === "completed" && <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full shrink-0">Completed</span>}
                        {status === "active" && pct && <span className="text-[9px] font-bold text-indigo-300 shrink-0">{pct}%</span>}
                        {status === "locked" && <Lock size={10} className="text-white/15 shrink-0" />}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 h-[56px] bg-[#0D0F1C]/95 backdrop-blur-md border-t border-white/[0.05] flex items-center justify-around px-2 pb-1">
                  {TABS.map(({ Icon, label, active }) => (
                    <button key={label} className={`flex flex-col items-center gap-[3px] ${active ? "text-indigo-400" : "text-white/25"}`}>
                      <div className={`relative p-1.5 rounded-xl ${active ? "bg-indigo-500/15" : ""}`}>
                        {active && <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-xl bg-indigo-400/20 blur-sm" />}
                        <Icon size={13} className="relative z-10" />
                      </div>
                      <span className="text-[7px] font-semibold">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Reward overlay */}
                <AnimatePresence>
                  {showReward && (
                    <motion.div key="reward" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                      className="absolute inset-0 z-25">
                      <RewardReveal />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Home indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20 z-50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
