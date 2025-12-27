
import React from 'react';

const LocationSection: React.FC = () => {
  // Coordinates for a fictional "NovaSphere HQ" in a tech hub (e.g., San Francisco)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.3999!3d37.7878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806440f99d9b%3A0x6a0f4c01d4a0f4c0!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus";

  return (
    <section className="relative h-[600px] w-full bg-[#0f172a] overflow-hidden">
      {/* Map Background with Dark Filter */}
      <div className="absolute inset-0 grayscale invert contrast-[1.2] brightness-[0.4] opacity-50 transition-all duration-1000 group-hover:opacity-70">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="NovaSphere HQ Location"
        ></iframe>
      </div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
        <div className="max-w-md animate-fadeInUp">
          <div className="glass-effect p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Pulsing indicator */}
            <div className="absolute top-10 right-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Global HQ</span>
            </div>
            
            <h3 className="text-3xl font-black text-white mb-6">The <span className="gradient-text">Nova Tower</span></h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/5">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">415 Mission Street</p>
                  <p className="text-slate-500 text-xs">San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 border border-white/5">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">+1 (800) NOVA-AIR</p>
                  <p className="text-slate-500 text-xs">Mon - Fri, 9am - 6pm PST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-pink-400 border border-white/5">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Local Time</p>
                  <p className="text-slate-500 text-xs font-mono uppercase">
                    {new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' })} PST
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <button className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-colors flex items-center gap-3">
                Get Directions <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
