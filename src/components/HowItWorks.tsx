import React from 'react';
import { CheckCircle2, FileText, Users, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      numColor: 'bg-[#FEE36E] text-slate-950',
      icon: <CheckCircle2 className="w-5 h-5 text-[#FEE36E]" />,
      title: 'Tell Us What You Need',
      desc: 'Choose the service, timing and requirements.',
    },
    {
      num: '02',
      numColor: 'bg-[#C4B5FD] text-slate-950',
      icon: <FileText className="w-5 h-5 text-[#C4B5FD]" />,
      title: 'Submit Your Request',
      desc: 'Provide your contact and location details.',
    },
    {
      num: '03',
      numColor: 'bg-[#7DD3FC] text-slate-950',
      icon: <Users className="w-5 h-5 text-[#7DD3FC]" />,
      title: 'We Match Your Requirement',
      desc: 'The request is reviewed according to your needs.',
    },
    {
      num: '04',
      numColor: 'bg-[#86EFAC] text-slate-950',
      icon: <ShieldCheck className="w-5 h-5 text-[#86EFAC]" />,
      title: 'Confirm Your Booking',
      desc: 'Confirm the details and selected payment method.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-[#070B12] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-2 block">
            HOW IT WORKS
          </span>
          <h2 className="font-apple-display text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-white">
            Get Help in 4 Simple Steps
          </h2>
        </div>

        {/* 4 Steps Grid Matching Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-8 h-8 rounded-full ${step.numColor} font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                  {step.num}
                </span>
                <div className="w-7 h-7 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
