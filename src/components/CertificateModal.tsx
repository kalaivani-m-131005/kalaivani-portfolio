import React, { useEffect, useState } from 'react';
import type { Certification } from '../data/resumeData';
import {
  X,
  Award,
  ShieldCheck,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  onClose,
}) => {
  const [imageError, setImageError] = useState(false);

  const fileUrl = certification?.file
    ? `/certificates/${certification.file}`
    : null;

  useEffect(() => {
    if (!certification) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certification, onClose]);

  useEffect(() => {
    setImageError(false);
  }, [certification]);

  if (!certification) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-title"
        className="relative z-10 flex w-full max-w-5xl max-h-[92vh] flex-col overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#0b0b10] shadow-[0_25px_100px_rgba(0,0,0,0.7)]"
      >
        {/* Top accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5 shrink-0">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
              <Award className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]">
                Verified Credential
              </p>

              <h3
                id="certificate-title"
                className="mt-1 truncate text-sm sm:text-lg font-bold text-white"
              >
                {certification.title}
              </h3>

              <p className="mt-0.5 truncate text-xs text-gray-500">
                {certification.issuer}
                {certification.year && ` · ${certification.year}`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Certificate Preview */}
        <div className="flex-1 overflow-auto bg-[#060608] p-4 sm:p-6 lg:p-8">
          {fileUrl && !imageError ? (
            <div className="flex min-h-[350px] items-center justify-center">
              <img
                src={fileUrl}
                alt={`${certification.title} certificate`}
                onError={() => setImageError(true)}
                className="max-h-[65vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          ) : (
            <div className="flex min-h-[350px] flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]">
                {imageError ? (
                  <AlertCircle className="h-7 w-7" />
                ) : (
                  <ShieldCheck className="h-7 w-7" />
                )}
              </div>

              <h4 className="mt-5 text-base font-bold text-white">
                {imageError
                  ? 'Certificate preview unavailable'
                  : 'Certificate file not connected yet'}
              </h4>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
                {imageError
                  ? 'The certificate record exists, but the image file could not be loaded.'
                  : 'Add the original certificate image and connect its filename in the portfolio data.'}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t border-white/10 bg-white/[0.02] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            <span>
              {certification.issuer}
              {certification.year && ` · ${certification.year}`}
            </span>
          </div>

          {fileUrl && !imageError && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2.5 text-xs font-bold text-black transition-all hover:bg-[#e5c15a]"
            >
              <ExternalLink className="h-4 w-4" />
              Open Full Size
            </a>
          )}
        </div>
      </div>
    </div>
  );
};