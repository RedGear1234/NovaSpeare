import React, { useEffect } from 'react';

const TermsOfServicePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0f172a] relative overflow-hidden">
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-fadeInUp">
            Legal Framework
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-400 text-lg">Effective Date: May 24, 2024</p>
        </header>

        <div className="space-y-12">
          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-file-contract text-indigo-500"></i>
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing NovaSphere Digital Agency's website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using this site and our services.
            </p>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-gear text-purple-500"></i>
              2. Service Provision
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                NovaSphere provides digital marketing, strategy consulting, and AI integration services. While we strive for maximum ROI and technical excellence, results are subject to market volatility and third-party platform algorithm changes (Google, Meta, etc.).
              </p>
              <p>
                We reserve the right to refuse service to any entity that promotes illegal activities, hate speech, or unethical business practices.
              </p>
            </div>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-copyright text-pink-500"></i>
              3. Intellectual Property
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Unless otherwise stated in a specific service agreement, all intellectual property rights for custom strategies and software developed by NovaSphere remain our property until full payment is received. Brand assets provided by the client remain the property of the client.
            </p>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-ban text-rose-500"></i>
              4. Limitations
            </h2>
            <p className="text-slate-300 leading-relaxed">
              In no event shall NovaSphere or its partners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-gavel text-emerald-500"></i>
              5. Governing Law
            </h2>
            <p className="text-slate-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Pune, Maharashtra, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;