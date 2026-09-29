import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Plus,
  Minus,
  ArrowRight,
  HandMetal,
  Headphones,
} from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const CONTACT_INFO = {
    phone: '+92 300 1234567',
    email: 'support@maidconnect.pk',
    serviceArea: 'Defence, Karachi',
  };

  const topFaqs = [
    {
      q: 'What areas does MaidConnect currently serve?',
      a: 'We currently serve Defence, Karachi exclusively (Phases 1 through 8, including Phase 2 Ext and Phase 7 Ext).',
    },
    {
      q: 'What types of home help can I book?',
      a: 'You can book Maid / All-Rounder, Part-Time Maid, Full-Time Maid, Hourly Help, Deep Cleaning, Cooking, Regular Cleaning, Laundry, and Elderly Care.',
    },
    {
      q: 'Can I book a maid for 2 to 4 hours?',
      a: 'Yes! Our Hourly Maid service is specifically designed for 2, 3, or 4-hour quick cleans or party prep.',
    },
    {
      q: 'What is the difference between part-time and full-time service?',
      a: 'Part-time covers a scheduled shift of 2–4 hours daily for core tasks. Full-time offers 8–9 hours of complete domestic management.',
    },
    {
      q: 'Can I request a specific date and time?',
      a: 'Yes, choose your exact date and select Morning, Afternoon, Evening, or Full Day during booking.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#070B12] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container without enclosing box */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-stretch">
            {/* Left Column: Get In Touch */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs">
                    ✋
                  </span>
                  <h3 className="font-apple-display text-2xl font-bold text-white tracking-tight">
                    Get In Touch
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  Need help or have a question? We&apos;re here for you.
                </p>

                {/* Contact Items List */}
                <div className="space-y-4 mb-8">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">{CONTACT_INFO.phone}</div>
                      <div className="text-[11px] text-slate-400">WhatsApp / Call</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{CONTACT_INFO.email}</div>
                      <div className="text-[11px] text-slate-400">We&apos;ll respond as soon as possible</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Service Area</div>
                      <div className="text-[11px] text-slate-400">{CONTACT_INFO.serviceArea}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-[#FEE36E] hover:bg-amber-300 rounded-full transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Middle Column: Our Office Map */}
<div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-white/10 shadow-lg min-h-[320px] bg-[#0B111A]">
  <div className="absolute top-4 left-4 z-10 bg-[#070B12]/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
    <p className="text-[10px] uppercase tracking-widest text-slate-400">
      Our Office
    </p>
    <p className="text-sm font-semibold text-white mt-1">
      Defence, Karachi
    </p>
 </div>

  <iframe
    title="MaidConnect Office - Defence Karachi"
    src="https://www.google.com/maps?q=Defence%2C%20Karachi%2C%20Pakistan&output=embed"
    className="w-full h-full min-h-[320px] border-0"
    loading="lazy"
    allowFullScreen
            {/* Right Column: Frequently Asked Questions Accordion */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase mb-1.5 block">
                  FAQS
                </span>
                <h3 className="font-apple-display text-xl font-bold text-white tracking-tight mb-4">
                  Frequently Asked Questions
                </h3>

                {/* Accordion List */}
                <div className="space-y-2">
                  {topFaqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border-b border-white/10 pb-2.5 transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left flex items-start justify-between gap-2 py-1 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                        >
                          <span className="leading-snug">{faq.q}</span>
                          <span className="text-slate-400 mt-0.5 shrink-0">
                            {isOpen ? (
                              <Minus className="w-3.5 h-3.5 text-amber-400" />
                            ) : (
                              <Plus className="w-3.5 h-3.5" />
                            )}
                          </span>
                        </button>

                        {isOpen && (
                          <p className="mt-1 text-[11px] text-slate-400 leading-relaxed font-normal animate-fadeIn">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href="#faqs"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaqIndex(0);
                  }}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>View all FAQs</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
