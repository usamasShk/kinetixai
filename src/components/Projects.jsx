import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Terminal, Play, Cpu, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function Projects({ onOpenIntake }) {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--surface-1)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '60px' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Proof of Execution</span>
          </div>
          <h2 className="section-heading">Things I've Built</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Instead of displaying simple static mockups, each project below is a full mini case study highlighting the business problem, AI architecture, and measured results.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-card project-card-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr',
                gap: '40px',
                padding: '40px',
                alignItems: 'center'
              }}
            >
              {/* Visual Showcase Block */}
              <div
                style={{
                  background: proj.imageBg,
                  borderRadius: '16px',
                  padding: '32px 24px',
                  border: '1px solid var(--border-light)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  order: idx % 2 === 1 ? 2 : 1
                }}
              >
                {/* Visual Header pill */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid var(--border-light)' }}>
                    {proj.badge}
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></div>
                  </div>
                </div>

                {/* Pipeline Flow Stepper */}
                <div style={{ margin: '24px 0' }}>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    SYSTEM DATA PIPELINE
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px' }}>
                    {proj.pipeline.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span
                          style={{
                            padding: '6px 12px',
                            background: 'rgba(0, 0, 0, 0.7)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '6px',
                            fontSize: '0.76rem',
                            fontFamily: 'var(--font-mono)',
                            color: '#F8FAFC'
                          }}
                        >
                          {step}
                        </span>
                        {sIdx < proj.pipeline.length - 1 && (
                          <span style={{ color: '#8B5CF6', fontSize: '0.8rem' }}>→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  <span>STATUS: PRODUCTION</span>
                  <span>LATENCY: ACCELERATED</span>
                </div>
              </div>

              {/* Text & Case Study Overview Block */}
              <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#3B82F6', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '8px' }}>
                  CASE STUDY 0{idx + 1}
                </div>

                <h3 style={{ fontSize: '2rem', color: '#FFF', marginBottom: '8px' }}>
                  {proj.title}
                </h3>

                <h4 style={{ fontSize: '1.05rem', color: '#A78BFA', fontWeight: 600, marginBottom: '16px' }}>
                  {proj.subtitle}
                </h4>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => setActiveCaseStudy(proj)}
                    className="btn btn-primary btn-sm"
                    style={{ cursor: 'pointer' }}
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    onClick={() => onOpenIntake(proj.title)}
                    className="btn btn-secondary btn-sm"
                    style={{ cursor: 'pointer' }}
                  >
                    <span>Build Similar System</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal Popup */}
        {activeCaseStudy && (
          <CaseStudyModal
            project={activeCaseStudy}
            onClose={() => setActiveCaseStudy(null)}
            onOpenIntake={onOpenIntake}
          />
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
