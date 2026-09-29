import React from 'react';
import { Leaf, HeartHandshake, Award, UserCheck, ChevronRight, MessageCircle } from 'lucide-react';

interface WhyChooseUsProps {
  onBookClick?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookClick }) => {
  const reasons = [
    {
      icon: Leaf,
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-400/10 border-emerald-400/20',
      title: 'Sustainability features in everything we do',
      description:
        'We always make climate-friendly choices, and encourage methods, cleaning products, and transport solutions with as little environmental impact as possible. We make sure we act responsibly for our city and community.',
    },
    {
      icon: HeartHandshake,
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-400/10 border-amber-400/20',
      title: 'Our employees have collective agreements and fair terms of employment',
      description:
        'Security and fair terms of employment are second nature to us. Our employees have verified agreements, transparent compensations, and equitable working conditions. Because we are nothing without our hardworking staff.',
    },
    {
      icon: Award,
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-400/10 border-purple-400/20',
      title: 'We guarantee customer satisfaction',
      description:
        'If, at any time, you’re not completely satisfied, you can rely on our Customer Satisfaction Guarantee. Contact us straight away, and we’ll fix whatever is not right as quickly as we can!',
    },
    {
      icon: UserCheck,
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-400/10 border-cyan-400/20',
      title: 'Always the same service assistant',
      description:
        'We ensure that the same employee always takes care of your cleaning and home — he or she will become an expert in your home routines, family preferences, and how you want things done.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#070B12] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs text-amber-300 mb-4 font-medium">
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-apple-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
            Four good reasons to choose MaidConnect
          </h2>
          <p className="mt-3 text-base text-slate-300 font-normal leading-relaxed">
            Professional domestic care designed for modern Karachi households — ethical, consistent, and guaranteed.
          </p>
        </div>

        {/* 4 Reasons Grid - Clean Editorial Style without boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-14">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex flex-col justify-start">
                <div className="mb-4">
                  <Icon className={`w-8 h-8 ${reason.iconColor} stroke-[1.6]`} />
                </div>
                <h3 className="font-apple-display text-lg sm:text-xl font-semibold text-white mb-3 tracking-tight leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner - Clean inline layout without box */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-apple-display text-lg font-semibold text-white mb-1">
              Have specific questions about routines or helper preferences?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Speak with our coordination desk directly. We’ll help you select the exact helper matching your household.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {onBookClick && (
              <button
                type="button"
                onClick={onBookClick}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors flex items-center gap-1.5"
              >
                <span>Book Helper</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
