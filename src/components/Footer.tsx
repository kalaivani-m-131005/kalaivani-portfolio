import React from 'react';
import { resumeData } from '../data/resumeData';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060608] py-12 px-4 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-display font-bold text-white text-lg tracking-wider">
              {resumeData.hero.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
              CGPA 9.14
            </span>
          </div>
          <p className="text-xs text-gray-400 font-mono">
            Cinematic Portfolio & Factual Resume Platform • 2026
          </p>
        </div>

        {/* Center Fidelity Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>100% Resume Content Order Maintained</span>
        </div>

        {/* Right Scroll Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37] text-gray-300 hover:text-[#D4AF37] transition-all duration-200 group shadow-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
