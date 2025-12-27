
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Expertise designed to scale.</h3>
          <p className="text-slate-400 text-xl leading-relaxed">
            We specialize in bridging the gap between innovative technology and human-centric design to drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-effect p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 border border-white/5 group hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10`}>
                <i className={`fa-solid ${service.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
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
