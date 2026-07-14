import {
  ArrowRight,
  Brain,
  TrendingUp,
  Sparkles,
  Clock,
  Calendar,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  RefreshCw,
  BarChart2,
  Check,
  X,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";
import PhoneMockup from "./components/PhoneMockup";
import CrossPlatformSection from "./components/CrossPlatformSection";
import {
  GuidedLearningPreview,
  SmartSkippingPreview,
  FeaturesPreview,
  StrategyPage,
  GuidedLearningPage,
  HowItWorksPage,
  FeaturesPage,
  KnowledgeHubPage,
  FAQPage,
  AboutPage,
  CollegesPage,
  FinalPremiumCTA,
} from "./components/ExtendedSections";

import StickyHelpButton from "./components/StickyHelpButton";
import { STUDENT_APP_URL } from "./constants";

function App() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleOpenApp = () => {
    const refSessionId = localStorage.getItem("tr_session_id") || "";
    if (window.trackEvent) {
      window.trackEvent("pricing_cta_click", "Navigation");
    }

    setTimeout(() => {
      window.location.href = `${STUDENT_APP_URL}${refSessionId ? `/?refSessionId=${refSessionId}` : ""}`;
    }, 200);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className="bg-[#F8FAFC] min-h-screen font-['Inter'] selection:bg-indigo-100 selection:text-indigo-600 relative overflow-x-clip transition-opacity duration-500"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} onOpenPricing={handleOpenApp} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {currentPage === "home" && (
            <>
              {/* ── FIRST VIEWPORT: Hero + Credibility ── */}
              <div className="min-h-screen flex flex-col relative">
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-indigo-200/40 rounded-full blur-[100px]" />
                  <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-purple-100/40 rounded-full blur-[80px]" />
                </div>
                <main className="flex-1 w-full max-w-[1280px] mx-auto flex flex-col pt-[100px] lg:pt-[140px] pb-4 lg:pb-6 z-10 relative px-4 sm:px-6 lg:px-12 gap-6">
                  <HeroSection onNavigate={handleNavigate} onOpenPricing={handleOpenApp} />
                  <CredibilitySection />
                </main>
              </div>

              {/* ── STORY FLOW - BELOW THE FOLD ── */}

              {/* Step 1: Student recognises their pain */}
              <PainSection />

              {/* Step 2: Student understands why prep feels hard */}
              <WhySelfPrepFails />

              {/* Step 3: Student identifies themselves */}
              <WhoThisIsFor onOpenPricing={handleOpenApp} />

              {/* Step 4: Simple visual - random vs structured */}
              <VisualComparison />

              {/* Step 5: The system that solves it */}
              <WorkingProfessionalsSection />

              {/* Step 6: The 6-phase journey */}
              <JourneySection90Day onOpenPricing={handleOpenApp} />

              {/* Step 7: Features in depth */}
              <GuidedLearningPreview onNavigate={handleNavigate} />
              <SmartSkippingPreview onNavigate={handleNavigate} />
              <FeaturesPreview onNavigate={handleNavigate} />
              <CrossPlatformSection />

              {/* Step 8: Pricing - visible without a modal click */}
              <HomePricingSection onOpenPricing={handleOpenApp} />

              {/* Step 9: Authentic social proof */}


              {/* Step 10: Real objection FAQs */}
              <HomeFAQSection />
            </>
          )}

          {currentPage === "strategy" && <StrategyPage />}
          {currentPage === "guided-learning" && <GuidedLearningPage />}
          {currentPage === "how-it-works" && <HowItWorksPage />}
          {currentPage === "features" && <FeaturesPage />}
          {currentPage === "knowledge-hub" && <KnowledgeHubPage />}
          {currentPage === "faq" && <FAQPage />}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "colleges" && <CollegesPage />}

          {/* Render Premium CTA on all views */}
          <FinalPremiumCTA onNavigate={handleNavigate} onOpenPricing={handleOpenApp} />
        </motion.div>
      </AnimatePresence>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Sticky Help Button */}
      <StickyHelpButton />
    </div>
  );
}

/* ══════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════ */
function Navbar({ currentPage, setCurrentPage, onOpenPricing }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const MAIN_LINKS = [
    { label: "Features", page: "features" },
    { label: "Guided Learning", page: "guided-learning" },
    { label: "Strategy", page: "strategy" },
    { label: "How It Works", page: "how-it-works" },
    { label: "Colleges", page: "colleges" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 h-20 lg:h-24 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        {/* LOGO */}
        <button onClick={() => handleNav("home")} className="flex items-center">
          <img
            src={logo}
            alt="TestRightNow"
            className="h-[70px] md:h-[90px] lg:h-[110px] w-auto object-contain drop-shadow-sm"
            style={{ transform: "scale(1.45)", transformOrigin: "left center" }}
          />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {MAIN_LINKS.map(({ label, page }) => {
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`relative text-[13px] font-semibold transition-colors duration-200 group ${
                  isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-indigo-500 rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`relative text-[13px] font-semibold transition-colors duration-200 flex items-center gap-1 ${
                ["knowledge-hub", "faq", "about"].includes(currentPage)
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
            >
              Resources
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-lg border border-slate-100 rounded-2xl shadow-xl p-2 z-50 flex flex-col gap-1"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {[
                    { label: "Knowledge Hub", page: "knowledge-hub" },
                    { label: "FAQ", page: "faq" },
                    { label: "About Us", page: "about" },
                  ].map((item) => (
                    <button
                      key={item.page}
                      onClick={() => handleNav(item.page)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        currentPage === item.page
                          ? "bg-indigo-50 text-indigo-600 font-bold"
                          : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav("about")}
            className="hidden sm:block text-[13px] font-semibold text-slate-700 hover:text-slate-900 px-3 transition-colors"
          >
            About Us
          </button>
          <button
            onClick={onOpenPricing}
            className="h-9 px-5 rounded-xl bg-[#5B4DFF] text-white text-[13px] font-semibold shadow-[0_6px_16px_rgba(91,77,255,0.25)] hover:bg-[#4F42F0] transition-all"
          >
            Start Your CAT Journey
          </button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] ml-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              className="block w-5 h-[1.5px] bg-slate-800 rounded-full origin-center transition-transform"
            />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-[1.5px] bg-slate-800 rounded-full" />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              className="block w-5 h-[1.5px] bg-slate-800 rounded-full origin-center transition-transform"
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-lg px-6 pb-5 pt-4 flex flex-col gap-1 z-50 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            {[
              ...MAIN_LINKS,
              { label: "Knowledge Hub", page: "knowledge-hub" },
              { label: "FAQ", page: "faq" },
              { label: "About Us", page: "about" },
            ].map((item, i) => (
              <motion.button
                key={item.page}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(item.page)}
                className={`text-left py-3 px-2 text-[15px] font-medium border-b border-slate-50 last:border-0 transition-colors ${
                  currentPage === item.page ? "text-indigo-600 font-semibold" : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <button
              onClick={onOpenPricing}
              className="mt-3 h-11 rounded-xl bg-[#5B4DFF] text-white text-[14px] font-bold shadow-[0_6px_16px_rgba(91,77,255,0.25)] hover:bg-[#4F42F0] transition-all"
            >
              Start Your CAT Journey
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ══════════════════════════════════════════════
   HERO SECTION
   Core promise: "Stop deciding. Start preparing."
══════════════════════════════════════════════ */
const HERO_FEATURES = [
  { Icon: Calendar, title: "Daily Study Plan", text: "Know exactly what to study every day. Zero confusion." },
  { Icon: TrendingUp, title: "Smart Practice", text: "Every question you solve makes your next session smarter." },
  { Icon: Brain, title: "Understand Your Mistakes", text: "Know exactly where you're losing marks - and how to fix it." },
  { Icon: ShieldCheck, title: "Stay Consistent", text: "Built-in habit tracking keeps you moving - even on hard days." },
];

function HeroSection({ onOpenPricing }) {
  return (
    <section className="flex-1 flex items-center relative w-full py-4 lg:py-0">
      <div className="w-full grid lg:grid-cols-[38%_62%] items-center gap-4 lg:gap-6">
        {/* LEFT CONTENT - centered on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[500px] mx-auto lg:mx-0 text-center lg:text-left"
        >
          {/* Trust Badge */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/80 border border-indigo-100/80 shadow-[0_4px_16px_rgba(91,77,255,0.08)] backdrop-blur-sm mb-3"
          >
            <div className="w-5 h-5 rounded-lg bg-indigo-50 flex items-center justify-center">
              <GraduationCap size={10} className="text-indigo-500" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] font-semibold text-slate-600 leading-snug">
              Academic guidance by{" "}
              <span className="font-bold text-[#5B4DFF]">IIM Ahmedabad &amp; IIM Indore</span> Alumni
            </span>
          </motion.div>

          {/* Headline - sells the transformation */}
          <h1 className="text-[26px] sm:text-[34px] xl:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900">
            Stop Deciding
            <br />
            What to Study.
            <br />
            <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">
              Start Preparing.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] xl:text-[15px] leading-[1.6] text-slate-500 max-w-[420px] mx-auto lg:mx-0">
            TestRightNow gives you a daily study plan - so you always know exactly what to learn, practice, and revise. No confusion. No wasted days.
          </p>

          {/* Feature list - visible sm+ */}
          <div className="hidden sm:flex flex-col gap-2 mt-4">
            {HERO_FEATURES.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Icon size={13} />
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-bold text-slate-900 leading-none">{title}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="mt-5 flex justify-center lg:justify-start">
            <button
              onClick={onOpenPricing}
              className="h-12 px-8 rounded-2xl bg-[#5B4DFF] text-white text-[14px] font-bold flex items-center gap-2 shadow-[0_8px_24px_rgba(91,77,255,0.30)] hover:bg-[#4F42F0] hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              Start Your CAT Journey
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Helper text */}
          <p className="mt-4 text-[11px] text-slate-400 text-center lg:text-left">
            Questions before joining?{" "}
            <a
              href="tel:+919400325294"
              aria-label="Call us at +91 9400325294"
              className="font-semibold text-slate-500 hover:text-[#5B4DFF] transition-colors underline underline-offset-2 decoration-slate-300"
            >
              Talk to us: +91 9400325294
            </a>
          </p>
        </motion.div>

        {/* RIGHT - PHONE MOCKUP */}
        <PhoneMockup />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CREDIBILITY SECTION
   Tells the story, not just states the badge.
══════════════════════════════════════════════ */
function CredibilitySection() {
  return (
    <section className="w-full z-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#0B0F19] rounded-[20px] lg:rounded-[24px] px-5 py-5 sm:p-6 lg:px-10 lg:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 shadow-2xl relative overflow-hidden border border-slate-800/60"
      >
        <div className="absolute top-0 left-0 w-[400px] h-full bg-gradient-to-r from-indigo-500/10 to-transparent pointer-events-none" />

        <div className="max-w-[480px] relative z-10 text-left">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-amber-400/90 uppercase mb-2">
            <Sparkles size={12} className="text-amber-400" />
            Academic Guidance
          </div>
          <h3 className="text-[17px] sm:text-[20px] lg:text-[24px] font-bold text-white leading-[1.2] tracking-tight">
            Built by People Who Cracked CAT the Same Way You're Trying To.
          </h3>
          <p className="mt-2 text-[12px] sm:text-[13px] text-slate-400 leading-relaxed font-medium">
            The academic guidance behind TestRightNow is informed by IIM Ahmedabad and IIM Indore alumni who successfully cracked CAT through disciplined self-preparation - without expensive classroom coaching. This platform is built from that lived experience.
          </p>
          <p className="mt-2 text-[10px] text-slate-600 leading-relaxed italic">
            TestRightNow is an independent platform with no official affiliation with IIM Ahmedabad, IIM Indore, or any IIM.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 w-full md:w-auto">
          {["IIM Indore", "IIM Ahmedabad"].map((name) => (
            <div
              key={name}
              className="flex-1 md:w-[140px] lg:w-[175px] h-[70px] lg:h-[90px] rounded-[14px] overflow-hidden relative border border-white/5 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A2342] to-[#0A0E17]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <div className="w-7 h-7 rounded-full bg-white/10 mb-1 flex items-center justify-center border border-white/5">
                  <span className="text-white/80 text-[9px] font-bold">IIM</span>
                </div>
                <span className="text-white text-[11px] font-bold tracking-wide">{name}</span>
                <span className="text-slate-500 text-[8px] mt-0.5">Alumni Guided</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PAIN SECTION
   Create immediate recognition: "This is me."
══════════════════════════════════════════════ */
function PainSection() {
  const painPoints = [
    { text: "What should I study today?", delay: 0 },
    { text: "Am I making progress, or just going through the motions?", delay: 0.07 },
    { text: "Which mock should I attempt next?", delay: 0.14 },
    { text: "Should I revise this topic or move forward?", delay: 0.21 },
    { text: "Am I on track to crack CAT this year?", delay: 0.28 },
  ];

  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-block px-3 py-1 text-[11px] font-bold text-indigo-600 bg-indigo-50 rounded-full uppercase tracking-wider mb-3">
            Does This Sound Familiar?
          </span>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Every CAT Aspirant Faces These Questions.
            <br />
            <span className="text-[#5B4DFF]">Every. Single. Day.</span>
          </h2>
        </div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: point.delay }}
              className={`bg-white rounded-[18px] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-5 flex items-start gap-3 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 mt-0.5 text-[15px]">
                🤔
              </div>
              <p className="text-[14px] font-semibold text-slate-700 leading-snug">
                &ldquo;{point.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center"
        >
          <div className="inline-block bg-white rounded-2xl border border-indigo-100 shadow-[0_4px_24px_rgba(91,77,255,0.08)] px-6 py-4 max-w-xl">
            <p className="text-[14px] text-slate-600 leading-relaxed">
              This confusion doesn&apos;t mean you&apos;re unprepared.
              <br className="hidden sm:block" />
              It means you don&apos;t have a system yet.{" "}
              <span className="font-bold text-[#5B4DFF]">TestRightNow is that system.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   WHY SELF-PREP FAILS
   You have the content. You're missing the structure.
══════════════════════════════════════════════ */
function WhySelfPrepFails() {
  const haveItems = [
    "YouTube lectures",
    "Telegram study groups",
    "PDFs and notes",
    "ChatGPT for doubts",
    "Free practice papers",
    "Previous year questions",
  ];

  const missingItems = [
    "A daily study plan - ready every morning",
    "A structured revision schedule",
    "Clarity on what to prioritise first",
    "A way to know if you're actually improving",
    "Guidance on what to do after every mock",
    "A clear next step - every single day",
  ];

  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-[11px] font-bold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider mb-3">
            Why Most CAT Prep Feels Overwhelming
          </span>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            You Already Have Everything.
            <br />
            <span className="text-[#5B4DFF]">Except a Plan.</span>
          </h2>
          <p className="mt-3 text-[14px] text-slate-500 max-w-[520px] mx-auto leading-relaxed">
            The internet has more than enough CAT content. The real problem is that nobody tells you how to use it - in the right order, at the right time.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-6">
          {/* What you have */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#F8FAFC] rounded-[20px] border border-slate-200/80 p-6 lg:p-8"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-slate-200/80 flex items-center justify-center">
                <Check size={13} className="text-slate-500" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-600">What you already have</h3>
            </div>
            <div className="flex flex-col gap-3">
              {haveItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-slate-400 shrink-0" />
                  <span className="text-[13px] text-slate-500 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What's missing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[20px] border-2 border-[#5B4DFF]/15 p-6 lg:p-8 shadow-[0_4px_30px_rgba(91,77,255,0.07)]"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center">
                <X size={13} className="text-rose-500" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-900">What&apos;s actually missing</h3>
            </div>
            <div className="flex flex-col gap-3">
              {missingItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full border-2 border-rose-300 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  </div>
                  <span className="text-[13px] text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bridge banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#5B4DFF] rounded-[18px] px-6 py-5 text-center"
        >
          <p className="text-[15px] font-bold text-white leading-relaxed">
            The problem is not lack of content.{" "}
            <span className="text-indigo-200">
              TestRightNow was built to give you exactly what is missing - a structured daily preparation system.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   WHO THIS IS FOR
   Immediate audience identification.
══════════════════════════════════════════════ */
function WhoThisIsFor({ onOpenPricing }) {
  const audiences = [
    {
      emoji: "🎓",
      title: "Final Year Students",
      desc: "Preparing alongside academics. Need a structured plan that fits into a busy schedule without overwhelm.",
    },
    {
      emoji: "💼",
      title: "Working Professionals",
      desc: "1–2 focused hours a day is enough. The system adapts to your pace - no batch timings, no missed classes.",
    },
    {
      emoji: "🔰",
      title: "First-Time CAT Aspirants",
      desc: "Starting from scratch. The guided path takes you from basics to exam-ready - step by step, no gaps.",
    },
    {
      emoji: "📚",
      title: "Self-Preparing Candidates",
      desc: "Already studying on your own. Get the daily structure and revision system you've been missing.",
    },
  ];

  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#F8FAFC] to-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full uppercase tracking-wider mb-3">
            Who This Is For
          </span>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            TestRightNow Is Built for You
            <br />
            <span className="text-[#5B4DFF]">If You Are Serious About CAT.</span>
          </h2>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {audiences.map((audience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-[20px] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-3 hover:shadow-[0_8px_30px_rgba(91,77,255,0.08)] hover:border-indigo-100 transition-all duration-300"
            >
              <div className="text-[30px] leading-none">{audience.emoji}</div>
              <h3 className="text-[14px] font-bold text-slate-900 leading-snug">{audience.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">{audience.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[13px] text-slate-500 mb-4">
            Regardless of where you are in your preparation journey - TestRightNow gives you a clear next step.
          </p>
          <button
            onClick={onOpenPricing}
            className="inline-flex items-center gap-2 h-11 px-7 rounded-2xl bg-[#5B4DFF] text-white text-[13px] font-bold shadow-[0_6px_20px_rgba(91,77,255,0.25)] hover:bg-[#4F42F0] hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            Start Your CAT Journey
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   VISUAL COMPARISON
   Random prep vs. a structured system - simple, clean.
══════════════════════════════════════════════ */
function VisualComparison() {
  const randomPrep = [
    "Random YouTube videos",
    "Random PDFs and notes",
    "Random mock tests",
    "No revision plan",
    "No clear next step",
  ];

  const structured = [
    "Today's study task - ready on login",
    "Focused, purposeful practice",
    "Mock test with actionable analysis",
    "Automatic revision scheduling",
    "Clear next step - every single day",
  ];

  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-[11px] font-bold text-indigo-600 bg-indigo-50 rounded-full uppercase tracking-wider mb-3">
            The Difference
          </span>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Random Preparation vs.
            <br />
            <span className="text-[#5B4DFF]">A Structured System</span>
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-[1fr_64px_1fr] gap-4 lg:gap-0 items-stretch max-w-3xl mx-auto">
          {/* Random Prep */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 rounded-[20px] border border-slate-200/80 p-6 lg:p-8 lg:rounded-r-none lg:border-r-0"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400 shrink-0" />
              <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Random Preparation</h3>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {randomPrep.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                  <span className="text-[13px] text-slate-500">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-200">
              <span className="text-[15px] font-bold text-rose-500">→ Confusion &amp; Frustration</span>
            </div>
          </motion.div>

          {/* VS divider */}
          <div className="hidden lg:flex items-center justify-center bg-white border-y border-slate-200/80 z-10">
            <div className="w-10 h-10 rounded-full bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center shadow-sm">
              <span className="text-[11px] font-black text-[#5B4DFF]">VS</span>
            </div>
          </div>

          {/* TestRightNow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[20px] border-2 border-[#5B4DFF]/20 p-6 lg:p-8 shadow-[0_8px_30px_rgba(91,77,255,0.10)] lg:rounded-l-none"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-[#5B4DFF] shrink-0" />
              <h3 className="text-[12px] font-bold text-[#5B4DFF] uppercase tracking-wider">TestRightNow</h3>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {structured.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-[#5B4DFF] shrink-0" />
                  <span className="text-[13px] font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-indigo-100">
              <span className="text-[15px] font-bold text-[#5B4DFF]">→ Clarity &amp; Confidence</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   WORKING PROFESSIONALS / THE SYSTEM SECTION
   Rewritten: solution-focused, not sympathy-focused.
══════════════════════════════════════════════ */
function WorkingProfessionalsSection() {
  const systemCards = [
    {
      icon: <Calendar size={20} />,
      title: "Your Daily Study Plan - Ready Every Day",
      sub: "Log in every morning. See exactly what to study. No planning. No confusion. Just follow the plan.",
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Revision - Automatically Scheduled",
      sub: "The system schedules revision for you at exactly the right time. Nothing falls through the cracks.",
    },
    {
      icon: <BarChart2 size={20} />,
      title: "After Every Mock - Know What to Fix",
      sub: "Go beyond a percentile. Understand exactly where you're losing marks and get a targeted improvement plan.",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Track Real Progress Every Week",
      sub: "See clearly whether you're improving - and know precisely what needs to change.",
    },
  ];

  return (
    <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white rounded-[24px] lg:rounded-[28px] p-5 sm:p-6 lg:p-10 shadow-[0_4px_40px_-8px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center relative z-10 mb-6 lg:mb-8">
            <span className="inline-block px-3 py-1 text-[11px] font-bold text-indigo-600 bg-indigo-50 rounded-full uppercase tracking-wider mb-3">
              The TestRightNow System
            </span>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[30px] font-bold text-slate-900 tracking-tight leading-[1.2]">
              You Don&apos;t Need More Resources.
              <br className="hidden sm:block" />
              <span className="text-[#5B4DFF]">You Need a System That Uses Them.</span>
            </h2>
            <p className="mt-2 text-[13px] lg:text-[15px] text-slate-500 font-medium max-w-[540px] mx-auto leading-relaxed">
              Most CAT aspirants already have enough content. What they&apos;re missing is a daily plan that tells them exactly where to start, what to practice, and what to revise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative z-10">
            {systemCards.map(({ icon, title, sub }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div className="pt-0.5 text-left">
                  <p className="text-[14px] font-bold text-slate-900 leading-snug">{title}</p>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   YOUR 6-PHASE PREPARATION JOURNEY
   Based on the actual product architecture:
   6 Phases → 10 Milestones → Sessions → Activities
══════════════════════════════════════════════ */
function JourneySection90Day({ onOpenPricing }) {
  const stages = [
    {
      num: "Phase 1",
      title: "Foundation Builder",
      desc: "Build your first layer of concepts. Start with the fundamentals across all three sections - no overwhelm, no gaps.",
      color: "border-indigo-200 bg-indigo-50/80 text-indigo-800",
      tag: "Where every student starts",
    },
    {
      num: "Phase 2",
      title: "Core Foundation",
      desc: "Go deeper. Master the essential concepts across Quant, VARC, and DILR in the right order, session by session.",
      color: "border-violet-200 bg-violet-50/80 text-violet-800",
      tag: "Concepts + practice, mixed daily",
    },
    {
      num: "Phase 3",
      title: "Skill Development",
      desc: "Apply your knowledge to real CAT-level questions. Build speed, accuracy, and sectional confidence.",
      color: "border-purple-200 bg-purple-50/80 text-purple-800",
      tag: "CAT application begins",
    },
    {
      num: "Phase 4",
      title: "Competitive Builder",
      desc: "Raise your level. Practice under time pressure. Build exam instincts and learn to identify time traps instantly.",
      color: "border-blue-200 bg-blue-50/80 text-blue-800",
      tag: "Speed + strategy training",
    },
    {
      num: "Phase 5",
      title: "Performance Mastery",
      desc: "Full mock tests. Deep analysis after every attempt. Know exactly what to fix and how to fix it.",
      color: "border-teal-200 bg-teal-50/80 text-teal-800",
      tag: "Mocks + targeted improvement",
    },
    {
      num: "Phase 6",
      title: "CAT Readiness",
      desc: "Walk into CAT with a complete plan, full preparation, and real confidence. No last-minute confusion.",
      color: "border-emerald-200 bg-emerald-50/80 text-emerald-800",
      tag: "Exam day ready",
    },
  ];

  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block px-3 py-1 text-[11px] font-bold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider mb-3">
            Your Structured CAT Path
          </span>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Your Journey is Already Planned.
            <br />
            <span className="text-[#5B4DFF]">6 Phases. Every Day Mapped.</span>
          </h2>
          <p className="mt-3 text-[14px] text-slate-500 max-w-[540px] mx-auto leading-relaxed">
            TestRightNow is built on 6 transformation phases. Each phase has milestones. Each milestone has daily sessions. Each session has intentionally designed activities. You just follow today&apos;s plan.
          </p>
        </div>

        {/* Phase → Milestone → Session → Activity hierarchy label */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {["6 Phases", "→", "10 Milestones", "→", "Daily Sessions", "→", "Activities"].map((item, i) => (
            item === "→"
              ? <span key={i} className="text-slate-300 font-bold text-[13px]">→</span>
              : <span key={i} className={`px-3 py-1 rounded-full text-[11px] font-bold ${i === 0 ? "bg-[#5B4DFF] text-white" : "bg-slate-100 text-slate-600"}`}>{item}</span>
          ))}
        </div>

        {/* 6-Phase cards - 2×3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative flex flex-col p-5 rounded-[18px] border-2 ${stage.color}`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2">{stage.num}</span>
              <h4 className="text-[16px] font-extrabold leading-tight mb-2">{stage.title}</h4>
              <p className="text-[12px] opacity-75 leading-relaxed flex-1">{stage.desc}</p>
              <span className="mt-3 text-[10px] font-bold opacity-60 border border-current/30 rounded-full px-2.5 py-0.5 self-start">
                {stage.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Architecture note - the intentional daily mix */}
        <div className="bg-[#F8FAFC] rounded-[18px] border border-slate-100 px-6 py-5 text-center mb-8">
          <p className="text-[13px] text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">Every session is intentionally mixed.</span>{" "}
            Each day you learn new concepts, practise questions, revise previous topics, and apply skills - in the right combination. You never study one subject for weeks straight.
          </p>
        </div>

        <div className="text-center">
          <p className="text-[13px] text-slate-500 mb-4">
            The system decides the order. You just follow the plan - every day.
          </p>
          <button
            onClick={onOpenPricing}
            className="inline-flex items-center gap-2 h-11 px-7 rounded-2xl bg-[#5B4DFF] text-white text-[13px] font-bold shadow-[0_6px_20px_rgba(91,77,255,0.25)] hover:bg-[#4F42F0] hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            Begin Your Preparation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   HOMEPAGE PRICING SECTION
   Visible without a modal - ₹1,499 → ₹1,000.
══════════════════════════════════════════════ */
function HomePricingSection({ onOpenPricing }) {
  const included = [
    "Know exactly what to study every single day",
    "Automatic revision scheduling - nothing falls through",
    "Understand every mock result in depth",
    "Practice with purpose, not randomly",
    "Track your improvement week by week",
    "Complete guided learning journey - all milestones",
    "All future CAT 2026 content updates included",
  ];

  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-[11px] font-bold text-indigo-600 bg-indigo-50 rounded-full uppercase tracking-wider mb-3">
            CAT 2026 Enrollment
          </span>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Complete Preparation.
            <br />
            <span className="text-[#5B4DFF]">One Honest Price.</span>
          </h2>
          <p className="mt-3 text-[14px] text-slate-500">
            No subscriptions. No hidden fees. No coaching institute markup.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-2xl mx-auto bg-white rounded-[28px] border-2 border-[#5B4DFF]/15 shadow-[0_8px_40px_rgba(91,77,255,0.10)] p-6 sm:p-8 lg:p-10">
          {/* Price display */}
          <div className="text-center mb-6 pb-6 border-b border-slate-100">
            <div className="flex items-baseline justify-center gap-3 mb-1">
              <span className="text-[20px] text-slate-400 line-through font-semibold">₹1,499</span>
              <span className="text-[44px] sm:text-[52px] font-extrabold text-slate-900 leading-none">₹1,000</span>
            </div>
            <p className="text-[12px] font-semibold text-slate-500 mt-1">
              Current CAT 2026 Enrollment Pricing &nbsp;·&nbsp; One-Time Payment
            </p>
            <div className="mt-3 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#5B4DFF] animate-pulse shrink-0" />
              <span className="text-[11px] font-bold text-[#5B4DFF]">
                Instead of ₹30,000–₹80,000 in coaching fees
              </span>
            </div>
          </div>

          {/* What's included */}
          <div className="mb-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">What&apos;s Included</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={13} className="text-[#5B4DFF] mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span className="text-[12px] text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onOpenPricing}
            className="w-full py-3.5 rounded-2xl bg-[#5B4DFF] text-white text-[15px] font-bold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(91,77,255,0.30)] hover:bg-[#4F42F0] hover:scale-[1.01] active:scale-[0.99] transition-all group"
          >
            Start Your CAT Journey
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-center text-[11px] text-slate-400 mt-3">
            Start free to explore. Upgrade whenever you&apos;re ready.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5 pt-4 border-t border-slate-100">
            {[
              { icon: ShieldCheck, text: "Secure Payment" },
              { icon: Clock, text: "One-Time Payment" },
              { icon: Check, text: "No Hidden Charges" },
              { icon: GraduationCap, text: "Built by IIM Alumni" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
                <Icon size={12} className="text-[#5B4DFF]" strokeWidth={2.5} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



/* ══════════════════════════════════════════════
   HOMEPAGE FAQ SECTION
   Real conversion objections - not product docs.
══════════════════════════════════════════════ */
function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "I already watch YouTube. Why do I need TESTRIGHTNOW?",
      a: "YouTube gives content. TESTRIGHTNOW gives a complete preparation system. The student never has to decide what to study next.",
    },
    {
      q: "Can I prepare without joining expensive coaching?",
      a: "Yes. The platform is designed specifically for students and working professionals who prefer disciplined self-preparation instead of classroom coaching.",
    },
    {
      q: "I'm a complete beginner. Can I still start?",
      a: "Yes. The six-phase guided journey starts from fundamentals and gradually progresses to CAT-level preparation.",
    },
    {
      q: "I work full-time. Will I get enough time?",
      a: "Yes. Every session is designed as a manageable daily mission so students can make consistent progress without studying the entire day.",
    },
    {
      q: "Will I have to decide what to study every day?",
      a: "No. Every day's preparation has already been planned. Simply complete today's session and return tomorrow.",
    },
    {
      q: "Is this just another collection of videos, notes and PDFs?",
      a: "No. TESTRIGHTNOW is a structured preparation system that combines learning, practice, revision, previous-year questions and mock-based improvement into one guided daily journey.",
    },
    {
      q: "Why is the complete program only ₹1000?",
      a: "Because quality CAT preparation should be affordable. Our goal is to make structured preparation accessible to students and working professionals instead of charging coaching-level prices.",
    },
    {
      q: "What if I don't know where to begin?",
      a: "That's exactly why TESTRIGHTNOW exists. Open today's session. We'll guide you through the rest.",
    },
  ];

  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-[11px] font-bold text-slate-600 bg-white border border-slate-200 rounded-full uppercase tracking-wider mb-3">
            Questions Worth Asking
          </span>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            You&apos;re Probably Wondering...
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-white rounded-[16px] border border-slate-200/80 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-[14px] font-bold text-slate-900 hover:text-[#5B4DFF] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ml-4 transition-all duration-200 ${
                      isOpen
                        ? "bg-indigo-50 border-indigo-100 text-[#5B4DFF]"
                        : "bg-slate-50 border-slate-200 text-slate-400"
                    }`}
                  >
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-[13px] text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER - unchanged
══════════════════════════════════════════════ */
function Footer({ setCurrentPage }) {
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const FOOTER_SECTIONS = [
    {
      heading: "Product",
      links: [
        { label: "Features", page: "features" },
        { label: "Guided Learning", page: "guided-learning" },
        { label: "How It Works", page: "how-it-works" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", page: "about" },
        { label: "Target Colleges", page: "colleges" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Strategy", page: "strategy" },
        { label: "Knowledge Hub", page: "knowledge-hub" },
        { label: "FAQ", page: "faq" },
      ],
    },
  ];

  const CONTACT_PHONE = "+919400325294";
  const CONTACT_PHONE_DISPLAY = "+91 9400325294";
  const CONTACT_EMAIL = "testrightnow.edu@gmail.com";

  return (
    <footer className="bg-[#070B14] pt-8 lg:pt-10 pb-6 px-4 sm:px-6 lg:px-12 border-t border-white/5 z-40 relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-6 mb-8">
          <div className="col-span-2 lg:col-span-2 text-left">
            <div className="flex items-center mb-6">
              <button onClick={() => handleNav("home")} className="flex items-center">
                <img
                  src={logo}
                  alt="TestRightNow"
                  className="h-[70px] md:h-[90px] lg:h-[110px] w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)", transform: "scale(1.35)", transformOrigin: "left center" }}
                />
              </button>
            </div>
            <p className="text-[14px] text-slate-400 leading-relaxed max-w-[260px]">
              A smarter, transparent way to crack CAT. Focused completely on active practice and decision strategy.
            </p>
          </div>
          {FOOTER_SECTIONS.map(({ heading, links }) => (
            <div key={heading} className="text-left">
              <h4 className="text-[11px] font-bold text-white tracking-widest uppercase mb-4">{heading}</h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNav(link.page)}
                    className="text-[13px] text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Us column */}
          <div className="text-left">
            <h4 className="text-[11px] font-bold text-white tracking-widest uppercase mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3.5">
              <a
                href={`tel:${CONTACT_PHONE}`}
                aria-label={`Call us at ${CONTACT_PHONE_DISPLAY}`}
                className="flex items-start gap-2.5 group"
              >
                <Phone size={14} className="text-[#5B4DFF] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold leading-none mb-0.5">Phone</p>
                  <p className="text-[13px] text-slate-400 group-hover:text-white transition-colors font-medium">
                    {CONTACT_PHONE_DISPLAY}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`Email us at ${CONTACT_EMAIL}`}
                className="flex items-start gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <Mail size={14} className="text-[#5B4DFF]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold leading-none mb-0.5">Email</p>
                  <p className="text-[11px] text-slate-400 group-hover:text-white transition-colors font-medium">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-500">© {new Date().getFullYear()} TestRightNow. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[13px] mr-2 text-slate-500">Connect with us</span>
            {/* Twitter/X */}
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.264 5.634L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;