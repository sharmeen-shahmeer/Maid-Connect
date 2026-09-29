import React, { useState } from 'react';
import { MapPin, Check, Navigation, Building2 } from 'lucide-react';
import { DHA_PHASES, DHA_POPULAR_KHAYABANS } from '../data/defenceLocations';

export const DefenceCoverage: React.FC<{ onBookInPhase: (phase: string) => void }> = ({
  onBookInPhase,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<string>(DHA_PHASES[4].phase); // default Phase 5

  const activePhaseInfo = DHA_PHASES.find((p) => p.phase === selectedPhase) || DHA_PHASES[0];

  return (
    <section id="coverage" className="py-20 lg:py-32 bg-[#070B12] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-3 block">
              Operating Radius
            </span>
            <h2 className="font-apple-display text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-white">
              Currently serving Defence, Karachi.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
              Exclusively focused on DHA Karachi to guarantee punctual arrival and responsive support. Phases 1 through 8.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs text-slate-300 self-start md:self-auto backdrop-blur-md">
            <Navigation className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Phases 1–8 Active Coverage</span>
          </div>
        </div>

        {/* Coverage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Map & Visual Card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-[28px] overflow-hidden border border-white/10 bg-[#0E1524] shadow-2xl relative">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/src/assets/images/defence_karachi_coastal_1790646659926.jpg"
                alt="Scenic view of Defence Housing Authority Karachi coastal boulevard and Khayabans"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Defence Housing Authority, Karachi</span>
              </div>
            </div>

            <div className="p-7 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-apple-display text-xl font-semibold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>{activePhaseInfo.label}</span>
                </h3>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  Ready to Book
                </span>
              </div>
              <p className="text-sm text-slate-300 mb-6 font-normal">
                {activePhaseInfo.notableAreas}
              </p>

              {/* Popular Khayabans tags */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-3">
                  Frequently Served Khayabans & Commercials
                </div>
                <div className="flex flex-wrap gap-2">
                  {DHA_POPULAR_KHAYABANS.slice(0, 8).map((khayaban) => (
                    <span
                      key={khayaban}
                      className="text-xs bg-white/[0.04] text-slate-300 px-3 py-1 rounded-full border border-white/10"
                    >
                      {khayaban}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onBookInPhase(activePhaseInfo.phase)}
                  className="w-full py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors text-center shadow-md shadow-amber-400/20"
                >
                  Book Service in {activePhaseInfo.label}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Phase selector list */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center justify-between">
                <span>Select Your Phase in Defence</span>
                <span className="text-xs text-slate-400 font-normal">Click to preview</span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {DHA_PHASES.map((p) => {
                  const isSelected = selectedPhase === p.phase;
                  return (
                    <button
                      key={p.phase}
                      type="button"
                      onClick={() => setSelectedPhase(p.phase)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                          : 'bg-[#0E1524] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-semibold">{p.label}</div>
                        <div className="text-[11px] text-slate-400 truncate max-w-[130px] sm:max-w-[170px] mt-0.5">
                          {p.notableAreas.split(',')[0]}
                        </div>
                      </div>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
