
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
    <section id="testimonials" className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">The <span className="gradient-text">Impact</span> We Create</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="glass-effect p-8 rounded-[2rem] border border-white/5 relative group hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/40">
                <i className="fa-solid fa-quote-left text-white text-xs"></i>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-500 text-[10px]"></i>
                ))}
              </div>

              <p className="text-slate-300 italic mb-8 leading-relaxed flex-grow">
                "{t.content}"
              </p>

              {/* Functional CTA Link */}
              <div className="mb-8">
                <a 
                  href={t.projectLink}
                  onClick={(e) => t.projectLink.startsWith('#') && handleInternalLink(e, t.projectLink)}
                  className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest hover:text-indigo-300 transition-colors"
                >
                  View Case Study <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border border-indigo-500/20 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <a 
                    href={t.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold hover:text-indigo-400 transition-colors block"
                  >
                    {t.role} @ <span className="underline decoration-indigo-500/30 underline-offset-4">{t.company}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Secondary Feedback CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">Want to see more results?</p>
          <a 
            href="#portfolio"
            onClick={(e) => handleInternalLink(e, '#portfolio')}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-sm transition-all inline-flex items-center gap-2"
          >
            Explore All Case Studies <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
