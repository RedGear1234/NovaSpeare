
import React, { useState, useEffect } from 'react';
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
    
    setTimeout(() => {
      setFilter(newFilter);
      const filtered = PROJECTS.filter(project => 
        newFilter === 'All' ? true : project.category === newFilter
      );
      setDisplayProjects(filtered);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden bg-[#0f172a]">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl animate-fadeInUp">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">The Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
              Selected <span className="gradient-text">Works</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              Pushing the boundaries of digital possibility through a unique blend of high-end design and disruptive technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-slideInRight">
            {filterButtons.map((btn) => (
              <button 
                key={btn.value}
                onClick={() => handleFilterChange(btn.value)}
                className={`px-8 py-3 rounded-2xl text-xs font-black tracking-widest uppercase transition-all duration-500 border ${
                  filter === btn.value 
                  ? 'bg-white text-[#0f172a] border-white shadow-2xl shadow-white/10 scale-105' 
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 transition-all duration-700 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-10 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => {
              // Create an asymmetric layout: first project spans 7 cols, next spans 5, etc.
              const isLarge = index % 3 === 0;
              const gridClass = isLarge ? 'md:col-span-7' : index % 3 === 1 ? 'md:col-span-5' : 'md:col-span-12';
              
              return (
                <div 
                  key={`${project.id}-${filter}`}
                  className={`group relative rounded-[2.5rem] bg-slate-900 border border-white/5 overflow-hidden transition-all duration-700 hover:border-indigo-500/30 shadow-2xl animate-fadeInUp stagger-${(index % 6) + 1} ${gridClass}`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] md:aspect-auto md:h-full min-h-[450px] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    
                    {/* Visual Project Number */}
                    <div className="absolute top-8 left-8 text-white/10 text-8xl font-black leading-none pointer-events-none select-none italic group-hover:text-indigo-500/20 transition-colors duration-700">
                      0{index + 1}
                    </div>

                    {/* Tech Badges */}
                    <div className="absolute top-8 right-8 flex flex-col gap-2">
                      <div className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                        {project.category === 'Web Design' ? 'Next.js + GSAP' : 'Gemini 3 + Python'}
                      </div>
                      <div className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-indigo-400 translate-x-20 group-hover:translate-x-0 transition-transform duration-500 delay-75">
                        Performance Optimized
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

                    {/* Bottom Info Content */}
                    <div className="absolute inset-x-0 bottom-0 p-10 md:p-12">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-md transform transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                          <span className="inline-block text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                            {project.category}
                          </span>
                          <h4 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-indigo-300 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 max-w-sm">
                            Pioneering new standards in digital interaction for industry leaders worldwide.
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4 group/btn cursor-pointer">
                          <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white group-hover/btn:bg-indigo-600 group-hover/btn:border-indigo-600 transition-all duration-500 -rotate-45 group-hover:rotate-0">
                            <i className="fa-solid fa-arrow-right text-xl"></i>
                          </div>
                          <span className="text-xs font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all duration-700">
                            Explore Project
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Highlight Border */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-40 text-center glass-effect rounded-[4rem] border-2 border-dashed border-white/10">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <i className="fa-solid fa-compass-drafting text-4xl text-slate-700"></i>
              </div>
              <h4 className="text-2xl font-black text-slate-400 uppercase tracking-widest">Designing the Future</h4>
              <p className="text-slate-600 mt-4 max-w-sm mx-auto">Our artisans are currently crafting new experiences for this category.</p>
            </div>
          )}
        </div>
        
        {/* Scroll CTA */}
        <div className="mt-24 flex justify-center animate-bounce">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">More Excellence</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
