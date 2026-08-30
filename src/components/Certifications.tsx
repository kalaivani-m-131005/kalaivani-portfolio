import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import type { Certification } from '../data/resumeData';
import { CertificateModal } from './CertificateModal';
import {
  Calendar,
  ShieldCheck,
  FileCheck,
  Award,
  ArrowUpRight,
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications = resumeData.certifications;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative overflow-hidden py-20 sm:py-24 px-4"
    >
      {/* Cinematic ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-200px] h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[130px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap">
            08. Credentials
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <h2
              id="certifications-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Certifications
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              Industry-recognized credentials across cloud computing,
              artificial intelligence, prompt engineering, and enterprise
              technologies.
            </p>
          </div>

          {/* Dynamic count */}
          <div className="inline-flex items-center self-start lg:self-auto gap-2.5 px-4 py-2 rounded-full bg-white/[0.035] border border-white/10">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.7)]" />

            <span className="font-mono text-[10px] sm:text-xs tracking-wider text-gray-300 uppercase">
              {certifications.length} Credentials
            </span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => {
            const hasFile = Boolean(cert.file);

            return (
              <article
                key={cert.id}
                className="group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.045] hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                {/* Hover accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent transition-transform duration-500 group-hover:scale-y-100"
                />

                <div>
                  {/* Icon + Score */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                      <Award className="h-5 w-5" />
                    </div>

                    {cert.score ? (
                      <span className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-400">
                        {cert.score}
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] tracking-[0.18em] text-gray-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]/80">
                      Professional Credential
                    </span>

                    <h3 className="mt-2 text-base sm:text-lg font-display font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                      {cert.title}
                    </h3>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                        <span>{cert.issuer}</span>
                      </div>

                      {cert.year && (
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                          <Calendar className="h-3.5 w-3.5 shrink-0" />
                          <span>{cert.year}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-white/[0.07]">
                  {hasFile ? (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[10px] font-mono font-bold tracking-wider text-gray-300 uppercase transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                    >
                      <FileCheck className="h-4 w-4" />
                      View Credential
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.14em] text-gray-700">
                      <span>Credential Recorded</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]/60" />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};