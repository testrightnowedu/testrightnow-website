import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Check, ChevronRight, ChevronDown, Sparkles } from "lucide-react";

// Premium Springs
const SPRING_BOUNCY = { type: "spring", stiffness: 100, damping: 12, mass: 0.6 };
const SPRING_SMOOTH = { type: "spring", stiffness: 120, damping: 20, mass: 0.8 };

// Activity styles mapping
const ACTIVITY_STYLES = {
  concept: { label: "Concept", bg: "bg-blue-500/10 border-blue-500/20 text-blue-400", dot: "bg-blue-500" },
  test: { label: "Topic Test", bg: "bg-amber-500/10 border-amber-500/20 text-amber-400", dot: "bg-amber-500" },
  practice: { label: "Practice", bg: "bg-purple-500/10 border-purple-500/20 text-purple-400", dot: "bg-purple-500" },
  revision: { label: "Revision", bg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400", dot: "bg-indigo-500" },
};

// SVG Badge components mapping
function BadgeIcon({ tier, size = 60 }) {
  if (tier === "gold") {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <defs>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FBBF24" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#goldGlow)" />
        <circle cx="32" cy="32" r="20" fill="url(#goldGradient)" stroke="#F59E0B" strokeWidth="2.5" />
        <polygon points="32,18 36,27 46,27 38,33 41,43 32,37 23,43 26,33 18,27 28,27" fill="#FFF" />
      </svg>
    );
  }
  if (tier === "silver") {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" fill="url(#silverGradient)" stroke="#94A3B8" strokeWidth="2.5" />
        <path d="M25,27 L32,20 L39,27 L39,36 C39,40 32,44 32,44 C32,44 25,40 25,36 Z" fill="#FFF" opacity="0.9" />
      </svg>
    );
  }
  if (tier === "bronze") {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="bronzeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="50%" stopColor="#C2410C" />
            <stop offset="100%" stopColor="#7C2D12" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" fill="url(#bronzeGradient)" stroke="#C2410C" strokeWidth="2.5" />
        <rect x="27" y="27" width="10" height="10" rx="2" fill="#FFF" opacity="0.9" />
      </svg>
    );
  }
  // Wood tier
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="20" fill="url(#woodGradient)" stroke="#78350F" strokeWidth="2" />
      <line x1="24" y1="28" x2="40" y2="28" stroke="#D97706" strokeWidth="2.5" />
      <line x1="24" y1="36" x2="40" y2="36" stroke="#D97706" strokeWidth="2.5" />
    </svg>
  );
}

// Mini Badge helper component
function MiniBadge({ tier }) {
  if (tier === "gold") return <span className="ml-1.5 shadow-[0_0_8px_rgba(251,191,36,0.5)]"><BadgeIcon tier="gold" size={16} /></span>;
  if (tier === "silver") return <span className="ml-1.5"><BadgeIcon tier="silver" size={16} /></span>;
  if (tier === "bronze") return <span className="ml-1.5"><BadgeIcon tier="bronze" size={16} /></span>;
  if (tier === "wood") return <span className="ml-1.5"><BadgeIcon tier="wood" size={16} /></span>;
  return null;
}

// Animated Metric Card with count-up behavior
function AnimatedMetricCard({ label, value, delay = 0 }) {
  const [displayVal, setDisplayVal] = useState("0");
  
  useEffect(() => {
    let intv;
    const timer = setTimeout(() => {
      const strVal = String(value);
      
      // Percentage like 82%
      if (strVal.endsWith("%")) {
        const target = parseInt(strVal);
        let cur = 0;
        intv = setInterval(() => {
          cur += Math.ceil(target / 10);
          if (cur >= target) {
            setDisplayVal(`${target}%`);
            clearInterval(intv);
          } else {
            setDisplayVal(`${cur}%`);
          }
        }, 30);
      }
      
      // XP like +120
      else if (strVal.startsWith("+")) {
        const target = parseInt(strVal.slice(1));
        let cur = 0;
        intv = setInterval(() => {
          cur += Math.ceil(target / 10);
          if (cur >= target) {
            setDisplayVal(`+${target}`);
            clearInterval(intv);
          } else {
            setDisplayVal(`+${cur}`);
          }
        }, 30);
      }
      
      // Ratio attempted like 18/20
      else if (strVal.includes("/")) {
        const parts = strVal.split("/");
        const targetLeft = parseInt(parts[0]);
        const targetRight = parts[1];
        let cur = 0;
        intv = setInterval(() => {
          cur += Math.ceil(targetLeft / 10);
          if (cur >= targetLeft) {
            setDisplayVal(`${targetLeft}/${targetRight}`);
            clearInterval(intv);
          } else {
            setDisplayVal(`${cur}/${targetRight}`);
          }
        }, 30);
      }
      
      // Minutes like 42 min
      else if (strVal.endsWith("min")) {
        const target = parseInt(strVal);
        let cur = 0;
        intv = setInterval(() => {
          cur += Math.ceil(target / 10);
          if (cur >= target) {
            setDisplayVal(`${target} min`);
            clearInterval(intv);
          } else {
            setDisplayVal(`${cur} min`);
          }
        }, 30);
      } else {
        setDisplayVal(strVal);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intv) clearInterval(intv);
    };
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={SPRING_BOUNCY}
      className="bg-[#0b0f17] border border-white/[0.03] p-3 rounded-xl flex flex-col justify-center items-center shadow-lg shadow-black/30"
    >
      <span className="text-xs sm:text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
        {displayVal}
      </span>
      <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider mt-1 text-center leading-none">
        {label}
      </span>
    </motion.div>
  );
}

// Celebration Overlay Modal Component with Confetti
function CelebrationOverlay({ sessionNum, stats, tier }) {
  const [confettiParticles, setConfettiParticles] = useState([]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const colors = ["#5B4DFF", "#9B8FFF", "#10B981", "#FBBF24", "#3B82F6", "#EC4899"];
      const particles = Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        x: Math.random() * 260 - 130,
        y: Math.random() * -60 - 20,
        color: colors[i % colors.length],
        size: Math.random() * 6 + 4,
        rotate: Math.random() * 360,
        delay: Math.random() * 0.4,
        isRound: Math.random() > 0.5,
      }));
      setConfettiParticles(particles);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-slate-950/85 backdrop-blur-md rounded-[28px] z-50 flex flex-col items-center justify-center p-6 text-center overflow-hidden"
    >
      {/* Confetti drops */}
      {confettiParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: p.y, x: p.x, rotate: p.rotate, opacity: 1 }}
          animate={{ y: 320, rotate: p.rotate + 360, opacity: 0 }}
          transition={{ duration: 2.2, delay: p.delay, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.isRound ? "50%" : "0%",
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.6, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={SPRING_BOUNCY}
        className="flex flex-col items-center gap-4 max-w-sm"
      >
        <span className="text-lg sm:text-xl font-black text-white flex items-center gap-1.5">
          🎉 Session {sessionNum} Completed!
        </span>
        <p className="text-xs text-slate-400 font-semibold leading-none">Excellent work!</p>

        {/* Badge reveal animation */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: [0.6, 1.25, 0.95, 1], rotate: [0, 380, 355, 360] }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
          className="relative my-3"
        >
          {/* Subtle shine ray overlay */}
          <motion.div
            className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl pointer-events-none"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <BadgeIcon tier={tier} size={64} />
        </motion.div>

        <span className="text-[10px] font-black uppercase tracking-widest text-[#9B8FFF]">
          {tier.toUpperCase()} Badge Earned
        </span>

        {/* Compact stats preview in overlay */}
        <div className="flex gap-4 border-t border-white/[0.06] pt-3 mt-1 w-full justify-center text-[10px] text-slate-400 font-semibold">
          <span>Score: <strong className="text-white">{stats.score}</strong></span>
          <span>Accuracy: <strong className="text-white">{stats.accuracy}</strong></span>
          <span>Time: <strong className="text-white">{stats.time}</strong></span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Motivation Reward Card Popup Component
function MotivationRewardCard({ title, accuracy, reward }) {
  const [confettiParticles, setConfettiParticles] = useState([]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const colors = ["#5B4DFF", "#9B8FFF", "#10B981", "#FBBF24"];
      const particles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        x: Math.random() * 160 - 80,
        y: Math.random() * -40 - 10,
        color: colors[i % colors.length],
        size: Math.random() * 4 + 3,
        rotate: Math.random() * 360,
      }));
      setConfettiParticles(particles);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={SPRING_BOUNCY}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] bg-slate-900/90 border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md rounded-2xl p-4 z-50 text-center flex flex-col items-center gap-3 overflow-hidden"
    >
      {/* Light confetti burst inside popup */}
      {confettiParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: p.y, x: p.x, rotate: p.rotate, opacity: 1 }}
          animate={{ y: 150, rotate: p.rotate + 180, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: "50%",
          }}
        />
      ))}

      <div className="flex flex-col items-center gap-1.5 relative z-10">
        <span className="text-xs font-black text-white flex items-center gap-1">
          {title}
        </span>
        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
          Accuracy: {accuracy}
        </span>
      </div>

      <div className="border-t border-white/[0.06] pt-2 w-full flex flex-col items-center gap-1 relative z-10">
        <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Motivation Reward</span>
        <span className="text-xs font-extrabold text-slate-200 mt-0.5 leading-tight">
          {reward}
        </span>
      </div>
    </motion.div>
  );
}

export default function GuidedLearningCinema() {
  const [animStep, setAnimStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Spotlight position target
  const [spotlightTarget, setSpotlightTarget] = useState("milestone-0");

  // Camera viewport pan offsets
  const [viewportY, setViewportY] = useState(0);

  // Roadmap connection path drawing progress
  const [roadmapPathProgress, setRoadmapPathProgress] = useState(0);

  // States
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [expandedMilestones, setExpandedMilestones] = useState({ 0: false });
  const [activeSession, setActiveSession] = useState(null);
  const [expandedSessions, setExpandedSessions] = useState({});
  const [completedActivities, setCompletedActivities] = useState({});
  const [session1Progress, setSession1Progress] = useState(0);
  const [session2Progress, setSession2Progress] = useState(0);
  const [milestoneProgress, setMilestoneProgress] = useState(2);
  const [milestone1Locked, setMilestone1Locked] = useState(true);
  const [activeActivityIdx, setActiveActivityIdx] = useState(null);

  // Motivation rewards overlay card popup state
  const [activeRewardCard, setActiveRewardCard] = useState(null);
  const [completedActivitiesDetail, setCompletedActivitiesDetail] = useState({});

  // Performance Summaries visibility states
  const [showS1Summary, setShowS1Summary] = useState(false);
  const [showS2Summary, setShowS2Summary] = useState(false);

  // Celebration overlay state
  const [celebrationSession, setCelebrationSession] = useState(null);
  const [sessionBadges, setSessionBadges] = useState({});

  // Climax lock unlock animation states
  const [lockShake, setLockShake] = useState(false);
  const [lockGlowBurst, setLockGlowBurst] = useState(false);
  const [lockGreenCheck, setLockGreenCheck] = useState(false);

  // Loop opacity
  const [loopOpacity, setLoopOpacity] = useState(1);

  const autoplayTimerRef = useRef(null);
  const inactivityTimerRef = useRef(null);
  const pathIntervalRef = useRef(null);

  // Milestones roadmap list
  const milestones = useMemo(() => {
    return Array.from({ length: 11 }, (_, i) => ({
      id: i,
      label: `M${i}`,
      name: i === 0 ? "Foundations & Qualifiers" : i === 1 ? "Core Contenders" : `Milestone ${i}`,
    }));
  }, []);

  // Activities list mappings
  const s1Activities = [
    { id: 1, title: "Logical Reasoning Primer", type: "concept", duration: "10m" },
    { id: 2, title: "Quadratic Equation Test", type: "test", duration: "15m" },
    { id: 3, title: "Data Arrangements Practice", type: "practice", duration: "20m" },
    { id: 4, title: "Syllogisms Revision Loop", type: "revision", duration: "8m" },
  ];

  const s2Activities = [
    { id: 1, title: "Linear Equations Advanced", type: "concept", duration: "12m" },
    { id: 2, title: "Concept Practice Drills", type: "practice", duration: "18m" },
  ];

  // Interactivity helper to pause autoplay
  const handleUserClick = (target, customAction) => {
    setIsAutoPlaying(false);
    if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);

    setSpotlightTarget(target);
    if (customAction) customAction();

    // 5s inactivity reset back to step 1
    inactivityTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
      setAnimStep(1);
    }, 5000);
  };

  // State sequencer loop
  useEffect(() => {
    if (!isAutoPlaying) return;

    const runSequence = () => {
      switch (animStep) {
        case 1:
          // STEP 1 — Roadmap visible, M0 active, others locked
          setLoopOpacity(1);
          setActiveMilestone(0);
          setExpandedMilestones({ 0: false });
          setActiveSession(null);
          setExpandedSessions({});
          setCompletedActivities({});
          setCompletedActivitiesDetail({});
          setSession1Progress(0);
          setSession2Progress(0);
          setShowS1Summary(false);
          setShowS2Summary(false);
          setCelebrationSession(null);
          setActiveRewardCard(null);
          setSessionBadges({});
          setMilestoneProgress(2);
          setMilestone1Locked(true);
          setActiveActivityIdx(null);
          setSpotlightTarget("milestone-0");
          setViewportY(0);
          setRoadmapPathProgress(0);
          setLockShake(false);
          setLockGlowBurst(false);
          setLockGreenCheck(false);

          autoplayTimerRef.current = setTimeout(() => {
            setAnimStep(2);
          }, 1500);
          break;

        case 2:
          // STEP 2 — Milestone 0 expands downward to reveal Sessions
          setExpandedMilestones({ 0: true });
          setSpotlightTarget("milestone-0-card");
          setViewportY(20);

          autoplayTimerRef.current = setTimeout(() => {
            setAnimStep(3);
          }, 1500);
          break;

        case 3:
          // STEP 3 — Automatically expand Session 1 inline.
          setActiveSession(1);
          setExpandedSessions({ 1: true });
          setSpotlightTarget("session-1-card");
          setViewportY(50);

          autoplayTimerRef.current = setTimeout(() => {
            setAnimStep(4);
          }, 1500);
          break;

        case 4:
          // STEP 4 — Study activities inside Session 1 (complete + show rewards)
          // Activity 1
          setActiveActivityIdx(0);
          setSpotlightTarget("s1-activity-0");
          
          autoplayTimerRef.current = setTimeout(() => {
            // 1. Mark complete & Show Reward card
            setCompletedActivities(prev => ({ ...prev, "1-1": true }));
            setActiveRewardCard({
              sessionNum: 1,
              activityId: 1,
              title: "Excellent Work! 🎉",
              accuracy: "96%",
              reward: "Take a relaxing 5-minute tea or coffee break.",
            });

            // 2. Dismiss card & update inline stats
            autoplayTimerRef.current = setTimeout(() => {
              setActiveRewardCard(null);
              setCompletedActivitiesDetail(prev => ({
                ...prev,
                "1-1": { accuracy: "96%", score: "19/20", time: "8m", reward: "🎁 Tea Break" }
              }));
              setSession1Progress(25);

              // Activity 2
              autoplayTimerRef.current = setTimeout(() => {
                setActiveActivityIdx(1);
                setSpotlightTarget("s1-activity-1");

                autoplayTimerRef.current = setTimeout(() => {
                  setCompletedActivities(prev => ({ ...prev, "1-1": true, "1-2": true }));
                  setActiveRewardCard({
                    sessionNum: 1,
                    activityId: 2,
                    title: "Great Progress! 🚀",
                    accuracy: "91%",
                    reward: "Scroll Instagram for exactly 3 minutes.",
                  });

                  autoplayTimerRef.current = setTimeout(() => {
                    setActiveRewardCard(null);
                    setCompletedActivitiesDetail(prev => ({
                      ...prev,
                      "1-2": { accuracy: "91%", score: "18/20", time: "12m", reward: "📱 Instagram" }
                    }));
                    setSession1Progress(50);

                    // Activity 3
                    autoplayTimerRef.current = setTimeout(() => {
                      setActiveActivityIdx(2);
                      setSpotlightTarget("s1-activity-2");

                      autoplayTimerRef.current = setTimeout(() => {
                        setCompletedActivities(prev => ({ ...prev, "1-1": true, "1-2": true, "1-3": true }));
                        setActiveRewardCard({
                          sessionNum: 1,
                          activityId: 3,
                          title: "Awesome Focus 🔥",
                          accuracy: "85%",
                          reward: "Stretch for 2 minutes. Drink a glass of water.",
                        });

                        autoplayTimerRef.current = setTimeout(() => {
                          setActiveRewardCard(null);
                          setCompletedActivitiesDetail(prev => ({
                            ...prev,
                            "1-3": { accuracy: "85%", score: "17/20", time: "15m", reward: "💧 Water Break" }
                          }));
                          setSession1Progress(75);

                          // Activity 4
                          autoplayTimerRef.current = setTimeout(() => {
                            setActiveActivityIdx(3);
                            setSpotlightTarget("s1-activity-3");

                            autoplayTimerRef.current = setTimeout(() => {
                              setCompletedActivities(prev => ({ ...prev, "1-1": true, "1-2": true, "1-3": true, "1-4": true }));
                              setActiveRewardCard({
                                sessionNum: 1,
                                activityId: 4,
                                title: "Keep Going 💪",
                                accuracy: "78%",
                                reward: "Take 10 deep breaths. You're building consistency.",
                              });

                              autoplayTimerRef.current = setTimeout(() => {
                                setActiveRewardCard(null);
                                setCompletedActivitiesDetail(prev => ({
                                  ...prev,
                                  "1-4": { accuracy: "78%", score: "15/20", time: "6m", reward: "🧘 Deep Breaths" }
                                }));
                                setSession1Progress(100);

                                // Slide down Performance summary
                                autoplayTimerRef.current = setTimeout(() => {
                                  setShowS1Summary(true);
                                  setSpotlightTarget("s1-summary");
                                  setViewportY(80);

                                  // Celebration overlay
                                  autoplayTimerRef.current = setTimeout(() => {
                                    setCelebrationSession(1);

                                    autoplayTimerRef.current = setTimeout(() => {
                                      setCelebrationSession(null);
                                      setSessionBadges(prev => ({ ...prev, 1: "silver" }));
                                      
                                      autoplayTimerRef.current = setTimeout(() => {
                                        setAnimStep(5);
                                      }, 300);
                                    }, 3000);
                                  }, 3200);
                                }, 600);
                              }, 2000);
                            }, 1000);
                          }, 1000);
                        }, 2000);
                      }, 1000);
                    }, 1000);
                  }, 2000);
                }, 1000);
              }, 1000);
            }, 2000);
          }, 1000);
          break;

        case 5:
          // STEP 5 — Collapse Session 1
          setExpandedSessions({ 1: false });
          setActiveActivityIdx(null);
          setSpotlightTarget("session-1-card");
          setViewportY(30);

          autoplayTimerRef.current = setTimeout(() => {
            setAnimStep(6);
          }, 1500);
          break;

        case 6:
          // STEP 6 — Expand Session 2 inline. Complete activities, rewards, summary.
          setActiveSession(2);
          setExpandedSessions({ 1: false, 2: true });
          setSpotlightTarget("session-2-card");
          setViewportY(80);

          autoplayTimerRef.current = setTimeout(() => {
            // Activity 1
            setActiveActivityIdx(0);
            setSpotlightTarget("s2-activity-0");

            autoplayTimerRef.current = setTimeout(() => {
              setCompletedActivities(prev => ({ ...prev, "1-1": true, "1-2": true, "1-3": true, "1-4": true, "2-1": true }));
              setActiveRewardCard({
                sessionNum: 2,
                activityId: 1,
                title: "Excellent Concentration ⭐",
                accuracy: "92%",
                reward: "Take a relaxing 5-minute coffee break.",
              });

              autoplayTimerRef.current = setTimeout(() => {
                setActiveRewardCard(null);
                setCompletedActivitiesDetail(prev => ({
                  ...prev,
                  "2-1": { accuracy: "92%", score: "9/10", time: "7m", reward: "☕ Coffee Break" }
                }));
                setSession2Progress(50);

                // Activity 2
                autoplayTimerRef.current = setTimeout(() => {
                  setActiveActivityIdx(1);
                  setSpotlightTarget("s2-activity-1");

                  autoplayTimerRef.current = setTimeout(() => {
                    setCompletedActivities(prev => ({ ...prev, "1-1": true, "1-2": true, "1-3": true, "1-4": true, "2-1": true, "2-2": true }));
                    setActiveRewardCard({
                      sessionNum: 2,
                      activityId: 2,
                      title: "Nice Improvement 📈",
                      accuracy: "88%",
                      reward: "Walk around the room for 3 minutes.",
                    });

                    autoplayTimerRef.current = setTimeout(() => {
                      setActiveRewardCard(null);
                      setCompletedActivitiesDetail(prev => ({
                        ...prev,
                        "2-2": { accuracy: "88%", score: "8/10", time: "11m", reward: "🚶 Walk Break" }
                      }));
                      setSession2Progress(100);

                      // Show summary
                      autoplayTimerRef.current = setTimeout(() => {
                        setShowS2Summary(true);
                        setSpotlightTarget("s2-summary");
                        setViewportY(120);

                        // Trigger Celebration (Gold badge!)
                        autoplayTimerRef.current = setTimeout(() => {
                          setCelebrationSession(2);

                          autoplayTimerRef.current = setTimeout(() => {
                            setCelebrationSession(null);
                            setSessionBadges(prev => ({ ...prev, 1: "silver", 2: "gold" }));

                            // Collapse Session 2
                            setExpandedSessions({ 2: false });
                            setActiveActivityIdx(null);
                            setViewportY(20);
                            
                            autoplayTimerRef.current = setTimeout(() => {
                              setAnimStep(7);
                            }, 1200);
                          }, 3000);
                        }, 3200);
                      }, 600);
                    }, 2000);
                  }, 1000);
                }, 1000);
              }, 2000);
            }, 1000);
          }, 1200);
          break;

        case 7: {
          // STEP 7 — Collapse all sessions. Milestone becomes COMPLETE.
          setExpandedMilestones({ 0: true });
          setSpotlightTarget("milestone-0-card");
          setViewportY(0);

          // Animate progress counters to complete
          const stepsArr = [15, 38, 77];
          stepsArr.forEach((val, i) => {
            setTimeout(() => {
              setMilestoneProgress(val);
            }, i * 400);
          });

          autoplayTimerRef.current = setTimeout(() => {
            setAnimStep(8);
          }, 2000);
          break;
        }

        case 8: {
          // STEP 8 — Unlock Milestone 1
          if (pathIntervalRef.current) clearInterval(pathIntervalRef.current);
          let pathTick = 0;
          pathIntervalRef.current = setInterval(() => {
            pathTick += 10;
            setRoadmapPathProgress(pathTick);
            if (pathTick >= 100) {
              clearInterval(pathIntervalRef.current);
              pathIntervalRef.current = null;
            }
          }, 50);

          autoplayTimerRef.current = setTimeout(() => {
            setSpotlightTarget("milestone-1");
            setLockShake(true);

            autoplayTimerRef.current = setTimeout(() => {
              setLockShake(false);
              setLockGlowBurst(true);
              setMilestone1Locked(false);

              autoplayTimerRef.current = setTimeout(() => {
                setLockGreenCheck(true);

                autoplayTimerRef.current = setTimeout(() => {
                  setAnimStep(9);
                }, 1500);
              }, 800);
            }, 800);
          }, 1200);
          break;
        }

        case 9:
          // STEP 9 — Loop reset morph
          setLoopOpacity(0.15);
          autoplayTimerRef.current = setTimeout(() => {
            setAnimStep(1);
          }, 1200);
          break;

        default:
          break;
      }
    };

    runSequence();

    return () => {
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
      if (pathIntervalRef.current) {
        clearInterval(pathIntervalRef.current);
        pathIntervalRef.current = null;
      }
    };
  }, [animStep, isAutoPlaying]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (pathIntervalRef.current) clearInterval(pathIntervalRef.current);
    };
  }, []);

  return (
    <div
      className="w-full bg-[#070A0F] rounded-[32px] border border-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300"
      style={{ opacity: loopOpacity, transition: "opacity 0.8s ease-in-out" }}
    >
      
      {/* Blurred Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <motion.div
          className="absolute -top-16 -left-16 w-72 h-72 bg-indigo-500/10 rounded-full blur-[90px]"
          animate={{ x: [0, 40, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 30, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Sequencer Info Bar */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-white/[0.05] pb-5">
        <div>
          <span className="text-[9px] font-black tracking-widest text-[#9B8FFF] uppercase bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20">
            Guided Learning Walkthrough
          </span>
          <p className="text-[11px] text-slate-400 font-semibold mt-1.5 leading-none">
            Watch studying activities, adaptive reward notifications, and performance summaries.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (isAutoPlaying) {
                setIsAutoPlaying(false);
                if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
              } else {
                setIsAutoPlaying(true);
                setAnimStep(1);
              }
            }}
            className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 hover:bg-white/5 transition-colors shadow-sm bg-slate-900/50 text-white"
          >
            {isAutoPlaying ? (
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                Pause Sequencer
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Play Sequencer
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ROADMAP SECTION */}
      <div className="relative z-20 mb-8">
        <div className="relative overflow-x-auto pb-4 pt-2 no-scrollbar">
          {/* Path Line */}
          <div className="absolute top-[28px] left-[20px] right-[20px] h-[3px] bg-slate-800 z-0 rounded-full" />
          
          <div
            className="absolute top-[28px] left-[20px] h-[3px] bg-[#5B4DFF] z-0 rounded-full shadow-[0_0_8px_rgba(91,77,255,0.7)] transition-all duration-300"
            style={{ width: `${roadmapPathProgress}%` }}
          />

          <div className="flex justify-between items-center gap-4 relative z-10 min-w-[640px] px-2">
            {milestones.map((m) => {
              const isActive = activeMilestone === m.id;
              const isUnlocked = m.id === 0 || (m.id === 1 && !milestone1Locked);
              const isCompleted = m.id === 0 && milestoneProgress === 77;
              
              const isSpotlit = spotlightTarget === `milestone-${m.id}`;

              return (
                <button
                  key={m.id}
                  onClick={() => {
                    handleUserClick(`milestone-${m.id}`, () => {
                      setActiveMilestone(m.id);
                      if (m.id === 0) setExpandedMilestones({ 0: !expandedMilestones[0] });
                    });
                  }}
                  className={`flex flex-col items-center gap-2 group shrink-0 focus:outline-none transition-transform duration-300 ${
                    isUnlocked ? "cursor-pointer" : "cursor-not-allowed opacity-45"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xs border relative transition-all duration-500 ${
                      isActive
                        ? "bg-[#5B4DFF] border-[#5B4DFF] text-white shadow-[0_0_15px_rgba(91,77,255,0.4)] scale-110"
                        : isCompleted
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        : isUnlocked
                        ? "bg-slate-900 border-slate-700 text-[#9B8FFF] hover:bg-slate-800"
                        : "bg-slate-950 border-slate-800 text-slate-600"
                    }`}
                    style={m.id === 1 && lockShake ? { transform: "rotate(-12deg) scale(1.05)" } : {}}
                  >
                    {isSpotlit && (
                      <motion.div
                        layoutId="spotlight"
                        className="absolute inset-0 bg-[#5B4DFF]/15 border border-[#5B4DFF]/50 rounded-2xl -z-10 shadow-[0_0_20px_rgba(91,77,255,0.3)]"
                        transition={SPRING_BOUNCY}
                      />
                    )}

                    {m.id === 1 && milestone1Locked && <Lock size={12} className="text-[#9B8FFF]" />}
                    {m.id === 1 && !milestone1Locked && (
                      <motion.div initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={SPRING_BOUNCY}>
                        {lockGreenCheck ? (
                          <Check size={14} className="text-white" strokeWidth={3} />
                        ) : (
                          <Unlock size={12} className="text-white" />
                        )}
                      </motion.div>
                    )}

                    {m.id > 1 && <Lock size={12} className="text-slate-700" />}
                    {m.id === 0 && !isCompleted && <span>M0</span>}
                    {isCompleted && <Check size={14} className="text-white" strokeWidth={3} />}

                    {/* Radial glow burst climax */}
                    {m.id === 1 && lockGlowBurst && (
                      <motion.div
                        className="absolute w-full h-full rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 pointer-events-none -z-20"
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    )}
                  </div>
                  <span className={`text-[10px] font-bold ${isActive ? "text-[#9B8FFF]" : "text-slate-500"}`}>
                    M{m.id}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SESSIONS CONTAINER (NESTED WORKSPACE) */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto w-full"
        animate={{ y: -viewportY }}
        transition={SPRING_SMOOTH}
      >
        <AnimatePresence mode="wait">
          {activeMilestone === 0 && expandedMilestones[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={SPRING_BOUNCY}
              className="bg-slate-900/40 border border-white/[0.04] p-5 sm:p-6 rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative"
            >
              {/* Celebration overlay */}
              <AnimatePresence>
                {celebrationSession === 1 && (
                  <CelebrationOverlay
                    sessionNum={1}
                    stats={{ score: "82%", accuracy: "91%", time: "42 min" }}
                    tier="silver"
                    onDismiss={() => setCelebrationSession(null)}
                  />
                )}
                {celebrationSession === 2 && (
                  <CelebrationOverlay
                    sessionNum={2}
                    stats={{ score: "92%", accuracy: "96%", time: "25 min" }}
                    tier="gold"
                    onDismiss={() => setCelebrationSession(null)}
                  />
                )}
              </AnimatePresence>

              {spotlightTarget === "milestone-0-card" && (
                <motion.div
                  layoutId="spotlight"
                  className="absolute inset-0 bg-white/[0.01] border border-[#5B4DFF]/15 rounded-[28px] -z-10 shadow-[0_0_30px_rgba(91,77,255,0.05)]"
                  transition={SPRING_BOUNCY}
                />
              )}

              {/* Milestone header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/[0.05] pb-4">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Milestone 0: Foundations</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-1">
                    Progress: {milestoneProgress}/77 activities complete
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-wide">Milestone Status</span>
                    <p className={`text-[10px] font-black uppercase mt-0.5 ${
                      milestoneProgress === 77 ? "text-emerald-400" : "text-[#9B8FFF]"
                    }`}>
                      {milestoneProgress === 77 ? "Complete" : "In Progress"}
                    </p>
                  </div>
                  {milestoneProgress === 77 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={SPRING_BOUNCY}
                      className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white"
                    >
                      <Check size={12} strokeWidth={3} />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Sessions Tree List */}
              <div className="flex flex-col gap-4">
                
                {/* Session 1 */}
                <div className="relative">
                  <SessionRow
                    sessionNum={1}
                    title="Arithmetic Core Concepts"
                    duration="45 mins"
                    progress={session1Progress}
                    isActive={activeSession === 1}
                    isExpanded={!!expandedSessions[1]}
                    isCompleted={session1Progress === 100}
                    badge={sessionBadges[1]}
                    onClick={() => {
                      handleUserClick("session-1-card", () => {
                        setActiveSession(1);
                        setExpandedSessions({ 1: !expandedSessions[1] });
                      });
                    }}
                  />

                  {spotlightTarget === "session-1-card" && (
                    <motion.div
                      layoutId="spotlight"
                      className="absolute inset-0 bg-[#5B4DFF]/5 border border-[#5B4DFF]/20 rounded-2xl -z-10 shadow-[0_0_15px_rgba(91,77,255,0.15)]"
                      transition={SPRING_BOUNCY}
                    />
                  )}

                  {/* Expanded block containing Summary and Activities inline */}
                  <AnimatePresence>
                    {expandedSessions[1] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={SPRING_SMOOTH}
                        className="overflow-hidden pl-5 sm:pl-8 pr-1 mt-3 flex flex-col gap-3 border-l border-white/[0.04] ml-5 sm:ml-6 relative"
                      >
                        {/* Motivation Reward Overlay Popup */}
                        <AnimatePresence>
                          {activeRewardCard && activeRewardCard.sessionNum === 1 && (
                            <MotivationRewardCard
                              title={activeRewardCard.title}
                              accuracy={activeRewardCard.accuracy}
                              reward={activeRewardCard.reward}
                              onDismiss={() => setActiveRewardCard(null)}
                            />
                          )}
                        </AnimatePresence>

                        {/* Session 1 Performance Summary Panel */}
                        {showS1Summary && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={SPRING_SMOOTH}
                            className="bg-[#080c12]/80 border border-white/[0.03] p-4 rounded-xl relative"
                          >
                            {spotlightTarget === "s1-summary" && (
                              <motion.div
                                layoutId="spotlight"
                                className="absolute inset-0 bg-[#5B4DFF]/5 border border-[#5B4DFF]/20 rounded-xl -z-10"
                                transition={SPRING_BOUNCY}
                              />
                            )}
                            <h6 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2.5">
                              Session 1 Performance Summary
                            </h6>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              <AnimatedMetricCard label="Avg Score" value="82%" delay={0} />
                              <AnimatedMetricCard label="Accuracy" value="91%" delay={100} />
                              <AnimatedMetricCard label="Attempted" value="18/20" delay={200} />
                              <AnimatedMetricCard label="Total Time" value="42 min" delay={300} />
                              <AnimatedMetricCard label="Avg Time/Q" value="2m 20s" delay={400} />
                              <AnimatedMetricCard label="XP Earned" value="+120" delay={500} />
                            </div>
                          </motion.div>
                        )}

                        {/* Activities list */}
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider mb-1">Session Activities</span>
                          {s1Activities.map((act, index) => {
                            const isCompleted = !!completedActivities[`1-${act.id}`];
                            const isSpotlit = spotlightTarget === `s1-activity-${index}`;
                            const detail = completedActivitiesDetail[`1-${act.id}`];

                            return (
                              <div key={act.id} className="relative py-1">
                                {isSpotlit && (
                                  <motion.div
                                    layoutId="spotlight"
                                    className="absolute inset-0 bg-[#5B4DFF]/10 border border-[#5B4DFF]/45 rounded-xl -z-10 shadow-[0_0_12px_rgba(91,77,255,0.2)]"
                                    transition={SPRING_BOUNCY}
                                  />
                                )}
                                <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border transition-all duration-300 gap-2 ${
                                  isCompleted
                                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                                    : activeActivityIdx === index && spotlightTarget.startsWith("s1-")
                                    ? "bg-slate-900 border-[#5B4DFF]/30 text-white"
                                    : "bg-slate-900/40 border-white/[0.02] text-slate-400 hover:bg-slate-900/80"
                                }`}>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                      <span className="text-[10px] font-black text-slate-500">{act.id}</span>
                                      <div className={`w-2 h-2 rounded-full ${ACTIVITY_STYLES[act.type]?.dot}`} />
                                      <span className="text-xs font-bold">{act.title}</span>
                                    </div>
                                    
                                    {/* Completed Activity Summary Info */}
                                    {isCompleted && detail && (
                                      <div className="pl-8 flex items-center gap-2 flex-wrap text-[9px] text-slate-400 font-semibold leading-none">
                                        <span>Accuracy: <strong className="text-white">{detail.accuracy}</strong></span>
                                        <span>•</span>
                                        <span>Score: <strong className="text-white">{detail.score}</strong></span>
                                        <span>•</span>
                                        <span>Time: <strong className="text-white">{detail.time}</strong></span>
                                        <span>•</span>
                                        <span className="text-[#9B8FFF] font-black">{detail.reward}</span>
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-2 self-end sm:self-center">
                                    <span className={`text-[8.5px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded ${
                                      ACTIVITY_STYLES[act.type]?.bg
                                    }`}>
                                      {ACTIVITY_STYLES[act.type]?.label}
                                    </span>
                                    {isCompleted ? (
                                      <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={SPRING_BOUNCY}
                                        className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center"
                                      >
                                        <Check size={10} strokeWidth={4} />
                                      </motion.span>
                                    ) : (
                                      <ChevronRight size={12} className="text-slate-600" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Session 2 */}
                <div className="relative">
                  <SessionRow
                    sessionNum={2}
                    title="Equations & Arrangements"
                    duration="30 mins"
                    progress={session2Progress}
                    isActive={activeSession === 2}
                    isExpanded={!!expandedSessions[2]}
                    isCompleted={session2Progress === 100}
                    badge={sessionBadges[2]}
                    onClick={() => {
                      handleUserClick("session-2-card", () => {
                        setActiveSession(2);
                        setExpandedSessions({ 2: !expandedSessions[2] });
                      });
                    }}
                  />

                  {spotlightTarget === "session-2-card" && (
                    <motion.div
                      layoutId="spotlight"
                      className="absolute inset-0 bg-[#5B4DFF]/5 border border-[#5B4DFF]/20 rounded-2xl -z-10 shadow-[0_0_15px_rgba(91,77,255,0.15)]"
                      transition={SPRING_BOUNCY}
                    />
                  )}

                  {/* Expanded block for Session 2 summary and activities */}
                  <AnimatePresence>
                    {expandedSessions[2] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={SPRING_SMOOTH}
                        className="overflow-hidden pl-5 sm:pl-8 pr-1 mt-3 flex flex-col gap-3 border-l border-white/[0.04] ml-5 sm:ml-6 relative"
                      >
                        {/* Motivation rewards overlay inside session 2 */}
                        <AnimatePresence>
                          {activeRewardCard && activeRewardCard.sessionNum === 2 && (
                            <MotivationRewardCard
                              title={activeRewardCard.title}
                              accuracy={activeRewardCard.accuracy}
                              reward={activeRewardCard.reward}
                              onDismiss={() => setActiveRewardCard(null)}
                            />
                          )}
                        </AnimatePresence>

                        {/* Session 2 Performance Summary */}
                        {showS2Summary && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={SPRING_SMOOTH}
                            className="bg-[#080c12]/80 border border-white/[0.03] p-4 rounded-xl relative"
                          >
                            {spotlightTarget === "s2-summary" && (
                              <motion.div
                                layoutId="spotlight"
                                className="absolute inset-0 bg-[#5B4DFF]/5 border border-[#5B4DFF]/20 rounded-xl -z-10"
                                transition={SPRING_BOUNCY}
                              />
                            )}
                            <h6 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2.5">
                              Session 2 Performance Summary
                            </h6>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              <AnimatedMetricCard label="Avg Score" value="88%" delay={0} />
                              <AnimatedMetricCard label="Accuracy" value="95%" delay={100} />
                              <AnimatedMetricCard label="Attempted" value="10/10" delay={200} />
                              <AnimatedMetricCard label="Total Time" value="25 min" delay={300} />
                              <AnimatedMetricCard label="Avg Time/Q" value="2m 30s" delay={400} />
                              <AnimatedMetricCard label="XP Earned" value="+80" delay={500} />
                            </div>
                          </motion.div>
                        )}

                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider mb-1">Session Activities</span>
                          {s2Activities.map((act, index) => {
                            const isCompleted = !!completedActivities[`2-${act.id}`];
                            const isSpotlit = spotlightTarget === `s2-activity-${index}`;
                            const detail = completedActivitiesDetail[`2-${act.id}`];

                            return (
                              <div key={act.id} className="relative py-1">
                                {isSpotlit && (
                                  <motion.div
                                    layoutId="spotlight"
                                    className="absolute inset-0 bg-[#5B4DFF]/10 border border-[#5B4DFF]/45 rounded-xl -z-10 shadow-[0_0_12px_rgba(91,77,255,0.2)]"
                                    transition={SPRING_BOUNCY}
                                  />
                                )}
                                <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border transition-all duration-300 gap-2 ${
                                  isCompleted
                                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                                    : activeActivityIdx === index && spotlightTarget.startsWith("s2-")
                                    ? "bg-slate-900 border-[#5B4DFF]/30 text-white"
                                    : "bg-slate-900/40 border-white/[0.02] text-slate-400 hover:bg-slate-900/80"
                                }`}>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                      <span className="text-[10px] font-black text-slate-500">{act.id}</span>
                                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                                      <span className="text-xs font-bold">{act.title}</span>
                                    </div>
                                    
                                    {/* Session 2 Activity stats update */}
                                    {isCompleted && detail && (
                                      <div className="pl-8 flex items-center gap-2 flex-wrap text-[9px] text-slate-400 font-semibold leading-none">
                                        <span>Accuracy: <strong className="text-white">{detail.accuracy}</strong></span>
                                        <span>•</span>
                                        <span>Score: <strong className="text-white">{detail.score}</strong></span>
                                        <span>•</span>
                                        <span>Time: <strong className="text-white">{detail.time}</strong></span>
                                        <span>•</span>
                                        <span className="text-[#9B8FFF] font-black">{detail.reward}</span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2 self-end sm:self-center">
                                    <span className={`text-[8.5px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded ${
                                      ACTIVITY_STYLES[act.type]?.bg
                                    }`}>
                                      {ACTIVITY_STYLES[act.type]?.label}
                                    </span>
                                    {isCompleted ? (
                                      <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={SPRING_BOUNCY}
                                        className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center"
                                      >
                                        <Check size={10} strokeWidth={4} />
                                      </motion.span>
                                    ) : (
                                      <ChevronRight size={12} className="text-slate-600" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Session 3-5 locked slots */}
                {[3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="border border-white/[0.02] bg-slate-950/40 p-4 rounded-2xl flex justify-between items-center opacity-40 select-none"
                  >
                    <span className="text-xs font-bold text-slate-500">Session {num}</span>
                    <Lock size={12} className="text-slate-700" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Milestone 1 overview preview */}
        <AnimatePresence>
          {activeMilestone === 1 && expandedMilestones[1] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-slate-900/40 border border-white/[0.04] p-6 rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] mt-4"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Milestone 1: Core Contenders</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-1">
                    Path unlocked &bull; Start Session 1 assignments
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#9B8FFF] font-black bg-[#9B8FFF]/10 border border-[#9B8FFF]/20 px-2.5 py-1 rounded">
                  <Sparkles size={12} className="animate-spin" />
                  Active Focus
                </div>
              </div>
              <div className="relative">
                <SessionRow
                  sessionNum={1}
                  title="Advanced Equations & Formula loops"
                  duration="60 mins"
                  progress={0}
                  isActive={true}
                  isExpanded={false}
                  onClick={() => {}}
                />
                {spotlightTarget === "session-1-m1" && (
                  <motion.div
                    layoutId="spotlight"
                    className="absolute inset-0 bg-[#5B4DFF]/5 border border-[#5B4DFF]/20 rounded-2xl -z-10 shadow-[0_0_15px_rgba(91,77,255,0.15)]"
                    transition={SPRING_BOUNCY}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}

// Inline Session Row Card
function SessionRow({ sessionNum, title, duration, progress, isActive, isExpanded, isCompleted, badge, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      transition={SPRING_BOUNCY}
      className={`w-full border text-left p-4 rounded-2xl flex flex-col gap-2 transition-all duration-300 bg-slate-900/45 ${
        isActive
          ? "border-[#5B4DFF]/30 shadow-[0_4px_15px_rgba(91,77,255,0.1)]"
          : "border-white/[0.02] hover:border-slate-800"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-black transition-all duration-300 relative ${
            isCompleted
              ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_8px_rgba(16,185,129,0.3)]"
              : isActive
              ? "bg-indigo-600/20 border-[#5B4DFF] text-[#9B8FFF]"
              : "bg-slate-950 border-slate-800 text-slate-500"
          }`}>
            {badge ? (
              <div className="scale-75"><MiniBadge tier={badge} /></div>
            ) : isCompleted ? (
              <Check size={12} strokeWidth={3} />
            ) : (
              sessionNum
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center">
              <h5 className={`text-xs font-bold leading-tight ${isActive ? "text-[#9B8FFF]" : "text-slate-300"}`}>
                Session {sessionNum}
              </h5>
              {badge && (
                <span className={`text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ml-2 border ${
                  badge === "gold"
                    ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                    : "bg-slate-500/10 border-slate-500/20 text-slate-400"
                }`}>
                  {badge}
                </span>
              )}
            </div>
            {title && (
              <span className="text-[10px] text-slate-400 font-medium leading-normal">
                {title}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Progress Ring with SVG stroke-dasharray animation */}
          <div className="relative w-6 h-6 shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-800"
                strokeWidth="4"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className={isCompleted ? "text-emerald-500" : "text-[#5B4DFF]"}
                strokeWidth="4"
                strokeDasharray={`${progress}, 100`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                transition={SPRING_SMOOTH}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[7px] font-black text-slate-400">
              {progress}%
            </span>
          </div>

          <div className="text-slate-500">
            <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </div>
        </div>
      </div>

      {/* Compact completed stats */}
      {isCompleted && !isExpanded ? (
        <div className="border-t border-white/[0.04] pt-2 mt-1 w-full flex items-center gap-2 flex-wrap text-[9px] text-slate-400 font-semibold">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Completed
          </span>
          <span className="text-slate-600">|</span>
          <span>Score: <strong className="text-white">{sessionNum === 1 ? "82%" : "92%"}</strong></span>
          <span className="text-slate-600">|</span>
          <span>Accuracy: <strong className="text-white">{sessionNum === 1 ? "91%" : "96%"}</strong></span>
          <span className="text-slate-600">|</span>
          <span>Time: <strong className="text-white">{sessionNum === 1 ? "42 min" : "25 min"}</strong></span>
        </div>
      ) : (
        <div className="border-t border-white/[0.04] pt-2 mt-1 w-full flex justify-between items-center">
          <span className="text-[9px] font-semibold text-slate-500">
            Duration: {duration}
          </span>
          {isActive && (
            <span className="text-[8px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
              Active Study
            </span>
          )}
        </div>
      )}
    </motion.button>
  );
}
