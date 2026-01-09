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
      
      {/* Hero Section with Refined 3D Array Graphic */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-indigo-500/50"></span>
              <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Solutions</span>
            </div>
            {/* Added extra padding-right to the gradient span to ensure 'y' in 'Mastery' is never clipped */}
            <h1 className="text-5xl md:text-[7rem] font-black text-white mb-10 leading-[0.85] tracking-tight">
              Our Core <br /><span className="gradient-text pr-6 pb-2 inline-block">Mastery</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl font-medium opacity-80 italic">
              "Precision-engineered digital marketing solutions designed for high-growth businesses. We focus on ROI, not just clicks."
            </p>
          </div>

          {/* Right Side: High-End 3D Logic Array Graphic */}
          <div className="hidden lg:flex justify-center items-center relative h-[600px] perspective-[1500px]">
            <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
              
              {/* Vertical Data Stream Lines */}
              <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.5}s` }}></div>
                ))}
              </div>

              {/* Central Power Core */}
              <div className="absolute z-20 w-32 h-32">
                <div className="absolute inset-0 bg-indigo-500 blur-[60px] opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full glass-effect rounded-[2rem] border border-white/20 rotate-45 shadow-[0_0_50px_rgba(99,102,241,0.2)] flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full blur-[2px] shadow-[0_0_30px_white] animate-pulse"></div>
                   <div className="absolute inset-0 border border-white/10 rounded-[2rem] animate-[spin_10s_linear_infinite]"></div>
                </div>
              </div>

              {/* Layered Holographic Logic Plates */}
              {/* Plate 1: Performance */}
              <div className="absolute z-30 transform -translate-x-32 -translate-y-20 rotate-x-[25deg] rotate-y-[-35deg] transition-all duration-700 hover:scale-110 cursor-default group/plate">
                <div className="glass-effect p-6 rounded-3xl border border-white/10 w-48 shadow-2xl backdrop-blur-xl group-hover/plate:border-indigo-500/50 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <i className="fa-solid fa-bolt text-indigo-400 text-xs"></i>
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Sys_Velocity</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                    <div className="h-full w-4/5 bg-indigo-500 animate-[loading_2s_linear_infinite]"></div>
                  </div>
                  <p className="text-white font-black text-xl tracking-tighter">MAX_SCALE</p>
                </div>
              </div>

              {/* Plate 2: AI Synthesis */}
              <div className="absolute z-10 transform translate-x-32 translate-y-20 rotate-x-[-15deg] rotate-y-[35deg] transition-all duration-700 hover:scale-110 cursor-default group/plate">
                <div className="glass-effect p-6 rounded-3xl border border-white/10 w-52 shadow-2xl backdrop-blur-xl group-hover/plate:border-pink-500/50 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <i className="fa-solid fa-brain text-pink-400 text-xs"></i>
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Neural_Sync</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <p className="text-white font-black text-xl tracking-tighter">AEO_OPTIMIZED</p>
                </div>
              </div>

              {/* Plate 3: Market Logic */}
              <div className="absolute z-40 transform translate-y-32 -translate-x-10 rotate-x-[40deg] transition-all duration-700 hover:scale-110 cursor-default group/plate">
                <div className="glass-effect p-5 rounded-3xl border border-white/10 w-56 shadow-2xl backdrop-blur-xl group-hover/plate:border-emerald-500/50 transition-colors">
                  <div className="flex gap-2 mb-3">
                    <div className="w-1 h-3 bg-indigo-500/40"></div>
                    <div className="w-1 h-5 bg-indigo-500/60"></div>
                    <div className="w-1 h-8 bg-indigo-500"></div>
                  </div>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Growth Index</p>
                  <p className="text-white font-black text-2xl tracking-tighter">420%_ROI</p>
                </div>
              </div>

              {/* Floating Tech Chips (Ambient) */}
              <div className="absolute top-1/4 left-1/4 animate-bounce duration-[4000ms] opacity-30">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[7px] text-white font-black uppercase tracking-[0.3em]">
                  Algorithmic_Edge
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 animate-bounce duration-[5000ms] delay-700 opacity-30">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[7px] text-white font-black uppercase tracking-[0.3em]">
                  Data_Synthesis
                </div>
              </div>

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
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;