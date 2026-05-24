import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => void;
  onStartTour?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onStartTour }) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    onNavigate('home', hash);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-28 pb-16 md:pb-20 overflow-visible">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] animate-pulse transition-all duration-[5000ms]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] md:text-xs font-bold tracking-wider mb-6 animate-bounce">
          <i className="fa-solid fa-wand-magic-sparkles"></i> REINVENTING DIGITAL EXCELLENCE
        </div>
        
        <h1 className="text-[2.75rem] leading-[1.1] md:text-7xl lg:text-[8.5rem] font-black tracking-tighter text-white mb-8 md:leading-[0.85] animate-fadeInUp select-none">
          We Build The <br />
          <span className="gradient-text">Future Of Digital</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 mb-10 leading-relaxed animate-fadeInUp stagger-1 opacity-90 px-4 md:px-0">
          A results-driven Digital Marketing Agency in Pune offering SEO, PPC, Social Media, and Azure, Salesforce & Cloud Services in Pune.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp stagger-2">
          <a 
            href="#portfolio" 
            onClick={(e) => handleButtonClick(e, '#portfolio')}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/20"
          >
            Visit Our Works
          </a>
          <button 
            onClick={onStartTour}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 group"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </div>
            Experience Tour
          </button>
        </div>

        {/* Premium Digital Performance Dashboard Replacement */}
        <div className="mt-20 md:mt-24 animate-fadeInUp stagger-3 relative px-4 w-full flex justify-center">
          <div className="w-full max-w-4xl">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-6 opacity-80 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping"></span>
              Live Agency Performance & Digital Architecture Metrics
            </p>
            <div className="glass-effect p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-left relative overflow-hidden group/dashboard">
              {/* Decorative subtle ambient card glows */}
              <div className="absolute -inset-x-20 -top-20 h-40 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-[80px] opacity-0 group-hover/dashboard:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Stat 1: SEO */}
              <div className="group/stat cursor-pointer flex flex-col justify-between p-4 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-500 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover/stat:bg-indigo-500/20 transition-colors">
                    <i className="fa-solid fa-magnifying-glass-chart text-sm"></i>
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover/stat:translate-x-1 transition-transform duration-300">+240%</div>
                  <div className="text-[10px] font-bold text-slate-400 group-hover/stat:text-indigo-300 transition-colors mt-1 uppercase tracking-wider">SEO Visibility</div>
                  <div className="text-[9px] text-slate-500 mt-0.5 leading-snug">Average organic traffic lift</div>
                </div>
              </div>
              
              {/* Stat 2: PPC */}
              <div className="group/stat cursor-pointer flex flex-col justify-between p-4 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-500 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover/stat:bg-emerald-500/20 transition-colors">
                    <i className="fa-solid fa-rectangle-ad text-sm"></i>
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover/stat:translate-x-1 transition-transform duration-300">3.8x</div>
                  <div className="text-[10px] font-bold text-slate-400 group-hover/stat:text-emerald-300 transition-colors mt-1 uppercase tracking-wider">Paid Ads ROAS</div>
                  <div className="text-[9px] text-slate-500 mt-0.5 leading-snug">Direct return on campaign spend</div>
                </div>
              </div>

              {/* Stat 3: Cloud Uptime */}
              <div className="group/stat cursor-pointer flex flex-col justify-between p-4 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-500 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover/stat:bg-cyan-500/20 transition-colors">
                    <i className="fa-solid fa-cloud-arrow-up text-sm"></i>
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover/stat:translate-x-1 transition-transform duration-300">99.99%</div>
                  <div className="text-[10px] font-bold text-slate-400 group-hover/stat:text-cyan-300 transition-colors mt-1 uppercase tracking-wider">Azure Cloud</div>
                  <div className="text-[9px] text-slate-500 mt-0.5 leading-snug">Enterprise system reliability</div>
                </div>
              </div>

              {/* Stat 4: Salesforce CRM */}
              <div className="group/stat cursor-pointer flex flex-col justify-between p-4 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-500 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover/stat:bg-violet-500/20 transition-colors">
                    <i className="fa-solid fa-users-gear text-sm"></i>
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                  </span>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover/stat:translate-x-1 transition-transform duration-300">50M+</div>
                  <div className="text-[10px] font-bold text-slate-400 group-hover/stat:text-violet-300 transition-colors mt-1 uppercase tracking-wider">Salesforce CRM</div>
                  <div className="text-[9px] text-slate-500 mt-0.5 leading-snug">Automated pipelines tracked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
