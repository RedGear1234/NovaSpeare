import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => void;
  currentView: 'home' | 'services' | 'team' | 'privacy';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => {
    e.preventDefault();
    if (view === 'home' && hash) {
      onNavigate('home', hash);
    } else {
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f172a] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            {/* Consistent Logo Mark */}
            <div 
              className="flex items-center gap-4 mb-8 cursor-pointer w-fit group"
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 flex items-center justify-center">
                  <i className="fa-solid fa-circle-nodes text-white text-xs -rotate-45 group-hover:rotate-[-135deg] transition-transform duration-700"></i>
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-[0.15em] text-white">NOVASPHERE</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Ready to build the <br /> extraordinary?
            </h3>
            <p className="text-slate-400 max-w-sm text-lg mb-8">
              Join the ranks of forward-thinking brands that choose NovaSphere for their digital evolution.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-white/10">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-white/10">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-white/10">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors text-sm">Web Development</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors text-sm">AI Consulting</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors text-sm">Digital Branding</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors text-sm">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'team')} className="text-slate-400 hover:text-white transition-colors text-sm">Our Story</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, 'home', '#portfolio')} className="text-slate-400 hover:text-white transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'team')} className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'privacy')} className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 NovaSphere Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-slate-500 text-xs flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> System Status: Operational
             </span>
             <span className="text-slate-500 text-xs uppercase tracking-widest">
               Handcrafted in the future
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;