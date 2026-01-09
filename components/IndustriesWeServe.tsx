import React from 'react';

const IndustriesWeServe: React.FC = () => {
  const industries = [
    {
      title: "E-Commerce & Retail",
      desc: "Increase online sales and store traffic with AI-optimized funnels.",
      icon: "fa-cart-shopping",
      color: "from-blue-500 to-indigo-600",
      id: "SEC_01"
    },
    {
      title: "B2B Services",
      desc: "Generate qualified leads for high-ticket professional consulting.",
      icon: "fa-briefcase",
      color: "from-purple-500 to-indigo-500",
      id: "SEC_02"
    },
    {
      title: "Healthcare & Wellness",
      desc: "Attract new patients and build medical authority locally.",
      icon: "fa-heart-pulse",
      color: "from-emerald-500 to-teal-500",
      id: "SEC_03"
    },
    {
      title: "Real Estate",
      desc: "Drive high-intent property inquiries and physical viewings.",
      icon: "fa-house-chimney",
      color: "from-amber-500 to-orange-500",
      id: "SEC_04"
    },
    {
      title: "Education & Training",
      desc: "Increase student enrollments through targeted digital outreach.",
      icon: "fa-graduation-cap",
      color: "from-cyan-500 to-blue-500",
      id: "SEC_05"
    },
    {
      title: "Hospitality & Restaurants",
      desc: "Drive direct bookings and consistent weekend foot traffic.",
      icon: "fa-utensils",
      color: "from-rose-500 to-pink-500",
      id: "SEC_06"
    },
    {
      title: "Manufacturing & B2B",
      desc: "Global lead generation and industrial brand positioning.",
      icon: "fa-gears",
      color: "from-slate-500 to-slate-700",
      id: "SEC_07"
    },
    {
      title: "Financial Services",
      desc: "Client acquisition built on high-trust digital ecosystems.",
      icon: "fa-building-columns",
      color: "from-indigo-600 to-purple-600",
      id: "SEC_08"
    },
    {
      title: "Automotive",
      desc: "Targeted dealer leads and high-conversion test drive bookings.",
      icon: "fa-car",
      color: "from-red-500 to-orange-600",
      id: "SEC_09"
    },
    {
      title: "Technology & SaaS",
      desc: "Accelerate user acquisition and demo-to-close cycles.",
      icon: "fa-microchip",
      color: "from-blue-400 to-indigo-400",
      id: "SEC_10"
    }
  ];

  return (
    <section className="pt-8 pb-20 relative overflow-hidden bg-transparent">
      {/* Background Connective Tissue (Data Paths) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-indigo-500"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-indigo-500"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-indigo-500"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-indigo-500"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-indigo-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 animate-fadeInUp">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Sector Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
              Industries <span className="gradient-text">We Serve</span>
            </h2>
          </div>
          <div className="hidden lg:block">
            <p className="text-slate-500 text-xs max-w-[200px] leading-relaxed border-l border-white/10 pl-6 italic font-medium">
              Specialized growth frameworks for high-impact sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {industries.map((item, i) => (
            <div 
              key={i} 
              className="group relative glass-effect p-6 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all duration-700 hover:-translate-y-1.5 flex flex-col h-full shadow-xl overflow-hidden"
            >
              {/* Card Meta Header */}
              <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[6px] font-black text-emerald-400 uppercase tracking-widest">Active</span>
                 </div>
                 <span className="text-[6px] font-black text-indigo-400/30 tracking-[0.2em]">{item.id}</span>
              </div>

              {/* Icon Container */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-all duration-500 relative z-10`}>
                <i className={`fa-solid ${item.icon} text-white text-lg`}></i>
              </div>

              {/* Content */}
              <div className="relative z-10 mb-4">
                <h3 className="text-white font-black text-lg mb-2 group-hover:text-indigo-300 transition-colors tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-[11px] leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Detail */}
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                 <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Logic_V2</span>
                 <i className="fa-solid fa-chevron-right text-[7px] text-indigo-500"></i>
              </div>

              {/* Subtle Hover Glow */}
              <div className={`absolute -inset-16 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 rounded-full blur-3xl pointer-events-none`}></div>
            </div>
          ))}

          {/* Special "Discovery Node" Card */}
          <div 
            className="group relative bg-indigo-600/[0.03] backdrop-blur-xl rounded-[2rem] p-6 border-2 border-dashed border-indigo-500/20 flex flex-col justify-center items-center text-center transition-all duration-700 hover:bg-indigo-600/10 hover:border-indigo-500/40 cursor-pointer shadow-xl overflow-hidden min-h-[220px]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-500">
              <i className="fa-solid fa-plus text-indigo-400 text-xl group-hover:text-white transition-colors"></i>
            </div>
            
            <div className="mb-4">
              <h4 className="text-white font-black text-lg mb-1 tracking-tight">Your Industry?</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed max-w-[150px] font-medium group-hover:text-slate-400 transition-colors">
                We specialize in technical adaptations. Just ask!
              </p>
            </div>

            <div className="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors flex items-center gap-2">
              <span className="w-3 h-px bg-indigo-500 group-hover:bg-white transition-colors"></span>
              Request Build
              <span className="w-3 h-px bg-indigo-500 group-hover:bg-white transition-colors"></span>
            </div>
            
            {/* Pulsing Core Background */}
            <div className="absolute inset-0 bg-indigo-500/5 animate-pulse -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;