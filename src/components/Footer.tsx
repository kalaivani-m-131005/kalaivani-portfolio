import React from 'react';
import { resumeData } from '../data/resumeData';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#060608] px-4 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Code2 className="w-4 h-4 text-[#D4AF37]" />

              <span className="font-display text-lg font-bold tracking-wide text-white">
                {resumeData.hero.name}
              </span>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Software Developer • Java Developer • AI & Data Analytics
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-mono text-[10px] text-gray-600">
              © {currentYear} {resumeData.hero.name} — All rights reserved.
            </p>

            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-[#D4AF37]/50">
              Designed & Built with Passion
            </p>
          </div>

          {/* Scroll Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-mono text-gray-400 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
          >
            <span>BACK TO TOP</span>

            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom cinematic line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>
    </footer>
  );
};