import React, { useState, useEffect } from 'react';

interface TourStep {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  targetId: string;
  icon: string;
}

interface ProductTourProps {
  isActive: boolean;
  onClose: () => void;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 'hero',
    title: 'The Neural Core',
    subtitle: 'IDENTITY_ESTABLISHMENT',
    content: 'Welcome to 5Crown Technologies. This is where we define the future of digital. Our Hero section sets the stage for technical excellence and results-driven architecture.',
    targetId: 'hero',
    icon: 'fa-microchip'
  },
  {
    id: 'services',
    title: 'Operational Mastery',
    subtitle: 'CAPABILITY_MATRIX',
    content: 'Our core services are precision-engineered to scale. From SEO to AI integration, every node in this matrix is designed for maximum ROI.',
    targetId: 'services',
    icon: 'fa-layer-group'
  },
  {
    id: 'usp',
    title: 'The Competitive Edge',
    subtitle: 'LOGIC_DIFFERENTIAL',
    content: 'See what makes us different. We focus on data-first approaches and dedicated partnerships rather than generic templates.',
    targetId: 'usp',
    icon: 'fa-diagram-project'
  },
  {
    id: 'why-us',
    title: 'The Growth Upgrade',
    subtitle: 'LEGACY_VS_NOVA',
    content: 'A direct comparison of our high-velocity methods against legacy agency friction. We operate at the speed of current technology.',
    targetId: 'why-us',
    icon: 'fa-bolt-lightning'
  },
  {
    id: 'ai-strategy',
    title: 'Innovation Lab',
    subtitle: 'NEURAL_STRATEGY_GEN',
    content: 'Interact with our Strategy Lab. This is where you can see our AI engine in action, generating real-time growth roadmaps for your vision.',
    targetId: 'ai-strategy',
    icon: 'fa-brain'
  },
  {
    id: 'team',
    title: 'The Human Engine',
    subtitle: 'COLLECTIVE_ARCHITECTS',
    content: 'Behind every algorithm is a specialist. Meet the distributed collective of thinkers and builders driving the sphere.',
    targetId: 'team',
    icon: 'fa-users-gear'
  },
  {
    id: 'contact',
    title: 'Final Deployment',
    subtitle: 'PROJECT_INITIATION',
    content: 'Ready to launch? This is where your transformation begins. Book a session with our lead strategists to map your breakthrough.',
    targetId: 'contact',
    icon: 'fa-paper-plane'
  }
];

const ProductTour: React.FC<ProductTourProps> = ({ isActive, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Reset tour state when it becomes inactive
  useEffect(() => {
    if (!isActive) {
      const timer = setTimeout(() => {
        setCurrentStep(0);
        setIsFinished(false);
      }, 1000); // Wait for close animation/transition
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && !isFinished) {
      const step = TOUR_STEPS[currentStep];
      const element = document.getElementById(step.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep, isActive, isFinished]);

  if (!isActive) return null;

  const step = TOUR_STEPS[currentStep];
  const progress = ((currentStep + 1) / TOUR_STEPS.length) * 100;

  return (
    <div className={`fixed inset-0 z-[200] transition-all duration-1000 ${isFinished ? 'backdrop-blur-md bg-black/60' : 'pointer-events-none'} animate-fadeIn`}>
      {/* Neural Highlight Ring */}
      <div className="absolute inset-0 bg-[#0f172a]/40 transition-all duration-700 pointer-events-auto" onClick={onClose}></div>

      {/* 3D Flip Container */}
      <div className={`absolute transition-all duration-1000 ease-in-out pointer-events-auto
        ${isFinished 
          ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] scale-90' 
          : 'top-[calc(100%-2rem)] left-[calc(100%-2rem)] -translate-x-full -translate-y-full w-full max-w-md scale-100 md:top-[calc(100%-3rem)] md:left-[calc(100%-3rem)]'}`}
        style={{ perspective: '2000px' }}>
        <div className={`relative w-full transition-all duration-1000 preserve-3d ${isFinished ? 'rotate-y-180' : ''}`}>
          
          {/* FRONT SIDE: Tour Content */}
          <div className="relative w-full glass-effect p-8 rounded-[2.5rem] border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)] pointer-events-auto backface-hidden">
            {/* Perfectly Bent Progress Bar */}
            <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none overflow-hidden">
              {/* Track (Subtle) */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5"></div>
              
              {/* Progress Path (Follows modal radius perfectly) */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-1000 ease-in-out"
                style={{ 
                  clipPath: `inset(0 ${100 - progress}% 90% 0)` 
                }}
              ></div>

              {/* Leading Edge Glow */}
              <div 
                className="absolute top-0 h-[2px] w-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 blur-[2px] transition-all duration-1000 ease-in-out"
                style={{ 
                  left: `${progress}%`,
                  transform: `translateX(-100%)`,
                  display: progress > 0 ? 'block' : 'none'
                }}
              ></div>
            </div>

            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                  <i className={`fa-solid ${step.icon} text-xl`}></i>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Nova_Guide_Active</span>
                  </div>
                  <h4 className="text-white font-black text-xl tracking-tight">{step.title}</h4>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <p className="text-[10px] font-black text-indigo-400/60 uppercase tracking-[0.4em] mb-3">{step.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              {step.content}
            </p>

            <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-6">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Step {currentStep + 1} of {TOUR_STEPS.length}
              </div>
              <div className="flex gap-3">
                {currentStep > 0 && (
                  <button 
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-bold transition-all"
                  >
                    Back
                  </button>
                )}
                <button 
                  onClick={() => {
                    if (currentStep < TOUR_STEPS.length - 1) {
                      setCurrentStep(prev => prev + 1);
                    } else {
                      setIsFinished(true);
                    }
                  }}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/20"
                >
                  {currentStep === TOUR_STEPS.length - 1 ? 'Finish Tour' : 'Next Node'}
                </button>
              </div>
            </div>

            {/* Neural Scan Line Animation */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-scanLine"></div>
          </div>

          {/* BACK SIDE: QR Code */}
          <div className="absolute inset-0 w-full h-full glass-effect p-12 rounded-[2.5rem] border border-indigo-500/40 shadow-[0_0_80px_rgba(99,102,241,0.3)] flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden pointer-events-auto overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Close Icon on Top Right - Resets tour to start again */}
            <button 
              onClick={() => {
                setIsFinished(false);
                setCurrentStep(0);
              }}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-10"
              title="Restart Tour"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            <div className="mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] font-black uppercase tracking-[0.3em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Deployment_Complete
              </div>
              <h4 className="text-white font-black text-2xl tracking-tight mb-2">Sync Your Device</h4>
              <p className="text-slate-400 text-xs max-w-[180px] mx-auto">Scan this node to take the experience mobile.</p>
            </div>

            {/* QR Code Placeholder (High-Tech Style) */}
            <div className="relative group/qr z-10">
              <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-full opacity-50 group-hover/qr:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-40 h-40 bg-white p-4 rounded-[2rem] shadow-2xl overflow-hidden transform transition-all duration-700 group-hover/qr:scale-105 group-hover/qr:rotate-1">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(window.location.href)}&color=0f172a`}
                  alt="QR Code"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-[2rem] pointer-events-none"></div>
                
                {/* Scanning line effect on QR */}
                <div className="absolute inset-x-0 top-0 h-1 bg-indigo-500/20 blur-[2px] animate-qrScan"></div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-indigo-500 rounded-tl-xl opacity-40 group-hover/qr:opacity-100 group-hover/qr:-translate-x-1 group-hover/qr:-translate-y-1 transition-all duration-500"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-indigo-500 rounded-tr-xl opacity-40 group-hover/qr:opacity-100 group-hover/qr:translate-x-1 group-hover/qr:-translate-y-1 transition-all duration-500"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-indigo-500 rounded-bl-xl opacity-40 group-hover/qr:opacity-100 group-hover/qr:-translate-x-1 group-hover/qr:translate-y-1 transition-all duration-500"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-indigo-500 rounded-br-xl opacity-40 group-hover/qr:opacity-100 group-hover/qr:translate-x-1 group-hover/qr:translate-y-1 transition-all duration-500"></div>
            </div>

            <div className="mt-10 relative z-10">
              <div className="flex items-center justify-center gap-3 text-[8px] font-black text-indigo-400/40 uppercase tracking-[0.5em]">
                <span className="w-1 h-1 rounded-full bg-indigo-500/40 animate-ping"></span>
                Awaiting_Handshake
                <span className="w-1 h-1 rounded-full bg-indigo-500/40 animate-ping" style={{ animationDelay: '0.5s' }}></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scanLine {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-400px); opacity: 0; }
        }
        @keyframes qrScan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scanLine { animation: scanLine 4s linear infinite; }
        .animate-qrScan { animation: qrScan 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ProductTour;