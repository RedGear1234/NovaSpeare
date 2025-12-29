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
        <Portfolio />
        <ImpactStats />
        <StrategyLab />
        <Team />
        <Testimonials onNavigate={handleNavigate} />
        <ContactMapSection />
        
        {/* Final CTA Section - Resized to Medium */}
        <section className="py-20 relative overflow-hidden bg-transparent">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="glass-effect p-10 md:p-16 rounded-[3rem] w-full flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5 group hover:border-indigo-500/20 transition-all duration-700">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Let's build something <br /> <span className="gradient-text">legendary</span> together.
                </h2>
                <p className="text-slate-400 text-lg font-medium">
                  Your digital evolution begins with a single conversation.
                </p>
              </div>
              <a 
                href="mailto:hello@novasphere.digital" 
                className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 whitespace-nowrap"
              >
                Start Project
              </a>
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