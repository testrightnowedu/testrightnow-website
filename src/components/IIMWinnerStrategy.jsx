import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Target, SkipForward, TrendingUp, Sparkles, Brain } from "lucide-react";

// ─── Zone config ────────────────────────────────────────────────
const ZONES = {
  skip:        { xRange: [5, 40],  yRange: [5, 42]  },
  careful:     { xRange: [58, 93], yRange: [5, 42]  },
  lowPriority: { xRange: [5, 40],  yRange: [56, 93] },
  focus:       { xRange: [58, 93], yRange: [56, 93] },
};

const PILL_STYLE = {
  focus:       "bg-indigo-500 text-white shadow-indigo-200",
  careful:     "bg-white text-amber-700 border border-amber-200 shadow-amber-100",
  skip:        "bg-white text-red-500   border border-red-200   shadow-red-100",
  lowPriority: "bg-white text-slate-600 border border-slate-200 shadow-slate-100",
};

// Smart migration: each zone can drift into certain adjacent zones
const DRIFT = {
  skip:        ["skip", "skip", "skip", "careful"],
  careful:     ["careful", "careful", "focus",   "skip"],
  lowPriority: ["lowPriority", "lowPriority", "focus"],
  focus:       ["focus", "focus", "careful"],
};

function rnd(min, max) { return min + Math.random() * (max - min); }
function rPos(zone) {
  const z = ZONES[zone];
  return { x: rnd(z.xRange[0], z.xRange[1]), y: rnd(z.yRange[0], z.yRange[1]) };
}

const INITIAL_TOPICS = [
  { id:1,  name:"Arithmetic",       homeZone:"skip"        },
  { id:2,  name:"Number System",    homeZone:"skip"        },
  { id:3,  name:"Data Sufficiency", homeZone:"skip"        },
  { id:4,  name:"Geometry",         homeZone:"careful"     },
  { id:5,  name:"Algebra",          homeZone:"careful"     },
  { id:6,  name:"Modern Math",      homeZone:"careful"     },
  { id:7,  name:"Time & Work",      homeZone:"lowPriority" },
  { id:8,  name:"Set Theory",       homeZone:"lowPriority" },
  { id:9,  name:"Logical Reasoning",homeZone:"lowPriority" },
  { id:10, name:"Percentages",      homeZone:"focus"       },
  { id:11, name:"Profit & Loss",    homeZone:"focus"       },
  { id:12, name:"Reading Comp.",    homeZone:"focus"       },
].map(t => ({ ...t, zone: t.homeZone, ...rPos(t.homeZone) }));

// ─── Feature list ────────────────────────────────────────────────
const FEATURES = [
  { Icon: Target,      title: "Solve High Probability Questions", text: "Focus on topics that carry more weight and appear every year." },
  { Icon: SkipForward, title: "Skip High Difficulty Traps",       text: "Avoid time-consuming, low-return questions that others get stuck on." },
  { Icon: TrendingUp,  title: "Score Higher. Rank Better.",       text: "Smart strategy > Hard work. Get ahead with a topper's approach." },
];

// ─── Quadrant config ─────────────────────────────────────────────
const QUADS = [
  { key:"skip",        label:"SKIP THESE",         sub1:"Hard & Less Repeated", sub2:"Low Return",      color:"text-red-500",    bg:"bg-red-50/70",     border:"border-red-100",    icon:"✕" },
  { key:"careful",     label:"ATTEMPT CAREFULLY",  sub1:"Hard but Repeated",    sub2:"Medium Return",   color:"text-amber-600",  bg:"bg-amber-50/70",   border:"border-amber-100",  icon:"⚠" },
  { key:"lowPriority", label:"LOW PRIORITY",        sub1:"Easy & Less Repeated", sub2:"Low Impact",      color:"text-slate-500",  bg:"bg-slate-50/70",   border:"border-slate-100",  icon:"↓" },
  { key:"focus",       label:"FOCUS HERE",          sub1:"Easy & Highly Repeated",sub2:"High Return",   color:"text-indigo-600", bg:"bg-indigo-50/70",  border:"border-indigo-100", icon:"✓" },
];

export default function IIMWinnerStrategy() {
  const [topics, setTopics] = useState(INITIAL_TOPICS);
  const [analyzing, setAnalyzing] = useState(true);
  const tick = useRef(0);

  useEffect(() => {
    const iv = setInterval(() => {
      tick.current += 1;
      // Every tick: nudge 3 random pills; every 3rd tick also drift 1 to adjacent zone
      setTopics(prev => {
        const next = [...prev];
        const indices = [...Array(prev.length).keys()].sort(() => Math.random() - 0.5).slice(0, 3);
        indices.forEach((i, n) => {
          const t = { ...next[i] };
          const driftZone = (n === 0 && tick.current % 3 === 0)
            ? DRIFT[t.zone][Math.floor(Math.random() * DRIFT[t.zone].length)]
            : t.zone;
          const pos = rPos(driftZone);
          next[i] = { ...t, zone: driftZone, x: pos.x, y: pos.y };
        });
        return next;
      });
      // Blink analyzing dot
      setAnalyzing(a => !a);
    }, 3800);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="py-10 lg:py-12 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto">
        {/* Outer card */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-[0_8px_48px_-12px_rgba(0,0,0,0.07)] overflow-hidden">
          <div className="grid lg:grid-cols-[42%_58%] min-h-[500px]">

            {/* ── LEFT COLUMN ── */}
            <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6 w-fit">
                <Sparkles size={13} className="text-indigo-500" />
                <span className="text-[11px] font-bold tracking-widest text-indigo-600 uppercase">IIM Winner Strategy</span>
              </div>

              <h2 className="text-[28px] lg:text-[36px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-2">
                Focus on What Matters.
              </h2>
              <h2 className="text-[28px] lg:text-[36px] font-extrabold text-[#5B4DFF] leading-[1.1] tracking-tight mb-5">
                Skip What Doesn't.
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-5 max-w-[360px]">
                Our AI analyzes past CAT papers to show you the most repeated topics and their difficulty level.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-4 mb-5">
                {FEATURES.map(({ Icon, title, text }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-slate-900">{title}</p>
                      <p className="text-[12px] text-slate-500 mt-0.5 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom card */}
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 flex gap-3 items-center">
                <div className="w-9 h-9 rounded-xl bg-[#5B4DFF] flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-indigo-800">Work Smart. Attempt Right. Get to IIM.</p>
                  <p className="text-[12px] text-indigo-500 mt-0.5">Your time is limited. Use it on what gets you to the top.</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT GRAPH - mobile: horizontal scroll ── */}
            <div className="relative">
              {/* Mobile: fade-right edge to signal scrollability */}
              <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-20 lg:hidden rounded-r-[32px]" />

              {/* Mobile: swipe hint */}
              <div className="flex items-center justify-end gap-1 px-4 pt-3 pb-0 lg:hidden">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wide">Swipe to explore</span>
                <span className="text-[10px] text-slate-400">→</span>
              </div>

              {/* Scroll container - only horizontal on mobile */}
              <div
                className="overflow-x-auto overflow-y-hidden lg:overflow-visible"
                style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Inner content - min-width on mobile to preserve desktop layout */}
                <div className="p-5 lg:p-6 flex flex-col gap-3 min-w-[780px] lg:min-w-0">
                  {/* Graph header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[15px] font-bold text-slate-900">Most Repeated Topics vs Difficulty Level</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                          <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />Most Repeated (High Priority)
                        </span>
                        <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                          <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />Less Repeated (Low Priority)
                        </span>
                      </div>
                    </div>
                    {/* Analyzing badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                      <motion.span
                        animate={{ opacity: analyzing ? 1 : 0.3, scale: analyzing ? 1 : 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="w-2 h-2 rounded-full bg-emerald-500 inline-block"
                      />
                      <span className="text-[11px] font-semibold text-slate-600">Analyzing...</span>
                    </div>
                  </div>

                  {/* Graph area */}
                  <div className="flex flex-1 gap-2">
                    {/* Y-axis label */}
                    <div className="flex flex-col items-center justify-between py-2 shrink-0">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">High</span>
                      <span className="text-[10px] font-bold text-slate-500 [writing-mode:vertical-rl] rotate-180 tracking-widest">Difficulty Level</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">Low</span>
                    </div>

                    {/* Main graph */}
                    <div className="flex-1 flex flex-col gap-1.5">
                      {/* 2×2 quadrant grid with floating pills */}
                      <div className="flex-1 relative rounded-[20px] overflow-hidden border border-slate-200 bg-[#FAFBFF]" style={{ minHeight: 300 }}>
                        {/* Subtle center glow */}
                        <motion.div
                          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-indigo-100/60 blur-2xl pointer-events-none z-0"
                        />
                        {/* Quadrant grid */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-0">
                          {QUADS.map(q => (
                            <div key={q.key} className={`${q.bg} border ${q.border} relative p-3`}>
                              <div className={`flex items-center gap-1 ${q.color}`}>
                                <span className="text-[10px] font-black tracking-widest">{q.label}</span>
                              </div>
                              <p className="text-[9px] font-semibold text-slate-500 mt-0.5">{q.sub1}</p>
                              <p className="text-[9px] text-slate-400">{q.sub2}</p>
                            </div>
                          ))}
                        </div>
                        {/* Center dividers */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200" />
                          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200" />
                        </div>
                        {/* Center brain */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                          <Brain size={18} className="text-indigo-400" />
                        </div>
                        {/* Animated topic pills */}
                        {topics.map(topic => (
                          <motion.div
                            key={topic.id}
                            animate={{ left: `${topic.x}%`, top: `${topic.y}%` }}
                            transition={{ type: "spring", stiffness: 55, damping: 22 }}
                            whileHover={{ scale: 1.08, zIndex: 50 }}
                            className={`absolute z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-sm text-[10px] font-semibold cursor-default select-none ${PILL_STYLE[topic.zone]}`}
                            style={{ transform: "translate(-50%, -50%)" }}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              topic.zone === "focus" ? "bg-white/70" :
                              topic.zone === "careful" ? "bg-amber-400" :
                              topic.zone === "skip" ? "bg-red-400" : "bg-slate-400"
                            }`} />
                            {topic.name}
                          </motion.div>
                        ))}
                      </div>
                      {/* X-axis */}
                      <div className="flex items-center justify-between px-1">
                        <span className="text-[10px] font-bold text-slate-400">Low</span>
                        <span className="text-[11px] font-bold text-slate-600 tracking-wider">Most Repeated →</span>
                        <span className="text-[10px] font-bold text-slate-400">High</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom insight bar */}
                  <div className="relative rounded-2xl overflow-hidden bg-indigo-50 border border-indigo-100 px-5 py-3.5 flex items-center gap-3">
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                    />
                    <div className="w-8 h-8 rounded-xl bg-[#5B4DFF] flex items-center justify-center shrink-0">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <p className="text-[13px] text-slate-700 font-medium leading-snug">
                      <span className="font-bold text-slate-900">IIM Winner Formula: </span>
                      <span className="text-indigo-600 font-bold">Focus High Priority</span>
                      {" + "}
                      <span className="text-indigo-600 font-bold">Smart Skipping</span>
                      {" = Maximum Score"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub note */}
        <p className="text-center text-[12px] text-slate-400 mt-4 flex items-center justify-center gap-1.5">
          <span className="inline-block w-3 h-3 border border-slate-300 rounded-full animate-spin border-t-transparent" />
          Topics update based on latest 100+ CAT papers
        </p>
      </div>
    </section>
  );
}
