import { motion } from "framer-motion";
import { Smartphone, Monitor, Tablet, Wifi, Bell, RefreshCw, Zap, CheckCircle2, ArrowRight, CloudLightning } from "lucide-react";

const PLATFORMS = [
  {
    icon: "📱",
    name: "iPhone App",
    tagline: "Study on the go",
    desc: "Guided missions, daily practice, and rewards — right in your pocket.",
    badge: "App Store",
    badgeColor: "#000000",
    badgeBg: "linear-gradient(135deg,#1c1c1e,#3a3a3c)",
    status: "Coming Soon",
    accent: "#6D5FFA",
    glow: "rgba(109,95,250,0.25)",
  },
  {
    icon: "🤖",
    name: "Android App",
    tagline: "Daily practice anywhere",
    desc: "Full-featured prep on every Android device with offline access.",
    badge: "Google Play",
    badgeColor: "#fff",
    badgeBg: "linear-gradient(135deg,#01875F,#0F9D58)",
    status: "Coming Soon",
    accent: "#059669",
    glow: "rgba(5,150,105,0.20)",
  },
  {
    icon: "💻",
    name: "Web App",
    tagline: "Full analytics & deep practice",
    desc: "Deep performance analysis, detailed reports, and full session practice.",
    badge: "Open Web App",
    badgeColor: "#fff",
    badgeBg: "linear-gradient(135deg,#5B4DFF,#7C6CFF)",
    status: "Live Now",
    accent: "#5B4DFF",
    glow: "rgba(91,77,255,0.25)",
  },
];

const USP_CHIPS = [
  { Icon: RefreshCw, label: "Auto-Sync Across Devices",    color: "#6D5FFA" },
  { Icon: Wifi,      label: "Offline Access",               color: "#059669" },
  { Icon: Bell,      label: "Smart Daily Reminders",        color: "#EA580C" },
  { Icon: Zap,       label: "Continue Where You Left Off",  color: "#D97706" },
];

const SYNC_FEATURES = [
  { icon: "🔥", title: "Streaks sync",       sub: "Never lose your streak when switching devices" },
  { icon: "🎯", title: "Missions carry over", sub: "Start a mission on mobile, complete on web" },
  { icon: "📊", title: "Progress is live",    sub: "Real-time performance data on every device" },
  { icon: "🏆", title: "Rewards everywhere",  sub: "Earn and unlock rewards from any platform" },
];

function DeviceOrbit() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
      {/* Central pulsing glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{ width: 160, height: 160, background: "radial-gradient(circle, rgba(91,77,255,0.4) 0%, transparent 70%)", filter: "blur(20px)" }}
      />

      {/* Orbit ring */}
      <svg className="absolute inset-0" width={320} height={320}>
        <ellipse cx={160} cy={160} rx={135} ry={58} fill="none" stroke="rgba(109,95,250,0.20)" strokeWidth="1.5" strokeDasharray="6 5" />
        <ellipse cx={160} cy={160} rx={95}  ry={38} fill="none" stroke="rgba(109,95,250,0.12)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* Center — iPhone */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 flex flex-col items-center justify-center rounded-[22px] shadow-2xl"
        style={{
          width: 72, height: 120,
          background: "linear-gradient(145deg, #1C1C1E, #2C2C2E)",
          border: "2.5px solid rgba(255,255,255,0.14)",
          boxShadow: "0 20px 60px rgba(91,77,255,0.4), 0 8px 20px rgba(0,0,0,0.5)",
        }}
      >
        <div className="w-8 h-1 rounded-full bg-white/20 mb-1" />
        <div className="w-10 h-14 rounded-lg bg-gradient-to-b from-[#1a1040] to-[#2d1b6e] flex items-center justify-center">
          <span className="text-[18px]">📚</span>
        </div>
        <div className="w-4 h-1 rounded-full bg-white/15 mt-1" />
      </motion.div>

      {/* Laptop — right */}
      <motion.div
        animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute z-10"
        style={{ right: 4, top: "38%" }}
      >
        <div className="flex flex-col items-center gap-0.5">
          <div className="rounded-[6px] flex items-center justify-center" style={{ width: 52, height: 34, background: "linear-gradient(135deg,#1C1C1E,#2C2C2E)", border: "1.5px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(91,77,255,0.25)" }}>
            <Monitor size={16} style={{ color: "#A78BFA" }} />
          </div>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,transparent,#3a3a3c,transparent)", borderRadius: 2 }} />
        </div>
      </motion.div>

      {/* Tablet — left */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute z-10"
        style={{ left: 8, top: "36%" }}
      >
        <div className="rounded-[8px] flex items-center justify-center" style={{ width: 38, height: 50, background: "linear-gradient(135deg,#1C1C1E,#2C2C2E)", border: "1.5px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(5,150,105,0.25)" }}>
          <Tablet size={14} style={{ color: "#34D399" }} />
        </div>
      </motion.div>

      {/* Streak card — top */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute z-30"
        style={{ top: 22, left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 4px 16px rgba(91,77,255,0.20)" }}>
          <span className="text-[13px]">🔥</span>
          <span className="text-[11px] font-bold text-white">12 Day Streak</span>
        </div>
      </motion.div>

      {/* Sync badge — bottom */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute z-30"
        style={{ bottom: 18, left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ background: "rgba(91,77,255,0.25)", backdropFilter: "blur(12px)", border: "1px solid rgba(109,95,250,0.40)", boxShadow: "0 4px 16px rgba(91,77,255,0.25)" }}>
          <RefreshCw size={10} style={{ color: "#A78BFA" }} />
          <span className="text-[10px] font-bold" style={{ color: "#C4B5FD" }}>Synced</span>
        </div>
      </motion.div>

      {/* Orbit dots */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ transformOrigin: "50% 50%" }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 6, height: 6,
              background: "radial-gradient(circle, #A78BFA, #6D5FFA)",
              boxShadow: "0 0 8px rgba(109,95,250,0.8)",
              top: "50%", left: "50%",
              transform: `rotate(${deg}deg) translateX(135px) translateY(-3px)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function CrossPlatformSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#070B14] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(91,77,255,0.15)", border: "1px solid rgba(109,95,250,0.30)" }}>
            <CloudLightning size={12} style={{ color: "#A78BFA" }} />
            <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "#A78BFA" }}>One Platform. Every Device.</span>
          </div>
          <h2 className="text-[26px] sm:text-[34px] lg:text-[46px] font-extrabold text-white leading-[1.08] tracking-tight">
            Learn Anywhere.<br />
            <span className="bg-gradient-to-r from-[#6D5FFA] to-[#A78BFA] bg-clip-text text-transparent">Continue Everywhere.</span>
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-slate-400 max-w-[480px] mx-auto leading-relaxed">
            Start on mobile during your commute. Analyze deeply on desktop at night. Your preparation stays perfectly synced.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 lg:mb-14">

          {/* Left — device ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <DeviceOrbit />

            {/* Sync features */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px] mx-auto lg:mx-0">
              {SYNC_FEATURES.map(({ icon, title, sub }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-[18px]">{icon}</span>
                  <p className="text-[12px] font-bold text-white mt-1 leading-tight">{title}</p>
                  <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — platform cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {PLATFORMS.map(({ icon, name, tagline, desc, badge, badgeColor, badgeBg, status, accent, glow }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="relative p-5 rounded-[22px] flex items-center gap-4 group"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `0 0 0 0 ${glow}`,
                  transition: "box-shadow 0.3s",
                }}
                onHoverStart={e => e.currentTarget.style.boxShadow = `0 8px 40px ${glow}`}
                onHoverEnd={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${glow}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[22px]"
                  style={{ background: `${accent}20`, border: `1px solid ${accent}30` }}>
                  {icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-[14px] font-bold text-white">{name}</p>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: status === "Live Now" ? "rgba(5,150,105,0.20)" : "rgba(255,255,255,0.07)",
                        color: status === "Live Now" ? "#34D399" : "#64748b",
                        border: `1px solid ${status === "Live Now" ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                      }}>
                      {status}
                    </span>
                  </div>
                  <p className="text-[11.5px] font-semibold mt-0.5" style={{ color: accent }}>{tagline}</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">{desc}</p>
                </div>

                {/* Download button */}
                <button
                  className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-bold transition-all"
                  style={{
                    background: status === "Live Now" ? badgeBg : "rgba(255,255,255,0.06)",
                    color: status === "Live Now" ? badgeColor : "#64748b",
                    border: status === "Live Now" ? "none" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {status === "Live Now" ? (
                    <><ArrowRight size={12} />{badge}</>
                  ) : (
                    "Coming Soon"
                  )}
                </button>
              </motion.div>
            ))}

            {/* Cross-device sync callout */}
            <div className="p-4 rounded-2xl flex items-start gap-3 mt-1"
              style={{ background: "linear-gradient(135deg, rgba(91,77,255,0.15), rgba(109,95,250,0.08))", border: "1px solid rgba(109,95,250,0.25)" }}>
              <CheckCircle2 size={18} style={{ color: "#818CF8", flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-[13px] font-bold text-white">Automatic Sync</p>
                <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                  Your streaks, missions, rewards, revision schedule, and performance data sync automatically across every device — in real time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* USP chips bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {USP_CHIPS.map(({ Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Icon size={13} style={{ color }} />
              <span className="text-[12px] font-semibold text-slate-300">{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="text-[13px]">📶</span>
            <span className="text-[12px] font-semibold text-slate-300">Offline Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
