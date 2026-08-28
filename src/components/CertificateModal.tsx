import React from 'react';
import type { Certification } from '../data/resumeData';
import { X, Award, ShieldCheck, ExternalLink } from 'lucide-react';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  onClose,
}) => {
  if (!certification) return null;

  const fileUrl = certification.file
    ? `/certificates/${certification.file}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] rounded-3xl bg-[#0c0c12] border border-[#D4AF37]/40 shadow-gold-glow-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-4 sm:p-5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
              <Award className="w-5 h-5" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                Certificate #{certification.id}
              </p>

              <h3 className="text-sm sm:text-lg font-bold text-white truncate">
                {certification.title}
              </h3>

              <p className="text-xs text-gray-400">
                {certification.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Preview */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#07070a]">
          {fileUrl ? (
            <div className="flex justify-center">
              <img
                src={fileUrl}
                alt={`${certification.title} certificate`}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          ) : (
            <div className="min-h-[300px] flex flex-col items-center justify-center text-center px-6">
              <ShieldCheck className="w-10 h-10 text-[#D4AF37] mb-4" />

              <h4 className="text-white font-bold mb-2">
                Certificate file not connected yet
              </h4>

              <p className="text-sm text-gray-400 max-w-md">
                Add the original certificate image inside
                <span className="text-[#D4AF37] font-mono">
                  {' '}public/certificates/
                </span>
                {' '}and connect its filename in resumeData.ts.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-gray-400">
            {certification.year && `${certification.year} • `}
            {certification.issuer}
          </div>

          {fileUrl && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E2B857] text-black font-bold text-xs"
            >
              <ExternalLink className="w-4 h-4" />
              OPEN FULL SIZE
            </a>
          )}
        </div>
      </div>
    </div>
  );
};