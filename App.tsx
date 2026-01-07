import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import StrategyLab from './components/StrategyLab';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ContactMapSection from './components/ContactMapSection';
import ImpactStats from './components/ImpactStats';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'team' | 'privacy'>('home');
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const handleNavigate = (view: 'home' | 'services' | 'team' | 'privacy', hash?: string) => {
    setCurrentView(view);
    if (hash) {
      setPendingHash(hash);
    } else {
      setPendingHash(null);
    }
  };

  useEffect(() => {
    if (currentView === 'home' && pendingHash) {
      const element = document.querySelector(pendingHash);
      if (element) {
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setPendingHash(null);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [currentView, pendingHash]);

  const renderHome = () => (
    <div className="relative overflow-x-hidden w-full">
      <Hero onNavigate={handleNavigate} />
      
      {/* Dynamic Background Atmosphere - Layered Glows */}
      <div className="absolute top-[10%] left-0 w-full h-[800px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full z-0"></div>
      <div className="absolute top-[30%] right-0 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] pointer-events-none rounded-full z-0"></div>
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-full h-[1000px] bg-indigo-600/5 blur-[150px] pointer-events-none rounded-full z-0"></div>
      <div className="absolute top-[75%] right-1/4 w-[600px] h-[600px] bg-pink-600/5 blur-[130px] pointer-events-none rounded-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10">
        <Services />
        
        {/* Mid-Page Strategic CTA Banner */}
        <section className="py-24 relative overflow-visible">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative glass-effect p-8 md:p-16 rounded-[3rem] border border-white/10 overflow-hidden flex flex-col lg:flex-row items-center gap-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    Now Booking for Q3 2024
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                    Scale your digital <br /> footprint <span className="gradient-text">effortlessly.</span>
                  </h2>
                  <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                    Stop guessing and start growing. We're offering a limited number of 1-on-1 strategy sessions to audit your current digital stack.
                  </p>
                </div>
                
                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                  <a 
                    href="#contact" 
                    onClick={(e) => { e.preventDefault(); handleNavigate('home', '#contact'); }}
                    className="group relative px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-indigo-500 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-indigo-500/50 flex items-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">Get Your Free Strategy Session</span>
                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:translate-x-2 transition-transform"></i>
                  </a>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    No commitment • 30 Minutes • Expert Insight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Portfolio />
        <ImpactStats />
        <StrategyLab />
        <Team />
        <Testimonials onNavigate={handleNavigate} />
        <ContactMapSection />
        
        {/* Final CTA Section - Refined for Strategy Focus */}
        <section className="py-24 relative overflow-hidden bg-transparent">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="glass-effect p-12 md:p-20 rounded-[4rem] w-full flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 group hover:border-indigo-500/20 transition-all duration-700 shadow-3xl">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4">Final Call</div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Your vision deserves <br /> <span className="gradient-text">legendary execution.</span>
                </h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">
                  Ready to transform your business? Let's map out your next move in a free, high-intensity strategy deep dive.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-6">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); handleNavigate('home', '#contact'); }}
                  className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/30 hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-4"
                >
                  Book My Session <i className="fa-solid fa-bolt-lightning text-yellow-400"></i>
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f172a] bg-slate-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Joined by 500+ disruptors</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'services': return <ServicesPage />;
      case 'team': return <TeamPage />;
      case 'privacy': return <PrivacyPolicyPage />;
      case 'home':
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-indigo-500/30 w-full overflow-x-hidden">
      {/* Global Persistence Layer: Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.12] z-0" 
           style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="relative z-10 w-full">
        <div key={currentView} className="animate-page-enter">
          {renderContent()}
        </div>
      </main>
      
      <footer className="w-full">
        <Footer currentView={currentView} onNavigate={handleNavigate} />
      </footer>
      <ChatWidget />
    </div>
  );
};

export default App;