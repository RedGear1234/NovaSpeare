import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web Design' | 'AI Integration'>('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayProjects, setDisplayProjects] = useState(PROJECTS);

  const filterButtons = [
    { label: 'All Cases', value: 'All' as const },
    { label: 'Web Design', value: 'Web Design' as const },
    { label: 'AI Integration', value: 'AI Integration' as const },
  ];

  const handleFilterChange = (newFilter: 'All' | 'Web Design' | 'AI Integration') => {
    if (newFilter === filter) return;
    
    setIsTransitioning(true);
    
    // Smooth exit phase
    setTimeout(() => {
      setFilter(newFilter);
      const filtered = PROJECTS.filter(project => 
        newFilter === 'All' ? true : project.category === newFilter
      );
      setDisplayProjects(filtered);
      
      // Brief delay to allow DOM update before entry animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Faster exit for snappier feel
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-visible bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl animate-fadeInUp">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">The Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9]">
              Selected <br /> <span className="gradient-text">Works</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Pushing the boundaries of digital possibility through a unique blend of high-end design and disruptive technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-slideInRight stagger-2">
            {filterButtons.map((btn) => (
              <button 
                key={btn.value}
                onClick={() => handleFilterChange(btn.value)}
                className={`px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all duration-500 border ${
                  filter === btn.value 
                  ? 'bg-white text-[#0f172a] border-white shadow-xl shadow-white/20 scale-105' 
                  : 'glass-effect border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 hover:shadow-lg hover:shadow-indigo-500/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-out ${
            isTransitioning 
              ? 'opacity-0 translate-y-8 scale-[0.98] blur-sm' 
              : 'opacity-100 translate-y-0 scale-100 blur-0'
          }`}
        >
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => {
              const isWeb = project.category === 'Web Design';
              const accentColor = isWeb ? 'indigo' : 'purple';
              const glowClass = isWeb ? 'hover:shadow-indigo-500/20' : 'hover:shadow-fuchsia-500/20';
              const techTag = isWeb ? 'Next.js' : 'Gemini 3 + LangChain';

              const CardContent = (
                <>
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${isWeb ? 'from-indigo-600/10 to-transparent' : 'from-purple-600/10 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    <div className="absolute top-6 left-6 text-white/5 text-7xl font-black italic leading-none pointer-events-none group-hover:text-white/10 transition-all duration-700 group-hover:scale-110">
                      0{index + 1}
                    </div>

                    <div className="absolute top-6 right-6">
                      <div className={`px-4 py-1.5 glass-effect border-white/10 rounded-full text-[8px] font-black uppercase tracking-[0.2em] text-white/80 translate-y-[-20px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl`}>
                        {techTag}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>

                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <div className="flex items-end justify-between gap-4">
                        <div className="transform transition-all duration-700 translate-y-3 group-hover:translate-y-0">
                          <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${isWeb ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' : 'bg-purple-500/20 text-purple-400 border-purple-500/30'} border`}>
                            <i className={`fa-solid ${isWeb ? 'fa-code' : 'fa-brain'} text-[8px]`}></i>
                            {project.category}
                          </div>
                          <h4 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all duration-500">
                            {project.title}
                          </h4>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-${accentColor}-600 group-hover:border-${accentColor}-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-${accentColor}-600/30 -rotate-45 group-hover:rotate-0`}>
                            <i className="fa-solid fa-arrow-right text-lg"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );

              return project.url ? (
                <a 
                  key={`${project.id}-${filter}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:border-${accentColor}-500/40 shadow-2xl ${glowClass}`}
                >
                  {CardContent}
                </a>
              ) : (
                <div 
                  key={`${project.id}-${filter}`}
                  className={`group relative rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:border-${accentColor}-500/40 shadow-2xl ${glowClass}`}
                >
                  {CardContent}
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-32 text-center glass-effect rounded-[4rem] border-2 border-dashed border-white/5">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                <i className="fa-solid fa-layer-group text-slate-600 text-3xl"></i>
              </div>
              <h4 className="text-xl font-black text-slate-500 uppercase tracking-widest">Designing the Future</h4>
              <p className="text-slate-600 mt-2">Check back soon for more breakthrough cases.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;