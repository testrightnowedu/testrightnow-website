import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Target, Trophy, Clock, Zap, CheckCircle, BarChart2, PenTool, LayoutDashboard } from 'lucide-react';

const VIEWS = ['dashboard', 'mock', 'analysis', 'goals', 'reward'];

const slideVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

export default function AnimatedLaptopScreen() {
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % VIEWS.length);
    }, 5500); // cycle every 5.5s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full h-[280px] bg-[#F8FAFC] text-[6px] font-sans overflow-hidden relative">
      
      {/* ── SIDEBAR (Static) ── */}
      <div className="w-[85px] bg-[#0c0d12] flex flex-col shrink-0 border-r border-white/5 relative z-10 p-3 pt-5">
        <div className="text-white font-bold text-[8.5px] mb-6 flex items-center gap-1.5">
          <Zap size={10} className="text-[#6D5FFA]" fill="#6D5FFA" />
          TestRightNow
        </div>
        
        <div className="space-y-1">
          <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentView === 0 ? 'bg-[#6D5FFA]/20 text-white' : 'text-slate-400'}`}>
             <LayoutDashboard size={8} /> <span>Dashboard</span>
          </div>
          <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentView === 1 ? 'bg-[#6D5FFA]/20 text-white' : 'text-slate-400'}`}>
             <PenTool size={8} /> <span>Practice</span>
          </div>
          <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentView === 2 ? 'bg-[#6D5FFA]/20 text-white' : 'text-slate-400'}`}>
             <BarChart2 size={8} /> <span>Analytics</span>
          </div>
          <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentView === 3 ? 'bg-[#6D5FFA]/20 text-white' : 'text-slate-400'}`}>
             <Target size={8} /> <span>Missions</span>
          </div>
          <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentView === 4 ? 'bg-[#6D5FFA]/20 text-white' : 'text-slate-400'}`}>
             <Trophy size={8} /> <span>Rewards</span>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-3 border-t border-white/10">
           <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold" style={{fontSize:5}}>A</div>
           <div className="text-white/80" style={{fontSize:6}}>Arjun K.</div>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 relative bg-slate-50/50 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <div className="h-10 border-b border-slate-200/60 bg-white/40 backdrop-blur-md flex items-center px-4 justify-between shrink-0 relative z-10">
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-sm border border-slate-100">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
             <span className="text-slate-600 font-medium" style={{fontSize:5.5}}>System Sync Active</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full border border-orange-100">
               <Flame size={7} className="text-orange-500" fill="#f97316"/>
               <motion.span 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 className="text-orange-600 font-bold" style={{fontSize:6}}
               >
                 12 Days
               </motion.span>
            </div>
            <div className="flex items-center gap-1 bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">
               <Zap size={7} className="text-indigo-500" fill="#6366f1"/>
               <motion.span className="text-indigo-600 font-bold" style={{fontSize:6}}>1560 XP</motion.span>
            </div>
          </div>
        </div>

        {/* Dynamic Views */}
        <div className="flex-1 relative overflow-hidden p-4">
          <AnimatePresence mode="wait">
            {currentView === 0 && <DashboardView key="dashboard" />}
            {currentView === 1 && <MockTestView key="mock" />}
            {currentView === 2 && <AnalysisView key="analysis" />}
            {currentView === 3 && <GoalsView key="goals" />}
            {currentView === 4 && <RewardView key="reward" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 1. DASHBOARD VIEW                                                   */
/* ─────────────────────────────────────────────────────────────────── */
function DashboardView() {
  return (
    <motion.div variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{duration:0.6, ease:"easeInOut"}} className="absolute inset-0 p-4 space-y-3">
      <div>
        <h1 className="text-[11px] font-bold text-slate-800 tracking-tight">Welcome back, Arjun! 👋</h1>
        <p className="text-slate-500 mt-0.5" style={{fontSize:6.5}}>Let's continue your CAT journey today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-2">
         {[ 
           { label:"Daily Streak", val:"12", sub:"days", icon:<Flame size={8} className="text-orange-500"/>, color:"text-orange-500" },
           { label:"Overall Accuracy", val:"78%", sub:"+4% this week", icon:<Target size={8} className="text-emerald-500"/>, color:"text-emerald-600" },
           { label:"Mock Tests", val:"24", sub:"Completed", icon:<CheckCircle size={8} className="text-blue-500"/>, color:"text-slate-800" },
           { label:"Rank", val:"Top 8%", sub:"Among all users", icon:<Trophy size={8} className="text-purple-500"/>, color:"text-slate-800" }
         ].map((k, i) => (
           <motion.div key={i} initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} transition={{delay:0.1*i}}
             className="bg-white p-2 rounded-lg border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between"
             whileHover={{ y:-2, boxShadow:"0 6px 16px rgba(0,0,0,0.06)" }}
           >
             <div className="flex items-center justify-between">
                <span className="text-slate-500" style={{fontSize:5.5}}>{k.label}</span>
                {k.icon}
             </div>
             <div className="mt-1.5">
                <div className={`font-bold text-[10px] ${k.color}`}>{k.val}</div>
                <div className="text-slate-400" style={{fontSize:5}}>{k.sub}</div>
             </div>
           </motion.div>
         ))}
      </div>

      {/* Learning Path */}
      <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <h2 className="font-bold text-slate-800 mb-2">Your Learning Path</h2>
        <div className="flex items-center justify-between relative px-2">
          <motion.div initial={{width:0}} animate={{width:"65%"}} transition={{duration:1.5, ease:"easeOut"}} className="absolute top-1/2 left-0 h-[1.5px] bg-[#6D5FFA] -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-slate-100 -translate-y-1/2 z-[-1]" />
          
          {[
            { n: "Foundation", s: "Completed", act: true },
            { n: "Core Concepts", s: "Completed", act: true },
            { n: "Advanced Topics", s: "In Progress (68%)", act: true, pulse: true },
            { n: "Mock Tests", s: "Locked", act: false }
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center gap-1 bg-white px-1">
               <motion.div 
                 initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3 + i*0.1}}
                 className={`w-6 h-6 rounded-md flex items-center justify-center ${step.act ? 'bg-[#6D5FFA] text-white shadow-md' : 'bg-slate-100 text-slate-400'}`}
               >
                 {step.act ? <CheckCircle size={8} /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />}
                 {step.pulse && <motion.div animate={{scale:[1,1.5,1], opacity:[0.5,0,0.5]}} transition={{duration:2, repeat:Infinity}} className="absolute inset-0 rounded-md border-2 border-[#6D5FFA]" />}
               </motion.div>
               <div className="text-center">
                 <div className={`font-bold ${step.act ? 'text-slate-700' : 'text-slate-400'}`} style={{fontSize:5.5}}>{step.n}</div>
                 <div className="text-slate-400" style={{fontSize:4.5}}>{step.s}</div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Graph */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
           <h2 className="font-bold text-slate-800 mb-2">Performance Trend</h2>
           <div className="relative h-12 w-full mt-1">
             <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
               <motion.path 
                 d="M0,25 C20,20 40,28 60,15 C80,5 100,10 100,10" 
                 fill="none" stroke="#6D5FFA" strokeWidth="1.5"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}
               />
               <motion.path 
                 d="M0,30 C20,28 40,25 60,20 C80,18 100,5 100,5" 
                 fill="none" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2 2"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
               />
               {/* Plot points */}
               {[ [0,25], [60,15], [100,10] ].map((pt, i) => (
                 <motion.circle key={i} cx={pt[0]} cy={pt[1]} r={1.5} fill="white" stroke="#6D5FFA" strokeWidth={1}
                   initial={{scale:0}} animate={{scale:1}} transition={{delay: 1 + i*0.2}}
                 />
               ))}
             </svg>
           </div>
        </div>
        <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
           <h2 className="font-bold text-slate-800 mb-1.5">Top Strengths</h2>
           <div className="space-y-1.5 mt-2">
             {[ {n:"Arithmetic", v:"82%"}, {n:"Algebra", v:"74%"}, {n:"Geometry", v:"68%"} ].map((s,i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="w-[30px] text-slate-600 font-medium" style={{fontSize:5.5}}>{s.n}</div>
                 <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div initial={{width:0}} animate={{width:s.v}} transition={{duration:1, delay:0.3+i*0.1}} className="h-full bg-gradient-to-r from-[#6D5FFA] to-[#9333EA] rounded-full" />
                 </div>
                 <div className="w-[15px] text-right text-slate-800 font-bold" style={{fontSize:5}}>{s.v}</div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 2. MOCK TEST VIEW                                                   */
/* ─────────────────────────────────────────────────────────────────── */
function MockTestView() {
  return (
    <motion.div variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{duration:0.6, ease:"easeInOut"}} className="absolute inset-0 p-4 bg-white">
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100">
         <div className="font-bold text-[9px] text-slate-800">CAT Mock Test 14 (Pro)</div>
         <div className="flex items-center gap-1.5 bg-red-50 text-red-600 px-2 py-1 rounded-md font-mono border border-red-100">
           <Clock size={7} />
           <span style={{fontSize:6}}>01:45:22</span>
         </div>
      </div>

      <div className="flex gap-4">
         <div className="flex-1">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3">
               <div className="text-slate-500 mb-1 font-semibold" style={{fontSize:5}}>QUESTION 34</div>
               <div className="text-slate-800 font-medium leading-relaxed" style={{fontSize:6.5}}>
                 If log₂(x) + log₂(y) = 5, and log₂(x) - log₂(y) = 3, what is the value of x² + y²?
               </div>
            </div>
            
            <div className="space-y-1.5">
               {[ "A. 256", "B. 260", "C. 512", "D. 1024" ].map((opt, i) => (
                 <motion.div key={i} whileHover={{x:2}} className={`px-3 py-2 rounded-md border ${i === 1 ? 'border-[#6D5FFA] bg-[#6D5FFA]/5' : 'border-slate-200 bg-white'} cursor-pointer flex items-center gap-2`}>
                   <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${i === 1 ? 'border-[#6D5FFA]' : 'border-slate-300'}`}>
                     {i === 1 && <motion.div initial={{scale:0}} animate={{scale:1}} className="w-1.5 h-1.5 bg-[#6D5FFA] rounded-full" />}
                   </div>
                   <span className="text-slate-700 font-medium">{opt}</span>
                 </motion.div>
               ))}
            </div>

            <div className="flex justify-between mt-4">
               <div className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-600 font-medium">Mark for Review</div>
               <motion.div whileHover={{scale:1.02}} className="px-4 py-1.5 rounded-md bg-[#6D5FFA] text-white font-bold shadow-md">Save & Next</motion.div>
            </div>
         </div>

         <div className="w-[80px] shrink-0 border-l border-slate-100 pl-3">
            <div className="text-slate-500 mb-2 font-semibold" style={{fontSize:5}}>PALETTE</div>
            <div className="grid grid-cols-3 gap-1">
               {[...Array(15)].map((_, i) => {
                 let color = "bg-slate-100 text-slate-500 border-slate-200"; // unvisited
                 if (i < 8) color = "bg-emerald-500 text-white border-emerald-600"; // answered
                 if (i === 11) color = "bg-purple-500 text-white border-purple-600"; // marked
                 if (i === 8) color = "bg-[#6D5FFA] text-white border-[#6D5FFA] ring-1 ring-offset-1 ring-[#6D5FFA]"; // current
                 return (
                   <div key={i} className={`h-4 rounded-[3px] border flex items-center justify-center font-bold ${color}`} style={{fontSize:5}}>
                     {i+26}
                   </div>
                 )
               })}
            </div>
         </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 3. ANALYSIS VIEW                                                    */
/* ─────────────────────────────────────────────────────────────────── */
function AnalysisView() {
  return (
    <motion.div variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{duration:0.6, ease:"easeInOut"}} className="absolute inset-0 p-4 space-y-3">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[10px] font-bold text-slate-800">Performance Report</h1>
          <p className="text-slate-500 mt-0.5" style={{fontSize:6}}>Mock Test 13 Analytics</p>
        </div>
        <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md font-bold border border-emerald-100">
           98.4 Percentile
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Donut Chart */}
        <div className="col-span-1 bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col items-center justify-center relative">
           <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90">
             <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="4" />
             <motion.path 
               d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
               fill="none" stroke="#6D5FFA" strokeWidth="4" strokeDasharray="100, 100"
               initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 22 }} transition={{ duration: 1.5, ease: "easeOut" }}
             />
           </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="font-bold text-[12px] text-slate-800">78%</span>
             <span className="text-[5px] text-slate-400">Accuracy</span>
           </div>
        </div>

        {/* Sectional Analysis */}
        <div className="col-span-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
           <h2 className="font-bold text-slate-800 mb-2">Sectional Breakdown</h2>
           <div className="space-y-2">
             {[ {n:"VARC", v:"85%", c:"bg-blue-500"}, {n:"DILR", v:"62%", c:"bg-orange-500"}, {n:"QA", v:"91%", c:"bg-emerald-500"} ].map((s,i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="w-[20px] font-bold text-slate-600" style={{fontSize:5.5}}>{s.n}</div>
                 <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div initial={{width:0}} animate={{width:s.v}} transition={{duration:1, delay:0.2+i*0.1}} className={`h-full ${s.c} rounded-full`} />
                 </div>
                 <div className="w-[15px] text-right text-slate-800 font-bold" style={{fontSize:5.5}}>{s.v}</div>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="bg-[#6D5FFA]/5 p-3 rounded-lg border border-[#6D5FFA]/20 flex items-start gap-2">
         <Zap size={10} className="text-[#6D5FFA] mt-0.5" />
         <div>
            <div className="font-bold text-[#6D5FFA]" style={{fontSize:6.5}}>AI Insight</div>
            <div className="text-slate-600 mt-0.5 leading-relaxed" style={{fontSize:5.5}}>
              Your QA accuracy is excellent, but you are spending 30% more time on DILR sets than the top 1% average. Recommend focusing on set-selection strategies.
            </div>
         </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 4. GOALS VIEW                                                       */
/* ─────────────────────────────────────────────────────────────────── */
function GoalsView() {
  return (
    <motion.div variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{duration:0.6, ease:"easeInOut"}} className="absolute inset-0 p-4">
      <div className="mb-4">
        <h1 className="text-[10px] font-bold text-slate-800">Daily Targets</h1>
        <p className="text-slate-500 mt-0.5" style={{fontSize:6}}>Complete these to maintain your 12-day streak.</p>
      </div>

      <div className="space-y-2.5">
        {[
          { title: "Solve 50 QA Questions", prog: "34/50", pct: "68%", color: "bg-blue-500" },
          { title: "Complete 2 RC Passages", prog: "2/2", pct: "100%", color: "bg-emerald-500" },
          { title: "Review Mock Analysis", prog: "In Progress", pct: "40%", color: "bg-orange-500" }
        ].map((m, i) => (
          <motion.div key={i} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: i*0.1}}
            className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between"
          >
             <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-md ${m.pct === '100%' ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-50 text-slate-400'} flex items-center justify-center border ${m.pct === '100%' ? 'border-emerald-200' : 'border-slate-200'}`}>
                   {m.pct === '100%' ? <CheckCircle size={10} /> : <Target size={10} />}
                </div>
                <div>
                   <div className={`font-bold ${m.pct === '100%' ? 'text-slate-800' : 'text-slate-700'}`} style={{fontSize:6.5}}>{m.title}</div>
                   <div className="text-slate-400 mt-0.5 font-medium" style={{fontSize:5}}>{m.prog}</div>
                </div>
             </div>
             <div className="w-[60px] flex flex-col items-end gap-1">
                <div className="text-slate-800 font-bold" style={{fontSize:6}}>{m.pct}</div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div initial={{width:0}} animate={{width:m.pct}} transition={{duration:1}} className={`h-full ${m.color} rounded-full`} />
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 5. REWARD VIEW                                                      */
/* ─────────────────────────────────────────────────────────────────── */
function RewardView() {
  return (
    <motion.div variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{duration:0.6, ease:"easeInOut"}} className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[2px] p-4">
      <motion.div 
        initial={{ scale:0.8, opacity:0, y:20 }}
        animate={{ scale:1, opacity:1, y:0 }}
        transition={{ type:"spring", bounce:0.5 }}
        className="w-[220px] bg-[#1a1b22] rounded-2xl p-5 shadow-2xl border border-white/10 text-center relative overflow-hidden"
      >
         {/* Confetti / Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/20 blur-2xl rounded-full" />
         
         <motion.div 
           animate={{ rotate:[0, -10, 10, -10, 10, 0] }}
           transition={{ duration:0.6, delay:0.4 }}
           className="w-12 h-12 mx-auto bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)] mb-3 relative z-10"
         >
            <Trophy size={20} className="text-white drop-shadow-md" fill="white" />
         </motion.div>

         <h2 className="text-white font-bold text-[12px] mb-1 relative z-10">Outstanding!</h2>
         <p className="text-slate-400 leading-relaxed relative z-10" style={{fontSize:6.5}}>
            You just crushed your weekly accuracy goal. Keep up the momentum!
         </p>

         <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-2 flex justify-center items-center gap-2 relative z-10">
            <Zap size={10} className="text-yellow-400" fill="#facc15" />
            <span className="text-white font-bold text-[10px]">+50 XP</span>
         </div>

         <motion.button 
           whileHover={{scale:1.02}} whileTap={{scale:0.98}}
           className="w-full mt-4 bg-gradient-to-r from-[#6D5FFA] to-[#9333EA] text-white font-bold py-2 rounded-lg shadow-[0_4px_12px_rgba(109,95,250,0.3)] relative z-10"
           style={{fontSize:7}}
         >
            Claim Reward
         </motion.button>
      </motion.div>
    </motion.div>
  );
}
