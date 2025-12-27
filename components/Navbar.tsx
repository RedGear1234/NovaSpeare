
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => void;
  currentView: 'home' | 'services' | 'team' | 'privacy';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => {
    // If it's a subpage navigation (not an anchor on the current page)
    if (view !== currentView || hash) {
      e.preventDefault();
      onNavigate(view, hash);
      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-bolt text-white text-sm"></i>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">NOVASPHERE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, 'services')}
            className={`text-sm font-medium transition-colors ${currentView === 'services' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}
          >
            Services
          </a>
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, 'team')}
            className={`text-sm font-medium transition-colors ${currentView === 'team' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}
          >
            Team
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleLinkClick(e, 'home', '#portfolio')}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleLinkClick(e, 'home', '#testimonials')}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Client Tales
          </a>
          <a 
            href="#ai-strategy" 
            onClick={(e) => handleLinkClick(e, 'home', '#ai-strategy')}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-semibold transition-all"
          >
            AI Strategy Lab
          </a>
        </div>

        <button className="md:hidden text-white text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
