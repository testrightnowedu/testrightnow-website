import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STUDENT_APP_URL } from '../constants';
import { Trophy, ArrowRight, Map } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-20 lg:py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5B4DFF] via-[#6D5DFB] to-[#4836E0] px-8 py-12 lg:px-16 lg:py-16"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/4" />
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="flex items-center gap-6 text-center lg:text-left">
              <motion.div
                animate={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 hidden lg:flex"
              >
                <Trophy size={48} className="text-yellow-400 fill-yellow-400" />
              </motion.div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-1">
                  Your Dream IIM Is Possible.
                  <br />
                  <span className="text-white/90">
                    We'll Help You Get There.
                  </span>
                </h2>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <motion.a
                href={STUDENT_APP_URL}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] font-bold text-[15px] px-8 py-4 rounded-[14px] transition-all duration-300"
              >
                Start Practicing Now
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold text-[15px] border-2 border-white/20 px-8 py-4 rounded-[14px] transition-all duration-300"
              >
                See Guided Path
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
