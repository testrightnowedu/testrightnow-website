import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Trophy,
  Target,
  BookOpen,
  TrendingUp,
  Sparkles,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Award,
  AlertCircle,
  Calendar,
  Flame,
  LineChart,
  Smartphone,
  Search,
  Zap,
  BarChart3,
  ListTodo,
  Compass,
  HelpCircle,
  GraduationCap,
  Star,
  RefreshCw,
  FileText,
  Lightbulb,
  Layers,
  ShieldCheck,
  Compass as CompassIcon,
  HelpCircle as HelpIcon,
  BookOpenCheck,
} from "lucide-react";

// Common animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// ==========================================
// 1. HOMEPAGE PREVIEW COMPONENTS
// ==========================================

export function GuidedLearningPreview({ onNavigate }) {
  const previewPhases = [
    { phase: "Phase 1", name: "Qualifiers", percentile: "75–85%", desc: "Master Arithmetic foundations and basic reading speed.", color: "from-indigo-500 to-indigo-700" },
    { phase: "Phase 2", name: "Contenders", percentile: "85–95%", desc: "Build strategic depth in Algebra & Geometry.", color: "from-purple-500 to-purple-700" },
    { phase: "Phase 3", name: "Elite", percentile: "95–99%", desc: "Advanced number systems, inference reading, and complex logic grids.", color: "from-[#5B4DFF] to-[#7C6CFF]" },
    { phase: "Phase 4", name: "Top 1%", percentile: "99%+", desc: "Tactical skipping drills, multi-concept integration, and stamina.", color: "from-[#1E1B4B] to-[#312E81]" },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-[11px] font-bold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
            Curriculum Roadmap
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Inside <span className="text-[#5B4DFF]">Guided Learning</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-lg mx-auto">
            A linear progression structure modeled after cognitive development phases. No skipping, just absolute mastery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewPhases.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.06)" }}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block mb-1">{item.phase}</span>
                <h3 className="text-lg font-black text-slate-900 leading-snug">{item.name}</h3>
                <span className="inline-block mt-2 px-2.5 py-0.5 text-[10px] font-bold text-indigo-600 bg-indigo-50 rounded-lg">
                  Target: {item.percentile}
                </span>
                <p className="mt-3 text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate("guided-learning")}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#5B4DFF] hover:text-[#4F42F0] hover:underline"
          >
            Learn More About Guided Learning <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function SmartSkippingPreview({ onNavigate }) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 text-[11px] font-bold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
              Exam Psychology
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-5">
              The Smart Skipping <span className="text-[#5B4DFF]">Strategy</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              CAT is an exam of selection, not completion. High-percentile students excel not because they solve everything, but because they identify time-traps instantly and skip them within seconds. We teach you this core attempt methodology systematically.
            </p>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm mb-6">
              <h4 className="text-sm font-bold text-slate-900 mb-1">Methodology Philosophy</h4>
              <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed">
                "Success in CAT is about attempting the highest ROI questions first. Never waste 5 minutes on low-yield traps when simple marks remain open."
              </p>
            </div>
            <button
              onClick={() => onNavigate("strategy")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#5B4DFF] hover:text-[#4F42F0] hover:underline"
            >
              Explore Our Strategy <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Attempt First", sub: "High Frequency + Easy", border: "border-emerald-200 bg-emerald-50/20 text-emerald-700" },
              { name: "Attempt Carefully", sub: "High Frequency + Hard", border: "border-amber-200 bg-amber-50/20 text-amber-700" },
              { name: "Optional", sub: "Low Frequency + Easy", border: "border-indigo-200 bg-indigo-50/20 text-indigo-700" },
              { name: "Skip", sub: "Low Frequency + Hard", border: "border-rose-200 bg-rose-50/20 text-rose-700" },
            ].map((quad, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${quad.border} flex flex-col justify-between h-36`}>
                <span className="text-[10px] font-black uppercase text-slate-400">Quadrant {idx + 1}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-black tracking-tight">{quad.name}</h3>
                  <p className="text-[10px] font-medium opacity-80 mt-1">{quad.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesPreview({ onNavigate }) {
  const previews = [
    { icon: BookOpen, title: "Guided Learning", desc: "Linear pathways that decide your daily lessons, taking away planning stress." },
    { icon: Clock, title: "Time Trap Detection", desc: "Identify time-draining questions dynamically using practice analytics." },
    { icon: Brain, title: "Smart Skipping", desc: "Train your brain to recognize Quadrant 4 (Low ROI) questions within 15 seconds." },
    { icon: RefreshCw, title: "Revision Engine", desc: "Automated spaced repetition intervals mapping weak topics into revision blocks." },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-[11px] font-bold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
            Platform Capabilities
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            More Than Mock Tests. <span className="text-[#5B4DFF]">A Smarter Preparation System.</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-lg mx-auto">
            A comprehensive list of core features structured entirely around transparent study science.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previews.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#F8FAFC] border border-slate-200/60 p-6 rounded-2xl flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#5B4DFF] flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate("features")}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#5B4DFF] hover:text-[#4F42F0] hover:underline"
          >
            See All Features <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. DEDICATED PAGE COMPONENTS
// ==========================================

// --- PAGE: /strategy ---
export function StrategyPage() {
  const skippingModel = [
    { title: "Quadrant 1: Attempt First", type: "High Frequency + Easy", action: "SECURE MARKS", color: "border-emerald-500 bg-emerald-50/20 text-emerald-800", desc: "These are core score builders. Spot these under 30 seconds and solve with perfect precision." },
    { title: "Quadrant 2: Attempt Carefully", type: "High Frequency + Hard", action: "STAMP BLOCKS", color: "border-amber-500 bg-amber-50/20 text-amber-800", desc: "Heavy weightage but contain conceptual hurdles. Attempt after securing all Quadrant 1 marks." },
    { title: "Quadrant 3: Optional", type: "Low Frequency + Easy", action: "FILL GAPS", color: "border-indigo-500 bg-indigo-50/20 text-indigo-800", desc: "Simple concepts but rare. Attempt at the end of a section to boost your score to the elite level." },
    { title: "Quadrant 4: Skip", type: "Low Frequency + Hard", action: "DUMP TRAP", color: "border-rose-500 bg-rose-50/20 text-rose-800", desc: "Examiner trap questions designed to waste time. Train your mind to identify and skip these in under 15 seconds." },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      {/* Editorial Header */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Strategy Philosophy
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          The <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">TESTRIGHTNOW</span> Strategy
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Why hours of grinding textbooks won't yield 99+ percentiles, and how to train your mind to make high-ROI decisions in high-pressure slots.
        </motion.p>
      </div>

      {/* Philosophy Grid */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
        {/* Core Obstacle */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.015)] grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">Why Most CAT Students Struggle</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Most students don't fail CAT because they lack mental capacity. They fail because they treat it like a school test, trying to complete everything. CAT is an attempt-rate management exam. Grinding random exercises without time tracking leads to decision fatigue and massive time trap blockages in actual exam slots.
            </p>
          </div>
          <div className="md:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200/50 space-y-3">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Typical Preparation Issues</h4>
            {[
              "Solving low-ROI, obscure topics",
              "Lack of real-time time-trap alerts",
              "No structured spaced revision habits",
              "Strategic confusion and mock test burnout",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* High ROI model */}
        <motion.div variants={fadeUp} className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-slate-900">High-ROI Preparation Philosophy</h3>
            <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
              Focusing on syllabus sections that yield maximum percentiles with the lowest possible hour investment.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Arithmetic Core", desc: "Forms ~40% of the Quant section. Master percentages, ratios, and averages first." },
              { title: "RC Structuring", desc: "Focus on parsing passage central ideas instead of getting blocked by obscure vocabulary." },
              { title: "Matrix DILR", desc: "Matrix and linear arrangement caselets provide stable, verifiable marks." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <span className="text-xs font-bold text-[#5B4DFF] uppercase tracking-wider block mb-2">Category {i + 1}</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skipping framework */}
        <motion.div variants={fadeUp} className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-slate-900">The Smart Skipping Framework</h3>
            <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
              An attempt-priority selector designed to bypass examiner trap systems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {skippingModel.map((item, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border-2 flex flex-col justify-between min-h-48 ${item.color}`}>
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Attempt priority</span>
                  <h4 className="text-lg font-black tracking-tight">{item.title}</h4>
                  <p className="text-xs opacity-80 mt-1 font-semibold">{item.type}</p>
                  <p className="text-xs mt-3 leading-relaxed opacity-90">{item.desc}</p>
                </div>
                <span className="inline-block mt-4 px-3 py-1 rounded-xl text-[10px] font-black tracking-wider uppercase border border-current self-start">
                  {item.action}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strategy Manifesto */}
        <motion.div variants={fadeUp} className="bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[85px] pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-black">Revision-First &amp; Time Allocation Principles</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We structure your preparation around Spaced Memory Retrieval instead of endless video watching. When you practice, our engine tracks the time spent per attempt. If you waste over 120 seconds on a question without completing it, it is classified as a Time Trap. The dashboard then prompts custom daily sprints to teach you skipping discipline.
            </p>
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Philosophy Code</span>
              <span className="text-xs font-black text-[#9B8FFF]">TESTRIGHTNOW Strategy Manifesto 1.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// --- PAGE: /guided-learning ---
export function GuidedLearningPage() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phase: "Phase 1",
      name: "Qualifiers",
      percentile: "Target: 75–85%",
      objective: "Build fundamental Arithmetic accuracy and vocabulary speed guidelines.",
      focus: ["Percentages & Ratios", "Basic Reading Speeds", "Linear Arrangements", "Mental Arithmetic"],
      reinforce: "Topics with sub-50% accuracy benchmarks trigger immediate concept-review alerts.",
    },
    {
      phase: "Phase 2",
      name: "Contenders",
      percentile: "Target: 85–95%",
      objective: "Establish comprehensive Algebra mechanics and baseline speed criteria.",
      focus: ["Equations & Sequences", "RC Inference Patterns", "Matrix Selection Grids", "Basic Time-Trap Blocks"],
      reinforce: "Timed practice sprints scheduled dynamically based on your error distributions.",
    },
    {
      phase: "Phase 3",
      name: "Elite",
      percentile: "Target: 95–99%",
      objective: "Master Number Systems and advanced reading comprehension logic.",
      focus: ["Number Systems & Modern Math", "Double-Negative RC Inferences", "Complex Arrangements", "Skip Threshold Drills"],
      reinforce: "Custom revision worksheets auto-generated every Saturday covering weekly errors.",
    },
    {
      phase: "Phase 4",
      name: "Top 1%",
      percentile: "Target: 99%+",
      objective: "Maximize tactical decision accuracy under strict timing envelopes.",
      focus: ["10-Second Skip Decisions", "Multi-Concept Algebra puzzles", "Advanced Philosophy RCs", "Stamina Conditioning"],
      reinforce: "Continuous adaptive drills scaling to expert level as accuracy remains above 90%.",
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Curriculum Deep Dive
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          The <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">Guided Learning</span> System
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          How our linear curriculum path guides you step-by-step from fundamental arithmetic to elite skipping efficiency.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
        {/* Core Hierarchy */}
        <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
          {[
            { title: "1. Phase", desc: "Target percentile blocks (Qualifiers, Contenders, Elite, Top 1%). Sequential progression only." },
            { title: "2. Section", desc: "Bite-sized daily assignments. Takes 45–90 minutes. You see \"Today's Section\" instead of a massive syllabus." },
            { title: "3. Activity", desc: "The smallest unit. Takes 5–15 minutes. Includes Timed Practice, Active Recall, and Spaced Revision." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
              <h3 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Phase Selector Panel */}
        <motion.div variants={fadeUp} className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-slate-900">Linear Phase Progression</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
              Select a phase to explore targeted objectives, focus syllabus topics, and reinforcement mechanics.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {phases.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activePhase === idx
                    ? "bg-[#5B4DFF] text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
                }`}
              >
                {p.phase} — {p.name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-md p-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] text-white p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#9B8FFF] tracking-widest block mb-1">{phases[activePhase].phase}</span>
                <h4 className="text-2xl font-black">{phases[activePhase].name}</h4>
                <span className="inline-block mt-3 px-3 py-1 bg-white/10 rounded-xl text-xs font-bold">
                  {phases[activePhase].percentile}
                </span>
              </div>
              <p className="text-xs text-indigo-200 leading-relaxed mt-6">
                *Success benchmarks must be secured to unlock subsequent phases.
              </p>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div>
                <h5 className="text-[10px] uppercase font-black text-slate-400 mb-1">Learning Objective</h5>
                <p className="text-slate-800 text-sm font-semibold leading-relaxed">{phases[activePhase].objective}</p>
              </div>

              <div>
                <h5 className="text-[10px] uppercase font-black text-slate-400 mb-2">Key Focus Areas</h5>
                <div className="grid sm:grid-cols-2 gap-2">
                  {phases[activePhase].focus.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check size={12} className="text-[#5B4DFF] stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h5 className="text-[10px] uppercase font-black text-[#5B4DFF] mb-1">Reinforcement Engine</h5>
                <p className="text-slate-500 text-xs leading-relaxed">{phases[activePhase].reinforce}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Operational Flow */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Progression &amp; Spaced Revision</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Whenever you complete daily sections, our spacing algorithms calculate memory decay intervals. Revision loops are automatically scheduled at 1, 3, and 7 days. If the system flags conceptual deficits, it adjusts daily learning worksheets dynamically to reinforce the exact rules you struggled with.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">How Next Activities Are Chosen</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our recommendation engine evaluates three parameters: your active accuracy, mock test performance, and revision schedules. Daily goals are then assembled, featuring concept building tasks, timing sprints, and reinforcement reviews, ensuring you spend 100% of your time on maximum ROI study steps.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// --- PAGE: /how-it-works ---
export function HowItWorksPage() {
  const workflow = [
    { step: "1", title: "Create Account", desc: "Set up your profile and basic preparation details." },
    { step: "2", title: "Guided Learning Starts", desc: "Your structured CAT preparation path becomes available immediately." },
    { step: "3", title: "Daily Sections", desc: "Receive your daily 45–90 minute guided learning plan." },
    { step: "4", title: "Targeted Practice", desc: "Complete focused activities and exercises." },
    { step: "5", title: "Revision", desc: "Reinforce concepts through scheduled revision." },
    { step: "6", title: "Performance Analysis", desc: "Track strengths, weaknesses, and progress." },
    { step: "7", title: "Adaptive Reinforcement", desc: "Receive additional practice for weak areas." },
    { step: "8", title: "Mock Tests", desc: "Apply learning under exam conditions." },
    { step: "9", title: "Continuous Improvement", desc: "Progress through phases and milestones." }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Product Workflow
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          The <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">TESTRIGHTNOW</span> Workflow
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          From first signup to percentile optimization: a transparent view of how the platform structures your day-to-day study workflow.
        </motion.p>
      </div>

      {/* Timeline flow */}
      <div className="max-w-3xl mx-auto px-6 pb-20 relative">
        <div className="absolute left-10 top-6 bottom-6 w-0.5 bg-slate-200/80" />

        <div className="space-y-10">
          {workflow.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex items-start gap-8 relative z-10 group"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-xs text-[#5B4DFF] shrink-0 group-hover:bg-[#5B4DFF] group-hover:text-white transition-all duration-300 shadow-sm">
                {item.step}
              </div>
              <div className="pt-1">
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// --- PAGE: /features ---
// --- INTERACTIVE SUB-COMPONENTS FOR 14 FEATURES ---

// 1. Guided Learning
function GuidedLearningWidget() {
  const [activeStep, setActiveStep] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { label: "Phase 1: Arithmetic Core", sub: "Mastering percentages & ratio speeds" },
    { label: "Section 12: Ratio & Percentage Sprints", sub: "Interactive 45-minute daily lesson" },
    { label: "Activity 3: Active Recall Quiz", sub: "Confirming >80% conceptual retention" },
    { label: "Next Action: Linear System Unlocked", sub: "System automatically maps the next optimal lesson" }
  ];

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-6 relative overflow-hidden h-72 flex flex-col justify-between shadow-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest">System Path Progress</span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <div className="space-y-4 my-auto relative z-10">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;
          return (
            <div key={idx} className="flex items-center gap-3 transition-all duration-500">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-black shrink-0 transition-all duration-500 ${
                isActive ? "bg-[#5B4DFF] border-[#5B4DFF] text-white scale-110 shadow-[0_0_12px_rgba(91,77,255,0.6)]" :
                isCompleted ? "bg-emerald-500 border-emerald-500 text-white" :
                "bg-slate-900 border-slate-800 text-slate-500"
              }`}>
                {isCompleted ? <Check size={10} strokeWidth={3} /> : idx + 1}
              </div>
              <div className="text-left">
                <h4 className={`text-xs font-bold transition-colors duration-500 ${isActive ? "text-white animate-pulse" : isCompleted ? "text-slate-300" : "text-slate-600"}`}>
                  {step.label}
                </h4>
                {isActive && (
                  <motion.p initial={{ opacity: 0, y: -2 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-slate-400">
                    {step.sub}
                  </motion.p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-[9px] text-slate-500 italic text-left border-t border-slate-800/85 pt-2">
        *Paths represent sequential progress loops. Next lessons scale automatically based on error analytics.
      </div>
    </div>
  );
}

// 2. Topic Tests
function TopicTestsWidget() {
  const [mastered, setMastered] = useState([0, 1]);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setMastered((prev) => {
        if (prev.length >= 8) return [0, 1];
        return [...prev, prev.length];
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const topics = [
    "Percentages", "Ratios", "SI & CI", "Time & Work",
    "Equations", "Sequences", "Arrangements", "Logical Grids"
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-lg">
      <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-widest">Concept Mastery Map</span>
      <div className="grid grid-cols-2 gap-3 my-auto">
        {topics.map((topic, idx) => {
          const isMastered = mastered.includes(idx);
          return (
            <div key={idx} className={`p-3 rounded-xl border text-center transition-all duration-500 flex items-center justify-between ${
              isMastered ? "bg-emerald-50/50 border-emerald-200 text-emerald-800 shadow-sm" : "bg-slate-50 border-slate-100 text-slate-400"
            }`}>
              <span className="text-[11px] font-bold">{topic}</span>
              {isMastered ? (
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                  <Check size={8} strokeWidth={4} />
                </span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-slate-200 animate-pulse" />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-[9px] text-slate-500 text-center">
        Nodes illuminate as accuracy levels remain above 80% across quizzes.
      </div>
    </div>
  );
}

// 3. Section Tests
function SectionTestsWidget() {
  const [timeLeft, setTimeLeft] = useState(2400); // 40 mins
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 2400));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#070B14] border border-slate-800 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-2xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest">Active Slot Simulator</span>
        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[9px] font-extrabold uppercase border border-rose-500/30 border-rose-500/30">
          T-minus Time
        </span>
      </div>
      
      <div className="flex items-center justify-around my-auto">
        <div className="text-center">
          <div className="text-3xl font-mono font-black text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            {formatTime(timeLeft)}
          </div>
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Section Timer</span>
        </div>

        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="text-slate-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="text-[#5B4DFF]" strokeDasharray="60, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs font-black text-white">14/24</span>
            <span className="text-[7px] text-slate-400 uppercase font-black">Solved</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-slate-800/80 pt-3 text-center">
        <div>
          <span className="text-[8px] text-slate-500 font-extrabold uppercase block">Accuracy</span>
          <span className="text-[11px] font-bold text-emerald-400">85.7%</span>
        </div>
        <div>
          <span className="text-[8px] text-slate-500 font-extrabold uppercase block">Pace Indicator</span>
          <span className="text-[11px] font-bold text-[#9B8FFF]">Optimal</span>
        </div>
        <div>
          <span className="text-[8px] text-slate-500 font-extrabold uppercase block">Sim Target</span>
          <span className="text-[11px] font-bold text-white">99%ile</span>
        </div>
      </div>
    </div>
  );
}

// 4. Mock Tests
function MockTestsWidget() {
  const [activeSlot, setActiveSlot] = useState(0);

  const slots = [
    { va: "98.5%ile", lr: "96.4%ile", qa: "98.8%ile", overall: "99.1%ile" },
    { va: "97.1%ile", lr: "97.9%ile", qa: "96.5%ile", overall: "98.4%ile" },
    { va: "99.2%ile", lr: "95.1%ile", qa: "99.4%ile", overall: "99.3%ile" }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-lg relative">
      <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-widest block mb-2">Simulated Slot Dashboard</span>
      
      <div className="flex gap-1.5 justify-center mb-2">
        {slots.map((slot, i) => (
          <button
            key={i}
            onClick={() => setActiveSlot(i)}
            className={`px-2.5 py-1 rounded-lg text-[9px] font-black transition-all ${
              activeSlot === i ? "bg-[#5B4DFF] text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            Slot {String.fromCharCode(65 + i)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto bg-slate-50 p-3 rounded-2xl border border-slate-100">
        <div>
          <span className="text-[8px] font-bold uppercase text-slate-400 block">VARC Percentile</span>
          <span className="text-xs font-black text-slate-900">{slots[activeSlot].va}</span>
        </div>
        <div>
          <span className="text-[8px] font-bold uppercase text-slate-400 block">DILR Percentile</span>
          <span className="text-xs font-black text-slate-900">{slots[activeSlot].lr}</span>
        </div>
        <div>
          <span className="text-[8px] font-bold uppercase text-slate-400 block">QA Percentile</span>
          <span className="text-xs font-black text-slate-900">{slots[activeSlot].qa}</span>
        </div>
        <div>
          <span className="text-[8px] font-black uppercase text-[#5B4DFF] block">Projected Overall</span>
          <span className="text-xs font-black text-[#5B4DFF]">{slots[activeSlot].overall}</span>
        </div>
      </div>

      <div className="h-10 mt-1">
        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradientMock" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B4DFF" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#5B4DFF" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,18 C20,10 40,15 60,5 C80,12 90,3 100,10 L100,20 L0,20 Z" fill="url(#gradientMock)" />
          <path d="M0,18 C20,10 40,15 60,5 C80,12 90,3 100,10" fill="none" stroke="#5B4DFF" strokeWidth="1.5" />
          <circle cx="60" cy="5" r="2" fill="#5B4DFF" className="animate-ping" />
          <circle cx="60" cy="5" r="1.5" fill="#5B4DFF" />
        </svg>
      </div>
    </div>
  );
}

// 5. Performance Analytics
function PerformanceAnalyticsWidget() {
  const categories = [
    { name: "Quant Arithmetic", status: "Strong", pct: 92, color: "bg-emerald-500" },
    { name: "VARC Passages", status: "Optimal", pct: 85, color: "bg-emerald-400" },
    { name: "DILR Matrix Arrangements", status: "Attention Needed", pct: 58, color: "bg-amber-500" }
  ];

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-2xl text-left">
      <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest block mb-1">Apple-Quality Pace &amp; Weakness Tracker</span>
      
      <div className="space-y-3 my-auto">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-white">{cat.name}</span>
              <span className="text-[9px] font-extrabold text-slate-400">{cat.status} ({cat.pct}%)</span>
            </div>
            <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${cat.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full ${cat.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-900/80 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping shrink-0" />
        <span className="text-[9px] text-slate-400 italic">
          *Pace Insight: Speed is optimal in Arithmetic (45s/q), but DILR matrix setups exceed safe averages (165s/q).
        </span>
      </div>
    </div>
  );
}

// 6. Revision Engine
function RevisionEngineWidget() {
  const [retention, setRetention] = useState(65);
  const [boosted, setBoosted] = useState(false);

  const handleBoost = () => {
    setRetention(100);
    setBoosted(true);
    setTimeout(() => setBoosted(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-lg text-center relative overflow-hidden">
      {boosted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#5B4DFF]/5 flex items-center justify-center pointer-events-none z-10"
        >
          <div className="bg-[#5B4DFF] text-white px-4 py-2 rounded-2xl shadow-xl text-xs font-black flex items-center gap-1.5">
            <Zap size={12} className="fill-current" /> Concept Memory Recharged!
          </div>
        </motion.div>
      )}

      <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-widest block">Spaced Retention Timeline</span>
      
      <div className="my-auto space-y-4">
        <div className="flex items-center justify-center gap-4">
          <div className="text-3xl font-black text-slate-900 tracking-tight">{retention}%</div>
          <div className="text-left">
            <span className="text-[9px] font-extrabold uppercase text-slate-400 block">Memory Strength</span>
            <span className="text-[10px] font-bold text-slate-600">Interval Status: {retention === 100 ? "Secured" : "Decaying"}</span>
          </div>
        </div>

        <div className="h-12 relative flex items-end">
          <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d={`M0,5 Q50,${25 - (retention - 65) * 0.5} 100,28`} fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3,3" />
            <path d={`M0,5 Q50,${25 - (retention - 65) * 0.5} ${retention},${28 - (retention - 65) * 0.2}`} fill="none" stroke="#5B4DFF" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx={retention} cy={28 - (retention - 65) * 0.2} r="3" fill="#5B4DFF" />
          </svg>
        </div>

        <button
          onClick={handleBoost}
          className="mx-auto px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2 group"
        >
          <RefreshCw size={12} className="group-hover:rotate-180 transition-transform duration-500" /> Trigger Active Recall Review
        </button>
      </div>

      <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">
        *Spaced Repetition reset loop: Interval schedules at 1, 3, and 7-day decays.
      </span>
    </div>
  );
}

// 7. Adaptive Reinforcement
function AdaptiveReinforcementWidget() {
  const [activeStep, setActiveStep] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const flow = [
    { name: "Practice Slot", desc: "Algebra Sprint Quiz in Progress" },
    { name: "Deficit Flagged", desc: "System tags accuracy drop (< 60% on Sequences)" },
    { name: "Remedial Branch", desc: "Auxiliary basic Sequences drills auto-generated" },
    { name: "Skill Patched", desc: "Sequences accuracy benchmark restored to 90%" },
    { name: "Path Re-entry", desc: "Main curriculum roadmap unlocked successfully" }
  ];

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-2xl text-left relative">
      <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest block mb-2">Dynamic Error Loop Flow</span>

      <div className="space-y-3.5 my-auto relative z-10">
        {flow.map((node, i) => {
          const isActive = i === activeStep;
          return (
            <div key={i} className={`flex items-center gap-3 transition-opacity duration-500 ${isActive ? "opacity-100 scale-102" : "opacity-30"}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold border shrink-0 ${
                isActive ? "bg-[#5B4DFF] border-[#5B4DFF] text-white animate-pulse" : "bg-slate-900 border-slate-800 text-slate-500"
              }`}>
                {i + 1}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">{node.name}</h4>
                {isActive && <span className="text-[9px] text-slate-400 block mt-0.5">{node.desc}</span>}
              </div>
            </div>
          );
        })}
      </div>

      <span className="text-[8px] text-slate-500 italic">
        *Remedial drills isolate exactly what you failed, preventing backlog pile-up.
      </span>
    </div>
  );
}

// 8. Progress Tracking
function ProgressTrackingWidget() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-lg text-center">
      <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-widest block">Strategic Milestones Hub</span>
      
      <div className="flex justify-around items-center my-auto">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="text-slate-100" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="text-[#5B4DFF]" strokeDasharray="72, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-black text-slate-900">72%</span>
            <span className="text-[7px] text-slate-400 uppercase font-black">Syllabus</span>
          </div>
        </div>

        <div className="text-left space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[9px] text-[#5B4DFF] font-black">1</div>
            <div>
              <span className="text-[9px] font-bold text-slate-800 block leading-tight">Qualifiers Phase</span>
              <span className="text-[7px] font-extrabold uppercase text-emerald-500">100% Completed</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[9px] text-[#5B4DFF] font-black">2</div>
            <div>
              <span className="text-[9px] font-bold text-slate-800 block leading-tight">Contenders Phase</span>
              <span className="text-[7px] font-extrabold uppercase text-indigo-500">80% In Progress</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[9px] text-slate-400 font-black">3</div>
            <div>
              <span className="text-[9px] font-bold text-slate-400 block leading-tight">Elite Phase</span>
              <span className="text-[7px] font-extrabold uppercase text-slate-400">Locked</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[9px] text-slate-500">
        Phase advancement requires meeting minimum accuracy targets in all core categories.
      </div>
    </div>
  );
}

// 9. Rewards System
function RewardsSystemWidget() {
  const [activeBadge, setActiveBadge] = useState(null);

  const badges = [
    { title: "Trap Breaker", desc: "Identify and skip 5 time traps in under 15 seconds.", icon: ShieldCheck, color: "text-[#9B8FFF] bg-purple-500/10 border-purple-500/20" },
    { title: "Streak Titan", desc: "Maintain a study streak for 15 consecutive days.", icon: Flame, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { title: "Accuracy Guru", desc: "Achieve >90% accuracy on a full Sectional Test.", icon: Award, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" }
  ];

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-2xl text-center relative overflow-hidden">
      <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest block">Premium Achievement Pane</span>
      
      <div className="my-auto space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <span className="text-[8px] font-black text-[#9B8FFF] uppercase block">Current Rank</span>
            <span className="text-xs font-black text-white">Level 18 — Contender</span>
          </div>
          <div className="text-right">
            <span className="text-[8px] font-bold text-slate-400 block">Current XP</span>
            <span className="text-xs font-bold text-slate-300">7,240 / 10,000</span>
          </div>
        </div>
        
        <div className="h-2 bg-slate-900 border border-slate-800/80 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "72.4%" }} className="h-full bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] rounded-full" />
        </div>

        <div className="flex justify-center gap-3">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            const isActive = activeBadge === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveBadge(isActive ? null : idx)}
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${badge.color} ${
                  isActive ? "scale-110 shadow-[0_0_12px_rgba(91,77,255,0.4)] animate-pulse" : "hover:scale-105"
                }`}
              >
                <Icon size={18} />
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {activeBadge !== null && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-900 text-left"
            >
              <h5 className="text-[10px] font-black text-white">{badges[activeBadge].title}</h5>
              <p className="text-[9px] text-slate-400 mt-0.5 leading-relaxed">{badges[activeBadge].desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <span className="text-[8px] text-slate-500">
        *Rewards act as momentum loops to maintain daily practice routines.
      </span>
    </div>
  );
}

// 10. Mission System
function MissionSystemWidget() {
  const [completed, setCompleted] = useState([false, false, false]);

  const toggleTask = (index) => {
    setCompleted((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = completed.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / completed.length) * 100);

  const missions = [
    "Syllabus: Solve CI Multipliers Assignment (15m)",
    "Strategy: Complete 5 Quad-4 skipping exercises (10m)",
    "Revision: Correct 4 yesterday's mistakes in Error Book (15m)"
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-lg text-left">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-widest">Today's Daily Checklist</span>
        <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-[9px] font-black text-[#5B4DFF]">
          {progressPercent}% Complete
        </span>
      </div>

      <div className="space-y-2.5 my-auto">
        {missions.map((mission, idx) => {
          const isDone = completed[idx];
          return (
            <button
              key={idx}
              onClick={() => toggleTask(idx)}
              className="w-full flex items-center gap-3 p-2 rounded-xl border border-slate-100/50 hover:bg-slate-50 transition-colors text-left"
            >
              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                isDone ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 bg-white"
              }`}>
                {isDone && <Check size={10} strokeWidth={4} />}
              </div>
              <span className={`text-[11px] font-bold transition-all ${isDone ? "text-slate-400 line-through" : "text-slate-800"}`}>
                {mission}
              </span>
            </button>
          );
        })}
      </div>

      <div className="h-1 bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
        <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
      </div>
    </div>
  );
}

// 11. Streak System
function StreakSystemWidget() {
  const cells = [
    4, 4, 3, 0, 4, 3, 4,
    4, 4, 2, 4, 4, 0, 4,
    4, 3, 4, 4, 4, 4, 3,
    4, 4, 4, 4, 3, 4, 4
  ];

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-2xl text-center">
      <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest block">Habit Consistency Chain</span>

      <div className="my-auto space-y-4">
        <div className="flex justify-center items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center animate-bounce">
            <Flame size={20} className="fill-current" />
          </div>
          <div className="text-left">
            <div className="text-2xl font-black text-white tracking-tight">18 Days Active</div>
            <span className="text-[9px] font-bold text-slate-400 uppercase">Streak Momentum Active</span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 justify-center max-w-[160px] mx-auto">
          {cells.map((level, i) => {
            let color = "bg-slate-900 border-slate-800/80";
            if (level === 2) color = "bg-purple-900/40 border-purple-800/20";
            if (level === 3) color = "bg-purple-700/60 border-purple-600/30";
            if (level === 4) color = "bg-[#5B4DFF] border-[#5B4DFF]/50 shadow-[0_0_8px_rgba(91,77,255,0.4)]";
            return (
              <div
                key={i}
                className={`w-4 h-4 rounded-sm border ${color} transition-all duration-300`}
              />
            );
          })}
        </div>
      </div>

      <span className="text-[8px] text-slate-500">
        *Calendar logs consecutive study completions. Missing a day resets active streak bonuses.
      </span>
    </div>
  );
}

// 12. Smart Skipping
function SmartSkippingWidget() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const questions = [
    { quad: "Quadrant 1: Attempt First", desc: "High Yield & Easy. Solve immediately to secure initial marks.", border: "border-emerald-500 bg-emerald-500/10 text-emerald-400" },
    { quad: "Quadrant 2: Attempt Carefully", desc: "High Yield but Hard. Attempt after securing all easy marks.", border: "border-amber-500 bg-amber-500/10 text-amber-400" },
    { quad: "Quadrant 3: Optional", desc: "Low Frequency & Easy. Attempt at the end of sections to boost score.", border: "border-indigo-500 bg-indigo-500/10 text-indigo-400" },
    { quad: "Quadrant 4: Skip Immediately", desc: "Low Yield & Hard. Examiner trap designed to waste time. Skip under 15 seconds.", border: "border-rose-500 bg-rose-500/10 text-rose-400" }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-lg text-left">
      <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-widest block mb-2">Priority Matrix Selector</span>

      <div className="flex gap-1 justify-center mb-2">
        {questions.map((q, i) => (
          <button
            key={i}
            onClick={() => setSelectedQuestion(i)}
            className={`px-2 py-1 rounded-lg text-[9px] font-black transition-all ${
              selectedQuestion === i ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            Q{i + 1}
          </button>
        ))}
      </div>

      <div className={`p-4 rounded-2xl border-2 my-auto transition-all duration-500 ${questions[selectedQuestion].border}`}>
        <span className="text-[8px] font-black uppercase tracking-wider block opacity-70">Strategic Quadrant</span>
        <h4 className="text-xs font-black mt-0.5">{questions[selectedQuestion].quad}</h4>
        <p className="text-[10px] font-bold mt-1.5 leading-relaxed opacity-90">{questions[selectedQuestion].desc}</p>
      </div>

      <span className="text-[8px] text-slate-400 text-center">
        *Tapping Q1-Q4 shows dynamic routing into target decision quadrants.
      </span>
    </div>
  );
}

// 13. Time Trap Detection
function TimeTrapWidget() {
  const [selectedNode, setSelectedNode] = useState(4); // default to trap

  const nodes = [
    { label: "Q1", time: "40s", status: "Correct", desc: "Standard arithmetic. Solved inside average threshold.", color: "bg-emerald-500 border-emerald-500 text-white" },
    { label: "Q2", time: "35s", status: "Correct", desc: "Basic vocabulary passage. Fast pacing.", color: "bg-emerald-500 border-emerald-500 text-white" },
    { label: "Q3", time: "15s", status: "Skipped", desc: "Identified rare permutation trap. Strategic skip.", color: "bg-indigo-500 border-indigo-500 text-white" },
    { label: "Q4", time: "45s", status: "Correct", desc: "Linear arrangement. Clean logical matrix.", color: "bg-emerald-500 border-emerald-500 text-white" },
    { label: "Q5", time: "185s", status: "Time Trap Flagged", desc: "Spent 3+ minutes on obscure modern geometry. Lost marks & ruined pacing.", color: "bg-rose-500 border-rose-500 text-white animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.6)]" },
    { label: "Q6", time: "22s", status: "Correct", desc: "Percentages conversion. High speed solve.", color: "bg-emerald-500 border-emerald-500 text-white" }
  ];

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-2xl text-left">
      <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest block mb-2">Attempt Timeline Analyzer</span>

      <div className="flex justify-between items-center relative my-auto py-2">
        <div className="absolute left-2 right-2 h-0.5 bg-slate-800 z-0" />
        
        {nodes.map((node, i) => {
          const isSelected = selectedNode === i;
          return (
            <button
              key={i}
              onClick={() => setSelectedNode(i)}
              className={`w-7 h-7 rounded-full border text-[9px] font-black flex items-center justify-center z-10 transition-transform ${node.color} ${
                isSelected ? "scale-125 ring-2 ring-white/20" : "hover:scale-110"
              }`}
            >
              {node.label}
            </button>
          );
        })}
      </div>

      <div className="bg-slate-950 p-3 rounded-2xl border border-slate-900 flex justify-between items-start gap-4 min-h-[75px]">
        <div>
          <h5 className="text-[11px] font-black text-white">{nodes[selectedNode].status} ({nodes[selectedNode].time})</h5>
          <p className="text-[9px] text-slate-400 mt-1 leading-relaxed">{nodes[selectedNode].desc}</p>
        </div>
      </div>

      <span className="text-[8px] text-slate-500 text-center">
        *Interactive: Tap timeline nodes to inspect solving duration details and skipping ROI.
      </span>
    </div>
  );
}

// 14. Expected Percentile Tracking
function ExpectedPercentileWidget() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 h-72 flex flex-col justify-between shadow-lg text-left">
      <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-widest block">Projected Growth Curve</span>

      <div className="h-28 relative my-auto">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradientPercentile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B4DFF" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#5B4DFF" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          <line x1="0" y1="10" x2="100" y2="10" stroke="#F1F5F9" strokeWidth="0.5" />
          <line x1="0" y1="20" x2="100" y2="20" stroke="#F1F5F9" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="100" y2="30" stroke="#F1F5F9" strokeWidth="0.5" />

          <path d="M0,38 Q30,35 60,20 T100,5 L100,40 L0,40 Z" fill="url(#gradientPercentile)" />
          
          <path d="M0,38 Q30,35 60,20 T100,5" fill="none" stroke="#5B4DFF" strokeWidth="2" strokeLinecap="round" />
          
          <circle cx="0" cy="38" r="2" fill="#5B4DFF" />
          <circle cx="30" cy="35" r="2" fill="#5B4DFF" />
          <circle cx="60" cy="20" r="2.5" fill="#5B4DFF" className="animate-ping" />
          <circle cx="60" cy="20" r="2" fill="#5B4DFF" />
          <circle cx="100" cy="5" r="2" fill="#5B4DFF" />
          
          <text x="5" y="32" fontSize="3" className="fill-slate-400 font-bold uppercase">Base</text>
          <text x="35" y="28" fontSize="3" className="fill-slate-400 font-bold uppercase">Qualifier</text>
          <text x="65" y="15" fontSize="3.5" className="fill-[#5B4DFF] font-black uppercase">Active Phase</text>
          <text x="82" y="10" fontSize="3" className="fill-slate-400 font-bold uppercase">Target 99%ile</text>
        </svg>
      </div>

      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex justify-between items-center">
        <div>
          <span className="text-[8px] font-bold text-slate-400 uppercase block">Active Readiness State</span>
          <span className="text-[11px] font-black text-slate-800">Contenders Range (Phase 2)</span>
        </div>
        <div className="text-right">
          <span className="text-[8px] font-bold text-slate-400 uppercase block">Milestone Status</span>
          <span className="text-[11px] font-black text-emerald-500">On Track</span>
        </div>
      </div>
    </div>
  );
}

// Map index to each of the 14 widgets
const featuresWidgetsMap = [
  GuidedLearningWidget,
  TopicTestsWidget,
  SectionTestsWidget,
  MockTestsWidget,
  PerformanceAnalyticsWidget,
  RevisionEngineWidget,
  AdaptiveReinforcementWidget,
  ProgressTrackingWidget,
  RewardsSystemWidget,
  MissionSystemWidget,
  StreakSystemWidget,
  SmartSkippingWidget,
  TimeTrapWidget,
  ExpectedPercentileWidget
];

// --- MAIN REDESIGNED FEATURES PAGE ---
export function FeaturesPage() {
  const [selectedCluster, setSelectedCluster] = useState("Learn");

  const features = [
    {
      title: "Guided Learning",
      headline: "The system always knows your exact next study action.",
      purpose: "Provide a direct, step-by-step roadmap from foundations to advanced concept levels.",
      problem: "Aspirants spend hours planning study calendars, facing heavy decision fatigue.",
      works: "Algorithmically sequences topics and daily sections based on user accuracy.",
      benefit: "Eliminates strategist overhead so students focus 100% on learning.",
    },
    {
      title: "Topic Tests",
      headline: "Isolate conceptual gaps at the most granular level possible.",
      purpose: "Target specific, granular concept subdivisions for direct testing.",
      problem: "Traditional books have massive mixed exercises that hide specific concept errors.",
      works: "Generates custom 10-15 minute quizzes targeting specific sub-rules (e.g. Compound Interest ratios).",
      benefit: "Fortifies core arithmetic fundamentals before moving to complex formulas.",
    },
    {
      title: "Section Tests",
      headline: "Master individual slots without full mock exhaustion.",
      purpose: "Simulate individual exam slots (Quant, VARC, or DILR) under strict timing envelopes.",
      problem: "Full 2-hour mock tests are draining, making routine segment diagnostics difficult.",
      works: "Provides dedicated 40-minute slot tests mapping exact section compositions.",
      benefit: "Allows routine diagnostics without mock exam exhaustion.",
    },
    {
      title: "Mock Tests",
      headline: "Full exam conditions to lock in strategic confidence.",
      purpose: "Provide slot simulations mimicking national CAT test patterns.",
      problem: "Unpredictable slot schedules can trigger exam anxiety and time allocation errors.",
      works: "Simulates full slot boundaries, compiling multi-layered diagnostic reports.",
      benefit: "Conditions student stamina and verifies overall preparation status.",
    },
    {
      title: "Performance Analytics",
      headline: "Deep strategic diagnostics built to expose pacing leaks.",
      purpose: "Deliver direct diagnostics outlining conceptual accuracy and pace metrics.",
      problem: "Standard scorecards only show total marks, obscuring conceptual error patterns.",
      works: "Evaluates time allocation charts and maps errors to specific syllabus sections.",
      benefit: "Exposes exact strategic blocks hindering score progression.",
    },
    {
      title: "Revision Engine",
      headline: "Protect hard-earned concepts from memory decay cycles.",
      purpose: "Protect memory retention using spaced repetition schedules.",
      problem: "Students study new topics while completely forgetting previous concepts.",
      works: "Triggers spaced review intervals automatically whenever memory thresholds decline.",
      benefit: "Protects concepts from memory decay, locking rules into long-term memory.",
    },
    {
      title: "Adaptive Reinforcement",
      headline: "Practicing complexity that adjusts dynamically to your skill.",
      purpose: "Automatically customize practicing difficulty parameters in real-time.",
      problem: "Static exercises are either demoralizingly difficult or boringly easy.",
      works: "Increases difficulty iteratively as your answers stabilize, scaling down when error spikes occur.",
      benefit: "Maintains optimal learning flow, reinforcing baseline rules before climbing.",
    },
    {
      title: "Progress Tracking",
      headline: "Your entire strategically coordinated pathway, visual and clear.",
      purpose: "Visualize overall syllabus completion and phase benchmarks.",
      problem: "Aspirants study blindly, unsure if they are close to syllabus mastery.",
      works: "Compiles a live roadmap tracking finished activities and next milestone requirements.",
      benefit: "Creates strong motivation loops through clear strategic visibility.",
    },
    {
      title: "Rewards System",
      headline: "Premium gamification designed to feed consistency loops.",
      purpose: "Dopamine trigger mechanics rewarding routine study actions.",
      problem: "Traditional self-preparation is isolated, causing consistency drops.",
      works: "Grants platform badges and level-ups on completing daily sections.",
      benefit: "Leverages habit gamification to keep study momentum high.",
    },
    {
      title: "Mission System",
      headline: "Break syllabus overwhelm into daily actionable milestones.",
      purpose: "Divide weekly assignments into bite-sized daily milestones.",
      problem: "Vast syllabi trigger strategic paralysis, preventing routine practice.",
      works: "Converts weekly goals into specific, actionable daily missions.",
      benefit: "Maintains clear focus: just open the app and finish today’s checklist.",
    },
    {
      title: "Streak System",
      headline: "Visual daily momentum charts that build bulletproof habits.",
      purpose: "Condition consistency using visual daily streak trackers.",
      problem: "Prepare inconsistently, leaving weeks of blank spaces between study blocks.",
      works: "Maintains a live calendar tracking consecutive days with completed sections.",
      benefit: "Engineers habits by encouraging students to keep the streak chain alive.",
    },
    {
      title: "Smart Skipping",
      headline: "Recognize low-ROI examiner trap questions in 15 seconds.",
      purpose: "Condition fast question selection during active slot tests.",
      problem: "Aspirants waste 5-8 minutes attempting difficult trap questions.",
      works: "Schedules specific speed-filtering exercises to teach time-saving skipping guidelines.",
      benefit: "Saves valuable minutes, reserving energy for high-ROI questions.",
    },
    {
      title: "Time Trap Detection",
      headline: "Flag pace bottlenecks before they compromise slot scores.",
      purpose: "Flag specific questions where attempts exceeded safe timing envelopes.",
      problem: "Students ignore time metrics, failing to recognize pacing errors.",
      works: "Monitors response durations, tagging any attempt >120s without success.",
      benefit: "Identifies strategic leaks before they ruin slot scores.",
    },
    {
      title: "Expected Percentile Tracking",
      headline: "Professional mathematical forecasting based on competitive slots.",
      purpose: "Provide live percentile forecasts based on competitive benchmarks.",
      problem: "Raw mock scores are difficult to evaluate without comparative metrics.",
      works: "Maps raw accuracy parameters to current slot statistics.",
      benefit: "Maintains realistic targets and maps overall performance goals.",
    },
  ];

  const clusters = {
    Learn: {
      desc: "Structured linear syllabus pathways built entirely on cognitive retention science, completely eliminating preparation planning stress.",
      items: ["Guided Learning", "Progress Tracking", "Mission System"]
    },
    Practice: {
      desc: "Granular concept tests, strict segment slot simulations, and full national mocks engineered to condition active retrieval.",
      items: ["Topic Tests", "Section Tests", "Mock Tests"]
    },
    Analyze: {
      desc: "Apple-quality pacing algorithms and expectation indicators uncovering precise strategic performance leaks.",
      items: ["Performance Analytics", "Time Trap Detection", "Expected Percentile Tracking"]
    },
    Improve: {
      desc: "Spaced recall engines, dynamic reinforcement, and phase builders addressing specific errors before progression.",
      items: ["Revision Engine", "Adaptive Reinforcement"]
    },
    Master: {
      desc: "Habit-forming streak trackers, gamified badges, and time-saving prioritization frameworks building elite attempt speeds.",
      items: ["Rewards System", "Streak System", "Smart Skipping"]
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      
      {/* Custom Styles for Glow and Dashed line animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(91,77,255,0.4)); opacity: 0.8; }
          50% { transform: scale(1.04); filter: drop-shadow(0 0 20px rgba(91,77,255,0.8)); opacity: 1; }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -20; }
        }
        .animate-pulseGlow {
          animation: pulseGlow 3s infinite ease-in-out;
        }
        .animate-dashMove {
          animation: dashMove 2.5s infinite linear;
        }
      `}</style>

      {/* SECTION 1: IMMERSIVE HERO */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-[#08071A] via-[#0D0B26] to-slate-950">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#5B4DFF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-[#9B8FFF]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-3.5 py-1 text-[10px] font-bold text-[#A5B4FC] bg-[#5B4DFF]/15 border border-[#5B4DFF]/25 rounded-full uppercase tracking-widest"
          >
            The Ultimate Preparation Machine
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white"
          >
            The Operating System <br className="hidden sm:inline" />
            For <span className="bg-gradient-to-r from-[#818CF8] via-[#a78bfa] to-white bg-clip-text text-transparent">CAT Success.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every feature is engineered to remove confusion, build consistency and maximize percentile growth.
          </motion.p>
        </div>

        {/* Animated Ecosystem Map SVG */}
        <div className="w-full max-w-3xl h-[280px] sm:h-[350px] mt-16 relative z-10">
          <svg className="w-full h-full" viewBox="0 0 100 80">
            {/* Connecting Glow Paths */}
            <path d="M50,40 L15,20" stroke="#5B4DFF" strokeWidth="1" strokeDasharray="3, 3" className="animate-dashMove" />
            <path d="M50,40 L85,20" stroke="#5B4DFF" strokeWidth="1" strokeDasharray="3, 3" className="animate-dashMove" />
            <path d="M50,40 L85,60" stroke="#5B4DFF" strokeWidth="1" strokeDasharray="3, 3" className="animate-dashMove" />
            <path d="M50,40 L50,70" stroke="#5B4DFF" strokeWidth="1" strokeDasharray="3, 3" className="animate-dashMove" />
            <path d="M50,40 L15,60" stroke="#5B4DFF" strokeWidth="1" strokeDasharray="3, 3" className="animate-dashMove" />
            <path d="M50,40 L50,10" stroke="#5B4DFF" strokeWidth="1" strokeDasharray="3, 3" className="animate-dashMove" />

            {/* Nodes */}
            {/* Center: TESTRIGHTNOW Engine */}
            <g className="animate-pulseGlow">
              <circle cx="50" cy="40" r="7" fill="url(#gradientCenter)" stroke="#5B4DFF" strokeWidth="1.5" />
              <text x="50" y="41.5" fontSize="2.5" fontWeight="900" fill="#FFF" textAnchor="middle">ENGINE</text>
            </g>

            {/* Outer Nodes */}
            <g>
              <circle cx="15" cy="20" r="5" fill="#0B0F19" stroke="#5B4DFF" strokeWidth="1" />
              <text x="15" y="21" fontSize="2" fontWeight="800" fill="#9B8FFF" textAnchor="middle">Guided Learning</text>
            </g>
            <g>
              <circle cx="85" cy="20" r="5" fill="#0B0F19" stroke="#5B4DFF" strokeWidth="1" />
              <text x="85" y="21" fontSize="2" fontWeight="800" fill="#9B8FFF" textAnchor="middle">Revision</text>
            </g>
            <g>
              <circle cx="85" cy="60" r="5" fill="#0B0F19" stroke="#5B4DFF" strokeWidth="1" />
              <text x="85" y="61" fontSize="2" fontWeight="800" fill="#9B8FFF" textAnchor="middle">Mocks</text>
            </g>
            <g>
              <circle cx="50" cy="70" r="5" fill="#0B0F19" stroke="#5B4DFF" strokeWidth="1" />
              <text x="50" y="71" fontSize="2" fontWeight="800" fill="#9B8FFF" textAnchor="middle">Analytics</text>
            </g>
            <g>
              <circle cx="15" cy="60" r="5" fill="#0B0F19" stroke="#5B4DFF" strokeWidth="1" />
              <text x="15" y="61" fontSize="2" fontWeight="800" fill="#9B8FFF" textAnchor="middle">Reinforcement</text>
            </g>
            <g>
              <circle cx="50" cy="10" r="5" fill="#0B0F19" stroke="#5B4DFF" strokeWidth="1" />
              <text x="50" y="11" fontSize="2" fontWeight="800" fill="#9B8FFF" textAnchor="middle">Smart Skipping</text>
            </g>

            {/* Gradients */}
            <defs>
              <radialGradient id="gradientCenter" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C6CFF" />
                <stop offset="100%" stopColor="#5B4DFF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* SECTION 2: FEATURE ECOSYSTEM MAP */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="px-3 py-1 text-[10px] font-bold text-[#A5B4FC] bg-white/5 rounded-full uppercase tracking-wider border border-white/5">
              Interactive Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore The <span className="text-[#9B8FFF]">Ecosystem Clusters</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hover or click the clusters below to inspect how various feature sets organize and streamline different preparation stages.
            </p>

            {/* Selector list */}
            <div className="space-y-2 pt-4">
              {Object.keys(clusters).map((clusterName) => (
                <button
                  key={clusterName}
                  onClick={() => setSelectedCluster(clusterName)}
                  className={`w-full p-4 rounded-2xl text-left border flex items-center justify-between transition-all duration-300 ${
                    selectedCluster === clusterName
                      ? "bg-[#5B4DFF]/10 border-[#5B4DFF]/40 text-white"
                      : "bg-slate-950/40 border-slate-800 text-slate-500 hover:border-slate-700"
                  }`}
                >
                  <span className="text-sm font-bold">{clusterName} System</span>
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center border text-xs font-black transition-colors ${
                    selectedCluster === clusterName ? "bg-[#5B4DFF] border-[#5B4DFF] text-white" : "border-slate-800 text-slate-600"
                  }`}>
                    {clusterName[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Cluster Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCluster}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-left space-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#5B4DFF]/5 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest">Selected Cluster</span>
                  <h3 className="text-2xl font-black text-white mt-1">{selectedCluster} Module</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {clusters[selectedCluster].desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-900 space-y-3">
                  <span className="text-[9px] font-extrabold uppercase text-slate-500 tracking-wider block">Child Features in this Cluster</span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {clusters[selectedCluster].items.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800/80">
                        <Check size={12} className="text-[#9B8FFF]" strokeWidth={3} />
                        <span className="text-xs font-bold text-white">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 3: FEATURE STORYTELLING */}
      <section className="py-12 bg-slate-950 relative">
        <div className="text-center mb-16 max-w-xl mx-auto px-6">
          <span className="px-3 py-1 text-[10px] font-bold text-[#A5B4FC] bg-[#5B4DFF]/15 border border-[#5B4DFF]/25 rounded-full uppercase tracking-wider">
            Feature Catalog
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-3">
            Cinematic Feature <span className="text-[#9B8FFF]">Stories</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Alternate layouts and deep-dive illustrations highlighting all 14 core components of our strategic framework.
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {features.map((item, idx) => {
            const WidgetComponent = featuresWidgetsMap[idx];
            const isEven = idx % 2 === 0;
            const isWidgetLeft = !isEven; // alternates left/right widget layouts
            
            // alternate bg-theme for high rhythmic visual flow
            const sectionBg = isEven 
              ? "bg-[#080713]/85 border-y border-[#5B4DFF]/5 shadow-[inset_0_0_30px_rgba(91,77,255,0.02)]" 
              : "bg-transparent";

            return (
              <div 
                key={idx} 
                className={`py-20 px-6 sm:px-12 md:px-20 rounded-[32px] transition-all duration-300 ${sectionBg}`}
              >
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left layout placement */}
                  {isWidgetLeft ? (
                    <div className="lg:col-span-6 w-full max-w-md mx-auto">
                      <WidgetComponent />
                    </div>
                  ) : null}

                  {/* Content Panel */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <span className="px-3 py-0.5 rounded-lg text-[9px] font-black tracking-widest text-[#9B8FFF] bg-[#5B4DFF]/10 uppercase border border-[#5B4DFF]/20">
                      Feature {idx + 1}: {item.title}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                      {item.headline}
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-900">
                      <div>
                        <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Purpose</span>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.purpose}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-black uppercase text-rose-500 tracking-wider">Core Problem Solved</span>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.problem}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider">How it Works</span>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.works}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-black uppercase text-emerald-400 tracking-wider">Student Outcome</span>
                        <p className="text-xs text-[#9B8FFF] font-bold mt-1 leading-relaxed">{item.benefit}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right layout placement */}
                  {!isWidgetLeft ? (
                    <div className="lg:col-span-6 w-full max-w-md mx-auto">
                      <WidgetComponent />
                    </div>
                  ) : null}

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: HOW EVERYTHING WORKS TOGETHER (SYSTEM FLOW DIAGRAM) */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="px-3.5 py-1 text-[10px] font-bold text-[#A5B4FC] bg-[#5B4DFF]/15 border border-[#5B4DFF]/25 rounded-full uppercase tracking-wider">
              Architecture Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Coordinated Preparation <span className="text-[#9B8FFF]">System Loop</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              TESTRIGHTNOW functions as a coordinating system where every activity directly feeds and updates subsequent stages.
            </p>
          </div>

          {/* Flow diagram visual */}
          <div className="grid sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-8">
            {[
              { title: "1. Guided Learning", desc: "Linear Phase Maps", bg: "bg-indigo-950/20 border-indigo-900/40 text-indigo-400" },
              { title: "2. Practice", desc: "Topic & Section Tests", bg: "bg-emerald-950/20 border-emerald-900/40 text-emerald-400" },
              { title: "3. Revision", desc: "Memory Repetition Calendar", bg: "bg-purple-950/20 border-purple-900/40 text-purple-400" },
              { title: "4. Mock Slots", desc: "Exam Stamina Simulations", bg: "bg-pink-950/20 border-pink-900/40 text-pink-400" },
              { title: "5. Analytics", desc: "Pacing & Heatmap Audits", bg: "bg-cyan-950/20 border-cyan-900/40 text-cyan-400" },
              { title: "6. Reinforcement", desc: "Auxiliary remedial drills", bg: "bg-amber-950/20 border-amber-900/40 text-amber-400" },
              { title: "7. Higher Readiness", desc: "99+ Percentile Optimization", bg: "bg-rose-950/20 border-rose-900/40 text-rose-400" }
            ].map((node, i) => (
              <div 
                key={i} 
                className={`p-5 rounded-2xl border flex flex-col justify-between items-center text-center shadow-lg transition-transform hover:scale-103 ${node.bg}`}
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center border border-current shadow-sm shrink-0 mb-4">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider">{node.title}</h4>
                  <p className="text-[10px] opacity-75 mt-1 leading-normal">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY THIS MATTERS (EDITORIAL STORYTELLING) */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-slate-950 via-[#070514] to-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-5 text-left space-y-5">
            <span className="px-3 py-0.5 rounded-lg text-[9px] font-black tracking-widest text-[#9B8FFF] bg-[#5B4DFF]/10 uppercase border border-[#5B4DFF]/20">
              The Strategic Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              CAT Success Is <br className="hidden sm:inline" />
              Not About Working Harder. <br />
              <span className="bg-gradient-to-r from-[#A5B4FC] to-white bg-clip-text text-transparent">
                It's About Working Smarter.
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Standard prep methodologies force candidates into rigid routines with zero strategic feedback, creating high cognitive fatigue. TESTRIGHTNOW replaces active planning overhead with an automated, personal strategist.
            </p>
          </div>

          <div className="md:col-span-7 bg-slate-950/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-2xl backdrop-blur-md">
            <span className="text-[10px] font-black uppercase text-[#9B8FFF] tracking-widest">Methodology Contrast</span>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10 flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✕</div>
                <div>
                  <h4 className="text-xs font-black text-white">Standard Preparation Gaps</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Aspirants solve huge exercises randomly, study inconsistently without spaced review routines, neglect real-time pacing logs, and practice without remedial error isolators.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</div>
                <div>
                  <h4 className="text-xs font-black text-white">The Coordinated System Solution</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    TESTRIGHTNOW organizes every single study step. Syllabus progress is linear, memory strength decays trigger automated review Worksheets, and pacing trap drills train high attempt accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

// --- PAGE: /knowledge-hub ---
export function KnowledgeHubPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All", "CAT Preparation", "VARC", "DILR", "Quantitative Aptitude", 
    "Mock Strategy", "Revision Strategy", "Exam Psychology", 
    "Time Management", "MBA Admissions", "College Insights"
  ];

  const factualChecklists = [
    {
      category: "Quantitative Aptitude",
      title: "Arithmetic Syllabus Checklist",
      desc: "Verified high-ROI segments that represent ~40% of the Quant section.",
      points: [
        "Percentages: Master fraction conversion rules.",
        "Ratios & Proportions: Focus on mixtures & alliances.",
        "Simple & Compound Interest: Learn key scaling multipliers.",
        "Time, Speed, Distance: Focus on relative velocity and average pace rules.",
        "Profit & Loss: Understand cost/sell ratios."
      ]
    },
    {
      category: "VARC",
      title: "Reading Comprehension Analysis Roadmap",
      desc: "Tactical milestones to process passages without getting trapped.",
      points: [
        "Core Passage Thesis: Summarize the central idea in under 15 words.",
        "Author Intent & Tone: Learn to categorize tones (objective, biased, critical).",
        "Negative Inferences: Solve double-negatives systematically.",
        "Speed Benchmarks: Aim to complete an 800-word passage in under 3.5 minutes.",
        "Paragraph Summaries: Practice jotting down margins as you read."
      ]
    },
    {
      category: "DILR",
      title: "DILR Caselet Selection Matrix",
      desc: "Factual rules to screen caselets before starting calculations.",
      points: [
        "Matrix arrangements: Establish baseline visual grids.",
        "Logical grouping: Verify total constraints count.",
        "Data parsing: Highlight negative criteria immediately.",
        "Attempt selection: Skip sets with unclear variable groupings.",
        "Set matching: Secure easy sub-questions first."
      ]
    },
    {
      category: "Mock Strategy",
      title: "Mock Audit Guideline Framework",
      desc: "Factual execution steps to analyze and patch test performance gaps.",
      points: [
        "Timing Log: Evaluate time spent on skipped questions.",
        "Error Tagging: Classify incorrect answers (calculation vs conceptual).",
        "Skipping Efficacy: Did you skip Quadrant 4 questions under 20 seconds?",
        "Time Traps: Note questions that exceeded 120 seconds.",
        "Score Forecasting: Adjust expected target thresholds based on slot variances."
      ]
    },
    {
      category: "Revision Strategy",
      title: "Spaced Memory Decay Milestones",
      desc: "Factual memory intervals to secure formulas and concept rules.",
      points: [
        "Day 1: Trigger first recall test within 24 hours of learning.",
        "Day 3: Attempt a timed worksheet targeting the learned concept.",
        "Day 7: Re-evaluate errors using error book diagnostics.",
        "Day 30: Schedule a comprehensive revision test slot.",
        "Continuous: Maintain flashcards for daily transit recall."
      ]
    },
  ];

  const filteredChecklists = activeCategory === "All"
    ? factualChecklists
    : factualChecklists.filter(c => c.category === activeCategory);

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Factual Resource Center
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          CAT Preparation <span className="text-[#5B4DFF]">Knowledge Hub</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          Clean, SEO-ready preparation checklists, syllabus maps, and factual execution frameworks compiled directly from verified study sciences.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#5B4DFF] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Framework */}
        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          {filteredChecklists.length > 0 ? (
            filteredChecklists.map((check, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-4">
                <div>
                  <span className="px-2 py-0.5 text-[9px] font-bold text-[#5B4DFF] bg-[#5B4DFF]/10 rounded uppercase">
                    {check.category}
                  </span>
                  <h3 className="text-lg font-black text-slate-950 mt-2">{check.title}</h3>
                  <p className="text-slate-500 text-xs mt-1">{check.desc}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-50">
                  {check.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5B4DFF] mt-1.5 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-white rounded-2xl border border-slate-200/50">
              <BookOpenCheck className="mx-auto text-slate-300 mb-2" size={32} />
              <p className="text-slate-500 text-sm font-semibold">No verified guides in this category yet.</p>
              <p className="text-slate-400 text-xs mt-1">Factual preparation frameworks are continuously verified and added here.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --- PAGE: /faq ---
export function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "What is Guided Learning?", a: "Guided Learning is a structured, algorithmically sequenced curriculum pathway that divides the massive CAT syllabus into focused daily sections, adapting to your progress so you never have to plan what to study next." },
    { q: "How are phases structured?", a: "The syllabus is divided into four sequential phases: Phase 1 (Qualifiers), Phase 2 (Contenders), Phase 3 (Elite), and Phase 4 (Top 1%). Each phase targets specific percentile benchmarks and syllabus segments." },
    { q: "Can I skip phases?", a: "No. Progression is linear and sequential. You must lock in the accuracy benchmarks of the current phase before subsequent phases unlock." },
    { q: "How does revision work?", a: "Whenever you fail a problem or concept test, our Spaced Repetition algorithm schedules tailored reviews at 1, 3, and 7-day intervals until your accuracy stabilizes." },
    { q: "What are sections?", a: "A Section represents 'Things To Do In One Day' — a bite-sized, achievable 45–90 minute study goal that completely bypasses strategic decision fatigue." },
    { q: "What are activities?", a: "Activities are the smallest executable units within a daily section (concept cards, timed practice, spaced revision, etc.), taking between 5 to 15 minutes." },
    { q: "How are mocks integrated?", a: "Mock slots unlock in Phase 3. Our system evaluates mock attempt metrics, tracking skipped time and tagging time traps to suggest targeted remedial sections." },
    { q: "What happens if I miss a day?", a: "The system automatically adjusts your timeline. Backlogs are avoided as the recommended daily section shifts dynamically to support consistency." },
    { q: "How is progress measured?", a: "Progress is tracked using accuracy metrics, pacing benchmarks, time spent on incorrect/skipped questions, and live expected percentile ranges based on slot statistics." },
    { q: "How does reinforcement work?", a: "If our diagnostic engine flags conceptual weaknesses in a specific topic, it automatically schedules easier concept reviews before gradually scaling up the complexity." },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Genuine Support
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          Frequently Asked <span className="text-[#5B4DFF]">Questions</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base leading-relaxed">
          Find factually accurate, non-exaggerated details regarding our curriculum progression, active tracking, and adaptive preparation engines.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#5B4DFF] transition-colors"
              >
                <span>{faq.q}</span>
                <div className={`w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 bg-purple-50 text-[#5B4DFF]" : ""}`}>
                  <ChevronDown size={16} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// --- PAGE: /about ---
export function AboutPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Company Mission
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          Why We Built <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">TESTRIGHTNOW</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          A learning-first approach built on absolute transparency, credibility, and verified cognitive science.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-12">
        {/* Factual origin */}
        <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-950">Origins of the Platform</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Traditional CAT preparation systems are broken. Offline coachings group fifty distinct aspirants into rigid batch schedules, ignoring personal accuracy baselines. Furthermore, the market is filled with massive, generic video libraries that encourage passive watching instead of active retrieval. 
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            TESTRIGHTNOW was created by IIM Indore and Ahmedabad Crackers who successfully cleared CAT through self-directed, highly strategic schedules. We wanted to build an automated, personalized daily system that acts like a strategist—curating target priorities, scheduling revision reviews, and enforcing skipping mechanics.
          </p>
        </motion.div>

        {/* Philosophy grid */}
        <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <h4 className="text-base font-bold text-slate-950 mb-2">Our Mission</h4>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Help CAT aspirants maximize their potential through highly intelligent, efficient preparation systems rather than endless study checklists, eliminating strategy burnout.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <h4 className="text-base font-bold text-slate-950 mb-2">Our Vision</h4>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              To establish a transparent, educational preparation environment built on verifiable cognitive sciences—avoiding hyperbolic urgency, unrealistic score promises, and fake marketing claims.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// --- PAGE: /colleges ---
export function CollegesPage() {
  const [targetCollege, setTargetCollege] = useState("");

  const colleges = [
    { name: "IIM Ahmedabad", catScoreWeight: "65%", acadsWeight: "30%", interviewWeight: "50%", criteria: ["10th/12th Marks", "Undergrad Score", "Analytical Written Test"] },
    { name: "IIM Bangalore", catScoreWeight: "55%", acadsWeight: "35%", interviewWeight: "40%", criteria: ["Work Experience", "10th/12th Marks", "SOP evaluation"] },
    { name: "IIM Calcutta", catScoreWeight: "56%", acadsWeight: "44%", interviewWeight: "48%", criteria: ["10th/12th Marks", "Gender Diversity", "Academic Diversity"] },
    { name: "IIM Lucknow", catScoreWeight: "60%", acadsWeight: "20%", interviewWeight: "40%", criteria: ["Work Experience", "Academic Diversity", "12th Marks"] },
    { name: "IIM Kozhikode", catScoreWeight: "45%", acadsWeight: "25%", interviewWeight: "44%", criteria: ["10th/12th Marks", "Gender Diversity", "Undergrad evaluation"] },
    { name: "FMS Delhi", catScoreWeight: "60%", acadsWeight: "10%", interviewWeight: "30%", criteria: ["Analytical Ability", "10th/12th Marks", "Extempore speaking"] },
    { name: "SPJIMR Mumbai", catScoreWeight: "Profile-based", acadsWeight: "Profile-based", interviewWeight: "50%", criteria: ["Extra-curriculars", "Work Experience", "Psychometric Test"] },
    { name: "MDI Gurgaon", catScoreWeight: "60%", acadsWeight: "20%", interviewWeight: "30%", criteria: ["Work Experience", "Academic Diversity", "10th/12th Marks"] },
    { name: "IIFT Delhi", catScoreWeight: "73%", acadsWeight: "15%", interviewWeight: "40%", criteria: ["10th/12th Marks", "Gender Diversity", "Extempore speaking"] },
    { name: "IMT Ghaziabad", catScoreWeight: "Admissions Criteria", acadsWeight: "Acads evaluation", interviewWeight: "45%", criteria: ["Undergrad Marks", "Work Experience", "Critical Thinking Test"] },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Factual Admission Parameters
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          MBA Colleges &amp; <span className="text-[#5B4DFF]">Admissions Criteria</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          Verifiable facts only. Explore the baseline parameters, work-experience guidelines, and CAT score weightages for India's premier business institutions.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-12">
        {/* Target College Calculator */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm max-w-2xl mx-auto space-y-4 text-center">
          <h3 className="text-lg font-bold text-slate-950">Select Your Target College</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Choose your benchmark target below. The curriculum algorithms dynamically configure core targets and daily worksheets to prioritize specific section percentiles.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {colleges.map((c, i) => (
              <button
                key={i}
                onClick={() => setTargetCollege(c.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  targetCollege === c.name
                    ? "bg-[#5B4DFF] text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          {targetCollege && (
            <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl mt-4">
              <span className="text-xs font-black text-[#5B4DFF] block uppercase">Saved Target: {targetCollege}</span>
              <p className="text-[11px] text-slate-500 mt-1">Our platform daily sections will prioritize milestones to align with the core target percentiles of {targetCollege}.</p>
            </div>
          )}
        </motion.div>

        {/* Factual College Grid */}
        <motion.div variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((col, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">{col.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 py-4 mt-2 border-y border-slate-100">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-semibold">CAT Score Weight</span>
                    <span className="text-xs font-bold text-[#5B4DFF]">{col.catScoreWeight}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block font-semibold">Interview Weight</span>
                    <span className="text-xs font-bold text-[#5B4DFF]">{col.interviewWeight}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <span className="text-[9px] font-extrabold uppercase text-slate-400 block">Core Evaluation Parameters</span>
                <div className="flex flex-wrap gap-1.5">
                  {col.criteria.map((c, i) => (
                    <span key={i} className="px-2 py-0.5 text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-200/60 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// --- COMMON FINAL PREMIUM CTA ---
export function FinalPremiumCTA({ onNavigate }) {
  return (
    <section className="px-6 lg:px-8 py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(91,77,255,0.3)] border border-[#5B4DFF]/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B4B] via-[#312E81] to-[#4F46E5]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-20 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <span className="px-3.5 py-1.5 text-[10px] font-bold text-white bg-white/10 rounded-full uppercase tracking-widest border border-white/10">
                Unlock Consistency
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Your CAT Journey Doesn't Need More Motivation. <br />
                <span className="bg-gradient-to-r from-[#A5B4FC] to-white bg-clip-text text-transparent">
                  It Needs A Better System.
                </span>
              </h2>
              <p className="text-indigo-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Join thousands of self-directed aspirants building daily study habits, avoiding time traps, and scoring higher through sequential guided learning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={() => onNavigate("how-it-works")}
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-white text-[#5B4DFF] text-sm font-bold shadow-lg hover:scale-[1.03] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Start Practicing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate("guided-learning")}
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-transparent border border-white/20 text-white text-sm font-bold hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
              >
                Explore Guided Learning
              </button>
              <button 
                onClick={() => onNavigate("strategy")}
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-transparent border border-white/10 text-white/80 text-xs font-semibold hover:text-white transition-all cursor-pointer"
              >
                Learn Our Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
