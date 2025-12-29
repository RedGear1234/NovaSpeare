import React, { useEffect } from 'react';
import { TEAM } from '../constants';

const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center relative z-10">
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

      {/* Full Team Grid - Refined 4 Cards */}
      <section className="max-w-7xl mx-auto px-6 mb-48 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {TEAM.map((member, i) => (
            <div 
              key={i} 
              className={`group flex flex-col transition-all duration-1000 ${
                i % 2 === 0 ? 'lg:mt-24' : 'lg:-mt-4'
              }`}
            >
              {/* Fixed Refined Image Container */}
              <div 
                className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 hover:translate-y-[-10px] bg-slate-900 border border-white/5 isolation-isolate group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/10"
                style={{ 
                  transform: 'translateZ(0)', 
                  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Neural Mesh Overlay (Visible on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-10" 
                     style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                
                {/* Animated Light Sweep */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 transition-all duration-1000 -translate-x-full group-hover:translate-x-full z-20"></div>
                
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 z-0 will-change-transform"
                />
                
                {/* Dark Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity z-10"></div>
                
                {/* Information Panel Reveal */}
                <div className="absolute inset-x-4 bottom-4 p-6 glass-effect border-white/10 rounded-[2rem] transform translate-y-[120%] group-hover:translate-y-0 transition-all duration-500 ease-out z-30 shadow-2xl">
                  <p className="text-white text-xs leading-relaxed font-medium">
                    {member.bio}
                  </p>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-slate-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-linkedin-in text-sm"></i>
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="text-slate-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-github text-sm"></i>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-slate-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-x-twitter text-sm"></i>
                      </a>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
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
    </div>
  );
};

export default TeamPage;