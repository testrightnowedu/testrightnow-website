import React from 'react';
import { motion } from 'framer-motion';
import { STUDENT_APP_URL } from '../constants';
import { Brain, Clock, SkipForward, ArrowRight, CheckCircle2, Lock, Star, Flame, Home, BookOpen, Map, BarChart2, User, Share2, Target, Network } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const float = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

function TrophyIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7c0 3.31 2.69 6 6 6s6-2.69 6-6V2z" />
    </svg>
  );
}

function MobileScreen() {
  return (
    <div className="relative w-full h-full bg-[#0F172A] flex flex-col font-['Inter']">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />

      {/* Status Bar */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-[10px] text-white font-medium tracking-wide">10:01</span>
        <div className="flex gap-1.5 items-center">
          <div className="w-4 h-1.5 bg-white/40 rounded-[2px]"></div>
          <div className="w-1.5 h-2.5 bg-white/40 rounded-[2px]"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-5 pt-1 pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-white font-bold text-base leading-tight">Guided Path</h3>
            <p className="text-slate-400 text-[9px] mt-0.5">Your personal plan to crack CAT</p>
          </div>
          <div className="bg-orange-500/20 rounded-lg px-1.5 py-1 flex flex-col items-center">
             <Flame size={10} className="text-orange-500" />
             <span className="text-white text-[7px] font-bold">12 Days</span>
          </div>
        </div>
      </div>

      {/* Hero Visual: Mountain Peak */}
      <div className="px-3.5 mx-3 rounded-2xl bg-gradient-to-br from-[#5B4DFF] via-[#4836E0] to-[#0F172A] pt-4 pb-0 mb-3 relative overflow-hidden h-36">
        <div className="relative z-10">
          <p className="text-[7px] font-bold text-white/50 uppercase tracking-widest">Milestone 6</p>
          <h4 className="text-white font-bold text-[13px] mt-0.5">Strategic Mastery</h4>
          <p className="text-white/70 text-[8px] mt-1 max-w-[120px] leading-snug">
            Learn advanced strategies to solve smarter and faster.
          </p>
        </div>

        {/* Mountain Path SVG */}
        <svg viewBox="0 0 200 100" className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-50">
           <path d="M0 100 L40 60 L80 80 L120 30 L200 100 Z" fill="white" />
           <circle cx="120" cy="30" r="3" fill="#FFD700" className="animate-pulse" />
        </svg>

        {/* Progress Info */}
        <div className="absolute bottom-2.5 left-4 right-4 z-10">
           <div className="flex justify-between items-end mb-1">
              <span className="text-[7px] text-white/50 font-bold uppercase">Progress</span>
              <span className="text-[9px] text-white font-black">68%</span>
           </div>
           <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[68%]" />
           </div>
        </div>
      </div>

      {/* Milestones List */}
      <div className="flex-1 px-4 overflow-hidden flex flex-col gap-1">
        {[
          { id: 'M0-2', label: 'Milestones 0–2', sub: 'Build your basics strong', status: 'done', color: '#22c55e' },
          { id: 'M3-5', label: 'Milestones 3–5', sub: 'Practice with purpose', status: 'done', color: '#22c55e' },
          { id: 'M6-8', label: 'Milestones 6–8', sub: 'Learn to think like a topper', status: 'active', color: '#5B4DFF' },
          { id: 'M9-10', label: 'Milestones 9–10', sub: 'Solve, analyze, improve', status: 'locked', color: '#334155' },
          { id: 'Mock', label: 'Mock Slots', sub: 'Perform under real pressure', status: 'locked', color: '#334155' },
        ].map((milestone) => (
          <div
            key={milestone.id}
            className={`flex items-center gap-2.5 p-2 rounded-xl border ${
              milestone.status === 'active'
                ? 'bg-white/5 border-white/10'
                : 'bg-transparent border-transparent'
            }`}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: milestone.status === 'locked' ? 'transparent' : milestone.color + '22', border: `1px solid ${milestone.status === 'locked' ? '#334155' : milestone.color}` }}
            >
              {milestone.status === 'done' ? (
                <CheckCircle2 size={10} color="#22c55e" />
              ) : milestone.status === 'active' ? (
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B4DFF]" />
              ) : (
                <Lock size={8} color="#334155" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[7px] text-slate-500 font-bold">{milestone.id}</span>
                <p className={`text-[9px] font-bold truncate ${milestone.status === 'locked' ? 'text-slate-600' : 'text-white'}`}>
                  {milestone.label}
                </p>
                {milestone.status === 'active' && <CheckCircle2 size={8} className="text-[#5B4DFF] ml-auto" />}
              </div>
              <p className="text-[7px] text-slate-500 truncate mt-0.5">{milestone.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-around px-4 py-3 border-t border-white/5 mt-auto bg-[#0F172A]">
        {[
          { icon: Home, label: 'Home' },
          { icon: BookOpen, label: 'Practice' },
          { icon: Map, label: 'Guided', active: true },
          { icon: BarChart2, label: 'Progress' },
          { icon: User, label: 'Profile' },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} className="flex flex-col items-center gap-1 opacity-60">
            <Icon size={14} className={active ? 'text-[#5B4DFF]' : 'text-white'} />
            <span className={`text-[7px] font-medium ${active ? 'text-[#5B4DFF]' : 'text-white'}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const features = [
    { icon: Network, label: 'Decision Training' },
    { icon: Clock, label: 'Time Intelligence' },
    { icon: Network, label: 'Strategic Skipping' },
  ];

  const floatingCards = [
    { label: 'Guided\nLearning', icon: BookOpen, delay: 0, pos: 'top-[5%] left-[-100px]' },
    { label: 'Smart\nPractice', icon: Target, delay: 0.4, pos: 'bottom-[20%] left-[-100px]' },
    { label: 'Track\nProgress', icon: BarChart2, delay: 0.8, pos: 'top-[20%] right-[-100px]' },
    { label: 'Earn\nRewards', icon: TrophyIcon, delay: 1.2, pos: 'bottom-[30%] right-[-100px]' },
  ];

  return (
    <section className="hero">
      {/* Background Orbits */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[700px] h-[700px] flex items-center justify-center opacity-30">
           <div className="absolute w-full h-full rounded-full border border-slate-200 border-dashed" style={{ animation: 'spin 180s linear infinite' }} />
           <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-200 border-dashed" style={{ animation: 'spin 140s linear infinite reverse' }} />
           <div className="absolute w-[60%] h-[60%] rounded-full border border-slate-200 border-dashed" style={{ animation: 'spin 100s linear infinite' }} />
        </div>
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-white border border-slate-100 text-[#0F172A] text-[13px] font-bold px-4 py-2 rounded-full mb-8 shadow-sm"
            >
              <Star size={14} fill="currentColor" className="text-[#5B4DFF]" />
              Built by Top CAT Performers
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="hero-title"
            >
              Crack CAT<br />
              <span className="text-[#5B4DFF]">Smarter.</span><br />
              Not Harder.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[19px] text-slate-600 leading-[1.6] mt-8 max-w-[500px]"
            >
              We help you to skip a hard question<br className="hidden sm:block" />
              and find the time trap question.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center flex-wrap gap-x-8 gap-y-4 mt-10"
            >
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={20} className="text-[#5B4DFF] stroke-[2.5]" />
                  <div className="text-[#0F172A] text-[15px] font-bold leading-tight tracking-tight">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-10"
            >
              <motion.a
                href={STUDENT_APP_URL}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold text-[16px] bg-[#5B4DFF] px-[36px] h-[58px] rounded-[18px] transition-all"
              >
                Start Practicing
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#0F172A] font-bold text-[16px] border border-slate-100 bg-white shadow-sm px-[32px] h-[58px] rounded-[18px] transition-all"
              >
                Explore <span className="text-[#5B4DFF] ml-1">Guided Path</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="hero-right">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="phone-wrapper"
            >
              <div className="hero-glow" />

              {floatingCards.map(({ label, icon: Icon, delay, pos }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + delay }}
                  className={`floating-card ${pos} hidden lg:flex flex-col items-center justify-center gap-2 bg-white rounded-[20px] px-6 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100/80`}
                >
                  <Icon size={20} className="text-[#5B4DFF]" strokeWidth={2.5} />
                  <span className="text-[11px] font-black text-[#0F172A] text-center whitespace-pre-line leading-tight mt-1">{label}</span>
                </motion.div>
              ))}

              <motion.div
                variants={float}
                initial="initial"
                animate="animate"
                className="phone-mockup"
              >
                <MobileScreen />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
