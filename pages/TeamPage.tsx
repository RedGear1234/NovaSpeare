import React, { useEffect } from 'react';
import { TEAM } from '../constants';

const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: "Results Over Everything", desc: "We measure success by your business growth, not vanity metrics.", icon: "fa-chart-line" },
    { title: "Complete Transparency", desc: "You always know exactly what we're doing and why, no hidden agendas.", icon: "fa-eye" },
    { title: "Client Partnership", desc: "Your success is our success. We operate as an extension of your team.", icon: "fa-handshake" },
    { title: "Continuous Learning", desc: "We stay updated on the latest strategies and AI-driven platforms.", icon: "fa-brain" },
    { title: "Ethical Practices", desc: "No black-hat tactics or misleading promises. Only sustainable growth.", icon: "fa-shield-heart" }
  ];

  const expertisePoints = [
    { label: "Credentials", val: "Certified Google & Meta Partner", icon: "fa-certificate", code: "AUTH_01", color: "text-blue-400" },
    { label: "Experience", val: "30+ Years Combined Mastery", icon: "fa-hourglass-half", code: "AUTH_02", color: "text-indigo-400" },
    { label: "Specialization", val: "Full-Funnel Digital Growth", icon: "fa-laptop-code", code: "AUTH_03", color: "text-purple-400" },
    { label: "Perspective", val: "Real Business Owner Insights", icon: "fa-briefcase", code: "AUTH_04", color: "text-pink-400" }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-fadeInUp">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          The Human Engine
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
          Behind Every <span className="gradient-text">Pixel</span> <br /> is a Person.
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          We are a distributed collective of creative thinkers, algorithmic architects, and digital pioneers obsessed with crafting the future.
        </p>
      </section>

      {/* Re-Refined Trust Protocol Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="relative group">
          {/* Decorative Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="glass-effect rounded-[4rem] border border-white/10 relative overflow-hidden p-1 px-1">
            {/* Animated Scanline */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {expertisePoints.map((p, i) => (
                <div 
                  key={i} 
                  className={`p-10 md:p-12 lg:p-14 relative flex flex-col gap-6 transition-all duration-500 hover:bg-white/[0.02] ${
                    i !== expertisePoints.length - 1 ? 'border-b md:border-b-0 lg:border-r border-white/5' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-500/40 ${p.color}`}>
                      <i className={`fa-solid ${p.icon} text-xl`}></i>
                    </div>
                    <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{p.code}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">{p.label}</p>
                    </div>
                    <h4 className="text-white font-black text-xl md:text-lg xl:text-xl tracking-tight leading-tight">
                      {p.val}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between mt-auto opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">Status: VERIFIED</span>
                    <div className="flex gap-1">
                      {[1,2,3].map(dot => (
                        <div key={dot} className="w-1 h-1 rounded-full bg-indigo-500/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About NovaSphere Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <div className="space-y-8">
            <div className="glass-effect p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-indigo-500/10 text-8xl font-black italic -rotate-12 pointer-events-none">WHO</div>
              <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 rounded-full"></span> Who We Are
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                NovaSphere is a results-driven digital marketing agency based in Pune, specializing in helping local businesses and national brands grow online. Since our founding, we've generated <span className="text-white font-bold">1,500+ qualified leads</span> for clients and helped businesses scale their revenue through strategic digital marketing.
              </p>
            </div>

            <div className="glass-effect p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-purple-500/10 text-8xl font-black italic -rotate-12 pointer-events-none">STORY</div>
              <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-purple-500 rounded-full"></span> Our Story
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-medium italic opacity-90">
                "We started NovaSphere with a simple belief: digital marketing should be transparent, data-driven, and focused on real business results — not vanity metrics. We saw too many agencies running campaigns for the sake of running campaigns. So we built something different."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white flex items-center gap-3 mb-4">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Core Values
            </h2>
            <div className="grid gap-4">
              {values.map((v, i) => (
                <div key={i} className="glass-effect px-8 py-6 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-indigo-500/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
                    <i className={`fa-solid ${v.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">{v.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Team Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-48 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Meet The <span className="gradient-text">Collective</span></h2>
          <p className="text-slate-400">The specialists driving your growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {TEAM.map((member, i) => (
            <div 
              key={i} 
              className={`group flex flex-col transition-all duration-1000 ${
                i % 2 === 0 ? 'lg:mt-24' : 'lg:-mt-4'
              }`}
            >
              <div 
                className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 hover:translate-y-[-10px] bg-slate-900 border border-white/5 isolation-isolate group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/10"
                style={{ 
                  transform: 'translateZ(0)', 
                  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-10" 
                     style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                
                <img 
                  src='RedGear1234/NovaSpeare/assets/Kunal.jpeg' 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 z-0 will-change-transform"
                  onError={(e) => {
                    // Fallback in case local images aren't found
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity z-10"></div>
                
                <div className="absolute inset-x-4 bottom-4 p-6 glass-effect border-white/10 rounded-[2rem] transform translate-y-[120%] group-hover:translate-y-0 transition-all duration-500 ease-out z-30 shadow-2xl">
                  <p className="text-white text-xs leading-relaxed font-medium">
                    {member.bio}
                  </p>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-linkedin-in text-sm"></i>
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-github text-sm"></i>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-x-twitter text-sm"></i>
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute top-6 left-6 z-30 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/80">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left px-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-black text-white group-hover:gradient-text transition-all duration-500 tracking-tight">
                    {member.name}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-4 h-[1px] bg-indigo-500/50"></span>
                  <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-effect rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-black text-white mb-8 leading-tight">Culture is our <br /> competitive advantage.</h2>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <i className="fa-solid fa-earth-americas"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Remote-First, Global-Always</h4>
                      <p className="text-slate-400">We believe the best talent isn't restricted by geography. Our team operates across 12 timezones.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <i className="fa-solid fa-bolt-lightning"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">High Agency</h4>
                      <p className="text-slate-400">We hire people who find ways to get things done. We empower our team with extreme autonomy.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all">
                      <i className="fa-solid fa-brain"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Infinite Curiosity</h4>
                      <p className="text-slate-400">The world of AI and web dev changes weekly. We provide an unlimited learning budget for every member.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Collaboration" />
                  </div>
                  <div className="aspect-[3/4] bg-indigo-600 rounded-3xl flex flex-col justify-end p-6 text-white border border-white/10 shadow-xl shadow-indigo-600/20">
                    <span className="text-4xl font-black mb-2">12+</span>
                    <span className="text-xs uppercase font-bold tracking-widest opacity-80">Countries Represented</span>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Workshop" />
                  </div>
                  <div className="aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col justify-center items-center text-center p-6">
                    <span className="text-indigo-400 text-3xl mb-2 font-black">100%</span>
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Passion Driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32 text-center pb-24 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Want to join the sphere?</h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">We're always looking for world-class designers and engineers who want to build the future of the digital world.</p>
        <a href="mailto:careers@novasphere.digital" className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all inline-block shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95">
          View Open Roles
        </a>
      </section>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(500px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
