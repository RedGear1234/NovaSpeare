
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

  // Effect to handle scrolling when moving back to the Home view with a pending hash
  useEffect(() => {
    if (currentView === 'home' && pendingHash) {
      const element = document.querySelector(pendingHash);
      if (element) {
        // Small delay to ensure the DOM has updated/rendered the sections
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setPendingHash(null);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [currentView, pendingHash]);

  const renderHome = () => (
    <>
      <Hero onNavigate={handleNavigate} />
      <Services />
      <Portfolio />
      <StrategyLab />
      <Team />
      <Testimonials onNavigate={handleNavigate} />
      
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Let's build something <br /> legendary together.</h2>
            <p className="text-indigo-100 text-xl font-medium">Connect with our team to start your transformation journey.</p>
          </div>
          <a href="mailto:hello@novasphere.digital" className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all shadow-2xl shadow-black/20">
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'services':
        return <ServicesPage />;
      case 'team':
        return <TeamPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'home':
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <main>
        {renderContent()}
      </main>
      <Footer currentView={currentView} onNavigate={handleNavigate} />
      <ChatWidget />
    </div>
  );
};

export default App;
