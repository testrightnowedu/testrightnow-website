import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Map, AlertTriangle, SkipForward, Gamepad2, Gift } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  {
    icon: Map,
    title: 'Guided Learning',
    desc: 'Personalized path for every aspirant. A structured roadmap that adapts to your pace and goals.',
    color: '#5B4DFF',
    bg: '#F0EDFF',
  },
  {
    icon: AlertTriangle,
    title: 'Time Trap Detection',
    desc: 'We help you identify time-consuming traps before they cost you precious minutes.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    icon: SkipForward,
    title: 'Smart Skipping',
    desc: 'Skip hard questions. Focus on high-value questions. Score more by solving less.',
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    icon: Gamepad2,
    title: 'Gamified Learning',
    desc: 'Missions, streaks and challenges to keep you motivated throughout your preparation.',
    color: '#EC4899',
    bg: '#FDF2F8',
  },
  {
    icon: Gift,
    title: 'Self Rewards',
    desc: 'Earn points, unlock badges and reward your consistency. Celebrate every milestone.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="features" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-[#5B4DFF] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Platform Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-2xl lg:text-3xl font-black text-[#0F172A] tracking-tight"
          >
            More Than Practice. <span className="text-[#5B4DFF]">A Smarter Preparation System.</span>
          </motion.h2>
        </motion.div>

         {/* Features Grid */}
         <motion.div
           initial="hidden"
           animate={inView ? 'visible' : 'hidden'}
           variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
           className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto px-4 lg:px-0"
         >
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-5 bg-white rounded-[20px] p-7 border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex-shrink-0 flex items-center justify-center">
                <Icon size={26} style={{ color }} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="text-[#0F172A] font-bold text-[17px] mb-1.5 tracking-tight">{title}</h3>
                <p className="text-slate-500 text-[14px] leading-[1.6]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
