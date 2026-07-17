import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function PrivacyPolicyPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 pb-20 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Legal
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-8">
          Privacy Policy
        </motion.h1>
        
        <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.015)] prose prose-slate max-w-none text-slate-600">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>
          <p>Welcome to TestRightNow. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, mobile application, and educational services.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h3>
          <p>We only collect information about you if we have a reason to do so—for example, to provide our Services, to communicate with you, or to make our Services better.</p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li><strong>Basic Account Information:</strong> To set up your account, we require basic information like your name and email address.</li>
            <li><strong>Usage Information:</strong> We collect information about your usage of our Services, such as your study progress, mock test scores, and interactions with the platform to provide personalized study plans.</li>
            <li><strong>Device and Log Data:</strong> We collect information that web browsers, mobile devices, and servers typically make available, such as IP address, browser type, device identifiers, and operating system.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Information</h3>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li>To provide, maintain, and improve our Services, including the personalized daily study plan.</li>
            <li>To monitor and analyze trends and usage.</li>
            <li>To communicate with you about offers, security alerts, and administrative messages.</li>
            <li>To fix problems with our Services.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Sharing Information</h3>
          <p>We do not sell your private personal information. We may share information about you in limited circumstances, such as with vendors who need to know information in order to help us provide our Services (e.g., payment providers, email delivery services), or when required by law.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Security</h3>
          <p>While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Changes</h3>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at support@testrightnow.com or call us at +91 9400325294.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function TermsOfServicePage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-24 pb-20 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.span variants={fadeUp} className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full uppercase tracking-wider">
          Legal
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.08] mt-4 mb-8">
          Terms of Service
        </motion.h1>
        
        <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.015)] prose prose-slate max-w-none text-slate-600">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>
          <p>These Terms of Service ("Terms") govern your access to and use of the TestRightNow website, products, and services ("Services"). Please read these Terms carefully.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h3>
          <p>By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Description of Service</h3>
          <p>TestRightNow provides an educational platform for CAT preparation, offering structured study plans, learning materials, practice tests, and analytics. We reserve the right to modify or discontinue any part of the Services at any time.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. User Accounts</h3>
          <p>You may need to create an account to use some of our Services. You are responsible for safeguarding your account, and you agree not to disclose your password to any third party. You are responsible for any activities or actions under your account.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Intellectual Property</h3>
          <p>The Services and its original content, features, and functionality are and will remain the exclusive property of TestRightNow and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Disclaimer</h3>
          <p>Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis. TestRightNow does not guarantee any specific outcomes, percentile scores, or admissions to educational institutions.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h3>
          <p>In no event shall TestRightNow, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
