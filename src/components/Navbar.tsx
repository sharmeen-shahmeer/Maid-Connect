import React, { useState } from 'react';
import { Menu, X, CalendarCheck, ArrowRight, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  onViewRequestsClick: () => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookClick,
  onViewRequestsClick,
  bookingCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'DHA Coverage', href: '#coverage' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070B12]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 py-1"
          >
            <span className="text-[17px] font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              Maid<span className="text-amber-400">Connect</span>
            </span>
          </a>

          {/* Navigation Links (Apple style subtle text links) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-normal text-slate-300 hover:text-white transition-opacity opacity-85 hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {bookingCount > 0 && (
              <button
                type="button"
                onClick={onViewRequestsClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-full transition-colors whitespace-nowrap"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>My Bookings ({bookingCount})</span>
              </button>
            )}

            <button
              type="button"
              onClick={onBookClick}
              className="px-4 py-1.5 text-[12px] sm:text-[13px] font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-full transition-all shadow-sm shadow-amber-400/20 whitespace-nowrap flex items-center gap-1"
            >
              <span>Book a Service</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B12]/95 backdrop-blur-2xl border-b border-white/10 px-5 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            {bookingCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onViewRequestsClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>View My Bookings ({bookingCount})</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors text-center"
            >
              Book a Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
