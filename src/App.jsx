import {
  ArrowRight,
  Brain,
  Target,
  Clock3,
  BookOpen,
  Trophy,
  BarChart3,
  ChevronRight,
  Zap,
  TrendingUp,
  Sparkles,
  Briefcase,
  Clock,
  Calendar,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";
import PhoneMockup from "./components/PhoneMockup";
import CrossPlatformSection from "./components/CrossPlatformSection";
import { STUDENT_APP_URL } from "./constants";
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
import PricingModal from "./components/PricingModal";

function App() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} onOpenPricing={() => setIsPricingModalOpen(true)} />

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
              {/* FIRST VIEWPORT */}
              <div className="min-h-screen flex flex-col relative">
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-indigo-200/40 rounded-full blur-[100px]" />
                  <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-purple-100/40 rounded-full blur-[80px]" />
                </div>
                <main className="flex-1 w-full max-w-[1280px] mx-auto flex flex-col pt-[100px] lg:pt-[140px] pb-4 lg:pb-6 z-10 relative px-4 sm:px-6 lg:px-12 gap-6">
                  <HeroSection onNavigate={handleNavigate} onOpenPricing={() => setIsPricingModalOpen(true)} />
                  <CredibilitySection />
                </main>
              </div>

              <WorkingProfessionalsSection />
              <GuidedLearningPreview onNavigate={handleNavigate} />
              <SmartSkippingPreview onNavigate={handleNavigate} />
              <FeaturesPreview onNavigate={handleNavigate} />
              <CrossPlatformSection />
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
          <FinalPremiumCTA onNavigate={handleNavigate} onOpenPricing={() => setIsPricingModalOpen(true)} />
        </motion.div>
      </AnimatePresence>

      <Footer setCurrentPage={setCurrentPage} />

      <AnimatePresence>
        {isPricingModalOpen && (
          <PricingModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

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
            Start Practicing
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
              Start Practicing
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const HERO_FEATURES = [
  { Icon: BookOpen, title: "Guided Learning", text: "Follow a structured path designed by toppers." },
  { Icon: Brain, title: "Smart Practice", text: "Practice smart with AI powered insights." },
  { Icon: TrendingUp, title: "Track Progress", text: "Analyze performance and improve every day." },
  { Icon: Trophy, title: "Earn Rewards", text: "Get self motivating rewards that keep you going." },
];

function HeroSection({ onNavigate, onOpenPricing }) {
  return (
    <section className="flex-1 flex items-center relative w-full py-4 lg:py-0">
      <div className="w-full grid lg:grid-cols-[38%_62%] items-center gap-4 lg:gap-6">
        {/* LEFT CONTENT — centered on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[500px] mx-auto lg:mx-0 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/80 border border-indigo-100/80 shadow-[0_4px_16px_rgba(91,77,255,0.08)] backdrop-blur-sm mb-3"
          >
            <div className="w-5 h-5 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Trophy size={10} className="text-indigo-500" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] font-semibold text-slate-600 leading-snug">
              Built by <span className="font-bold text-[#5B4DFF]">IIM Indore &amp; IIM Ahmedabad</span> Crackers
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[26px] sm:text-[34px] xl:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900">
            Everything You Need
            <br />
            to Crack CAT.
            <br />
            <span className="bg-gradient-to-r from-[#5B4DFF] to-[#9B8FFF] bg-clip-text text-transparent">
              In One Smart App.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] xl:text-[15px] leading-[1.6] text-slate-500 max-w-[420px] mx-auto lg:mx-0">
            Self-study, done right. Structured paths, daily practice, smart analytics and rewards to help you crack CAT.
          </p>

          {/* Feature list — hidden on mobile, visible sm+ */}
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

          {/* CTA */}
          <div className="mt-5 flex justify-center lg:justify-start">
            <button
              onClick={onOpenPricing}
              className="h-12 px-8 rounded-2xl bg-[#5B4DFF] text-white text-[14px] font-bold flex items-center gap-2 shadow-[0_8px_24px_rgba(91,77,255,0.30)] hover:bg-[#4F42F0] hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              Start Your Journey
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT — PHONE MOCKUP */}
        <PhoneMockup />
      </div>
    </section>
  );
}

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
        <div className="max-w-[460px] relative z-10 text-left">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-amber-400/90 uppercase mb-2">
            <Sparkles size={12} className="text-amber-400" />
            Built by Top CAT Performers
          </div>
          <h3 className="text-[17px] sm:text-[20px] lg:text-[26px] font-bold text-white leading-[1.15] tracking-tight">
            We Cracked CAT Without Coaching. Now We Help You.
          </h3>
          <p className="mt-2 text-[12px] sm:text-[14px] text-slate-400 leading-relaxed font-medium">
            We know what it takes. Because we've been there.
          </p>
        </div>
        <div className="flex items-center gap-3 relative z-10 w-full md:w-auto">
          {["IIM Indore", "IIM Ahmedabad"].map((name) => (
            <div
              key={name}
              className="flex-1 md:w-[140px] lg:w-[180px] h-[64px] lg:h-[88px] rounded-[14px] overflow-hidden relative group border border-white/5 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A2342] to-[#0A0E17]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <div className="w-7 h-7 rounded-full bg-white/10 mb-1 flex items-center justify-center border border-white/5">
                  <span className="text-white/80 text-[9px] font-bold">IIM</span>
                </div>
                <span className="text-white text-[11px] font-bold tracking-wide">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function WorkingProfessionalsSection() {
  return (
    <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white rounded-[24px] lg:rounded-[28px] p-5 sm:p-6 lg:p-10 shadow-[0_4px_40px_-8px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center relative z-10 mb-6 lg:mb-8">
            <h2 className="text-[20px] sm:text-[24px] lg:text-[30px] font-bold text-slate-900 tracking-tight leading-[1.2]">
              Not Everyone Has Time for Full-Time Coaching.
              <br className="hidden sm:block" /> <span className="text-[#5B4DFF]">Come with us.</span>
            </h2>
            <p className="mt-2 text-[13px] lg:text-[15px] text-slate-500 font-medium max-w-[480px] mx-auto">
              We'll guide you. You just need a few hours a day and the consistency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative z-10">
            {[
              { icon: <Briefcase size={20} />, title: "Working or busy?", sub: "We get it." },
              { icon: <Clock size={20} />, title: "No time for coaching?", sub: "We guide you." },
              { icon: <Calendar size={20} />, title: "Spend a few hours comfortably.", sub: null },
              { icon: <ShieldCheck size={20} />, title: "Be consistent,", sub: "we'll take care of the rest." },
            ].map(({ icon, title, sub }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div className="pt-0.5 text-left">
                  <p className="text-[14px] font-bold text-slate-900 leading-snug">{title}</p>
                  {sub && <p className="text-[13px] text-slate-500 mt-0.5">{sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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

  return (
    <footer className="bg-[#070B14] pt-8 lg:pt-10 pb-6 px-4 sm:px-6 lg:px-12 border-t border-white/5 z-40 relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6 mb-8">
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
        </div>
        <div className="pt-6 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-500">© 2024 TestRightNow. All rights reserved.</p>
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
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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