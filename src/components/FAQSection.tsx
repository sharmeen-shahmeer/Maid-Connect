import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('area-coverage'); // open first by default
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'general' | 'services' | 'booking' | 'payment'>('all');

  const filteredFAQs = FAQ_DATA.filter((item) => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesSearch =
      searchTerm === '' ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 lg:py-32 bg-[#070B12] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-3 block">
            Questions & Answers
          </span>
          <h2 className="font-apple-display text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-white">
            Frequently asked questions.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal">
            Everything you need to know about booking, services, schedules, and payment methods in Defence, Karachi.
          </p>
        </div>

        {/* Search & Category Filter (Apple style) */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions (e.g. hourly, JazzCash, Clifton, cooking)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-11 pr-5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 justify-start sm:justify-center">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'services', label: 'Services' },
              { id: 'booking', label: 'Booking Process' },
              { id: 'payment', label: 'Payments' },
              { id: 'general', label: 'Location & Support' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryFilter(cat.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  categoryFilter === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[20px] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1524] border-white/20 shadow-lg'
                    : 'bg-[#0E1524]/60 border-white/10 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-apple-display text-base sm:text-lg font-semibold text-white leading-snug tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-400 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] animate-in fade-in duration-150 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-sm font-normal">
              No matching questions found. Try searching for something else or ask our assistant!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
