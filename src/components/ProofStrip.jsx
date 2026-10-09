import React from 'react';
import { Cpu, Layers, Zap, Database, Award } from 'lucide-react';
import { domainExperience } from '../data/portfolioData';

export default function ProofStrip() {
  const iconMap = {
    0: <Cpu size={22} color="#8B5CF6" />,
    1: <Layers size={22} color="#3B82F6" />,
    2: <Zap size={22} color="#06B6D4" />,
    3: <Database size={22} color="#10B981" />
  };

  return (
    <section style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '70px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Credibility & Technical Depth</span>
          </div>
          <h2 className="section-heading">Built With Real-World AI & Software Experience</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From AI-powered products to full-stack applications and automation systems, I build solutions that move beyond fragile prototypes into production-grade, usable products.
          </p>
        </div>

        {/* Domain Expertise Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {domainExperience.map((domain, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px',
                background: 'rgba(19, 22, 31, 0.7)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  {iconMap[idx]}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF' }}>{domain.category}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {domain.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="badge">
                    {skill}
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
