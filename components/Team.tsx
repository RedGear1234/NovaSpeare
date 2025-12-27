
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  const values = [
    {
      title: "Radical Transparency",
      desc: "We believe in open communication, honesty, and setting clear expectations from discovery to launch.",
      icon: "fa-eye",
      color: "from-blue-600/20 to-indigo-600/20",
      accent: "bg-blue-500",
      textAccent: "text-blue-400",
      glow: "group-hover:shadow-blue-500/20"
    },
    {
      title: "Obsessive Quality",
      desc: "Good enough doesn't exist here. We polish every pixel and optimize every line of code.",
      icon: "fa-gem",
      color: "from-purple-600/20 to-fuchsia-600/20",
      accent: "bg-purple-500",
      textAccent: "text-purple-400",
      glow: "group-hover:shadow-purple-500/20"
    },
    {
      title: "Continuous Learning",
      desc: "The digital landscape moves fast. Our team stays ahead of the AI and design curves.",
      icon: "fa-brain",
      color: "from-pink-600/20 to-rose-600/20",
      accent: "bg-pink-500",
      textAccent: "text-pink-400",
      glow: "group-hover:shadow-pink-500/20"
    }
  ];

  return (
    <section id="team" className="pt-16 pb-32 relative overflow-visible bg-transparent">
      {/* Background Bridge Glow - Connects from previous section */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-indigo-500/5 to-transparent blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">The Collective</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none">
            Architects of <span className="gradient-text">NovaSphere</span>
          </h3>
          <p className="text-slate-400 text-xl leading-relaxed">
            A global collective of engineers, designers, and strategists united by a mission to build the extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {TEAM.map((member, i) => (
            <div key={i} className={`group animate-fadeInUp stagger-${i + 1}`}>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-800/50 backdrop-blur-sm mb-6 border border-white/5 shadow-2xl transition-all duration-500 hover:border-indigo-500/30">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">{member.bio}</p>
                </div>
              </div>
              <div className="px-4">
                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{member.name}</h4>
                <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className={`group relative glass-effect rounded-[3rem] p-10 border border-white/5 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 animate-fadeInUp stagger-${i + 4} hover:shadow-2xl ${v.glow}`}
              >
                {/* Dynamic Background Glow Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[3rem] blur-2xl -z-10`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${v.accent} flex items-center justify-center mb-8 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <i className={`fa-solid ${v.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className={`text-2xl font-black text-white mb-6 group-hover:${v.textAccent} transition-colors`}>{v.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-medium">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
