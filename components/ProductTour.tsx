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
    content: 'Welcome to NovaSphere. This is where we define the future of digital. Our Hero section sets the stage for technical excellence and results-driven architecture.',
    targetId: 'hero',
    icon: 'fa-microchip'
  },
  {
    id: 'services',
    title: 'Operational Mastery',
    subtitle: 'CAPABILITY_MATRIX',
    content: 'Our core services are precision-engineered to scale. From SEO to AI integration, every node in this matrix is designed for maximum ROI.',
    targetId: 'services',
    icon: 'fa-layers-group'
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

  useEffect(() => {
    if (isActive) {
      const step = TOUR_STEPS[currentStep];
      const element = document.getElementById(step.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep, isActive]);

  if (!isActive) return null;

  const step = TOUR_STEPS[currentStep];
  const progress = ((currentStep + 1) / TOUR_STEPS.length) * 100;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none flex flex-col justify-end p-6 md:p-12 items-center md:items-end animate-fadeIn">
      {/* Neural Highlight Ring (Visual indicator on the target) */}
      <div className="absolute inset-0 bg-[#0f172a]/20 backdrop-blur-[2px] transition-all duration-700 pointer-events-auto" onClick={onClose}></div>

      {/* Guide Card */}
      <div className="relative w-full max-w-md glass-effect p-8 rounded-[2.5rem] border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)] pointer-events-auto transform transition-all duration-500 animate-slideUp">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 rounded-t-[2.5rem] overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500" 
            style={{ width: `${progress}%` }}
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
            className="text-slate-500 hover:text-white transition-colors"
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
                  onClose();
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

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scanLine {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-400px); opacity: 0; }
        }
        .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scanLine { animation: scanLine 4s linear infinite; }
      `}</style>
    </div>
  );
};

export default ProductTour;