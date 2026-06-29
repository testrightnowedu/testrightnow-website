import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const PHONE = '+919400325294';
const PHONE_DISPLAY = '+91 9400325294';
const EMAIL = 'testrightnow.edu@gmail.com';

export default function StickyHelpButton() {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (
        popoverRef.current && !popoverRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-5 z-[300] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popoverRef}
            role="dialog"
            aria-label="Contact TESTRIGHTNOW"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-slate-100 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.14)] p-5 w-[260px] text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-black text-slate-900 tracking-tight">
                Contact TESTRIGHTNOW
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close contact popup"
                className="w-6 h-6 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <X size={12} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-4">
              <a
                href={`tel:${PHONE}`}
                aria-label={`Call us at ${PHONE_DISPLAY}`}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <Phone size={14} className="text-[#5B4DFF]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold leading-none mb-0.5">Phone</p>
                  <p className="text-[12px] font-bold text-slate-800 group-hover:text-[#5B4DFF] transition-colors">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                aria-label={`Email us at ${EMAIL}`}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <Mail size={14} className="text-[#5B4DFF]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold leading-none mb-0.5">Email</p>
                  <p className="text-[12px] font-bold text-slate-800 group-hover:text-[#5B4DFF] transition-colors break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <a
                href={`tel:${PHONE}`}
                aria-label="Call Now"
                className="flex-1 h-8 rounded-lg bg-[#5B4DFF] hover:bg-[#4F42F0] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1"
              >
                <Phone size={11} />
                Call Now
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Send Email"
                className="flex-1 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <Mail size={11} />
                Send Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative group">
        {/* Tooltip */}
        {!open && (
          <div
            aria-hidden="true"
            className="absolute bottom-full right-0 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none shadow-lg"
          >
            Need Help?
            <div className="absolute top-full right-4 border-4 border-transparent border-t-slate-900" />
          </div>
        )}
        <motion.button
          ref={buttonRef}
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Need Help? Contact us"
          aria-expanded={open}
          aria-haspopup="dialog"
          className="w-12 h-12 rounded-2xl bg-[#5B4DFF] hover:bg-[#4F42F0] text-white shadow-[0_8px_24px_rgba(91,77,255,0.40)] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="msg"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <MessageCircle size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
