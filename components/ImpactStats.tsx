import React from 'react';

const ImpactStats: React.FC = () => {
  const stats = [
    {
      label: "AI Model Accuracy",
      value: "98.2%",
      detail: "Proprietary RAG architecture optimization",
      icon: "fa-brain",
      color: "from-indigo-500/20 to-blue-600/20",
      accent: "text-indigo-400",
      border: "group-hover:border-indigo-500/50"
    },
    {
      label: "Conversion Lift",
      value: "2.4x",
      detail: "Average increase in user retention",
      icon: "fa-arrow-trend-up",
      color: "from-emerald-500/20 to-teal-600/20",
      accent: "text-emerald-400",
      border: "group-hover:border-emerald-500/50"
    },
    {
      label: "System Latency",
      value: "120ms",
      detail: "Edge-optimized global response time",
      icon: "fa-bolt-lightning",
      color: "from-amber-500/20 to-orange-600/20",
      accent: "text-amber-400",
      border: "group-hover:border-amber-500/50"
    },
    {
      label: "Client Value",
      value: "$15M+",
      detail: "Revenue generated through our platforms",
      icon: "fa-gem",
      color: "from-rose-500/20 to-pink-600/20",
      accent: "text-rose-400",
      border: "group-hover:border-rose-500/50"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Tech Grid Atmosphere */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Header Card */}
          <div className="lg:col-span-5 flex flex-col justify-center mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">The Pulse</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              Neural <br /> <span className="gradient-text">Benchmarks</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              We track performance in milliseconds and growth in multiples. Our work is grounded in hard data and high-performance engineering.
            </p>
            <div className="mt-10 flex gap-8">
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl">24/7</span>
                <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Active Monitoring</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl">99.9%</span>
                <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">System Uptime</span>
              </div>
            </div>
          </div>

          {/* Stats Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className={`group relative glass-effect p-8 rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:-translate-y-2 ${stat.border}`}
              >
                {/* Neon Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] blur-xl -z-10`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-all ${stat.accent}`}>
                    <i className={`fa-solid ${stat.icon} text-xl`}></i>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <h3 className="text-5xl font-black text-white tracking-tighter transition-all group-hover:scale-105 origin-left duration-500">
                      {stat.value}
                    </h3>
                  </div>
                  
                  <p className="text-white font-bold text-sm mb-2">{stat.label}</p>
                  <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
                    {stat.detail}
                  </p>
                  
                  {/* Decorative Scanline */}
                  <div className="absolute bottom-6 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;