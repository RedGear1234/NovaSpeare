
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
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center gap-2 mb-8 cursor-pointer w-fit"
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-bolt text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">NOVASPHERE</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Ready to build the <br /> extraordinary?
            </h3>
            <p className="text-slate-400 max-w-sm text-lg mb-8">
              Join the ranks of forward-thinking brands that choose NovaSphere for their digital evolution.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors">AI Consulting</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors">Digital Branding</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'team')} className="text-slate-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, 'home', '#portfolio')} className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'team')} className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'privacy')} className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 NovaSphere Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-slate-500 text-sm flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full"></span> System Status: Operational
             </span>
             <span className="text-slate-500 text-sm">
               Made with <i className="fa-solid fa-heart text-red-500 mx-1"></i> in the Future
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
