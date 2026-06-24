import React from "react";
import { motion } from "framer-motion";
import { X, Check, Sparkles, ArrowRight, ShieldCheck, Target, Clock, Brain, Trophy } from "lucide-react";
import { STUDENT_APP_URL } from "../constants";

export default function PricingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSelectPlan = (plan) => {
    const refSessionId = localStorage.getItem("tr_session_id") || "";
    if (window.trackEvent) {
      window.trackEvent("pricing_cta_click", "Pricing", plan);
    }
    window.location.href = `${STUDENT_APP_URL}/?plan=${plan}${refSessionId ? `&refSessionId=${refSessionId}` : ""}`;
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: "spring", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_70px_rgba(15,23,42,0.16)] w-full max-w-4xl max-h-[95vh] sm:max-h-[92vh] md:max-h-[90vh] overflow-y-auto relative p-5 sm:p-6 lg:p-7 font-['Inter'] z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="text-left pr-8 sm:pr-10">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-[8.5px] sm:text-[9.5px] font-bold text-indigo-600 uppercase tracking-widest mb-1.5 sm:mb-2">
            <Sparkles size={10} className="text-indigo-500 fill-indigo-500/10" />
            Habit-Building prep system
          </div>
          <h2 className="text-lg sm:text-xl lg:text-[26px] font-black text-slate-900 tracking-tight leading-snug max-w-2xl">
            Most Students Need More Motivation.<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent sm:block">
              Top Percentilers Need A Better System.
            </span>
          </h2>
          <p className="text-slate-500 text-[10.5px] sm:text-xs mt-1 sm:mt-1.5 max-w-xl leading-relaxed">
            How serious are you about cracking CAT? Choose the path that matches your consistency goals.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 lg:gap-5 mt-4 sm:mt-5">
          
          {/* Card 1: Explorer */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 relative group">
            <div>
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Plan 1</span>
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Trial Mode</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 leading-none">CAT Explorer</h3>
              <p className="text-slate-400 text-[10px] sm:text-[11px] mt-1 sm:mt-1.5 leading-relaxed">
                For candidates testing the waters or beginning their study strategy.
              </p>

              {/* Price */}
              <div className="my-2.5 sm:my-3 py-1.5 sm:py-2 border-y border-slate-100 flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-black text-slate-900">Free</span>
                <span className="text-slate-400 text-[10px] sm:text-[11px]">/ trial access</span>
              </div>

              {/* Benefits */}
              <ul className="space-y-1 sm:space-y-1.5 text-[10.5px] sm:text-[11px] text-slate-500">
                {[
                  "Limited Guided Learning path",
                  "Limited practice question sets",
                  "Basic analytical diagnostics",
                  "Access to select sample missions",
                  "Limited mock test allocations",
                  "Basic habit and progress logs"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={12} className="text-slate-300 mt-0.5 shrink-0" strokeWidth={3} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleSelectPlan("explorer")}
              className="mt-4 sm:mt-5 w-full py-2 sm:py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-[10px] sm:text-[11px] hover:bg-slate-50 transition-all duration-200 cursor-pointer text-center"
            >
              Start Free
            </button>
          </div>

          {/* Card 2: Focuser (Premium Pricing Option) */}
          <div className="bg-gradient-to-b from-[#F5F3FF] to-white rounded-2xl border-2 border-[#5B4DFF] p-4 sm:p-5 flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(91,77,255,0.12)] transition-all duration-300 relative mt-2 md:mt-0">
            {/* Recommendation Badge */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5B4DFF] to-[#6D5DFB] text-white text-[7.5px] sm:text-[8.5px] font-extrabold uppercase px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-[0_4px_12px_rgba(91,77,255,0.25)] tracking-wider whitespace-nowrap">
              🔥 Most Chosen By Serious Aspirants
            </div>

            <div className="mt-0.5">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#5B4DFF] uppercase tracking-wider">Plan 2</span>
                <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">Habit Enforcer</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-950 leading-none">CAT Focuser</h3>
              <p className="text-slate-500 text-[10px] sm:text-[11px] mt-1 sm:mt-1.5 leading-relaxed">
                For serious candidates committed to building consistency and optimizing their percentile.
              </p>

              {/* Price with Urgency */}
              <div className="my-2.5 sm:my-3 py-1.5 sm:py-2 border-y border-[#5B4DFF]/15 flex flex-wrap items-baseline gap-1 sm:gap-1.5">
                <span className="text-slate-400 text-[10px] sm:text-xs line-through">₹4,500</span>
                <span className="text-lg sm:text-xl font-black text-[#5B4DFF]">₹899</span>
                <span className="text-slate-400 text-[9px] sm:text-[9.5px] leading-none block w-full lg:w-auto mt-1 lg:mt-0">
                  One-time payment
                </span>
              </div>

              {/* Benefits */}
              <ul className="space-y-1 sm:space-y-1.5 text-[10.5px] sm:text-[11px] text-slate-700">
                {[
                  "Complete Guided Learning path unlocked",
                  "All milestones and daily sessions accessible",
                  "Unlimited practice question database",
                  "Unlimited concept and sectional tests",
                  "Comprehensive national mock ecosystem",
                  "Advanced Time-Trap & Pacing diagnostics",
                  "Smart Spaced Repetition revision scheduler",
                  "Streak-based rewards & cognitive reinforcement",
                  "Future syllabus updates fully included"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={12} className="text-[#5B4DFF] mt-0.5 shrink-0" strokeWidth={3} />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleSelectPlan("focuser")}
              className="mt-4 sm:mt-5 w-full py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#5B4DFF] to-[#6D5DFB] hover:from-[#4F42F0] hover:to-[#5B4DFF] text-white font-bold text-[10px] sm:text-[11px] shadow-[0_4px_15px_rgba(91,77,255,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              Become A CAT Focuser
              <ArrowRight size={12} />
            </button>
          </div>

        </div>

        {/* Footer Trust Factors */}
        <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[9.5px] sm:text-[10px] text-slate-400 font-semibold">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={12} className="text-[#5B4DFF] sm:w-3.5 sm:h-3.5" />
            <span>Secure 256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Target size={12} className="text-[#5B4DFF] sm:w-3.5 sm:h-3.5" />
            <span>Built by IIM Indore &amp; Ahmedabad Performers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#5B4DFF] sm:w-3.5 sm:h-3.5" />
            <span>Structured Daily Consistency System</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
