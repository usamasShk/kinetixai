import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 16px 0',
        pointerEvents: 'none',
      }}
    >
      {/* Scroll progress hairline */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '2px',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, rgba(34,197,94,0.35), var(--green))',
          boxShadow: '0 0 12px rgba(34, 197, 94, 0.55)',
          transition: 'width 0.08s linear',
        }}
      />

      {/* Floating island pill */}
      <div
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          height: '48px',
          padding: '0 8px 0 14px',
          borderRadius: '999px',
          background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.55)',
          backdropFilter: 'blur(18px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
          border: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.07)'}`,
          boxShadow: scrolled
            ? '0 10px 36px rgba(0, 0, 0, 0.55)'
            : '0 6px 24px rgba(0, 0, 0, 0.35)',
          transition:
            'background 0.35s var(--ease), border-color 0.35s var(--ease), box-shadow 0.35s var(--ease)',
        }}
      >
        {/* Wordmark with Logo Emblem */}
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.92rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              background: 'var(--green-dim)',
              border: '1px solid var(--green-border)',
              boxShadow: '0 0 18px -4px rgba(34, 197, 94, 0.4)',
            }}
          >
            <img src="/logo-icon.svg" alt="KINETIX AI Logo" style={{ width: '16px', height: '16px', borderRadius: '3px' }} />
          </span>
          <span>
            KINETIX <span style={{ color: 'var(--green)' }}>AI</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-nav">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                transition: 'color var(--transition)',
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="btn btn-primary desktop-nav"
          style={{ fontSize: '0.78rem', padding: '7px 14px', borderRadius: '999px' }}
        >
          Start a Project
          <ArrowUpRight size={13} />
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: '999px',
            width: '34px',
            height: '34px',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            pointerEvents: 'auto',
            marginTop: '10px',
            width: 'min(420px, 100%)',
            borderRadius: '20px',
            background: 'rgba(10, 10, 10, 0.94)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid var(--border)',
            boxShadow: '0 18px 48px rgba(0, 0, 0, 0.55)',
            padding: '22px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="fade-up"
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <span className="mono" style={{ color: 'var(--green)', fontSize: '0.75rem', marginRight: '12px' }}>
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ width: 'fit-content', marginTop: '8px' }} onClick={() => setMobileOpen(false)}>
            Start a Project
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: var(--green);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s var(--ease);
          box-shadow: 0 0 8px var(--green-glow);
        }
        .nav-link:hover { color: var(--text-primary) !important; }
        .nav-link:hover::after { transform: scaleX(1); }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
