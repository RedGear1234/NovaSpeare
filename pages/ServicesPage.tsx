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
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-indigo-600/[0.02] blur-[150px] rounded-full -z-10"></div>
      
      {/* Refined Page Header with Abstract Visualization */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-indigo-500/50"></span>
              <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Solutions</span>
            </div>
            <h1 className="text-5xl md:text-[6.5rem] font-black text-white mb-10 leading-[0.9] tracking-tight">
              Our Core <br /><span className="gradient-text pr-4 pb-2 inline-block">Mastery</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl font-medium opacity-80 italic">
              "Precision-engineered digital marketing solutions designed for high-growth businesses. We focus on ROI, not just clicks."
            </p>
          </div>

          {/* Right Side: Capability Constellation Visual */}
          <div className="hidden lg:flex justify-center items-center relative h-[500px]">
            {/* The Neural Constellation */}
            <div className="relative w-80 h-80">
               {/* Central Orb */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_40px_white] z-20"></div>

               {/* Constellation Nodes */}
               <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                 {/* Node 1: SEO */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-effect w-16 h-16 rounded-full flex items-center justify-center border border-white/20 shadow-2xl -rotate-[spin_40s_linear_infinite]">
                    <i className="fa-solid fa-magnifying-glass-chart text-indigo-400"></i>
                 </div>
                 {/* Connection Line */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-1/2 bg-gradient-to-t from-white/40 to-transparent origin-top"></div>
               </div>

               <div className="absolute inset-0 animate-[spin_30s_linear_infinite_reverse]">
                  {/* Node 2: AI */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 glass-effect w-20 h-20 rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                    <i className="fa-solid fa-brain text-pink-400 text-xl"></i>
                  </div>
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-1/2 bg-gradient-to-b from-white/40 to-transparent origin-bottom"></div>
               </div>

               <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                  {/* Node 3: Growth */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 glass-effect w-14 h-14 rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                    <i className="fa-solid fa-chart-line text-emerald-400"></i>
                  </div>
                   {/* Connection Line */}
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-1/2 h-px bg-gradient-to-l from-white/40 to-transparent origin-left"></div>
               </div>
            </div>
            
            {/* Ambient Labels */}
            <div className="absolute top-10 right-0 glass-effect px-4 py-2 rounded-xl border border-white/10 opacity-40 hover:opacity-100 transition-opacity">
               <span className="text-[8px] font-black text-white uppercase tracking-widest">Logic_Synthesis_v4</span>
            </div>
            <div className="absolute bottom-10 left-0 glass-effect px-4 py-2 rounded-xl border border-white/10 opacity-40 hover:opacity-100 transition-opacity">
               <span className="text-[8px] font-black text-white uppercase tracking-widest">Growth_Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 space-y-48 relative z-10">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 w-full space-y-10">
              <div className="space-y-6">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-12 shadow-2xl shadow-indigo-600/10 transition-transform duration-700 hover:rotate-6 hover:scale-105`}>
                  <i className={`fa-solid ${service.icon} text-white text-4xl`}></i>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{service.title}</h2>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  {service.longDescription}
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-150 transition-transform duration-500`}></div>
                    <span className="text-slate-300 font-semibold text-base tracking-wide group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative group">
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-1000 blur-3xl rounded-[4rem]`}></div>
                
                <div className="glass-effect rounded-[4rem] p-12 border border-white/5 relative z-10 shadow-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <i className={`fa-solid ${service.icon} text-[12rem] -rotate-12`}></i>
                  </div>
                  
                  <div className="relative z-10 space-y-12">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Target Results</span>
                      </div>
                      <p className="text-2xl font-black text-white leading-[1.1] tracking-tight group-hover:gradient-text transition-all duration-500">
                        {service.resultsSummary}
                      </p>
                    </div>

                    <div className="w-full h-px bg-white/5"></div>

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

      {/* Process Section */}
      <section className="py-48 mt-32 relative overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/[0.01] to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <h3 className="text-5xl md:text-[6.5rem] font-black text-white mb-8 tracking-tighter leading-none">
              The Path <br /><span className="gradient-text">To Scale</span>
            </h3>
            <p className="text-slate-400 text-xl font-medium opacity-70 max-w-2xl mx-auto italic">
              "Systematic growth isn't accidental. It's engineered."
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className={`relative group transition-all duration-700 ${i % 2 === 0 ? 'lg:-translate-y-12' : 'lg:translate-y-12'}`}>
                <div className="glass-effect rounded-[3.5rem] p-10 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 group-hover:bg-[#111827]/80 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-white/[0.03] text-[10rem] font-black italic select-none pointer-events-none group-hover:text-white/[0.07] transition-all duration-700 -rotate-12 translate-x-12 -translate-y-12">
                    {step.step}
                  </div>
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-indigo-500">Phase_{step.step}</span>
                    <i className="fa-solid fa-plus rotate-45 group-hover:rotate-0 transition-transform text-[10px] text-slate-600"></i>
                  </div>
                  <div className="flex-grow relative z-10">
                    <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:gradient-text transition-all">{step.title}</h4>
                    <p className="text-slate-400 text-base leading-relaxed font-medium">{step.desc}</p>
                  </div>
                  <div className="pt-10 mt-10 border-t border-white/5 relative z-10 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] font-black uppercase tracking-widest text-slate-500 mb-1">{technicalMeta[i].label}</span>
                      <p className="text-[10px] font-bold text-white tracking-wide">{technicalMeta[i].val}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 mt-40 pb-24 relative z-10">
        <div className="text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Ready To Initiate <br /> 
            <span className="gradient-text">Deployment?</span>
          </h2>
          <button 
            onClick={handleScrollToConsultation}
            className="px-16 py-7 bg-indigo-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-indigo-500 transition-all shadow-3xl shadow-indigo-600/30 hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto group"
          >
            Start Your Project 
            <i className="fa-solid fa-arrow-right-long text-sm group-hover:translate-x-2 transition-transform"></i>
          </button>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ServicesPage;