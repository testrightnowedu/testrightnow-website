import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

function IIMCard({ name, delay, image, logo }) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      className="relative group overflow-hidden rounded-[32px] h-[240px] w-full bg-slate-900 border border-white/5 shadow-2xl"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />
      </div>
      
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8">
        {/* Centered White Circle with Logo */}
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl mb-auto mt-2 overflow-hidden p-3">
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
        </div>
        
        <div className="mt-auto text-center">
           <h3 className="text-white font-black text-[20px] tracking-tight">{name}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function CredibilitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto rounded-[40px] bg-[#020617] relative overflow-hidden px-8 py-16 lg:px-20 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/90 text-[13px] font-bold px-4 py-2 rounded-full mb-8"
            >
              <Star size={12} className="text-orange-400" fill="currentColor" />
              Built by Top CAT Performers
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              We Cracked CAT<br />
              Without Coaching.<br />
              Now We Help You.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-[17px] font-medium leading-relaxed max-w-[400px]"
            >
              We know what it takes.<br />
              Because we've been there.
            </motion.p>
          </motion.div>

          {/* Right Column: IIM Cards */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <IIMCard
              name="IIM Indore"
              image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
              logo="https://upload.wikimedia.org/wikipedia/en/b/b3/IIM_Indore_Logo.png"
              delay={0}
            />
            <IIMCard
              name="IIM Ahmedabad"
              image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
              logo="https://upload.wikimedia.org/wikipedia/en/4/4e/Indian_Institute_of_Management_Ahmedabad_logo.png"
              delay={1}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
