import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType, hash?: string) => void;
  currentView: ViewType;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewType, hash?: string) => {
    e.preventDefault();
    if (view === 'home' && hash) {
      onNavigate('home', hash);
    } else {
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { href: "https://x.com", icon: "fa-brands fa-x-twitter", label: "X (formerly Twitter)" },
    { href: "https://linkedin.com", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
    { href: "https://instagram.com", icon: "fa-brands fa-instagram", label: "Instagram" }
  ];

  return (
    <footer className="bg-[#0f172a] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            {/* Consistent Logo Mark */}
            {/* Logo — Badge + Stacked Text */}
            <div
              className="flex items-center gap-2.5 mb-8 cursor-pointer w-fit group"
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
                  style={{ background: 'linear-gradient(to right, #ffffff, #b19e9eff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >5Crown</span>
                <span className="text-[9px] font-semibold text-indigo-400/70 uppercase tracking-[0.3em]">Technologies</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Ready to build the <br /> extraordinary?
            </h3>
            <p className="text-slate-400 max-w-sm text-lg mb-8">
              Join the ranks of forward-thinking brands that choose 5Crown Technologies for their digital evolution.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-white/10 group/social relative"
                >
                  <i className={`${social.icon}`}></i>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-widest rounded opacity-0 group-hover/social:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {social.label.split(' ')[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors text-sm">Our Mastery</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="text-slate-400 hover:text-white transition-colors text-sm">How it Works</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'faq')} className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'team')} className="text-slate-400 hover:text-white transition-colors text-sm">The Collective</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'privacy')} className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'terms')} className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'trust')} className="text-slate-400 hover:text-white transition-colors text-sm">Trust & Security</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'cookies')} className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Settings</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, 'home', '#portfolio')} className="text-slate-400 hover:text-white transition-colors text-sm">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 5Crown Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-slate-500 text-xs flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> System Status: Operational
             </span>
             <span className="text-slate-500 text-xs uppercase tracking-[0.2em] flex items-center gap-1.5 font-bold">
               Precision Engineered with <i className="fa-solid fa-heart text-rose-500 animate-pulse"></i> in Pune
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;