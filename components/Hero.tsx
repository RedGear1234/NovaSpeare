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

  const logos = [
    { icon: 'fa-google', color: 'hover:text-red-500' },
    { icon: 'fa-microsoft', color: 'hover:text-blue-500' },
    { icon: 'fa-amazon', color: 'hover:text-orange-400' },
    { icon: 'fa-shopify', color: 'hover:text-green-500' },
    { icon: 'fa-stripe', color: 'hover:text-indigo-400' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-visible">
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

        {/* Enhanced Partners Section with Improved Contrast */}
        <div className="mt-20 md:mt-24 animate-fadeInUp stagger-3 relative px-4">
          <div className="inline-block w-full max-w-4xl">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 opacity-60">
              Trusted by 200+ local businesses | 5+ years serving Pune
            </p>
            <div className="glass-effect px-6 py-8 md:px-10 md:py-8 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 shadow-2xl flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {logos.map((logo, i) => (
                <i 
                  key={i} 
                  className={`fa-brands ${logo.icon} text-2xl md:text-3xl text-slate-400 transition-all duration-500 cursor-pointer ${logo.color} hover:scale-110 hover:opacity-100 opacity-50`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;