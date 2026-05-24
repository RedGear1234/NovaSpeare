import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookie consent cookie exists
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const consent = getCookie('nova_cookie_consent');
    if (!consent) {
      // If no consent cookie found, show the banner
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie for 365 days
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = `nova_cookie_consent=accepted; expires=${date.toUTCString()}; path=/; SameSite=Lax; Secure`;
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Set a session cookie or decline cookie so we don't spam the user in the current session
    document.cookie = `nova_cookie_consent=declined; path=/; SameSite=Lax; Secure`;
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[110] animate-slideUp">
      <div className="glass-effect rounded-[2rem] p-6 border border-white/10 shadow-2xl relative overflow-hidden bg-[#0f172a]/95 backdrop-blur-xl">
        {/* Glow effect */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 shrink-0 shadow-inner">
              <i className="fa-solid fa-cookie-bite text-amber-400 text-xl animate-pulse"></i>
            </div>
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
                Cookie Consent <span className="text-[8px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full">Secure Link</span>
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                We use proprietary cookies to verify your neural connection, save your Strategy Lab creations, and enhance site speed. By clicking "Accept All", you agree to our storage policy.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-white/5">
            <button
              onClick={handleAccept}
              className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/20 active:scale-95 text-center"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-5 py-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/5 transition-all active:scale-95 text-center"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
