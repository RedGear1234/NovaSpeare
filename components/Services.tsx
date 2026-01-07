import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-16 pb-32 bg-transparent relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Expertise <br /> 
            <span className="gradient-text">Designed to Scale</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
            We specialize in bridging the gap between innovative technology and human-centric design to drive measurable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-effect p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500 border border-white/5 group hover:-translate-y-2 hover:border-indigo-500/30 flex flex-col h-full shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-10 shadow-lg shadow-indigo-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <i className={`fa-solid ${service.icon} text-white text-3xl`}></i>
              </div>
              <h4 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-300 transition-colors tracking-tight leading-tight">{service.title}</h4>
              <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow font-medium">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <a href="#" className="inline-flex items-center gap-2 text-indigo-400 text-xs font-black uppercase tracking-widest group-hover:text-indigo-300 transition-colors">
                  Learn Details <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                </a>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">ROI Focused</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;