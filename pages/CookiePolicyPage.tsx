import React, { useEffect } from 'react';

const CookiePolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0f172a] relative overflow-hidden">
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-fadeInUp">
            Privacy Transparency
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg">Last Updated: May 24, 2024</p>
        </header>

        <div className="space-y-12">
          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-cookie-bite text-amber-500"></i>
              What Are Cookies?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information. When you visit our website, we may collect information from you automatically through cookies or similar technology.
            </p>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-eye text-indigo-500"></i>
              How We Use Cookies
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-white font-bold mb-2">Essential Cookies</h3>
                <p>Necessary for the website to function properly. These cannot be disabled in our systems.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Analytics Cookies</h3>
                <p>We use Google Analytics to understand how visitors interact with our website, helping us improve performance and content.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Preference Cookies</h3>
                <p>These allow us to remember your choices (like your preferred time slot in the consultation form) to provide a better experience.</p>
              </div>
            </div>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-sliders text-purple-500"></i>
              Managing Your Cookies
            </h2>
            <p className="text-slate-300 leading-relaxed">
              You can set your browser not to accept cookies. However, in a few cases, some of our website features may not function as a result. For more information on how to manage cookies on your specific browser, please visit the browser's official support site.
            </p>
          </section>

          <section className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5 text-center">
            <p className="text-slate-300 mb-8">Have questions about our data protocols?</p>
            <a href="mailto:privacy@novasphere.digital" className="inline-block px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all">
              Contact Privacy Team
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;