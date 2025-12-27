
import React from 'react';
import { SERVICES, PROCESS_STEPS } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Our <span className="gradient-text">Capabilities</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We don't just provide services; we engineer digital evolution. Explore our core areas of expertise designed for the modern economy.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/20`}>
                <i className={`fa-solid ${service.icon} text-white text-3xl`}></i>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">{service.title}</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-200 bg-white/5 p-4 rounded-xl border border-white/5">
                    <i className="fa-solid fa-circle-check text-indigo-500"></i>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden bg-slate-800 border border-white/5 shadow-2xl relative group">
              <img 
                src={`https://picsum.photos/seed/${service.id}/1200/800`} 
                alt={service.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Our Process */}
      <section className="bg-slate-900/50 py-32 mt-32">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Our Method</h2>
          <h3 className="text-4xl font-black text-white">How We Deliver Excellence</h3>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-white/5 absolute -top-10 left-0 group-hover:text-indigo-500/10 transition-colors">
                {step.step}
              </div>
              <div className="relative z-10 pt-4">
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 mt-32">
        <div className="glass-effect rounded-[3rem] p-12 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need a custom solution?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Tell us about your project requirements and let's explore how our expertise can help you reach your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white text-[#0f172a] rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg transition-all">
                Download Service Deck
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
