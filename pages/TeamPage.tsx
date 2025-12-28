import React, { useEffect } from 'react';
import { TEAM } from '../constants';

const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#0f172a] relative overflow-hidden">
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-wider mb-6">
          THE HUMAN ENGINE
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          Behind Every <span className="gradient-text">Pixel</span> <br /> is a Person.
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          We are a distributed collective of creative thinkers, algorithmic architects, and digital pioneers obsessed with crafting the future.
        </p>
      </section>

      {/* Full Team Grid - Creative Staggered Layout */}
      <section className="max-w-7xl mx-auto px-6 mb-48 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {TEAM.map((member, i) => (
            <div 
              key={i} 
              className={`group flex flex-col items-center transition-all duration-1000 ${
                i % 2 === 0 ? 'lg:mt-24' : 'lg:-mt-4'
              }`}
            >
              <div className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 hover:translate-y-[-12px] border border-white/5 bg-slate-900">
                {/* Lens Flare Hover Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-indigo-500/20 to-transparent rotate-45 transition-all duration-1000 -translate-x-full group-hover:translate-x-full"></div>
                
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Overlay Social Links */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex justify-center gap-4 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:bg-indigo-600 border border-white/10 transition-all hover:scale-110">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:bg-indigo-600 border border-white/10 transition-all hover:scale-110">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:bg-indigo-600 border border-white/10 transition-all hover:scale-110">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center px-4">
                <div className="inline-block relative">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{member.name}</h3>
                   <div className="h-px w-0 group-hover:w-full bg-indigo-500/50 absolute bottom-1 left-0 transition-all duration-500"></div>
                </div>
                <p className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm max-w-[280px] mx-auto leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-effect rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden">
            {/* Background Blob */}
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