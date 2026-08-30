import React from 'react';
import { resumeData } from '../data/resumeData';
import { Globe2, CheckCircle2, Languages as LanguagesIcon } from 'lucide-react';

export const Languages: React.FC = () => {
  return (
    <section
      id="languages"
      aria-labelledby="languages-heading"
      className="relative overflow-hidden py-20 sm:py-24 px-4"
    >
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[120px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs text-[#D4AF37] font-semibold tracking-[0.22em] uppercase whitespace-nowrap">
            09. Communications
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <h2
              id="languages-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Languages
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              Communication languages supporting academic, technical, and
              professional collaboration.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 self-start">
            <LanguagesIcon className="w-4 h-4 text-[#D4AF37]" />

            <span className="font-mono text-xs text-gray-300">
              {resumeData.languages.length} LANGUAGES
            </span>
          </div>
        </div>

        {/* Main Communication Panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-md">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#D4AF37]/[0.04] to-transparent"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">
            {/* Left Info Panel */}
            <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-6">
                  <Globe2 className="w-7 h-7 text-[#D4AF37]" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                  Communication Profile
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 leading-tight">
                  Connecting Through Technology & Communication
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  Languages used for communication, learning, technical
                  collaboration, and professional interaction.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-600">
                  Resume Verified Information
                </span>
              </div>
            </div>

            {/* Language List */}
            <div className="p-5 sm:p-8 flex flex-col justify-center gap-4">
              {resumeData.languages.map((lang, idx) => (
                <div
                  key={lang}
                  className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/[0.18] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/[0.04]"
                >
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-3 font-mono text-4xl font-bold text-white/[0.025]"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div className="flex items-center gap-4 relative">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
                      <Globe2 className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gray-500">
                        Language {String(idx + 1).padStart(2, '0')}
                      </span>

                      <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1 group-hover:text-[#D4AF37] transition-colors">
                        {lang}
                      </h4>
                    </div>
                  </div>

                  {/* Verified Indicator */}
                  <div className="relative flex items-center gap-2">
                    <span className="hidden sm:block font-mono text-[9px] uppercase tracking-wider text-gray-600">
                      Listed
                    </span>

                    <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]/60">
            Global Communication
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};