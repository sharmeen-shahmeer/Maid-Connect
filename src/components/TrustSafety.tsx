import React from 'react';
import { ShieldCheck, CheckCircle2, MessageCircle, HeartHandshake, PhoneCall } from 'lucide-react';

export const TrustSafety: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#070B12] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="font-apple-display text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-white">
            How we keep things honest & hassle-free.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            Inviting someone into your home takes trust. We make sure you get reliable help without awkward negotiations, uncertain backgrounds, or rigid contracts.
          </p>
        </div>

        {/* Human Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Verified by Us */}
          <div className="p-8 rounded-[28px] bg-[#0E1524] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-apple-display text-2xl font-semibold text-white mb-3 tracking-tight">
                Personally met & verified by us.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                We never send someone we haven&apos;t personally met. Our local team verifies every helper&apos;s government CNIC, interviews them face-to-face, and confirms their household skills before introducing them to your home.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-emerald-300 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Identity verified & background checked</span>
            </div>
          </div>

          {/* Card 2: Clear Chores */}
          <div className="p-8 rounded-[28px] bg-[#0E1524] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-apple-display text-2xl font-semibold text-white mb-3 tracking-tight">
                Clear chores from day one.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Misunderstandings create friction. You tell us upfront what you need — sweeping, mopping, daily roti making, bathroom scrubbing, or laundry — so your helper arrives knowing exactly what to do.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-amber-300 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Agreed tasks before arrival</span>
            </div>
          </div>

          {/* Card 3: Pay after work */}
          <div className="p-8 rounded-[28px] bg-[#0E1524] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-400/10 border border-purple-400/20 text-purple-400 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-apple-display text-2xl font-semibold text-white mb-3 tracking-tight">
                Pay only after the work is done.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                No advance deposits, no annual subscription lock-ins, and zero surprise fees. Once your helper finishes their shift and you are happy with the clean home, pay directly via Cash, JazzCash, or Easypaisa.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-purple-300 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Zero advance deposit required</span>
            </div>
          </div>

          {/* Card 4: Real people on WhatsApp */}
          <div className="p-8 rounded-[28px] bg-[#0E1524] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-apple-display text-2xl font-semibold text-white mb-3 tracking-tight">
                Real people you can actually reach.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Plans change all the time. Need to push timings back an hour, request extra help for guests tonight, or pause while you&apos;re traveling? Just message our team on WhatsApp — we reply promptly.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-cyan-300 font-medium flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Direct WhatsApp & phone coordination</span>
            </div>
          </div>
        </div>

        {/* Reassurance Banner */}
        <div className="p-6 sm:p-8 rounded-[28px] bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-apple-display text-lg font-semibold text-white mb-1">
              Have specific questions about routines or timings?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Speak with our coordination desk directly. We&apos;ll help you figure out what kind of helper fits your household best.
            </p>
          </div>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
