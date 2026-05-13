import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AtSign, Send, Play } from 'lucide-react';

const footerLinks = {
  'Product': ['Features', 'Guided Learning', 'Pricing', 'How It Works'],
  'Company': ['About Us', 'Contact Us'],
  'Resources': ['CAT Guide', 'Preparation Strategy', 'Blog', 'Success Stories'],
};

const socialLinks = [
  { icon: AtSign, label: 'Twitter', href: '#' },
  { icon: Send, label: 'Instagram', href: '#' },
  { icon: ExternalLink, label: 'LinkedIn', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <div className="w-8 h-8 rounded-full bg-[#5B4DFF] flex items-center justify-center">
                <span className="text-white font-black text-[10px]">💡</span>
              </div>
              <span className="font-bold text-white text-[20px] tracking-tight">
                Test<span className="text-white font-medium">RightNow</span>
              </span>
            </motion.a>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-[240px]">
              A smarter way to crack CAT.
              <br />Focus on strategy. Get 99+ percentile.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="col-span-1">
              <h4 className="text-white font-semibold text-[15px] mb-5">{section}</h4>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-[14px] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-white font-semibold text-[15px] mb-5">Connect with us</h4>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#5B4DFF]/20 flex items-center justify-center transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={14} className="text-slate-300 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/80">
          <p className="text-slate-500 text-[13px]">
            © {new Date().getFullYear()} TestRightNow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-500 hover:text-white text-[13px] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
