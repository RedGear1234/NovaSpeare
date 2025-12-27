
import React, { useEffect } from 'react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0f172a]">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg">Last Updated: May 24, 2024</p>
        </header>

        <div className="space-y-12">
          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-shield-halved text-indigo-500"></i>
              1. Introduction
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                At NovaSphere Digital ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI-powered digital agency services.
              </p>
              <p>
                By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
            </div>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-database text-purple-500"></i>
              2. Information We Collect
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-white font-bold mb-2">Personal Information</h3>
                <p>We may collect personal information such as your name, email address, and company details when you reach out to us or use our Strategy Lab.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">AI Interaction Data</h3>
                <p>When you interact with Nova (our AI assistant) or use the Strategy Lab, we collect the prompts and business details you provide. This data is used solely to generate the requested output and improve our internal AI workflows.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Usage Data</h3>
                <p>We automatically collect information on how you interact with our site, including IP addresses, browser types, and pages visited, to optimize our digital experience.</p>
              </div>
            </div>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-microchip text-pink-500"></i>
              3. AI & Third-Party Processing
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                To provide our high-end AI services, we utilize the Google Gemini API. Data sent to these models is processed according to Google's Enterprise Privacy standards. We do not sell your data to third parties.
              </p>
              <p>
                Your business details provided in the Strategy Lab are used to generate real-time insights but are not used to "train" public models without your explicit consent in a dedicated service agreement.
              </p>
            </div>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-lock text-emerald-500"></i>
              4. Data Security
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We implement industry-standard security measures, including SSL encryption and secure cloud storage, to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-envelope text-blue-500"></i>
              5. Contact Us
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact our Data Privacy Officer:
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 w-fit">
              <p className="text-white font-bold">Email: privacy@novasphere.digital</p>
              <p className="text-slate-400">Subject: Data Privacy Inquiry</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
