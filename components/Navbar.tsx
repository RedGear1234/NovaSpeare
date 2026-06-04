import React, { useState, useEffect } from 'react';
import { ViewType } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewType, hash?: string) => void;
  currentView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewType, hash?: string) => {
    e.preventDefault();
    onNavigate(view, hash);
    setIsMobileMenuOpen(false);
    if (!hash && view !== currentView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Services', view: 'services' as ViewType },
    { label: 'How it Works', view: 'how-it-works' as ViewType },
    { label: 'FAQ', view: 'faq' as ViewType },
    { label: 'Team', view: 'team' as ViewType },
    { label: 'Portfolio', view: 'home' as ViewType, hash: '#portfolio' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo — Badge + Stacked Text */}
          <div
            className="flex items-center gap-2.5 cursor-pointer z-[60] group"
            onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            {/* Badge — Animated Crown Icon */}
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)', perspective: '120px' }}
            >
              <i
                className="fa-solid fa-crown"
                style={{ fontSize: '13px', color: '#ffffff', animation: 'crownSpin 3s ease-in-out infinite', display: 'inline-block' }}
              ></i>
            </div>
            {/* Stacked Wordmark */}
            <div className="flex flex-col leading-none gap-0.5">
              <span
                className="text-[1.05rem] font-black tracking-tight"
                style={{ background: 'linear-gradient(to right, #ffffff, #b19e9eff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', textTransform: 'uppercase' }}
              >5Crown.</span>
              <span className="text-[9px] font-semibold text-indigo-400/70 uppercase tracking-[0.3em]">Technologies</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.hash || '#'} 
                onClick={(e) => handleLinkClick(e, link.view, link.hash)}
                className={`text-sm font-medium transition-colors ${currentView === link.view && !link.hash ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#ai-strategy" 
              onClick={(e) => handleLinkClick(e, 'home', '#ai-strategy')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-semibold transition-all"
            >
              AI Strategy Lab
            </a>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl z-[60] w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-[45] bg-[#0f172a] transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>

        <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
          {navLinks.map((link, i) => (
            <a 
              key={link.label}
              href={link.hash || '#'}
              onClick={(e) => handleLinkClick(e, link.view, link.hash)}
              className={`text-3xl font-black uppercase tracking-widest transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${currentView === link.view && !link.hash ? 'gradient-text' : 'text-slate-400 hover:text-white'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#ai-strategy" 
            onClick={(e) => handleLinkClick(e, 'home', '#ai-strategy')}
            className={`px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            AI  Lab
          </a>
        </div>
      </div>
      <style>{`
        @keyframes crownSpin {
          0%   { transform: rotateY(0deg);   color: #ffffff; filter: drop-shadow(0 0 5px rgba(255,255,255,0.95)); }
          25%  { transform: rotateY(90deg);  color: #a5b4fc; filter: drop-shadow(0 0 4px rgba(165,180,252,0.8)); }
          50%  { transform: rotateY(180deg); color: #e879f9; filter: drop-shadow(0 0 6px rgba(232,121,249,1)); }
          75%  { transform: rotateY(270deg); color: #f9a8d4; filter: drop-shadow(0 0 4px rgba(249,168,212,0.8)); }
          100% { transform: rotateY(360deg); color: #ffffff; filter: drop-shadow(0 0 5px rgba(255,255,255,0.95)); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
