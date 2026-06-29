import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  GraduationCap, 
  BookOpen, 
  RefreshCw, 
  CreditCard,
  CheckCircle2,
  Loader2,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
} from "lucide-react";
import { STUDENT_APP_URL } from "../constants";

const CORE_ALLOWED_FEATURES = [
  "Limited Guided Learning",
  "Selected Concept Lessons",
  "Sample Practice Questions",
  "Limited Analytics & Logs"
];

const EXTENDED_ALLOWED_FEATURES = [
  "Limited Progress Tracking",
  "Selected Mock Experience",
  "Community Announcements"
];

const EXTENDED_NOT_AVAILABLE_FEATURES = [
  "Complete Guided Learning",
  "Unlimited Practice Database",
  "Full Mock Test Series",
  "Advanced Analytics",
  "Momentum Rewards",
  "Revision Scheduler",
  "Smart Recommendations"
];

const CORE_PREMIUM_FEATURES = [
  "Complete Guided Learning Journey",
  "All Daily Milestones & Sessions",
  "Full-Length Mock & Sectional Tests",
  "AI Performance Insights & Pacing Logs",
  "Spaced Revision Scheduler",
  "Future CAT 2026 Updates Included"
];

const EXTENDED_PREMIUM_FEATURES = [
  "Unlimited Concept Library",
  "Unlimited Practice Questions",
  "Topic Tests",
  "Time Trap Detection",
  "Weak Area Identification",
  "Momentum Hub",
  "Achievement Badges",
  "Reward-Based Motivation",
  "Performance Analytics Dashboard",
  "Progress Heatmaps",
  "Session Analytics",
  "Personalized Recommendations",
  "Priority Feature Improvements"
];

const WHY_CHOOSE_ITEMS = [
  "Structured Daily Learning",
  "Learn What To Study Next",
  "Build Strong Habits",
  "Track Every Improvement",
  "Avoid Wasting Time",
  "Practice Smarter",
  "Stay Consistent",
  "Finish Complete CAT Prep"
];

export default function PricingModal({ isOpen, onClose }) {
  const [loadingPlan, setLoadingPlan] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Close modal with Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectPlan = (plan) => {
    setLoadingPlan(plan);
    const refSessionId = localStorage.getItem("tr_session_id") || "";
    if (window.trackEvent) {
      window.trackEvent("pricing_cta_click", "Pricing", plan);
    }
    
    setTimeout(() => {
      window.location.href = `${STUDENT_APP_URL}/?plan=${plan}${refSessionId ? `&refSessionId=${refSessionId}` : ""}`;
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-modal-title"
        initial={{ scale: 0.97, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 10 }}
        transition={{ type: "spring", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl border border-slate-100 shadow-[0_25px_60px_rgba(15,23,42,0.12)] w-full max-w-5xl max-h-[96vh] overflow-y-auto relative p-4 sm:p-5 lg:py-5 lg:px-7 font-['Inter'] z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="text-left pr-8">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-1">
            <Sparkles size={9} className="text-indigo-500 fill-indigo-500/10" />
            Habit-Building Prep System
          </div>
          <h2 id="pricing-modal-title" className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl">
            Most Students Need More Motivation. <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent inline-block">Top Percentilers Need A Better System.</span>
          </h2>
          <p className="text-slate-500 text-[11px] mt-1 max-w-2xl leading-normal font-medium">
            How serious are you about cracking CAT? Choose the path that matches your consistency goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-4 lg:gap-5 mt-4">
          
          {/* Card 1: CAT Explorer (Left Plan) */}
          <div className="bg-slate-50/20 rounded-2xl border border-slate-200/50 p-4 sm:p-5 flex flex-col justify-between hover:border-slate-350 transition-all duration-300 relative group text-left">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Plan 1</span>
                <span className="text-[8px] font-extrabold text-slate-500 bg-slate-100 border border-slate-200/50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Free Trial
                </span>
              </div>
              
              <div className="space-y-0.5">
                <h3 className="text-base font-black text-slate-900 leading-none">CAT Explorer</h3>
                <p className="text-slate-400 text-[10px] leading-normal font-semibold">Explore the platform before committing.</p>
              </div>

              {/* Price */}
              <div className="py-1.5 border-y border-slate-100 flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-900">FREE</span>
                <span className="text-slate-400 text-[9.5px] font-semibold">/ explore first</span>
              </div>

              {/* Allowed / Blocked Features list */}
              <div className="space-y-2 text-[9.5px]">
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider block">
                  Included Features
                </span>
                <div className="space-y-1.5">
                  {CORE_ALLOWED_FEATURES.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 text-slate-600">
                      <Check size={11} className="text-slate-400 shrink-0" strokeWidth={3} />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                  
                  <AnimatePresence initial={false}>
                    {showDetails ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1.5 overflow-hidden pt-1.5 border-t border-slate-100/50"
                      >
                        {EXTENDED_ALLOWED_FEATURES.map((feat) => (
                          <div key={feat} className="flex items-center gap-1.5 text-slate-600">
                            <Check size={11} className="text-slate-400 shrink-0" strokeWidth={3} />
                            <span className="font-semibold">{feat}</span>
                          </div>
                        ))}
                        {EXTENDED_NOT_AVAILABLE_FEATURES.map((feat) => (
                          <div key={feat} className="flex items-center gap-1.5 text-slate-400 opacity-60">
                            <X size={11} className="text-slate-350 shrink-0" strokeWidth={3} />
                            <span className="line-through decoration-slate-200">{feat}</span>
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <span className="text-[8.5px] font-bold text-slate-450 block pt-1 pl-4">
                        + 10 advanced features not included
                      </span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <button
                onClick={() => handleSelectPlan("explorer")}
                disabled={loadingPlan !== null}
                className="w-full h-9 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-[11px] hover:bg-slate-50 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                {loadingPlan === "explorer" ? (
                  <Loader2 size={12} className="animate-spin text-slate-400" />
                ) : (
                  "Start Free"
                )}
              </button>
            </div>
          </div>

          {/* Card 2: CAT Focuser (Right Plan) */}
          <div className="bg-gradient-to-b from-[#FAF9FF] to-white rounded-2xl border-2 border-[#5B4DFF] p-4 sm:p-5 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(91,77,255,0.06)] transition-all duration-300 relative text-left">
            {/* Recommended Badge */}
            <div className="absolute -top-2.5 left-5 bg-[#5B4DFF] text-white text-[7.5px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-[0_3px_8px_rgba(91,77,255,0.15)] tracking-wider">
              ✨ Recommended
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase text-[#5B4DFF] tracking-wider">Plan 2</span>
                <span className="text-[8px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Habit Builder
                </span>
              </div>
              
              <div className="space-y-0.5">
                <h3 className="text-base font-black text-slate-955 leading-none">CAT Focuser</h3>
                <p className="text-slate-505 text-[10px] leading-normal font-semibold">
                  Built for serious CAT 2026 aspirants with structured daily learning.
                </p>
              </div>

              {/* Price Details */}
              <div className="py-2 border-y border-[#5B4DFF]/15 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-[#5B4DFF]">₹1,000</span>
                  <span className="text-slate-500 text-[9.5px] font-bold">One-Time Payment</span>
                </div>
                <div className="flex gap-2 text-[8px] font-black uppercase text-slate-400">
                  <span>• No Subscription</span>
                  <span>• No Hidden Charges</span>
                </div>
              </div>

              <div className="text-[9px] font-extrabold text-indigo-600 bg-indigo-50/60 border border-indigo-100/30 rounded-lg py-1 text-center uppercase tracking-wider">
                Complete CAT 2026 Preparation Program
              </div>

              {/* Value Section: Why Students Choose Focuser */}
              <div className="bg-[#5B4DFF]/[0.01] rounded-xl p-3 border border-[#5B4DFF]/10 text-left">
                <h4 className="text-[9.5px] font-extrabold text-slate-900 mb-1.5 flex items-center gap-1 uppercase tracking-wider">
                  <CheckCircle2 className="text-[#5B4DFF] w-3.5 h-3.5" /> Why Students Choose CAT Focuser
                </h4>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[9.5px] text-slate-700 font-semibold">
                  {WHY_CHOOSE_ITEMS.map((item) => (
                    <div key={item} className="flex items-center gap-1">
                      <Check className="text-emerald-500 w-3 h-3 shrink-0" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Features List */}
              <div className="space-y-1.5">
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider block">
                  Premium Features Included
                </span>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[9.5px]">
                  {CORE_PREMIUM_FEATURES.map((feat) => (
                    <div key={feat} className="flex items-start gap-1 text-slate-700">
                      <Check size={11} className="text-[#5B4DFF] mt-0.5 shrink-0" strokeWidth={3} />
                      <span className="font-semibold leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                <AnimatePresence initial={false}>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[9.5px] pt-1.5 border-t border-slate-100 overflow-hidden"
                    >
                      {EXTENDED_PREMIUM_FEATURES.map((feat) => (
                        <div key={feat} className="flex items-start gap-1 text-slate-700">
                          <Check size={11} className="text-[#5B4DFF] mt-0.5 shrink-0" strokeWidth={3} />
                          <span className="font-semibold leading-tight">{feat}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full text-center text-[9px] font-black text-indigo-600 hover:text-indigo-700 py-1 transition-colors flex items-center justify-center gap-1 cursor-pointer focus:outline-none"
                >
                  {showDetails ? (
                    <>Hide Detailed Features <ChevronUp size={10} /></>
                  ) : (
                    <>Show All Features (21) <ChevronDown size={10} /></>
                  )}
                </button>
              </div>
            </div>

            {/* CTA Button & Microcopy */}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => handleSelectPlan("focuser")}
                disabled={loadingPlan !== null}
                className="w-full h-10 rounded-lg bg-gradient-to-r from-[#5B4DFF] to-[#7C3AED] hover:from-[#4F42F0] hover:to-[#5B4DFF] text-white font-bold text-[11px] flex items-center justify-center gap-1 shadow-[0_5px_15px_rgba(91,77,255,0.2)] hover:shadow-[0_8px_20px_rgba(91,77,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.99] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                {loadingPlan === "focuser" ? (
                  <Loader2 size={14} className="animate-spin text-white" />
                ) : (
                  <>
                    Become a CAT Focuser
                    <ArrowRight size={12} />
                  </>
                )}
              </button>
              
              <p className="text-[8.5px] leading-relaxed text-slate-400 font-semibold text-center">
                One transparent payment. No subscriptions. No hidden charges. No surprise renewals.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Trust Footer Badges */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[9px] font-bold text-slate-500">
          {[
            { icon: Lock, text: "Secure Payments" },
            { icon: GraduationCap, text: "Built for Serious Aspirants" },
            { icon: BookOpen, text: "Complete CAT 2026 Program" },
            { icon: RefreshCw, text: "All Content Updates Included" },
            { icon: CreditCard, text: "One-Time Payment • No Subscription" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <item.icon className="w-3.5 h-3.5 text-[#5B4DFF]" strokeWidth={2} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Support contact — subtle, below trust badges */}
        <div className="mt-3 pt-3 border-t border-slate-50 text-center">
          <p className="text-[9px] font-semibold text-slate-400 mb-2">Need help choosing a plan?</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            <a
              href="tel:+919400325294"
              aria-label="Call us at +91 9400325294"
              className="flex items-center gap-1 text-[9px] font-semibold text-slate-400 hover:text-[#5B4DFF] transition-colors"
            >
              <Phone className="w-3 h-3" />
              +91 9400325294
            </a>
            <a
              href="mailto:testrightnow.edu@gmail.com"
              aria-label="Email us at testrightnow.edu@gmail.com"
              className="flex items-center gap-1 text-[9px] font-semibold text-slate-400 hover:text-[#5B4DFF] transition-colors"
            >
              <Mail className="w-3 h-3" />
              testrightnow.edu@gmail.com
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
