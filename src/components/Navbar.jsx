import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
      }}>
        {/* Wordmark with Logo Emblem */}
        <a href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          <img src="/logo-icon.svg" alt="KINETIX AI Logo" style={{ width: '22px', height: '22px', borderRadius: '5px' }} />
          <span>KINETIX <span style={{ color: 'var(--green)' }}>AI</span></span>
        </a>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                transition: 'color var(--transition)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="btn btn-outline desktop-nav" style={{ fontSize: '0.88rem', padding: '8px 18px' }}>
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          borderTop: '1px solid var(--border)',
          background: 'var(--bg)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-outline" style={{ width: 'fit-content' }}>
            Start a Project
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
