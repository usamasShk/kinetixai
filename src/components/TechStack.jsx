import React from 'react';
import { techStackCategories } from '../data/portfolioData';

export default function TechStack() {
  return (
    <section id="tech" style={{ padding: '80px 0', background: 'var(--surface-1)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px auto' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Technology Foundation</span>
          </div>
          <h2 className="section-heading">The Technology Behind the Work</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            A proven, modern engineering stack chosen for speed, reliability, and enterprise scale.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {techStackCategories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8B5CF6' }}></span>
                <span>{cat.name}</span>
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="badge"
                    style={{
                      padding: '6px 14px',
                      fontSize: '0.82rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-light)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                      e.currentTarget.style.color = '#FFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
