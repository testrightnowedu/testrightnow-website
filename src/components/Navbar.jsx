import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { STUDENT_APP_URL } from '../constants';


const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Guided Learning', href: '#guided' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Pricing', href: '#pricing' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
        : 'bg-transparent'
        }`}
    >
      <div className="container h-[90px] lg:h-[110px] flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center group flex-shrink-0"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src={logo}
            alt="TestRightNow"
            className="h-[40px] sm:h-[46px] md:h-[52px] lg:h-[56px] w-auto object-contain drop-shadow-sm"
          />
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-bold text-slate-600 hover:text-[#5B4DFF] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
          <a
            href={STUDENT_APP_URL}
            className="text-[15px] font-bold text-[#0F172A] px-4 xl:px-6 py-2.5 rounded-xl border border-transparent hover:bg-slate-50 transition-all"
          >
            Log in
          </a>
          <motion.a
            href={STUDENT_APP_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-[15px] font-bold text-white bg-[#5B4DFF] px-6 xl:px-8 py-3 rounded-xl shadow-[0_4px_12px_rgba(91,77,255,0.2)] transition-all"
          >
            Start Practicing
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-2">
                <a href={STUDENT_APP_URL} className="text-lg font-bold text-slate-800">Login</a>
                <a href={STUDENT_APP_URL} className="bg-[#5B4DFF] text-white font-bold py-4 rounded-2xl">
                  Start Practicing
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
