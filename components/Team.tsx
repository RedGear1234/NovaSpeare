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
      {/* Background Bridge Glow */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {TEAM.map((member, i) => (
            <div key={i} className={`group flex flex-col animate-fadeInUp stagger-${i + 1}`}>
              {/* Image Container with Corner Fix */}
              <div 
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-900 mb-6 border border-white/5 shadow-2xl transition-all duration-700 hover:translate-y-[-10px] isolation-isolate group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/10"
                style={{ 
                  transform: 'translateZ(0)', 
                  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Neural Mesh Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-10" 
                     style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                
                <img 
                  src='./assets/Kunal'
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 z-0 will-change-transform"
                />
                
                {/* Dark Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity z-10"></div>
                
                {/* Info Overlay */}
                <div className="absolute inset-x-3 bottom-3 p-6 glass-effect border-white/10 rounded-[2rem] transform translate-y-[120%] group-hover:translate-y-0 transition-all duration-500 ease-out z-30 shadow-2xl">
                  <p className="text-white text-[11px] leading-relaxed font-medium">
                    {member.bio}
                  </p>
                  <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
                      >
                        <i className="fa-brands fa-linkedin-in text-xs"></i>
                      </a>
                    )}
                    {member.socials.github && (
                      <a 
                        href={member.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
                      >
                        <i className="fa-brands fa-github text-xs"></i>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a 
                        href={member.socials.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
                      >
                        <i className="fa-brands fa-x-twitter text-xs"></i>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-5 left-5 z-30 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[7px] font-black uppercase tracking-widest text-white/80">Available</span>
                  </div>
                </div>
              </div>
              
              <div className="px-2">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:gradient-text transition-all duration-500 tracking-tight">{member.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-indigo-500/50"></span>
                  <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px]">{member.role}</p>
                </div>
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
