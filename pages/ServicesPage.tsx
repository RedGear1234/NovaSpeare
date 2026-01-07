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

      {/* Refined Services List - More Minimalist */}
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

              {/* Clean Feature List - Removed boxy pills */}
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

                    {/* Pro Insight - Replaced the heavy box with a clean quote style */}
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

      {/* Refined Process Section - More Compact */}
      <section className="py-48 mt-32 relative bg-[#0f172a]/40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-5xl font-black text-white mb-6 tracking-tighter">The Path to <br /><span className="gradient-text">Scale</span></h3>
              <p className="text-slate-400 text-lg font-medium opacity-70">
                A systematic approach engineered for performance.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="px-6 py-3 rounded-full border border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Data Driven • Result Obsessed
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="group relative">
                <div className="relative z-10 space-y-6">
                  <div className="text-7xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors duration-500 mb-[-1.5rem] select-none">
                    {step.step}
                  </div>
                  <h4 className="text-2xl font-black text-white group-hover:text-indigo-400 transition-colors">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-400 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="max-w-7xl mx-auto px-6 mt-40 pb-24">
        <div className="text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Ready to shift <br /> gears?</h2>
          <button 
            onClick={handleScrollToConsultation}
            className="px-14 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xl hover:bg-indigo-500 transition-all shadow-3xl shadow-indigo-600/30 hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto"
          >
            Start Your Project <i className="fa-solid fa-arrow-right-long text-lg"></i>
          </button>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ServicesPage;