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
import USPSection from './components/USPSection';
import KeyBenefits from './components/KeyBenefits';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesWeServe from './components/IndustriesWeServe';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQPage from './pages/FAQPage';

export type ViewType = 'home' | 'services' | 'team' | 'privacy' | 'terms' | 'cookies' | 'how-it-works' | 'faq';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const handleNavigate = (view: ViewType, hash?: string) => {
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
        <USPSection />
        <KeyBenefits />
        <IndustriesWeServe />
        <WhyChooseUs onNavigate={handleNavigate} />
        <Portfolio />
        <StrategyLab />
        <Team />
        <Testimonials onNavigate={handleNavigate} />
        <ContactMapSection />
        
        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden bg-transparent text-center md:text-left">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="glass-effect p-12 md:p-20 rounded-[4rem] w-full flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 group hover:border-indigo-500/20 transition-all duration-700 shadow-3xl">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4">Final Call</div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Your vision deserves <br /> <span className="gradient-text">legendary execution.</span>
                </h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">
                  Ready to transform your business? Let's map out your next move with NovaSphere's free, high-intensity strategy deep dive.
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
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Joined by 200+ Pune Businesses</span>
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
      case 'how-it-works': return <HowItWorksPage />;
      case 'team': return <TeamPage />;
      case 'privacy': return <PrivacyPolicyPage />;
      case 'terms': return <TermsOfServicePage />;
      case 'cookies': return <CookiePolicyPage />;
      case 'faq': return <FAQPage />;
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