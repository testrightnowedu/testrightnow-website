import { motion } from "framer-motion";
import { Target, Calendar, RefreshCw, BarChart3, Trophy, Gamepad2, GraduationCap, Users } from "lucide-react";

/* ── Feature blocks ───────────────────────────────────────────── */
const FEATURES = [
  { Icon: Target,    title: "Smart Practice",    text: "Focus on high‑impact topics." },
  { Icon: Calendar,  title: "Daily Consistency", text: "Small daily steps lead to big results." },
  { Icon: RefreshCw, title: "Regular Revision",  text: "Revise topics at optimal intervals." },
  { Icon: BarChart3, title: "Track & Improve",   text: "Compete, analyze and get better everyday." },
];

/* ── Staircase journey steps (bottom → top) ──────────────────── */
const STEPS = [
  {
    n: 1, Icon: Calendar, label: "Day 1", sub: "Start Small",
    desc: "Begin your journey with a single step.",
    // position of the step tread (% from bottom/left of the right panel)
    bottom: "14%", left: "0%", cardRight: false, delay: 0,
  },
  {
    n: 2, Icon: Target, label: "Daily Practice", sub: "Build Momentum",
    desc: "Consistent practice every day builds strong foundations.",
    bottom: "30%", left: "12%", cardRight: true, delay: 0.12,
  },
  {
    n: 3, Icon: RefreshCw, label: "Revise & Reinforce", sub: "Strengthen Concepts",
    desc: "Smart revision makes your learning stick for the long run.",
    bottom: "46%", left: "24%", cardRight: false, delay: 0.24,
  },
  {
    n: 4, Icon: BarChart3, label: "Track Progress", sub: "Identify & Improve",
    desc: "Analyze performance, find gaps and improve consistently.",
    bottom: "62%", left: "36%", cardRight: true, delay: 0.36,
  },
];

/* ── Ambient particle positions ──────────────────────────────── */
const PARTICLES = [
  { x: "8%",  y: "18%", s: 5, d: 3.4 },
  { x: "78%", y: "12%", s: 3, d: 4.2 },
  { x: "88%", y: "50%", s: 4, d: 3.8 },
  { x: "5%",  y: "72%", s: 3, d: 5.0 },
  { x: "55%", y: "82%", s: 5, d: 3.1 },
  { x: "42%", y: "8%",  s: 3, d: 4.7 },
  { x: "65%", y: "65%", s: 4, d: 3.6 },
];

/* ── Simple academic building SVG silhouette ─────────────────── */
function BuildingSVG() {
  return (
    <svg viewBox="0 0 260 120" className="w-full h-full" fill="none">
      {/* Sky glow */}
      <ellipse cx="130" cy="55" rx="90" ry="55" fill="url(#skyGlow)" opacity="0.4" />
      {/* Trees left */}
      <path d="M20 100 L30 68 L40 100Z" fill="#C4B5FD" opacity="0.3" />
      <path d="M10 100 L18 75 L26 100Z" fill="#C4B5FD" opacity="0.2" />
      <path d="M38 100 L46 78 L54 100Z" fill="#C4B5FD" opacity="0.25" />
      {/* Trees right */}
      <path d="M210 100 L220 70 L230 100Z" fill="#C4B5FD" opacity="0.3" />
      <path d="M224 100 L232 76 L240 100Z" fill="#C4B5FD" opacity="0.2" />
      {/* Main building body */}
      <rect x="90" y="55" width="80" height="45" rx="2" fill="#EDE9FE" opacity="0.7" />
      {/* Columns */}
      {[100,112,124,136,148,160].map(x => (
        <rect key={x} x={x} y="62" width="5" height="38" rx="1" fill="#C4B5FD" opacity="0.5" />
      ))}
      {/* Pediment / triangle roof */}
      <path d="M85 55 L130 28 L175 55Z" fill="#DDD6FE" opacity="0.7" />
      {/* Dome */}
      <ellipse cx="130" cy="28" rx="14" ry="10" fill="#C4B5FD" opacity="0.7" />
      {/* Flag */}
      <line x1="130" y1="18" x2="130" y2="6" stroke="#8B5CF6" strokeWidth="1.5" />
      <path d="M130 6 L141 10 L130 14Z" fill="#7C3AED" opacity="0.8" />
      {/* Ground */}
      <rect x="0" y="100" width="260" height="20" fill="#EDE9FE" opacity="0.25" rx="3" />
      <defs>
        <radialGradient id="skyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────── */
export default function JourneySection() {
  return (
    <section className="py-8 lg:py-12 px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white rounded-[28px] border border-slate-100 shadow-[0_4px_40px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-[44%_56%] items-stretch">

            {/* ══ LEFT COLUMN ══════════════════════════════════════ */}
            <div className="p-7 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-5 w-fit">
                <Trophy size={11} className="text-indigo-500" />
                <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase">Your Journey. Our Strategy.</span>
              </div>

              {/* Heading */}
              <h2 className="text-[22px] lg:text-[28px] font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-1">
                It's Not About Solving Every Question.
              </h2>
              <h2 className="text-[22px] lg:text-[28px] font-extrabold leading-[1.2] tracking-tight mb-4">
                <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">
                  It's About Getting Into IIMs & Top B-Schools.
                </span>
              </h2>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-6 max-w-[380px]">
                Consistent practice, smart strategy, and regular revision are the real formula to your success.
              </p>

              {/* Mini features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {FEATURES.map(({ Icon, title, text }) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(91,77,255,0.10)" }}
                    transition={{ duration: 0.2 }}
                    className="p-3 rounded-2xl bg-slate-50/80 border border-slate-100 flex gap-3 items-start cursor-default"
                  >
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-slate-900 leading-tight">{title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA card */}
              <div className="relative p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 flex gap-3 items-center overflow-hidden">
                {/* sparkle dots */}
                {[["-4px","8px"],["95%","4px"],["88%","80%"]].map(([l,t],i)=>(
                  <motion.div key={i}
                    animate={{ scale:[1,1.4,1], opacity:[0.5,1,0.5] }}
                    transition={{ duration:2+i*0.4, repeat:Infinity, delay:i*0.6 }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400/40"
                    style={{ left:l, top:t }}
                  />
                ))}
                <div className="w-9 h-9 rounded-xl bg-[#5B4DFF] flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                  <Gamepad2 size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-indigo-900">Learn. Practice. Improve. Repeat.</p>
                  <p className="text-[11px] text-indigo-400 mt-0.5">Earn points, unlock badges and level up.</p>
                </div>
              </div>
            </div>

            {/* ══ RIGHT - STAIRCASE JOURNEY ════════════════════════ */}
            <div className="relative overflow-hidden min-h-[440px] lg:min-h-[500px]">

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0EDFF] via-[#F5F3FF] to-[#EEF2FF]" />

              {/* Building illustration */}
              <div className="absolute top-0 left-0 right-0 h-[48%] opacity-60 px-4 pt-2">
                <BuildingSVG />
              </div>

              {/* Ambient glow */}
              <motion.div
                animate={{ opacity:[0.3,0.55,0.3], scale:[1,1.06,1] }}
                transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
                className="absolute top-[22%] left-[40%] w-[200px] h-[200px] rounded-full bg-indigo-300/20 blur-3xl pointer-events-none"
              />

              {/* Floating particles */}
              {PARTICLES.map((p,i)=>(
                <motion.div key={i}
                  animate={{ y:[0,-7,0], opacity:[0.25,0.6,0.25] }}
                  transition={{ duration:p.d, repeat:Infinity, ease:"easeInOut", delay:i*0.35 }}
                  className="absolute rounded-full bg-indigo-400/30"
                  style={{ left:p.x, top:p.y, width:p.s, height:p.s }}
                />
              ))}

              {/* ── Goal card (top-right) ── */}
              <motion.div
                initial={{ opacity:0, y:-10 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                animate={{ y:[0,-5,0] }}
                transition={{ y:{ duration:3.5, repeat:Infinity, ease:"easeInOut" }, opacity:{ duration:0.5 } }}
                className="absolute top-5 right-5 z-20 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-indigo-100 rounded-2xl px-4 py-2.5 shadow-[0_8px_24px_rgba(91,77,255,0.15)]"
              >
                {/* Pulse ring */}
                <motion.div
                  animate={{ scale:[1,1.8,1], opacity:[0.6,0,0.6] }}
                  transition={{ duration:2.2, repeat:Infinity }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-400/25 pointer-events-none"
                />
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5B4DFF] to-[#7C6CFF] flex items-center justify-center shadow-md shadow-indigo-200">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-indigo-400 tracking-widest uppercase">Your Goal</p>
                  <p className="text-[13px] font-bold text-slate-900">IIMs & Top B-Schools</p>
                </div>
              </motion.div>

              {/* ── Trophy step (above step 4) ── */}
              <motion.div
                animate={{ y:[0,-4,0] }}
                transition={{ duration:3, repeat:Infinity, ease:"easeInOut", delay:0.5 }}
                className="absolute z-20"
                style={{ bottom:"78%", left:"54%" }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-[0_0_16px_rgba(245,158,11,0.4)] border-2 border-amber-300">
                  <Trophy size={18} className="text-white fill-white" />
                </div>
              </motion.div>

              {/* ── Staircase steps ── */}
              {/* SVG dotted path connecting circles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 500" preserveAspectRatio="none">
                <motion.path
                  d="M 52 430 C 80 390, 110 370, 118 350 C 140 310, 165 295, 172 268 C 195 228, 218 210, 228 188 C 250 148, 272 132, 282 108"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                {/* Animated traveling dot on path */}
                <motion.circle r="4" fill="#8B5CF6" opacity="0.7"
                  animate={{
                    offsetDistance: ["0%","100%"],
                    opacity:[0,0.8,0],
                  }}
                  // use motion path via custom style
                  style={{ offsetPath:"path('M 52 430 C 80 390, 110 370, 118 350 C 140 310, 165 295, 172 268 C 195 228, 218 210, 228 188 C 250 148, 272 132, 282 108')" }}
                  transition={{ duration:4, repeat:Infinity, ease:"easeInOut", repeatDelay:1 }}
                />
              </svg>

              {/* The 4 staircase step treads + cards */}
              {STEPS.map((step) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity:0, x:-16 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:step.delay, duration:0.5 }}
                  animate={{ y:[0,-4,0] }}
                  className="absolute z-20 flex items-center"
                  style={{
                    bottom: step.bottom,
                    left: step.left,
                    // stagger y offset for floating
                    animationDelay: `${step.delay}s`,
                  }}
                >
                  {/* motion wrapper for float (separate from whileInView) */}
                  <motion.div
                    animate={{ y:[0,-4,0] }}
                    transition={{ duration:3.2+step.n*0.3, repeat:Infinity, ease:"easeInOut", delay:step.delay*2 }}
                    className="flex items-center gap-3"
                  >
                    {/* Glowing numbered circle */}
                    <div className="relative shrink-0">
                      <div className="w-11 h-11 rounded-full bg-white border-2 border-indigo-300 shadow-[0_0_16px_rgba(91,77,255,0.2)] flex items-center justify-center">
                        <step.Icon size={18} className="text-indigo-600" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 w-5 h-5 rounded-full bg-[#5B4DFF] text-white text-[9px] font-black flex items-center justify-center border border-white">
                        {step.n}
                      </div>
                    </div>

                    {/* Floating glassmorphism card */}
                    <motion.div
                      whileHover={{ y:-4, boxShadow:"0 12px 28px rgba(91,77,255,0.18)" }}
                      transition={{ duration:0.2 }}
                      className="bg-white/85 backdrop-blur-md border border-white/80 shadow-[0_6px_20px_rgba(91,77,255,0.10)] rounded-2xl px-4 py-2.5 cursor-default"
                    >
                      <p className="text-[13px] font-bold text-slate-900 leading-tight">{step.label}</p>
                      <p className="text-[11px] font-semibold text-indigo-500 mt-0.5">{step.sub}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}

              {/* ── Bottom social proof strip ── */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <motion.div
                  initial={{ opacity:0, y:10 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  className="relative flex items-center gap-3 bg-white/80 backdrop-blur-md border border-indigo-100/80 rounded-2xl px-4 py-3 shadow-sm overflow-hidden"
                >
                  {/* Shimmer */}
                  <motion.div
                    animate={{ x:["-100%","200%"] }}
                    transition={{ duration:3.5, repeat:Infinity, ease:"linear", repeatDelay:2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                  />
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <Users size={14} className="text-indigo-500" />
                  </div>
                  <p className="text-[12px] text-slate-600 leading-snug">
                    Thousands of aspirants are already on the path.{" "}
                    <span className="font-bold bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">
                      Will you be next?
                    </span>
                  </p>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
