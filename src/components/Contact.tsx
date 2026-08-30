import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Terminal,
  Send,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = resumeData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);

      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return (
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );

      case 'LinkedIn':
        return (
          <svg
            className="w-5 h-5 fill-current text-sky-400"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 1 0-3.26z" />
          </svg>
        );

      case 'LeetCode':
        return <Code2 className="w-5 h-5 text-amber-400" />;

      case 'HackerRank':
        return <Terminal className="w-5 h-5 text-emerald-400" />;

      default:
        return <ExternalLink className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-24 sm:py-32 px-4"
    >
      {/* Cinematic ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[160px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[11px] sm:text-xs text-[#D4AF37] font-semibold tracking-[0.22em] uppercase whitespace-nowrap">
            10. Connect
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Cinematic Closing Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]">
              Let's Connect
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            Let's Build Something
            <span className="block mt-1 text-[#D4AF37]">
              Meaningful Together.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-400 max-w-2xl mx-auto">
            Interested in opportunities, collaborations, innovative projects,
            or simply connecting? Feel free to reach out.
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-3 mt-8 px-7 py-3.5 rounded-xl bg-[#D4AF37] text-black font-bold text-sm transition-all duration-300 hover:bg-[#E2B857] hover:-translate-y-0.5 shadow-gold-glow"
          >
            <Send className="w-4 h-4" />
            START A CONVERSATION
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email */}
          <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#D4AF37]/40 hover:bg-white/[0.04] transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
              <Mail className="w-5 h-5 text-[#D4AF37]" />
            </div>

            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-gray-500">
              Email
            </span>

            <a
              href={`mailto:${contact.email}`}
              className="block mt-2 text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors break-all"
            >
              {contact.email}
            </a>

            <button
              onClick={() => handleCopy(contact.email, 'email')}
              className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/30 text-xs font-mono text-gray-400 hover:text-[#D4AF37] transition-all"
            >
              {copiedField === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  COPY EMAIL
                </>
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-emerald-400/40 hover:bg-white/[0.04] transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-5">
              <Phone className="w-5 h-5 text-emerald-400" />
            </div>

            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-gray-500">
              Phone
            </span>

            <a
              href={`tel:${contact.phone}`}
              className="block mt-2 text-lg font-semibold text-white hover:text-emerald-400 transition-colors"
            >
              +91 {contact.phone}
            </a>

            <button
              onClick={() => handleCopy(contact.phone, 'phone')}
              className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/30 text-xs font-mono text-gray-400 hover:text-emerald-400 transition-all"
            >
              {copiedField === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  COPY NUMBER
                </>
              )}
            </button>
          </div>

          {/* Location */}
          <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-sky-400/40 hover:bg-white/[0.04] transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center mb-5">
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>

            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-gray-500">
              Location
            </span>

            <p className="mt-2 text-lg font-semibold text-white">
              {contact.location}
            </p>

            <div className="mt-5 py-2.5 flex items-center gap-2 text-xs font-mono text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              INDIA
            </div>
          </div>
        </div>

        {/* Social Profiles */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
                Digital Presence
              </span>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-2">
                Professional & Coding Profiles
              </h3>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-gray-600">
              {contact.socials.length} Platforms
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {contact.socials.map((social) => (
              <a
                key={social.platform}
                href={social.placeholderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-black/[0.15] hover:border-[#D4AF37]/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                    {renderPlatformIcon(social.platform)}
                  </div>

                  <div>
                    <span className="block text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      {social.platform}
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-wider text-gray-600">
                      Open Profile
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-gray-600 transition-all group-hover:text-[#D4AF37] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};