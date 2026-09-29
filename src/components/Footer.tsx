import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { ServiceId } from '../types';

interface FooterProps {
  onSelectService: (serviceId: ServiceId) => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQs', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesCol1: { id: ServiceId; label: string }[] = [
    { id: 'all-rounder', label: 'Maid / All-Rounder' },
    { id: 'part-time', label: 'Part-Time' },
    { id: 'full-time', label: 'Full-Time' },
    { id: 'hourly', label: 'Hourly' },
    { id: 'deep-cleaning', label: 'Deep Cleaning' },
  ];

  const servicesCol2: { id: ServiceId; label: string }[] = [
    { id: 'cooking', label: 'Cooking' },
    { id: 'cleaning', label: 'Cleaning' },
    { id: 'laundry', label: 'Laundry' },
    { id: 'elderly-care', label: 'Elderly Care' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050914] border-t border-white/[0.08] text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 mb-14">
          {/* Col 1: Brand & Bio */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#FEE36E] flex items-center justify-center text-slate-950 font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-apple-display font-semibold text-base tracking-tight text-white">
                Maid<span className="text-[#FEE36E]">Connect</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-xs font-normal">
              Simple, convenient home help for everyday life.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-xs mb-3.5 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-white transition-colors text-slate-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Group 1 */}
          <div>
            <h4 className="font-semibold text-white text-xs mb-3.5 tracking-tight">
              Services
            </h4>
            <ul className="space-y-2">
              {servicesCol1.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(srv.id);
                    }}
                    className="hover:text-white transition-colors text-left text-slate-400 cursor-pointer"
                  >
                    {srv.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services Group 2 */}
          <div className="pt-0 sm:pt-6 lg:pt-7">
            <ul className="space-y-2">
              {servicesCol2.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(srv.id);
                    }}
                    className="hover:text-white transition-colors text-left text-slate-400 cursor-pointer"
                  >
                    {srv.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Service Area & Follow Us */}
          <div>
            <h4 className="font-semibold text-white text-xs mb-3.5 tracking-tight">
              Service Area
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#FEE36E] shrink-0" />
              <span>Defence, Karachi</span>
            </div>

            <h4 className="font-semibold text-white text-xs mb-2.5 tracking-tight">
              Follow Us
            </h4>
            <div className="flex items-center gap-2">
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/30 flex items-center justify-center transition-transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 flex items-center justify-center transition-transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-7 h-7 rounded-full bg-slate-700/60 hover:bg-slate-700 text-white border border-white/20 flex items-center justify-center transition-transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.88-4.48V8.75a8.28 8.28 0 0 0 4.89 1.58V6.88a4.86 4.86 0 0 1-1-.19Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 flex items-center justify-center transition-transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 flex items-center justify-center transition-transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.04 3.67M9.53 7.34C9.36 7.34 9.08 7.41 8.84 7.67C8.6 7.93 7.93 8.56 7.93 9.85C7.93 11.14 8.87 12.38 9 12.55C9.14 12.72 10.86 15.37 13.5 16.5C14.13 16.77 14.62 16.93 15 17.06C15.63 17.26 16.21 17.23 16.66 17.16C17.17 17.08 18.23 16.52 18.45 15.89C18.67 15.26 18.67 14.73 18.6 14.61C18.53 14.49 18.36 14.42 18.1 14.29C17.84 14.16 16.57 13.53 16.34 13.45C16.1 13.36 15.93 13.32 15.76 13.58C15.6 13.84 15.11 14.42 14.96 14.59C14.81 14.76 14.66 14.78 14.4 14.65C14.14 14.53 13.32 14.26 12.34 13.39C11.58 12.71 11.07 11.87 10.92 11.61C10.77 11.35 10.9 11.21 11.03 11.08C11.15 10.96 11.3 10.77 11.43 10.62C11.56 10.47 11.6 10.36 11.69 10.19C11.77 10.02 11.73 9.87 11.67 9.75C11.6 9.62 11.1 8.39 10.9 7.89C10.69 7.41 10.49 7.47 10.33 7.46C10.19 7.46 10.02 7.45 9.85 7.45C9.68 7.45 9.53 7.34 9.53 7.34Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 MaidConnect. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
