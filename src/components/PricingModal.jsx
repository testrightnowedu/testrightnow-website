import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Check, 
  ArrowRight, 
  Lock, 
  GraduationCap, 
  RefreshCw, 
  CreditCard,
  Loader2,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  ShieldCheck,
  Scale
} from "lucide-react";
import { STUDENT_APP_URL } from "../constants";

const EXPLORER_INCLUDED = [
  "Limited Guided Learning",
  "Selected Concepts",
  "Sample Practice Questions",
  "Limited Analytics",
  "Demo Mock Tests",
  "Basic Progress Tracking"
];

const EXPLORER_RESTRICTED = [
  "Premium Guided Learning",
  "AI Insights",
  "Full Mock Ecosystem",
  "Complete Analytics"
];

const WHY_CHOOSE_ITEMS = [
  "Structured Daily Learning",
  "Learn What To Study Next",
  "Build Strong Habits",
  "Track Every Improvement",
  "Avoid Wasting Time",
  "Practice Smarter",
  "Stay Consistent",
  "Finish Complete CAT Preparation"
];

const PREMIUM_FEATURES = [
  "Complete Guided Learning Journey",
  "All Milestones & Sessions",
  "AI Performance Analytics",
  "Full-Length Mock Tests",
  "Sectional Tests",
  "Concept Learning",
  "Smart Revision Scheduler",
  "Momentum Tracking",
  "Time Trap Analysis",
  "Weak Area Detection",
  "Performance Reports",
  "AI Insights",
  "Personalized Recommendations",
  "Habit Building",
  "Progress Tracking",
  "Detailed Analytics",
  "Previous Year Questions",
  "Future CAT 2026 Content Updates Included",
  "Doubt Support",
  "Continuous Improvements",
  "More features coming during CAT 2026 cycle"
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 lg:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-modal-title"
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[16px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] w-full max-w-[960px] max-h-[96vh] overflow-y-auto relative p-4 sm:p-5 lg:p-6 font-['Inter'] z-10 mx-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors duration-200 cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-[#6b58ff]/50"
          aria-label="Close modal"
        >
          <X size={14} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-3 sm:mb-4 max-w-3xl mx-auto">
          <h2 id="pricing-modal-title" className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
            TESTRIGHTNOW is honestly priced. <span className="text-[#6b58ff]">No fake discounts.</span>
          </h2>
          <p className="text-slate-500 text-[11px] sm:text-xs mt-1.5 leading-relaxed font-medium">
            We believe students deserve transparent pricing. Choose the plan that fits your CAT 2026 preparation goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          
          {/* Left Card: CAT Explorer */}
          <div className="flex-1 lg:max-w-[35%] bg-slate-50/50 rounded-[12px] border border-slate-200/60 p-3 sm:p-4 flex flex-col hover:bg-slate-50 transition-colors duration-300">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-500 tracking-wide uppercase">Plan 1</span>
                <span className="text-[8px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Free Trial
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-0.5">CAT Explorer</h3>
              <p className="text-slate-500 text-[11px] font-medium mb-3">Explore the platform before committing.</p>

              <div className="pb-3 mb-3 border-b border-slate-200/80">
                <div className="text-xl font-bold text-slate-900">FREE</div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Included
                  </span>
                  <div className="space-y-1.5">
                    {EXPLORER_INCLUDED.map((feat) => (
                      <div key={feat} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <Check size={12} className="text-slate-400 mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Restricted
                  </span>
                  <div className="space-y-1.5">
                    {EXPLORER_RESTRICTED.map((feat) => (
                      <div key={feat} className="flex items-start gap-1.5 text-[11px] text-slate-400 opacity-80">
                        <X size={12} className="text-slate-300 mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-1">
              <button
                onClick={() => handleSelectPlan("explorer")}
                disabled={loadingPlan !== null}
                className="w-full py-2 rounded-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-[12px] transition-all duration-200 flex items-center justify-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                {loadingPlan === "explorer" ? (
                  <Loader2 size={14} className="animate-spin text-slate-500" />
                ) : (
                  "Start Free"
                )}
              </button>
            </div>
          </div>

          {/* Right Card: CAT Focuser */}
          <div className="flex-1 lg:max-w-[65%] bg-white rounded-[12px] border-2 border-[#6b58ff] p-4 sm:p-5 lg:p-6 flex flex-col relative shadow-[0_8px_30px_-12px_rgba(107,88,255,0.25)]">
            {/* Recommended Badge */}
            <div className="absolute -top-2.5 right-4 sm:right-6 bg-[#6b58ff] text-white text-[8px] sm:text-[9px] font-bold uppercase px-2 py-1 rounded-full shadow-lg tracking-wider">
              Recommended
            </div>

            <div className="flex-1 space-y-4">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-[#6b58ff] tracking-wide uppercase">Plan 2</span>
                  <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    Habit Builder
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-0.5">CAT Focuser</h3>
                <p className="text-slate-500 text-[11px] font-medium max-w-md leading-relaxed">
                  Built for serious CAT 2026 aspirants following a structured daily learning journey.
                </p>
              </div>

              {/* Pricing & Comparison Section */}
              <div className="flex flex-col sm:flex-row sm:items-stretch gap-2 pb-3 border-b border-slate-100">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹1,000</span>
                    <span className="text-slate-500 text-[10px] font-semibold">One-Time Payment</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium leading-relaxed">
                    One transparent payment. No subscriptions. No hidden charges.
                  </p>
                </div>

                {/* Subtle Comparison Card */}
                <div className="sm:w-[170px] bg-slate-50 rounded-lg p-2 border border-slate-200/60 flex flex-col justify-center">
                  <div className="text-[9px] font-bold text-slate-400 mb-0.5">Others</div>
                  <div className="text-[13px] font-bold text-slate-300 relative inline-block w-fit">
                    ₹9,999
                    <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-red-500 -rotate-6"></div>
                  </div>
                  <div className="text-[9px] font-bold text-red-500 mt-0.5 mb-1">❌ Fake Discount Offers</div>
                  <p className="text-[8px] text-slate-500 font-medium leading-snug">
                    Some platforms inflate prices before showing fake discounts. Our product does not.
                  </p>
                </div>
              </div>

              {/* Value Highlight Message */}
              <div className="bg-[#6b58ff]/[0.04] border border-[#6b58ff]/10 rounded-lg p-1.5 flex items-center justify-center gap-1.5 text-[#5643e8] text-[10px] font-semibold">
                <span>💜</span>
                <span>Minimal price you can afford. Maximum value you deserve.</span>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-lg p-2.5 sm:p-3 border border-slate-200/80 shadow-sm">
                <h4 className="text-[9px] font-bold text-slate-900 mb-2 uppercase tracking-wider">
                  Why Students Choose CAT Focuser
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                  {WHY_CHOOSE_ITEMS.map((item) => (
                    <div key={item} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                      <Check className="text-emerald-500 shrink-0 mt-0.5" size={12} strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Features Grid */}
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Premium Features
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                  {PREMIUM_FEATURES.slice(0, 8).map((feat) => (
                    <div key={feat} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                      <Check size={12} className="text-[#6b58ff] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 pt-1.5">
                        {PREMIUM_FEATURES.slice(8).map((feat) => (
                          <div key={feat} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                            <Check size={12} className="text-[#6b58ff] mt-0.5 shrink-0" strokeWidth={2.5} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-2 border-t border-slate-100 pt-2">
                  <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full text-center text-[10px] font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-1 focus:outline-none"
                  >
                    {showDetails ? (
                      <>Hide Features <ChevronUp size={10} /></>
                    ) : (
                      <>Show All Features ({PREMIUM_FEATURES.length}) <ChevronDown size={10} /></>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <button
                onClick={() => handleSelectPlan("focuser")}
                disabled={loadingPlan !== null}
                className="group relative w-full py-2.5 rounded-xl bg-gradient-to-b from-[#7e6fff] to-[#5b46f5] hover:from-[#6d5df5] hover:to-[#4e3be6] text-white font-bold text-[12px] flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(107,88,255,0.39)] hover:shadow-[0_6px_20px_rgba(107,88,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#6b58ff]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-500 ease-in-out"></div>
                {loadingPlan === "focuser" ? (
                  <Loader2 size={14} className="animate-spin text-white" />
                ) : (
                  <>
                    Become a CAT Focuser
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer (Trust Badges & Contact) */}
        <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex flex-col items-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:gap-y-2 max-w-3xl w-full">
            {[
              { icon: Lock, text: "Secure Payments" },
              { icon: CreditCard, text: "One-Time Payment" },
              { icon: ShieldCheck, text: "No Hidden Charges" },
              { icon: GraduationCap, text: "Built for Serious CAT Aspirants" },
              { icon: RefreshCw, text: "CAT 2026 Content Updates Included" },
              { icon: Scale, text: "Fair & Transparent Pricing" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                <item.icon className="w-3 h-3 text-[#6b58ff]/70" strokeWidth={2.5} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>


        </div>

      </motion.div>
    </div>
  );
}
