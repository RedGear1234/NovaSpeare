import React from 'react';

const StartNowSection: React.FC = () => {
  const benefits = [
    {
      title: "Get Results in 30-60 Days",
      desc: "Not 6 months of empty promises. High-velocity deployment protocols.",
      icon: "fa-bolt-lightning",
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Transparent Communication",
      desc: "Weekly updates, monthly calls, and 24/7 real-time dashboard access.",
      icon: "fa-eye",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "No Hidden Costs",
      desc: "Total pricing transparency. What you see is exactly what you pay.",
      icon: "fa-shield-check",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Dedicated Expert",
      desc: "Your own account manager who knows your business architecture inside out.",
      icon: "fa-user-astronaut",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Custom Strategies",
      desc: "Built for your specific ecosystem, not generic industry templates.",
      icon: "fa-microchip",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Guaranteed ROI Focus",
      desc: "Every dollar invested is tracked against hard performance benchmarks.",
      icon: "fa-chart-line",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Cancel Anytime",
      desc: "No lock-in contracts or penalties. We earn your business every month.",
      icon: "fa-unlock",
      color: "from-teal-500 to-emerald-500"
    },
    {
      title: "Money-Back Guarantee",
      desc: "Not seeing the agreed results? We'll refund your fee. Zero risk.",
      icon: "fa-rotate-left",
      color: "from-emerald-600 to-emerald-400"
    }
  ];

  return (
    <section id="why-start-now" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px]">Zero Friction Deployment</span>
            <span className="w-8 h-[1px] bg-emerald-500"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Why You Should <br /><span className="gradient-text">Start Now</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium opacity-80">
            Stop losing ground to competitors. Upgrade your digital logic with a high-intensity partner focused on your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="group glass-effect p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col relative overflow-hidden"
            >
              {/* Subtle Scanline */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <i className={`fa-solid ${benefit.icon} text-white text-xl`}></i>
                </div>
                <div className="flex items-center gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[7px] font-black text-white uppercase tracking-widest">Protocol_Ready</span>
                </div>
              </div>

              <h3 className="text-lg font-black text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">
                {benefit.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {benefit.desc}
              </p>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">System_Confirmed</span>
                 <i className="fa-solid fa-circle-check text-emerald-500 text-[10px]"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Final Trigger Bar */}
        <div className="mt-16 text-center">
           <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 hover:text-white transition-all group"
           >
             <span className="w-12 h-[1px] bg-emerald-500/30 group-hover:w-16 group-hover:bg-emerald-500 transition-all"></span>
             Initialize My Upgrade
             <span className="w-12 h-[1px] bg-emerald-500/30 group-hover:w-16 group-hover:bg-emerald-500 transition-all"></span>
           </button>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default StartNowSection;