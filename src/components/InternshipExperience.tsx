
import React from 'react';
import { Calendar, Sparkles, Building2, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const InternshipExperience: React.FC = () => {
  const internships = resumeData.internships;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-20 sm:py-24 px-4 overflow-hidden"
    >
      {/* Ambient cinematic glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#D4AF37]/[0.035] blur-[120px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap">
            03. Career History
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Internship Experience
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              Practical experience across data analytics, artificial intelligence,
              Java development, and full-stack engineering.
            </p>
          </div>

          {/* Dynamic count */}
          <div className="inline-flex items-center self-start lg:self-auto gap-2.5 px-4 py-2 rounded-full bg-white/[0.035] border border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
            <span className="font-mono text-[11px] sm:text-xs tracking-wider text-gray-300 uppercase">
              {internships.length} Internships
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-[#D4AF37]/60 via-white/10 to-transparent"
          />

          <div className="space-y-7 sm:space-y-9">
            {internships.map((internship, index) => (
              <article
                key={internship.id}
                className="group relative pl-9 sm:pl-12"
              >
                {/* Timeline node */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-5 flex items-center justify-center"
                >
                  <div className="relative flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#08080a] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:scale-110">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:h-2 group-hover:w-2 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.9)]" />
                  </div>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D4AF37]/35 group-hover:bg-white/[0.04] group-hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                  {/* Gold hover accent */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[#D4AF37] to-transparent transition-transform duration-500 group-hover:scale-y-100"
                  />

                  <div className="p-5 sm:p-6 lg:p-7">
                    {/* Top row */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        {/* Role + selected badge */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold tracking-tight text-white">
                            {internship.role}
                          </h3>

                          {internship.selectedTag && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                              <Sparkles className="h-3 w-3" />
                              Selected
                            </span>
                          )}
                        </div>

                        {/* Company */}
                        <div className="mt-2.5 flex items-center gap-2 text-sm text-gray-300">
                          <Building2
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-[#D4AF37]"
                          />
                          <span className="font-medium">
                            {internship.company}
                          </span>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-mono text-gray-300">
                        <Calendar
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#D4AF37]"
                        />
                        <span>{internship.period}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    {/* Description */}
                    <p className="max-w-3xl text-sm sm:text-[15px] leading-7 text-gray-400">
                      {internship.description}
                    </p>

                    {/* Bottom micro-detail */}
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                        Professional Experience
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Entry number */}
                <span
                  aria-hidden="true"
                  className="absolute -left-1 top-1 hidden -translate-x-full pr-3 font-mono text-[9px] tracking-widest text-gray-700 sm:block"
                >
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

