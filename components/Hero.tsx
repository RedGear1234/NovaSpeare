
import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-visible">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] animate-pulse transition-all duration-[5000ms]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-wider mb-6 animate-bounce">
          <i className="fa-solid fa-sparkles"></i> REINVENTING DIGITAL EXCELLENCE
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1] animate-fadeInUp">
          We Build The <br />
          <span className="gradient-text">Future Of Digital</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed animate-fadeInUp stagger-1">
          Merging high-end aesthetics with cutting-edge AI to create digital experiences that don't just exist—they lead.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp stagger-2">
          <a 
            href="#portfolio" 
            onClick={(e) => handleButtonClick(e, '#portfolio')}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/20"
          >
            Visit Our Works
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleButtonClick(e, '#services')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-lg transition-all"
          >
            Our Expertise
          </a>
        </div>

        {/* Enhanced Partners Section */}
        <div className="mt-24 animate-fadeInUp stagger-3 relative">
          <div className="inline-block">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8">
              Trusted by industry disruptors
            </p>
            <div className="glass-effect px-10 py-8 rounded-[3rem] border border-white/5 shadow-2xl flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {logos.map((logo, i) => (
                <i 
                  key={i} 
                  className={`fa-brands ${logo.icon} text-3xl text-slate-600 transition-all duration-500 cursor-pointer ${logo.color} hover:scale-110 hover:opacity-100 opacity-60`}
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
