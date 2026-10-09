import React, { useState } from 'react';
import { Linkedin, Mail, Check, Copy } from 'lucide-react';
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

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '48px 0 36px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: '64px',
          alignItems: 'start',
          marginBottom: '48px',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '10px',
            }}>
              <img src="/logo-icon.svg" alt="KINETIX AI Logo" style={{ width: '22px', height: '22px', borderRadius: '5px' }} />
              <span>KINETIX <span style={{ color: 'var(--green)' }}>AI</span></span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '280px', lineHeight: 1.55 }}>
              Autonomous Systems & Custom AI Engineering Studio. Built for businesses that need production-ready software.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: '0.88rem', color: 'var(--text-muted)', transition: 'color var(--transition)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social icon buttons — LinkedIn and Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* LinkedIn */}
            <a
              href={companyInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                transition: 'color var(--transition)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <Linkedin size={17} />
              <span>LinkedIn</span>
            </a>

            {/* Email (mailto + click to copy) */}
            <a
              href={`mailto:${companyInfo.email}`}
              onClick={handleEmailClick}
              title="Send email or click to copy"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.88rem',
                color: copied ? 'var(--green)' : 'var(--text-muted)',
                transition: 'all var(--transition)',
                textDecoration: 'none',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (!copied) e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                if (!copied) e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {copied ? <Check size={17} style={{ color: 'var(--green)' }} /> : <Mail size={17} />}
              <span>{copied ? 'Copied to clipboard!' : companyInfo.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} KINETIX AI. All rights reserved.
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {companyInfo.email}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
