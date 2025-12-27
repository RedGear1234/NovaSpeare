
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
    
    // Smooth exit phase
    setTimeout(() => {
      setFilter(newFilter);
      const filtered = PROJECTS.filter(project => 
        newFilter === 'All' ? true : project.category === newFilter
      );
      setDisplayProjects(filtered);
      setIsTransitioning(false);
    }, 400); // Matches the duration of the transition out
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="animate-fadeInUp">
            <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Selected Works</h3>
            <p className="text-slate-400 max-w-xl text-lg">
              A curated selection of our most impactful digital transformations.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 animate-slideInRight">
            {filterButtons.map((btn) => (
              <button 
                key={btn.value}
                onClick={() => handleFilterChange(btn.value)}
                className={`px-6 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 relative overflow-hidden group ${
                  filter === btn.value 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-600/30 scale-105' 
                  : 'border-white/10 hover:border-indigo-500/30 text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {btn.label}
                {filter === btn.value && (
                  <span className="absolute inset-0 bg-white/10 animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div 
          className={`grid md:grid-cols-2 gap-10 transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => (
              <div 
                key={`${project.id}-${filter}`}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-800 cursor-pointer border border-white/5 shadow-2xl opacity-0 animate-fadeInUp stagger-${(index % 6) + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                
                {/* Overlay with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end backdrop-blur-[2px] translate-y-4 group-hover:translate-y-0">
                  <div className="overflow-hidden">
                    <span className="inline-block text-indigo-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.category}
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-3xl font-black text-white mb-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      {project.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-center gap-3 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                    <div className="h-[1px] w-12 bg-indigo-500/50"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-indigo-300">View Project</span>
                    <i className="fa-solid fa-arrow-right-long text-indigo-400 transition-transform group-hover:translate-x-2"></i>
                  </div>
                </div>

                {/* Always visible minimal info for mobile/touch */}
                <div className="absolute top-6 left-6 md:hidden">
                   <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                     {project.category}
                   </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 py-32 text-center text-slate-500 border-2 border-dashed border-white/5 rounded-[3rem] animate-fadeInUp">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-layer-group text-3xl opacity-20"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-400">Curating the future...</h4>
              <p className="text-slate-600 mt-2">More projects coming soon to this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
