import React, { useState } from 'react';
import { Linkedin, Mail, Check, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    navigator.clipboard?.writeText(companyInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const socials = [
    { label: 'LinkedIn', href: companyInfo.linkedin, icon: <Linkedin size={16} /> },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '64px 0 36px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient bottom glow */}
      <div
        aria-hidden="true"
        className="glow-orb"
        style={{
          width: '800px',
          height: '400px',
          bottom: '-320px',
          left: '50%',
          marginLeft: '-400px',
          background: 'radial-gradient(closest-side, rgba(34, 197, 94, 0.09), transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '56px',
            alignItems: 'start',
            marginBottom: '56px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '14px',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  borderRadius: '7px',
                  background: 'var(--green-dim)',
                  border: '1px solid var(--green-border)',
                }}
              >
                <img src="/logo-icon.svg" alt="KINETIX AI Logo" style={{ width: '19px', height: '19px', borderRadius: '4px' }} />
              </span>
              <span>
                KINETIX <span style={{ color: 'var(--green)' }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '300px', lineHeight: 1.6 }}>
              Autonomous Systems & Custom AI Engineering Studio. Built for businesses that need
              production-ready software.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div className="caption" style={{ marginBottom: '16px' }}>
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="footer-link"
                  style={{ fontSize: '0.88rem', color: 'var(--text-muted)', transition: 'color var(--transition)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials + email */}
          <div>
            <div className="caption" style={{ marginBottom: '16px' }}>
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="footer-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    transition: 'color var(--transition)',
                    textDecoration: 'none',
                  }}
                >
                  {s.icon}
                  <span>{s.label}</span>
                  <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                </a>
              ))}

              {/* Email (mailto + click to copy) */}
              <a
                href={`mailto:${companyInfo.email}`}
                onClick={handleEmailClick}
                title="Send email or click to copy"
                className="footer-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.84rem',
                  color: copied ? 'var(--green)' : 'var(--text-muted)',
                  transition: 'all var(--transition)',
                  textDecoration: 'none',
                }}
              >
                {copied ? <Check size={16} style={{ color: 'var(--green)' }} /> : <Mail size={16} />}
                <span>{copied ? 'Copied to clipboard!' : companyInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p className="mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} KINETIX AI. All rights reserved.
          </p>
          <p className="mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            {companyInfo.email}
          </p>
        </div>
      </div>

      <style>{`
        .footer-link { position: relative; width: fit-content; }
        .footer-link:hover { color: var(--text-primary) !important; }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--green);
          transition: width 0.25s var(--ease);
        }
        .footer-link:hover::after { width: 100%; }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
