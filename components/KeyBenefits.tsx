import React from 'react';

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Generate High-Quality Leads",
      icon: "fa-user-plus",
      color: "from-blue-600 to-indigo-600",
      points: [
        "Not just traffic, but qualified leads ready to convert",
        "Save 15+ hours per week managing marketing yourself",
        "Focus on running your business while we handle growth"
      ]
    },
    {
      title: "Scale Your Revenue",
      icon: "fa-chart-line",
      color: "from-emerald-500 to-teal-500",
      points: [
        "Achieve 3x ROI on your marketing investment (avg)",
        "Proven formulas to turn website visitors into customers",
        "Sustainable growth that compounds over time"
      ]
    },
    {
      title: "Stay Ahead of Competitors",
      icon: "fa-trophy",
      color: "from-purple-500 to-pink-500",
      points: [
        "Outrank competitors in Google search results",
        "Build brand authority in your industry",
        "Access cutting-edge strategies before competitors do"
      ]
    },
    {
      title: "Save Time & Resources",
      icon: "fa-clock-rotate-left",
      color: "from-orange-500 to-amber-500",
      points: [
        "Professional team handles all campaign management",
        "Regular optimization means better results automatically",
        "Get reports you actually understand (no jargon)"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-[10px]">Key Benefits</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            What Your <span className="gradient-text">Business Gains</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
            Invest in Marketing That <span className="text-white border-b-2 border-emerald-500/50">Actually Pays You Back.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="group glass-effect rounded-[3rem] p-8 md:p-12 border border-white/5 hover:border-emerald-500/30 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full shadow-2xl"
            >
              {/* Internal Accent Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[40px] rounded-full`}></div>
              
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <i className={`fa-solid ${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  {benefit.title}
                </h3>
              </div>

              <div className="space-y-6">
                {benefit.points.map((point, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <i className="fa-solid fa-check text-[10px]"></i>
                    </div>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors text-base md:text-lg leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing trust bar */}
        <div className="mt-16 text-center animate-fadeInUp stagger-3">
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">
            Sustainable Growth • Scalable Results • Pune Proud
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;