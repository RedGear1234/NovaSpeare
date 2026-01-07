import React from 'react';
import { SERVICES, PROCESS_STEPS } from '../constants';
import ContactForm from '../components/ContactForm';

const ServicesPage: React.FC = () => {
  const handleScrollToConsultation = () => {
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technicalMeta = [
    { label: "Sensing", val: "Deep Logic" },
    { label: "Architecture", val: "Scalable" },
    { label: "Pulse", val: "High Freq" },
    { label: "Velocity", val: "Compounding" }
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Refined Page Header */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-indigo-500/50"></span>
            <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Solutions</span>
          </div>
          <h1 className="text-6xl md:text-[7rem] font-black text-white mb-10 leading-[0.85] tracking-tighter">
            Our Core <br /><span className="gradient-text">Mastery</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl font-medium opacity-80">
            Precision-engineered digital marketing solutions designed for high-growth businesses. We focus on ROI, not just clicks.
          </p>
        </div>
      </section>

      {/* Refined Services List */}
      <section className="max-w-7xl mx-auto px-6 space-y-48 relative z-10">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Left Content Column: The Craft */}
            <div className="flex-1 w-full space-y-10">
              <div className="space-y-6">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-12 shadow-2xl shadow-indigo-600/10 transition-transform duration-700 hover:rotate-6 hover:scale-105`}>
                  <i className={`fa-solid ${service.icon} text-white text-4xl`}></i>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">{service.title}</h2>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  {service.longDescription}
                </p>
              </div>

              {/* Clean Feature List */}
              <div className="space-y-4 pt-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-150 transition-transform duration-500`}></div>
                    <span className="text-slate-300 font-semibold text-base tracking-wide group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary Column: The Outcome Card */}
            <div className="flex-1 w-full">
              <div className="relative group">
                {/* Floating Background Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-1000 blur-3xl rounded-[4rem]`}></div>
                
                <div className="glass-effect rounded-[4rem] p-12 border border-white/5 relative z-10 shadow-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <i className={`fa-solid ${service.icon} text-[12rem] -rotate-12`}></i>
                  </div>
                  
                  <div className="relative z-10 space-y-12">
                    {/* Performance Profile */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Target Results</span>
                      </div>
                      <p className="text-3xl font-black text-white leading-[1.1] tracking-tight group-hover:gradient-text transition-all duration-500">
                        {service.resultsSummary}
                      </p>
                    </div>

                    <div className="w-full h-px bg-white/5"></div>

                    {/* Pro Insight */}
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-50"></div>
                      <div className="flex items-center gap-3 mb-4">
                        <i className="fa-solid fa-lightbulb text-amber-400 text-xs"></i>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Expert Insight</span>
                      </div>
                      <p className="text-lg font-medium text-slate-400 italic leading-relaxed">
                        "{service.proInsight}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ULTRA STYLISH PROCESS SECTION: THE PATH TO SCALE */}
      <section className="py-48 mt-32 relative overflow-visible">
        {/* Deep Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/[0.03] to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Operational Protocol v2.4</span>
            </div>
            <h3 className="text-5xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-[0.85]">
              The Path <br /><span className="gradient-text">To Scale</span>
            </h3>
            <p className="text-slate-400 text-xl font-medium opacity-70 max-w-2xl mx-auto italic">
              "Systematic growth isn't accidental. It's engineered."
            </p>
          </div>
          
          <div className="relative">
            {/* Energy Conduit Line (Desktop) */}
            <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 opacity-20 hidden lg:block pointer-events-none" viewBox="0 0 1200 100" fill="none">
              <path d="M0 50C150 50 300 20 450 20C600 20 750 80 900 80C1050 80 1200 50 1200 50" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="10 10" />
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <div 
                  key={i} 
                  className={`relative group transition-all duration-700 ${i % 2 === 0 ? 'lg:-translate-y-12' : 'lg:translate-y-12'}`}
                >
                  {/* Step Card */}
                  <div className="glass-effect rounded-[3.5rem] p-10 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 group-hover:bg-[#111827]/80 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.1)] h-full flex flex-col relative overflow-hidden">
                    
                    {/* Background "Ghost" Typography */}
                    <div className="absolute top-0 right-0 p-8 text-white/[0.03] text-[12rem] font-black italic select-none pointer-events-none group-hover:text-white/[0.07] transition-all duration-700 -rotate-12 translate-x-12 -translate-y-12">
                      {step.step}
                    </div>

                    {/* Technical Tagging */}
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-indigo-500">Phase_{step.step}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className="text-[7px] font-black uppercase tracking-widest text-emerald-500/80">System: Online</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-slate-600 group-hover:text-white group-hover:border-indigo-500/50 transition-all">
                        <i className="fa-solid fa-plus rotate-45 group-hover:rotate-0 transition-transform"></i>
                      </div>
                    </div>

                    <div className="flex-grow relative z-10">
                      <h4 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:gradient-text transition-all">
                        {step.title}
                      </h4>
                      <p className="text-slate-400 text-base leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="pt-10 mt-10 border-t border-white/5 relative z-10 flex flex-col gap-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-600 group-hover:text-indigo-400 transition-colors">Output Log</span>
                        <div className="h-px flex-grow mx-4 bg-white/5"></div>
                        <i className="fa-solid fa-chevron-right text-[8px] text-slate-700"></i>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <p className="text-[7px] font-black uppercase tracking-widest text-slate-500 mb-1">{technicalMeta[i].label}</p>
                          <p className="text-[10px] font-bold text-white tracking-wide">{technicalMeta[i].val}</p>
                        </div>
                        <div className="w-px h-8 bg-white/5"></div>
                        <div className="flex-1 text-right">
                          <p className="text-[7px] font-black uppercase tracking-widest text-slate-500 mb-1">Impact</p>
                          <p className="text-[10px] font-bold text-indigo-400">Validated</p>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-indigo-500/20 transition-all duration-700 rounded-tl-[3.5rem]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-pink-500/20 transition-all duration-700 rounded-br-[3.5rem]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="max-w-7xl mx-auto px-6 mt-40 pb-24 relative z-10">
        <div className="text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
            Ready To Initiate <br /> 
            <span className="gradient-text">Deployment?</span>
          </h2>
          <button 
            onClick={handleScrollToConsultation}
            className="px-16 py-7 bg-indigo-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-indigo-500 transition-all shadow-3xl shadow-indigo-600/30 hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto group"
          >
            Start Your Project 
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
              <i className="fa-solid fa-arrow-right-long text-sm"></i>
            </div>
          </button>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ServicesPage;