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
    { step: "1", title: "Create Account", desc: "Set up your profile and configure your graduation background and timeline." },
    { step: "2", title: "Select Target Percentile", desc: "Set your target percentile guidelines to determine phase complexity." },
    { step: "3", title: "Diagnostic Assessment", desc: "Complete an onboarding diagnostic test to map out conceptual strengths and gaps." },
    { step: "4", title: "Guided Learning Starts", desc: "Bypass syllabus confusion; your sequential phase pathway unlocks immediately." },
    { step: "5", title: "Daily Sections", desc: "Obtain your daily 45–90 minute hyper-focused task checklist every morning." },
    { step: "6", title: "Targeted Practice", desc: "Solve modular quizzes built around specific focus patterns and sub-categories." },
    { step: "7", title: "Automated Revision Loops", desc: "Spaced review triggers automatically whenever concept decay thresholds are reached." },
    { step: "8", title: "Performance Diagnostics", desc: "Audit detailed analytics dashboards showing timing details and time traps." },
    { step: "9", title: "Integrated Mock Tests", desc: "Enter simulated slot tests with real-time skipping conditioning and metrics." },
    { step: "10", title: "Adaptive Reinforcement", desc: "Remedial modules automatically trigger to fortify persistent weak zones." },
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
export function FeaturesPage() {
  const features = [
    {
      title: "Guided Learning",
      purpose: "Provide a direct, step-by-step roadmap from foundations to advanced concept levels.",
      problem: "Aspirants spend hours planning study calendars, facing heavy decision fatigue.",
      works: "Algorithmically sequences topics and daily sections based on user accuracy.",
      benefit: "Eliminates strategist overhead so students focus 100% on learning.",
    },
    {
      title: "Topic Tests",
      purpose: "Target specific, granular concept subdivisions for direct testing.",
      problem: "Traditional books have massive mixed exercises that hide specific concept errors.",
      works: "Generates custom 10-15 minute quizzes targeting specific sub-rules (e.g. Compound Interest ratios).",
      benefit: "Fortifies core arithmetic fundamentals before moving to complex formulas.",
    },
    {
      title: "Section Tests",
      purpose: "Simulate individual exam slots (Quant, VARC, or DILR) under strict timing envelopes.",
      problem: "Full 2-hour mock tests are draining, making routine segment diagnostics difficult.",
      works: "Provides dedicated 40-minute slot tests mapping exact section compositions.",
      benefit: "Allows routine diagnostics without mock exam exhaustion.",
    },
    {
      title: "Mock Tests",
      purpose: "Provide slot simulations mimicking national CAT test patterns.",
      problem: "Unpredictable slot schedules can trigger exam anxiety and time allocation errors.",
      works: "Simulates full slot boundaries, compiling multi-layered diagnostic reports.",
      benefit: "Conditions student stamina and verifies overall preparation status.",
    },
    {
      title: "Performance Analytics",
      purpose: "Deliver direct diagnostics outlining conceptual accuracy and pace metrics.",
      problem: "Standard scorecards only show total marks, obscuring conceptual error patterns.",
      works: "Evaluates time allocation charts and maps errors to specific syllabus sections.",
      benefit: "Exposes exact strategic blocks hindering score progression.",
    },
    {
      title: "Revision Engine",
      purpose: "Protect memory retention using spaced repetition schedules.",
      problem: "Students study new topics while completely forgetting previous concepts.",
      works: "Triggers spaced review intervals automatically whenever memory thresholds decline.",
      benefit: "Protects concepts from memory decay, locking rules into long-term memory.",
    },
    {
      title: "Adaptive Reinforcement",
      purpose: "Automatically customize practicing difficulty parameters in real-time.",
      problem: "Static exercises are either demoralizingly difficult or boringly easy.",
      works: "Increases difficulty iteratively as your answers stabilize, scaling down when error spikes occur.",
      benefit: "Maintains optimal learning flow, reinforcing baseline rules before climbing.",
    },
    {
      title: "Progress Tracking",
      purpose: "Visualize overall syllabus completion and phase benchmarks.",
      problem: "Aspirants study blindly, unsure if they are close to syllabus mastery.",
      works: "Compiles a live roadmap tracking finished activities and next milestone requirements.",
      benefit: "Creates strong motivation loops through clear strategic visibility.",
    },
    {
      title: "Rewards System",
      purpose: "Dopamine trigger mechanics rewarding routine study actions.",
      problem: "Traditional self-preparation is isolated, causing consistency drops.",
      works: "Grants platform badges and level-ups on completing daily sections.",
      benefit: "Leverages habit gamification to keep study momentum high.",
    },
    {
      title: "Mission System",
      purpose: "Divide weekly assignments into bite-sized daily milestones.",
      problem: "Vast syllabi trigger strategic paralysis, preventing routine practice.",
      works: "Converts weekly goals into specific, actionable daily missions.",
      benefit: "Maintains clear focus: just open the app and finish today’s checklist.",
    },
    {
      title: "Streak System",
      purpose: "Condition consistency using visual daily streak trackers.",
      problem: "Prepare inconsistently, leaving weeks of blank spaces between study blocks.",
      works: "Maintains a live calendar tracking consecutive days with completed sections.",
      benefit: "Engineers habits by encouraging students to keep the streak chain alive.",
    },
    {
      title: "Smart Skipping",
      purpose: "Condition fast question selection during active slot tests.",
      problem: "Aspirants waste 5-8 minutes attempting difficult trap questions.",
      works: "Schedules specific speed-filtering exercises to teach time-saving skipping guidelines.",
      benefit: "Saves valuable minutes, reserving energy for high-ROI questions.",
    },
    {
      title: "Time Trap Detection",
      purpose: "Flag specific questions where attempts exceeded safe timing envelopes.",
      problem: "Students ignore time metrics, failing to recognize pacing errors.",
      works: "Monitors response durations, tagging any attempt >120s without success.",
      benefit: "Identifies strategic leaks before they ruin slot scores.",
    },
    {
      title: "Expected Percentile Tracking",
      purpose: "Provide live percentile forecasts based on competitive benchmarks.",
      problem: "Raw mock scores are difficult to evaluate without comparative metrics.",
      works: "Maps raw accuracy parameters to current slot statistics.",
      benefit: "Maintains realistic targets and maps overall performance goals.",
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Feature Catalogue
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-6">
          The <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">TESTRIGHTNOW</span> Engine
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          Explore all 14 core features engineered specifically to remove strategy paralysis and accelerate score efficiency.
        </motion.p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-black uppercase text-[#5B4DFF] tracking-wider block mb-3">{item.title}</span>
              
              <div className="space-y-3">
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 block">Purpose</span>
                  <p className="text-xs text-slate-800 font-semibold leading-relaxed">{item.purpose}</p>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 block">Problem Solved</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 block">How it Works</span>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.works}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-[9px] font-extrabold uppercase text-emerald-500 block">Student Benefit</span>
              <p className="text-xs text-[#5B4DFF] font-bold leading-relaxed">{item.benefit}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
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
