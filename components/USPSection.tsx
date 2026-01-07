import React from 'react';

const USPSection: React.FC = () => {
  const differentiators = [
    {
      title: "Data-First Approach",
      icon: "fa-diagram-project",
      color: "from-blue-500 to-indigo-600",
      points: [
        "Every decision is backed by real analytics and customer insights",
        "We test, measure, and optimize continuously",
        "Transparent reporting so you see exactly what's working"
      ]
    },
    {
      title: "Specialized Expertise",
      icon: "fa-award",
      color: "from-purple-500 to-pink-600",
      points: [
        "Certified experts in Google Ads, Meta/Facebook Ads, and SEO",
        "Deep knowledge of Pune's local market dynamics",
        "Proven strategies across 50+ industries and business types"
      ]
    },
    {
      title: "Dedicated Partnership",
      icon: "fa-handshake-angle",
      color: "from-indigo-500 to-cyan-500",
      points: [
        "You get a dedicated account manager, not a rotating team",
        "Regular strategy calls and performance reviews",
        "Your success is our success — we're invested in your growth"
      ]
    }
  ];

  const expectations = [
    { text: "30-60 days to see results", icon: "fa-calendar-check" },
    { text: "Clear ROI tracking", icon: "fa-bullseye" },
    { text: "No hidden fees", icon: "fa-shield-halved" },
    { text: "Complete transparency", icon: "fa-eye" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">The Differentiator</span>
            <span className="w-8 h-[1px] bg-indigo-500"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            What Makes <span className="gradient-text">I Web Optimizer</span> Different
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto italic opacity-80">
            "Campaigns Are Easy. Results Are Earned."
          </p>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            We go beyond execution—using data-driven strategies, constant testing, and optimization to maximize real business ROI.
          </p>
        </div>

        {/* Core Differentiators Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, i) => (
            <div 
              key={i} 
              className="group glass-effect rounded-[3rem] p-10 border border-white/5 hover:border-indigo-500/30 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-2xl font-black text-white mb-6 group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>

              <ul className="space-y-4 flex-grow">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors text-sm leading-relaxed">
                    <i className="fa-solid fa-circle-check text-indigo-500/50 mt-1 text-[10px]"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What You Can Expect Banner */}
        <div className="glass-effect rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-black text-white mb-2">What You Can Expect</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">No Guesswork. Just Growth.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {expectations.map((exp, k) => (
                <div key={k} className="flex flex-col items-center text-center gap-3 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-300">
                    <i className={`fa-solid ${exp.icon} text-sm`}></i>
                  </div>
                  <span className="text-white text-[11px] font-black uppercase tracking-widest leading-tight px-2">
                    {exp.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;