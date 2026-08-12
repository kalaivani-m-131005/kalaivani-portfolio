import React from 'react';
import { resumeData } from '../data/resumeData';
import { BookOpen, ShieldCheck } from 'lucide-react';

export const ResearchPatent: React.FC = () => {
  const { researchAndPatent } = resumeData;

  return (
    <section id="research" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            05. INNOVATION & DISCOVERY
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              5. RESEARCH, PATENT & PUBLICATIONS
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Combined section for intellectual property patents and Scopus-indexed research contributions.
            </p>
          </div>
          <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full self-start">
            1 Patent • 1 Scopus Paper
          </span>
        </div>

        {/* Combined Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Patent Card */}
          <div className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark relative overflow-hidden group space-y-5">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-mono font-bold">
                PATENT APPLICATION
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-gray-400 tracking-wider uppercase block mb-1">
                PATENT TITLE
              </span>
              <h3 className="text-xl font-display font-bold text-white tracking-wide leading-snug">
                {researchAndPatent.patent.title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase block">PATENT NO</span>
                <span className="text-lg font-mono font-bold text-[#D4AF37]">
                  {researchAndPatent.patent.patentNo}
                </span>
              </div>
              <span className="text-xs font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded">
                Published Patent Application
              </span>
            </div>

            <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Official Indian Patent Office Application Record</span>
            </div>
          </div>

          {/* Scopus Publication Card */}
          <div className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-sky-500/40 transition-all duration-300 shadow-card-dark relative overflow-hidden group space-y-5">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/50 text-sky-300 text-xs font-mono font-bold">
                SCOPUS PUBLICATION
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-gray-400 tracking-wider uppercase block mb-1">
                RESEARCH TITLE
              </span>
              <h3 className="text-xl font-display font-bold text-white tracking-wide leading-snug">
                {researchAndPatent.publication.title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase block">PRESENTED AT</span>
                <span className="text-base font-mono font-bold text-sky-300">
                  {researchAndPatent.publication.presentedAt}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded">
                Scopus-Indexed
              </span>
            </div>

            <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5 pt-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>International Conference Proceeding Contributor</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
