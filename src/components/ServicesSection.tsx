import React from 'react';
import {
  User,
  Clock,
  Calendar,
  Sparkles,
  Utensils,
  Brush,
  Shirt,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { ServiceId } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
  onBookClick?: () => void;
}

interface ServiceCardData {
  id: ServiceId;
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgClass: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookClick }) => {
  const rowOneServices: ServiceCardData[] = [
    {
      id: 'all-rounder',
      title: 'Maid / All-Rounder',
      desc: 'Flexible household help for everyday chores, cleaning, organising and general home assistance.',
      icon: <User className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#FEE36E]', // Warm vibrant yellow pastel
    },
    {
      id: 'part-time',
      title: 'Part-Time Maid',
      desc: 'Convenient help for a few hours a day based on your schedule.',
      icon: <Clock className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#D6B2FD]', // Soft lavender purple pastel
    },
    {
      id: 'full-time',
      title: 'Full-Time Maid',
      desc: 'Regular household assistance for families who need dependable full-day support.',
      icon: <Calendar className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#7DD3FC]', // Soft sky blue pastel
    },
    {
      id: 'hourly',
      title: 'Hourly Maid',
      desc: 'Quick home help for the specific number of hours you need.',
      icon: <Clock className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#BEF264]', // Bright lime pastel
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      desc: 'Detailed cleaning for kitchens, bathrooms, corners and areas that need extra attention.',
      icon: <Sparkles className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#FDA4AF]', // Coral rose peach pastel
    },
  ];

  const rowTwoServices: ServiceCardData[] = [
    {
      id: 'cooking',
      title: 'Cooking',
      desc: "Home-cooking assistance based on your household's needs.",
      icon: <Utensils className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#67E8F9]', // Soft cyan aqua pastel
    },
    {
      id: 'cleaning',
      title: 'Cleaning',
      desc: 'Regular cleaning support to keep your home fresh and organised.',
      icon: <Brush className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#86EFAC]', // Mint pastel
    },
    {
      id: 'laundry',
      title: 'Laundry',
      desc: 'Help with washing, folding and everyday laundry tasks.',
      icon: <Shirt className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#FDBA74]', // Apricot orange pastel
    },
    {
      id: 'elderly-care',
      title: 'Elderly Care',
      desc: 'Compassionate assistance for elderly family members with everyday household and personal support.',
      icon: <HeartHandshake className="w-5 h-5 text-slate-900" />,
      bgClass: 'bg-[#F472B6]', // Soft lilac pink pastel
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#070B12] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-2 block">
              OUR SERVICES
            </span>
            <h2 className="font-apple-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-white">
              Home Help for Every Need
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
              Choose from a range of trusted home services, tailored to your lifestyle and requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="self-start sm:self-auto px-5 py-2.5 text-xs font-semibold text-slate-950 bg-[#FEE36E] hover:bg-amber-300 active:scale-95 rounded-full transition-all shadow-md shadow-amber-400/20 whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book a Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Row 1: 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-5">
          {rowOneServices.map((srv) => (
            <div
              key={srv.id}
              className={`${srv.bgClass} rounded-[24px] p-6 text-slate-900 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[260px]`}
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center mb-4">
                  {srv.icon}
                </div>
                <h3 className="text-base font-bold text-slate-950 tracking-tight mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-5 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectService(srv.id)}
                  className="w-fit px-4 py-1.5 text-xs font-semibold text-white bg-slate-950 hover:bg-black active:scale-95 rounded-full transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {rowTwoServices.map((srv) => (
            <div
              key={srv.id}
              className={`${srv.bgClass} rounded-[24px] p-6 text-slate-900 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[260px]`}
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center mb-4">
                  {srv.icon}
                </div>
                <h3 className="text-base font-bold text-slate-950 tracking-tight mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-5 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectService(srv.id)}
                  className="w-fit px-4 py-1.5 text-xs font-semibold text-white bg-slate-950 hover:bg-black active:scale-95 rounded-full transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
