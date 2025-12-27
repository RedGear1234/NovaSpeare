
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">The Collective</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Meet the Architects of <span className="gradient-text">NovaSphere</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our team is a global collective of engineers, designers, and strategists united by a single mission: to build the extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM.map((member, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-800 mb-6 border border-white/5 shadow-2xl transition-all duration-500 hover:border-indigo-500/30">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Social Overlay */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}
                </div>

                {/* Info Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
                </div>
              </div>

              <div className="px-2">
                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{member.name}</h4>
                <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Culture/Values Section */}
        <div className="mt-32 glass-effect rounded-[3rem] p-12 border border-white/5 relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold text-xl mb-4">Radical Transparency</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                We believe in open communication, honesty, and setting clear expectations from discovery to launch.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-4">Obsessive Quality</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                "Good enough" doesn't exist here. We polish every pixel and optimize every line of code for peak performance.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-4">Continuous Learning</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                The digital landscape moves fast. Our team spends 10% of their time researching new AI technologies and design trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
