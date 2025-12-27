
import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    // Since Hero is only on Home, we navigate to 'home' with the hash
    onNavigate('home', hash);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse transition-all duration-[5000ms]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-wider mb-6 animate-bounce">
          <i className="fa-solid fa-sparkles"></i> REINVENTING DIGITAL EXCELLENCE
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]">
          We Build The <br />
          <span className="gradient-text">Future Of Digital</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
          Merging high-end aesthetics with cutting-edge AI to create digital experiences that don't just exist—they lead.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <i className="fa-brands fa-google text-3xl"></i>
          <i className="fa-brands fa-microsoft text-3xl"></i>
          <i className="fa-brands fa-amazon text-3xl"></i>
          <i className="fa-brands fa-shopify text-3xl"></i>
          <i className="fa-brands fa-stripe text-3xl"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
