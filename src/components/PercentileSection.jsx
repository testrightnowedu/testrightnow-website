import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, TrendingUp, BarChart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

function PercentileGraph() {
  return (
    <div className="relative bg-white rounded-3xl border border-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Performance Curve</p>
        <p className="text-[#0F172A] font-black text-2xl mt-1">Targeting the 99th Percentile</p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 400 200" className="w-full" fill="none">
          {/* Axis */}
          <line x1="20" y1="180" x2="380" y2="180" stroke="#E2E8F0" strokeWidth="2" />

          {/* Bell curve gradient */}
          <defs>
            <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B4DFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#5B4DFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Main Bell Curve Fill */}
          <path
            d="M20 180 Q60 178 100 165 Q140 140 180 80 Q210 30 240 80 Q280 140 340 175 Q360 178 380 180 L380 180 L20 180 Z"
            fill="url(#bellGrad)"
          />
          
          {/* Main Bell Curve Stroke */}
          <path
            d="M20 180 Q60 178 100 165 Q140 140 180 80 Q210 30 240 80 Q280 140 340 175 Q360 178 380 180"
            stroke="#5B4DFF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Highlighted 99+ Section */}
          <path
            d="M340 175 Q360 178 380 180 L380 180 L340 180 Z"
            fill="#5B4DFF"
          />

          {/* Labels */}
          <text x="20" y="198" fill="#94A3B8" fontSize="11" fontFamily="Inter" fontWeight="700">50%ile</text>
          <text x="280" y="198" fill="#94A3B8" fontSize="11" fontFamily="Inter" fontWeight="700">90%ile</text>
          <text x="345" y="198" fill="#0F172A" fontSize="11" fontFamily="Inter" fontWeight="800">100%ile</text>

          {/* Vertical indicator for 99+ */}
          <line x1="340" y1="80" x2="340" y2="180" stroke="#5B4DFF" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* Floating Callout Card */}
        <div className="absolute top-0 right-0 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex flex-col items-center">
           <span className="text-[#5B4DFF] text-[10px] font-black uppercase tracking-wider mb-1">You Need</span>
           <span className="text-[#0F172A] text-xl font-black">99+ Percentile</span>
        </div>
      </div>
    </div>
  );
}

export default function PercentileSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 lg:gap-32 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-[#5B4DFF]/5 text-[#5B4DFF] text-[13px] font-black px-4 py-2 rounded-full mb-8 tracking-wide uppercase"
            >
              <Target size={14} />
              The Real Strategy
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-[40px] lg:text-[48px] font-black text-[#0F172A] leading-[1.1] tracking-tight mb-8"
            >
              Cracking CAT Is Not About<br />
              Solving Every Question.<br />
              <span className="text-[#5B4DFF]">It's About the Right Percentile.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-slate-600 text-lg leading-relaxed mb-10 max-w-[480px]"
            >
              You only need 99+ percentile to convert top IIMs. That means you just need to be better than 99% of test takers.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 max-w-sm"
            >
               <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <BarChart size={24} className="text-[#5B4DFF]" />
               </div>
               <p className="text-[#0F172A] font-bold text-[15px] leading-snug">
                  Focus on accuracy and<br />
                  <span className="text-[#5B4DFF]">strategic selection.</span>
               </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Graph */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <PercentileGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
