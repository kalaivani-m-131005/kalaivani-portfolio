import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import type { Certification } from '../data/resumeData';
import { CertificateModal } from './CertificateModal';
import { Calendar, ShieldCheck, FileCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            08. CREDENTIALS
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              8. CERTIFICATIONS
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Professional credentials, cloud specializations, and industry certifications in exact sequence.
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start">
            6 Certificates Locked
          </span>
        </div>

        {/* 6 Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#D4AF37] font-bold tracking-wider">
                    CERTIFICATE #0{cert.id}
                  </span>
                  {cert.score && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold">
                      {cert.score}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-display font-bold text-white leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-1 pt-1">
                  <div className="text-xs text-gray-300 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{cert.issuer}</span>
                  </div>

                  {cert.year && (
                    <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>{cert.year}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-gray-200 hover:text-[#D4AF37] text-xs font-mono font-bold uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>VIEW CERTIFICATE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Render */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
