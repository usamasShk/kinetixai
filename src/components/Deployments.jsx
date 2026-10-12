import React from 'react';
import { ArrowRight } from 'lucide-react';
import { deployments } from '../data/portfolioData';
import VideoPlayerFrame from './VideoPlayerFrame';
import { Reveal, SectionHeader } from './ui';

const labels = {
  soccervision: 'LIVE CV FEED',
  'youtube-qa': 'LIVE RAG DEMO',
  skillswap: 'LIVE APP DEMO',
};

export default function Deployments({ onOpenCase }) {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Selected Work"
          title={
            <>
              Things we've <span className="text-glow-green">built.</span>
            </>
          }
        />

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {deployments.map((dep, idx) => {
            const hasVideo = Boolean(dep.videoUrl);
            const flipped = idx % 2 === 1;

            return (
              <Reveal
                key={dep.id}
                className="project-panel"
                style={{ position: 'relative' }}
              >
                {/* Oversized index numeral */}
                <span
                  aria-hidden="true"
                  className="watermark-num"
                  style={{ position: 'absolute', top: '-30px', [flipped ? 'left' : 'right']: '-8px', zIndex: 0 }}
                >
                  0{idx + 1}
                </span>

                <div
                  className="card card-hairline"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '44px',
                    alignItems: 'center',
                    padding: '44px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Text column */}
                  <div style={flipped ? { order: 2 } : { order: 1 }}>
                    <span
                      className="mono"
                      style={{
                        color: 'var(--green)',
                        fontSize: '0.8rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px',
                      }}
                    >
                      <span className="eyebrow-dot" />
                      {dep.badge}
                    </span>

                    <h3 className="heading-lg" style={{ marginBottom: '8px', fontWeight: 700, fontSize: '1.75rem' }}>
                      {dep.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '18px',
                        fontWeight: 400,
                        fontStyle: 'italic',
                      }}
                    >
                      {dep.subtitle}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {dep.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="body" style={{ marginBottom: '28px', lineHeight: 1.7 }}>
                      {dep.description}
                    </p>

                    <button
                      onClick={() => onOpenCase(dep)}
                      className="btn btn-outline project-cta"
                      style={{ fontWeight: 500, fontSize: '0.88rem', gap: '8px' }}
                    >
                      View Case Study
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  {/* Media column */}
                  <div style={flipped ? { order: 1 } : { order: 2 }}>
                    {hasVideo ? (
                      <div className="video-glow">
                        <VideoPlayerFrame
                          src={dep.videoUrl}
                          title={`${dep.id}_demo_feed.mp4`}
                          label={labels[dep.id] || 'LIVE DEMO'}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-md)',
                          padding: '24px',
                        }}
                      >
                        <div
                          className="mono"
                          style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '16px', letterSpacing: '0.08em' }}
                        >
                          SYSTEM PIPELINE
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {dep.pipeline?.map((step, sIdx) => (
                            <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <span className="mono" style={{ color: 'var(--green)', fontSize: '0.75rem' }}>
                                0{sIdx + 1}
                              </span>
                              <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .video-glow {
          border-radius: 12px;
          transition: box-shadow 0.4s var(--ease), transform 0.4s var(--ease);
        }
        .video-glow:hover {
          box-shadow: 0 24px 60px -18px rgba(0, 0, 0, 0.8), 0 0 48px -10px rgba(34, 197, 94, 0.35);
          transform: translateY(-3px);
        }

        @media (max-width: 900px) {
          .project-panel .card { grid-template-columns: 1fr !important; gap: 28px !important; padding: 28px 22px !important; }
          .project-panel .card > div { order: unset !important; }
          .watermark-num { display: none; }
        }
      `}</style>
    </section>
  );
}
