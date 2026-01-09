import React from 'react';

interface WhyChooseUsProps {
  onNavigate?: (view: 'home' | 'services' | 'team' | 'privacy' | 'how-it-works', hash?: string) => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  const comparisonData = [
    {
      feature: "Growth Logic",
      nova: "Custom Algorithms",
      other: "Generic Templates",
      novaSub: "TAILORED_STRATEGY",
      legacySub: "DEPRECATED_MODEL",
      icon: "fa-microchip"
    },
    {
      feature: "Velocity",
      nova: "30-60 Day ROI",
      other: "6-Month Maybe",
      novaSub: "ACCELERATED_LAUNCH",
      legacySub: "HIGH_LATENCY",
      icon: "fa-bolt-lightning"
    },
    {
      feature: "Visibility",
      nova: "Live AI Dashboard",
      other: "Monthly PDFs",
      novaSub: "REALTIME_INTEL",
      legacySub: "POST_MORTEM_DATA",
      icon: "fa-chart-network"
    },
    {
      feature: "Freedom",
      nova: "Cancel Anytime",
      other: "12-Mo Lock-in",
      novaSub: "ZERO_LOCK_PROTOCOL",
      legacySub: "CONTRACT_FRICTION",
      icon: "fa-unlock-keyhole"
    }
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-transparent">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Competitive Matrix</span>
            <span className="w-8 h-[1px] bg-indigo-500"></span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            Why Choose <br /> <span className="gradient-text">Us?</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80 italic">
            "Legacy agencies operate on outdated logic. NovaSphere is the technical upgrade your business has been waiting for."
          </p>
        </div>

        {/* The Upgrade Matrix Graphic */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {comparisonData.map((item, i) => (
            <div key={i} className="group relative flex flex-col items-center">
              
              {/* NOVA CARD (UPPER - ACTIVE SYSTEM) */}
              <div className="w-full relative z-20 transition-all duration-700 group-hover:-translate-y-4">
                <div className="glass-effect p-8 rounded-[3rem] border border-white/5 group-hover:border-indigo-500/40 group-hover:bg-indigo-600/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
                  {/* Subtle Background Icon */}
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <i className={`fa-solid ${item.icon} text-6xl rotate-12`}></i>
                  </div>
                  
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 mb-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                       <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Active_Node</span>
                    </div>
                    <h3 className="text-white font-black text-2xl tracking-tighter mb-1">{item.nova}</h3>
                    <p className="text-indigo-400/60 text-[9px] font-black uppercase tracking-widest">{item.novaSub}</p>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex justify-between items-center text-slate-500 group-hover:text-emerald-400/80 transition-colors">
                       <span className="text-[10px] font-bold uppercase tracking-widest">{item.feature}</span>
                       <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                          <i className="fa-solid fa-check text-[8px]"></i>
                       </div>
                    </div>
                  </div>

                  {/* High-End Scanline */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none"></div>
                </div>
              </div>

              {/* REFINED DATA TETHER (SUBTLE SPINE) */}
              <div className="h-16 flex flex-col items-center justify-center relative z-10">
                 <div className="w-px h-full bg-white/5 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500/30 rounded-full blur-[1px] group-hover:bg-emerald-400 transition-colors duration-500"></div>
                 </div>
              </div>

              {/* LEGACY CARD (LOWER - DEPRECATED) */}
              <div className="w-full relative z-0 transition-all duration-700 group-hover:translate-y-2 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-10">
                <div className="glass-effect p-8 rounded-[3rem] border border-white/5 bg-rose-500/[0.01] flex flex-col justify-between h-40">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-[8px] font-black text-rose-500/40 uppercase tracking-widest">Legacy_Mode</span>
                     <i className="fa-solid fa-triangle-exclamation text-rose-500/20 text-[10px]"></i>
                  </div>
                  <div>
                    <h4 className="text-slate-500 font-bold text-lg line-through decoration-rose-500/20">{item.other}</h4>
                    <p className="text-rose-500/20 text-[8px] font-black uppercase tracking-widest mt-1">{item.legacySub}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(280px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;