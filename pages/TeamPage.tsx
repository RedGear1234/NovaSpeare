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
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
          Behind Every <span className="gradient-text">Pixel</span> <br /> is a Person.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          We are a distributed collective of creative thinkers, algorithmic architects, and digital pioneers obsessed with crafting the future.
        </p>
      </section>

      {/* Re-Refined Trust Protocol Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-[2rem] sm:rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="glass-effect rounded-[2rem] sm:rounded-[4rem] border border-white/10 relative overflow-hidden p-1">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {expertisePoints.map((p, i) => (
                <div 
                  key={i} 
                  className={`p-8 sm:p-10 md:p-12 lg:p-14 relative flex flex-col gap-6 transition-all duration-500 hover:bg-white/[0.02] ${
                    i !== expertisePoints.length - 1 ? 'border-b md:border-b-0 lg:border-r border-white/5' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-500/40 ${p.color}`}>
                      <i className={`fa-solid ${p.icon} text-lg`}></i>
                    </div>
                    <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{p.code}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">{p.label}</p>
                    </div>
                    <h4 className="text-white font-black text-lg sm:text-xl tracking-tight leading-tight">{p.val}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About NovaSphere Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 mb-24">
          <div className="space-y-8">
            <div className="glass-effect p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 rounded-full"></span> Who We Are
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                NovaSphere is a results-driven digital marketing agency based in Pune, specializing in helping local businesses and national brands grow online. Since our founding, we've generated <span className="text-white font-bold">1,500+ qualified leads</span> for clients and helped businesses scale their revenue through strategic digital marketing.
              </p>
            </div>
            <div className="glass-effect p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-purple-500 rounded-full"></span> Our Story
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium italic opacity-90">
                "We started NovaSphere with a simple belief: digital marketing should be transparent, data-driven, and focused on real business results — not vanity metrics. We saw too many agencies running campaigns for the sake of running campaigns. So we built something different."
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 mb-4">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Core Values
            </h2>
            <div className="grid gap-4">
              {values.map((v, i) => (
                <div key={i} className="glass-effect px-6 sm:px-8 py-5 sm:py-6 rounded-[1.5rem] sm:rounded-3xl border border-white/5 flex items-center gap-4 sm:gap-6 group hover:border-indigo-500/30 transition-all duration-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <i className={`fa-solid ${v.icon} text-sm sm:text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[10px] sm:text-xs uppercase tracking-widest mb-1">{v.title}</h4>
                    <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section - Highly Optimized for Mobile */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-effect rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] p-6 sm:p-12 md:p-24 border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-tight">
                  Culture is our <br className="hidden sm:block" /> competitive advantage.
                </h2>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <i className="fa-solid fa-earth-americas text-xs sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Remote-First, Global-Always</h4>
                      <p className="text-slate-400 text-xs sm:text-base">We believe the best talent isn't restricted by geography. Our team operates across 12 timezones.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <i className="fa-solid fa-bolt-lightning text-xs sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">High Agency</h4>
                      <p className="text-slate-400 text-xs sm:text-base">We hire people who find ways to get things done. We empower our team with extreme autonomy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all">
                      <i className="fa-solid fa-brain text-xs sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Infinite Curiosity</h4>
                      <p className="text-slate-400 text-xs sm:text-base">The world of AI changes weekly. We provide an unlimited learning budget for every member.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-square bg-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Collaboration" />
                  </div>
                  <div className="aspect-[3/4] bg-indigo-600 rounded-2xl sm:rounded-3xl flex flex-col justify-end p-4 sm:p-6 text-white border border-white/10 shadow-xl shadow-indigo-600/20">
                    <span className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">12+</span>
                    <span className="text-[8px] sm:text-xs uppercase font-bold tracking-widest opacity-80">Countries Represented</span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                  <div className="aspect-[3/4] bg-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Workshop" />
                  </div>
                  <div className="aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center text-center p-4 sm:p-6">
                    <span className="text-indigo-400 text-xl sm:text-3xl mb-1 sm:mb-2 font-black">100%</span>
                    <span className="text-slate-400 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest">Passion Driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32 text-center pb-24 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Want to join the sphere?</h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">We're always looking for world-class designers and engineers who want to build the future of the digital world.</p>
        <a href="mailto:careers@novasphere.digital" className="px-8 sm:px-10 py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl sm:rounded-2xl font-bold transition-all inline-block shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95 text-sm sm:text-base">
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