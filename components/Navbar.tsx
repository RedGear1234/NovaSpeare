
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => void;
  currentView: 'home' | 'services' | 'team' | 'privacy';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => {
    e.preventDefault();
    onNavigate(view, hash);
    setIsMobileMenuOpen(false);
    if (!hash && view !== currentView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Services', view: 'services' as const },
    { label: 'Team', view: 'team' as const },
    { label: 'Portfolio', view: 'home' as const, hash: '#portfolio' },
    { label: 'Client Tales', view: 'home' as const, hash: '#testimonials' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer z-[60]"
            onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <i className="fa-solid fa-bolt text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">NOVASPHERE</span>
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
        {/* Decorative Background for Mobile Menu */}
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
            AI Strategy Lab
          </a>
          
          <div className={`pt-12 flex gap-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <a href="#" className="text-slate-500 hover:text-white text-xl transition-colors"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-slate-500 hover:text-white text-xl transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-slate-500 hover:text-white text-xl transition-colors"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
