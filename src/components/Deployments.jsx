import React from 'react';
import { ArrowRight } from 'lucide-react';
import { deployments } from '../data/portfolioData';
import VideoPlayerFrame from './VideoPlayerFrame';

export default function Deployments({ onOpenCase }) {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <p className="caption" style={{ marginBottom: '12px' }}>Selected Work</p>
          <h2 className="heading-xl">
            Things we've <span style={{ color: 'var(--green)' }}>built.</span>
          </h2>
        </div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {deployments.map((dep, idx) => {
            const hasVideo = Boolean(dep.videoUrl);

            return (
              <div
                key={dep.id}
                className="project-card"
                style={{
                  borderTop: '1px solid var(--border)',
                  padding: '48px 0',
                  display: 'grid',
                  gridTemplateColumns: hasVideo ? '1fr 1fr' : '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                }}
              >
                {/* Left Column: Title, Subtitle, Tags, Description, CTA */}
                <div>
                  <span className="mono" style={{ color: 'var(--green)', fontSize: '0.85rem', display: 'block', marginBottom: '12px' }}>
                    0{idx + 1}
                  </span>
                  <h3 className="heading-lg" style={{ marginBottom: '8px', fontWeight: 700 }}>
                    {dep.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    fontWeight: 400,
                    fontStyle: 'italic',
                  }}>
                    {dep.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {dep.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <p className="body" style={{ marginBottom: '28px', lineHeight: 1.7 }}>
                    {dep.description}
                  </p>

                  <div>
                    <button
                      onClick={() => onOpenCase(dep)}
                      className="btn btn-outline project-cta"
                      style={{
                        fontWeight: 500,
                        fontSize: '0.88rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      View Case Study
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Right Column: Video Frame or Architecture Pipeline */}
                <div>
                  {hasVideo ? (
                    <VideoPlayerFrame
                      src={dep.videoUrl}
                      title={`${dep.id}_demo_feed.mp4`}
                      label={
                        dep.id === 'soccervision'
                          ? 'LIVE CV FEED'
                          : dep.id === 'youtube-qa'
                          ? 'LIVE RAG DEMO'
                          : 'LIVE APP DEMO'
                      }
                    />
                  ) : (
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      padding: '24px',
                    }}>
                      <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '16px', letterSpacing: '0.05em' }}>
                        SYSTEM PIPELINE
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {dep.pipeline?.map((step, sIdx) => (
                          <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span className="mono" style={{ color: 'var(--green)', fontSize: '0.75rem' }}>
                              0{sIdx + 1}
                            </span>
                            <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-card {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 36px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
