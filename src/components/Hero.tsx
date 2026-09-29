import React from 'react';
import { ChevronRight, MapPin, CheckCircle2, Clock3, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Apple-style subtle radial ambient illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Apple-style Headline */}
        <h1 className="font-apple-display text-4xl sm:text-6xl lg:text-[72px] font-semibold tracking-[-0.035em] text-white leading-[1.08] mb-6 text-balance">
          Reliable home help. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300">
            Just when you need it.
          </span>
        </h1>

        {/* Apple-style Subheading */}
        <p className="apple-subhead text-base sm:text-xl lg:text-2xl text-slate-300 font-normal max-w-2xl mx-auto mb-8 text-balance">
          Find the right help for your home, verified by us from cleaning and cooking to part-time and full-time assistance.
        </p>

        {/* Apple-style Action Pill Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-full transition-all shadow-md shadow-amber-400/20 whitespace-nowrap flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Book a Service</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onExploreClick}
            className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors py-2 px-3"
          >
            <span>Explore Services</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Apple-style Cinematic Showcase Frame */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 bg-[#0E1524] shadow-2xl max-w-4xl mx-auto">
          <img
            src="/src/assets/images/hero_maid_karachi_1790646619390.jpg"
            alt="Professional domestic helper in a modern bright Defence Karachi home"
            className="w-full h-[340px] sm:h-[460px] lg:h-[520px] object-cover object-center"
            referrerPolicy="no-referrer"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/20 to-transparent pointer-events-none" />
        </div>

        {/* 3-Column Key Highlights */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center shrink-0 border border-emerald-400/20 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Verified by Us</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">All maids are thoroughly checked and verified</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Clear Requirements</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">Specify exact chores & hours upfront</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
              <Clock3 className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Flexible Schedules</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">Hourly, part-time or full-day help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
