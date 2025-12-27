
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9]">
            Expertise <br /> 
            <span className="gradient-text">Designed to Scale</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
            We specialize in bridging the gap between innovative technology and human-centric design to drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-effect p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 border border-white/5 group hover:-translate-y-2 hover:border-indigo-500/30"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <i className={`fa-solid ${service.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest group-hover:text-indigo-300">
                Explore <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
