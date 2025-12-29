import React from 'react';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  onNavigate?: (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('home', hash);
    }
  };

  return (
    <section id="testimonials" className="py-32 bg-transparent relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fadeInUp">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Client Feedback</span>
            <span className="w-8 h-[1px] bg-indigo-500"></span>
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
            The <span className="gradient-text">Impact</span> <br className="hidden md:block" /> We Create
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="glass-effect p-8 rounded-[2rem] border border-white/5 relative group hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/40">
                <i className="fa-solid fa-quote-left text-white text-xs"></i>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-500 text-[10px]"></i>
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed flex-grow">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-indigo-500/20 object-cover" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;