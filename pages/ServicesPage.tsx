
import React from 'react';
import { SERVICES, PROCESS_STEPS } from '../constants';
import ContactForm from '../components/ContactForm';

const ServicesPage: React.FC = () => {
  // Map icons to process steps for more visual meaning
  const processIcons = [
    'fa-magnifying-glass-chart',
    'fa-chess-knight',
    'fa-rocket',
    'fa-chart-line'
  ];

  const accentColors = [
    'border-blue-500/30 group-hover:shadow-blue-500/20',
    'border-purple-500/30 group-hover:shadow-purple-500/20',
    'border-pink-500/30 group-hover:shadow-pink-500/20',
    'border-emerald-500/30 group-hover:shadow-emerald-500/20'
  ];

  const iconColors = [
    'text-blue-400 bg-blue-500/10',
    'text-purple-400 bg-purple-500/10',
    'text-pink-400 bg-pink-500/10',
    'text-emerald-400 bg-emerald-500/10'
  ];

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
                src={`https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80`} 
                alt={service.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Our Process - Meaningful Redesign */}
      <section className="py-32 mt-32 relative overflow-hidden">
        {/* Section Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-slate-900/30 -z-10"></div>
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
              The Nova Methodology
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Engineering Your <br /> <span className="gradient-text">Breakthrough</span>
            </h3>
            <p className="text-slate-400 text-lg">
              Our four-stage strategic workflow is built on transparency, rapid iteration, and high-performance output.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="group relative h-full">
                  <div className={`glass-effect rounded-[2.5rem] p-8 md:p-10 border border-white/5 transition-all duration-500 hover:-translate-y-4 shadow-2xl h-full flex flex-col ${accentColors[i]}`}>
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center font-black text-white shadow-xl group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>

                    {/* Icon Header */}
                    <div className={`w-16 h-16 rounded-2xl ${iconColors[i]} flex items-center justify-center mb-8 border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <i className={`fa-solid ${processIcons[i]} text-2xl`}></i>
                    </div>

                    <div className="relative flex-grow">
                      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                        {step.title}
                      </h4>
                      <p className="text-slate-400 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>

                    {/* Subtle Progress Indicator Bar */}
                    <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden shrink-0">
                      <div className={`h-full w-0 group-hover:w-full transition-all duration-1000 ease-out bg-gradient-to-r ${SERVICES[i % SERVICES.length].color}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

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
