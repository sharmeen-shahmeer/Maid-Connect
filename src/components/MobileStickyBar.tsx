import React from 'react';
import { Calendar, MessageCircle, ChevronRight } from 'lucide-react';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#070B12]/85 backdrop-blur-xl border-t border-white/10 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 bg-white/[0.06] border border-white/10 text-emerald-400 font-semibold text-xs rounded-full flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={onBookClick}
        className="flex-[2] py-2.5 px-4 bg-amber-400 text-slate-950 font-semibold text-xs rounded-full flex items-center justify-center gap-1 active:scale-95 transition-all shadow-md shadow-amber-400/20"
      >
        <Calendar className="w-3.5 h-3.5 text-slate-950" />
        <span>Book a Service</span>
        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
      </button>
    </div>
  );
};
