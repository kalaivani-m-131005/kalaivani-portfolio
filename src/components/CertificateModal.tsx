import React from 'react';
import type { Certification } from '../data/resumeData';
import { X, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-panel border border-[#D4AF37]/40 bg-[#0c0c12] shadow-gold-glow-lg space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block font-bold">
              VERIFIED CERTIFICATE RECORD #{certification.id}
            </span>
            <h3 className="text-xl font-display font-bold text-white leading-tight mt-0.5">
              {certification.title}
            </h3>
          </div>
        </div>

        {/* Certificate Metadata */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-gray-400">ISSUER ORGANISATION</span>
            <span className="text-white font-bold">{certification.issuer}</span>
          </div>

          {certification.year && (
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-gray-400">ISSUANCE YEAR</span>
              <span className="text-[#D4AF37] font-bold">{certification.year}</span>
            </div>
          )}

          {certification.score && (
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-gray-400">ACADEMIC SCORE</span>
              <span className="text-emerald-400 font-bold">{certification.score}</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <span className="text-gray-400">AUTHENTICITY STATUS</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Resume Record
            </span>
          </div>
        </div>

        {/* Notice on Local Certificate files */}
        <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs text-gray-300 space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#D4AF37]">
            <CheckCircle2 className="w-4 h-4" />
            <span>LOCAL FILE CONNECTOR</span>
          </div>
          <p className="leading-relaxed">
            To view the original PDF/Image scan of this certificate, place your certificate file inside <code className="bg-black/50 px-1.5 py-0.5 rounded text-[#D4AF37] font-mono">public/certificates/cert-{certification.id}.pdf</code>.
          </p>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs font-mono uppercase"
          >
            CLOSE PREVIEW
          </button>
        </div>

      </div>
    </div>
  );
};
