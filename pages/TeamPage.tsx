
import React from 'react';
import { TEAM } from '../constants';

const TeamPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0f172a]">
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
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

      {/* Full Team Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 hover:translate-y-[-10px]">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{member.name}</h3>
                <p className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm max-w-[280px] mx-auto leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-effect rounded-[4rem] p-12 md:p-24 border border-white/5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-8">Culture is our <br /> competitive advantage.</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                      <i className="fa-solid fa-earth-americas text-indigo-400"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Remote-First, Global-Always</h4>
                      <p className="text-slate-400">We believe the best talent isn't restricted by geography. Our team operates across 12 timezones.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                      <i className="fa-solid fa-bolt-lightning text-purple-400"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">High Agency</h4>
                      <p className="text-slate-400">We hire people who find ways to get things done. We empower our team with extreme autonomy.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                      <i className="fa-solid fa-brain text-pink-400"></i>
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
                  <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/culture1/400/400" className="w-full h-full object-cover" alt="Culture 1" />
                  </div>
                  <div className="aspect-[3/4] bg-indigo-600 rounded-3xl flex flex-col justify-end p-6 text-white">
                    <span className="text-4xl font-black mb-2">12+</span>
                    <span className="text-xs uppercase font-bold tracking-widest opacity-80">Countries Represented</span>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/culture2/400/530" className="w-full h-full object-cover" alt="Culture 2" />
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
      <section className="max-w-7xl mx-auto px-6 mt-32 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Want to join the sphere?</h2>
        <p className="text-slate-400 mb-10">We're always looking for world-class designers and engineers.</p>
        <a href="mailto:careers@novasphere.digital" className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all inline-block shadow-xl shadow-indigo-600/20">
          View Open Roles
        </a>
      </section>
    </div>
  );
};

export default TeamPage;
