import React from 'react';
import { resumeData } from '../data/resumeData';
import {
  GraduationCap,
  School,
  Calendar,
  ArrowUpRight,
  Award,
} from 'lucide-react';

export const Education: React.FC = () => {
  const education = resumeData.education;
  const primaryEducation = education[0];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative overflow-hidden py-20 sm:py-24 px-4"
    >
      {/* Cinematic ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-[130px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap">
            07. Academics
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <h2
              id="education-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Education
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              Academic milestones reflecting a strong foundation in computer
              science, engineering, and continuous technical learning.
            </p>
          </div>

          {/* Dynamic academic highlight */}
          {primaryEducation && (
            <div className="inline-flex items-center self-start lg:self-auto gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.06] border border-emerald-500/20">
              <Award className="h-3.5 w-3.5 text-emerald-400" />

              <span className="font-mono text-[10px] sm:text-xs tracking-wider text-emerald-400 uppercase">
                {primaryEducation.scoreLabel}: {primaryEducation.score}
              </span>
            </div>
          )}
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {education.map((edu, index) => {
            const isPrimary = index === 0;

            return (
              <article
                key={`${edu.degree}-${edu.institution}`}
                className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 lg:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.04] hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
              >
                {/* Left hover accent */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b ${isPrimary
                      ? 'from-[#D4AF37] via-[#D4AF37]/40'
                      : 'from-sky-400 via-sky-400/40'
                    } to-transparent transition-transform duration-500 group-hover:scale-y-100`}
                />

                <div>
                  {/* Icon + Period */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${isPrimary
                          ? 'border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]'
                          : 'border-sky-400/25 bg-sky-400/10 text-sky-400'
                        }`}
                    >
                      {isPrimary ? (
                        <GraduationCap className="h-6 w-6" />
                      ) : (
                        <School className="h-6 w-6" />
                      )}
                    </div>

                    {edu.period && (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-[10px] sm:text-xs font-mono text-gray-400">
                        <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                        {edu.period}
                      </span>
                    )}
                  </div>

                  {/* Academic level */}
                  <div className="mt-7">
                    <span
                      className={`font-mono text-[9px] uppercase tracking-[0.2em] ${isPrimary ? 'text-[#D4AF37]' : 'text-sky-400'
                        }`}
                    >
                      {isPrimary
                        ? 'Undergraduate Engineering'
                        : 'Higher Secondary Education'}
                    </span>

                    <h3 className="mt-2 text-xl sm:text-2xl font-display font-extrabold leading-snug tracking-tight text-white">
                      {edu.degree}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Score */}
                <div className="mt-8">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-gray-600">
                          Academic Performance
                        </span>

                        <span className="mt-1 block text-xs font-medium text-gray-400">
                          {edu.scoreLabel}
                        </span>
                      </div>

                      <span
                        className={`font-mono text-xl sm:text-2xl font-bold ${isPrimary ? 'text-[#D4AF37]' : 'text-sky-300'
                          }`}
                      >
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gray-700">
                      Academic Milestone
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className={`h-4 w-4 text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${isPrimary
                          ? 'group-hover:text-[#D4AF37]'
                          : 'group-hover:text-sky-400'
                        }`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};