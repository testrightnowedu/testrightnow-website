import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, BookOpen, Clock, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cards = [
  {
    icon: Briefcase,
    title: 'Working or busy?',
    sub: 'We get it.',
    desc: 'Designed for people who can\'t dedicate 8 hours a day. Even 2 hours is enough.',
  },
  {
    icon: BookOpen,
    title: 'No time for coaching?',
    sub: 'We guide you.',
    desc: 'A personalized roadmap that adapts to your schedule. No classroom needed.',
  },
  {
    icon: Clock,
    title: 'Spend a few hours comfortably.',
    sub: 'Focused, not frantic.',
    desc: 'Quality over quantity. Smart practice beats mindless grinding every time.',
  },
  {
    icon: TrendingUp,
    title: 'Be consistent,',
    sub: 'we\'ll take care of the rest.',
    desc: 'Our system tracks your growth, adjusts your plan, and keeps you on track.',
  },
];

export default function WorkingProfessionalsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#F8FAFC]">
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
            For Busy Aspirants
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#0F172A] leading-[1.1] tracking-tight mb-5 max-w-3xl mx-auto"
          >
            Not Everyone Has Time for Full-Time Coaching.<br className="hidden lg:block" />
            <span className="text-[#5B4DFF]">Come with us.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed"
          >
            We'll guide you. You just need a few hours a day and consistency.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map(({ icon: Icon, title, sub, desc }, i) => (
               <motion.div
                 key={title}
                 custom={i}
                 variants={fadeUp}
                 className="flex gap-4 items-center"
               >
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <Icon size={28} className="text-[#5B4DFF] stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-[#0F172A] font-bold text-sm leading-tight mb-1">{title}</h3>
                <p className="text-[#5B4DFF] font-semibold text-xs mb-2">{sub}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
