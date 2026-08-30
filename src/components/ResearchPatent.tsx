
import React from 'react';
import { resumeData } from '../data/resumeData';
import {
  BookOpen,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  Globe2,
  Sparkles,
} from 'lucide-react';

export const ResearchPatent: React.FC = () => {
  const { researchAndPatent } = resumeData;

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="relative overflow-hidden py-20 sm:py-24 px-4"
    >
      {/* Cinematic ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[320px] rounded-full bg-[#D4AF37]/[0.03] blur-[130px]"
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap">
            05. Innovation & Discovery
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <h2
              id="research-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Research, Patent & Publications
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              Intellectual property and research contributions demonstrating
              innovation beyond application development.
            </p>
          </div>

          <div className="inline-flex items-center self-start lg:self-auto gap-2.5 px-4 py-2 rounded-full bg-white/[0.035] border border-white/10">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.7)]" />

            <span className="font-mono text-[10px] sm:text-xs tracking-wider text-gray-300 uppercase">
              01 Patent · 01 Research Contribution
            </span>
          </div>
        </div>

        {/* Research cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

          {/* PATENT */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.04] hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)]">

            {/* Accent */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent transition-transform duration-500 group-hover:scale-y-100"
            />

            <div className="p-6 sm:p-7 lg:p-8">

              {/* Card top */}
              <div className="flex items-start justify-between gap-4 mb-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  <Sparkles className="h-3 w-3" />
                  Patent Application
                </span>
              </div>

              {/* Label */}
              <span className="block mb-2 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-gray-600">
                Intellectual Property
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold leading-snug tracking-tight text-white">
                {researchAndPatent.patent.title}
              </h3>

              {/* Patent metadata */}
              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-600">
                      Application No.
                    </span>

                    <span className="mt-1 block text-lg font-mono font-bold tracking-wide text-[#D4AF37]">
                      {researchAndPatent.patent.patentNo}
                    </span>
                  </div>

                  <span className="w-fit rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-mono text-gray-400">
                    {researchAndPatent.patent.status}
                  </span>

                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-gray-600">
                  <FileText className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Indian Patent Application</span>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D4AF37]"
                />
              </div>
            </div>
          </article>

          {/* RESEARCH */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.04] hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)]">

            {/* Accent */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-sky-400 via-sky-400/40 to-transparent transition-transform duration-500 group-hover:scale-y-100"
            />

            <div className="p-6 sm:p-7 lg:p-8">

              {/* Card top */}
              <div className="flex items-start justify-between gap-4 mb-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 text-sky-400">
                  <BookOpen className="h-6 w-6" />
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300">
                  <Globe2 className="h-3 w-3" />
                  Scopus-Indexed Research
                </span>
              </div>

              {/* Label */}
              <span className="block mb-2 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-gray-600">
                Research Contribution
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold leading-snug tracking-tight text-white">
                {researchAndPatent.publication.title}
              </h3>

              {/* Research metadata */}
              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-600">
                      Presented At
                    </span>

                    <span className="mt-1 block text-lg font-mono font-bold tracking-wide text-sky-300">
                      {researchAndPatent.publication.presentedAt}
                    </span>
                  </div>

                  <span className="w-fit rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-[10px] font-mono font-semibold text-emerald-400">
                    {researchAndPatent.publication.indexType}
                  </span>

                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-gray-600">
                  <BookOpen className="h-3.5 w-3.5 text-sky-400" />
                  <span>International Conference Research</span>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400"
                />
              </div>
            </div>
          </article>

        </div>

        {/* Credibility strip */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            </span>

            <div>
              <p className="text-xs font-semibold text-gray-300">
                Research-driven engineering
              </p>

              <p className="mt-0.5 text-[10px] font-mono text-gray-600">
                Innovation · Intellectual Property · Applied AI
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-600">
            Beyond Code
          </span>
        </div>

      </div>
    </section>
  );
};
