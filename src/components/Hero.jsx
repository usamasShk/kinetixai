import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onViewWork }) {
  return (
    <section style={{ padding: '100px 0 88px 0', textAlign: 'center' }}>
      <div className="container">
        {/* Headline — white with green accent words */}
        <h1
          className="display fade-up fade-up-1"
          style={{ maxWidth: '860px', margin: '0 auto 28px auto' }}
        >
          We build AI systems for{' '}
          <span style={{ color: 'var(--green)' }}>businesses</span> that need{' '}
          <span style={{ color: 'var(--green)' }}>results.</span>
        </h1>

        {/* Subtitle — client-focused business value */}
        <p
          className="body-lg fade-up fade-up-2"
          style={{ maxWidth: '620px', margin: '0 auto 44px auto' }}
        >
          We automate manual workflows, deploy autonomous customer agents, and connect your company data with custom AI systems — built from scratch and shipped to production.
        </p>

        {/* CTAs */}
        <div
          className="fade-up fade-up-3"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
        >
          <button onClick={onViewWork} className="btn btn-primary" style={{ gap: '8px' }}>
            See Our Work
            <ArrowRight size={16} />
          </button>
          <a href="#contact" className="btn btn-ghost" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Start a project →
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          marginTop: '80px',
          paddingTop: '36px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          gap: '64px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {[
            { num: '3+', label: 'Production AI systems shipped' },
            { num: '5', label: 'Core engineering disciplines' },
            { num: '100%', label: 'Custom-built. Nothing templated.' },
          ].map((s, idx) => (
            <div key={s.label} style={{ textAlign: 'center' }}
              className={`fade-up fade-up-${idx + 2}`}
            >
              <div style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
