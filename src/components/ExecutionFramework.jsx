import React from 'react';
import { Reveal, SectionHeader } from './ui';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    description: 'We map your workflow, identify the bottleneck, and define what success looks like before writing a line of code.',
  },
  {
    num: '02',
    title: 'Architecture',
    description: 'We design the system: which models, databases, and APIs are needed, and how they connect.',
  },
  {
    num: '03',
    title: 'Build',
    description: 'Engineering the full stack: backend APIs, AI integrations, and front-end interfaces, with continuous testing.',
  },
  {
    num: '04',
    title: 'Ship',
    description: 'Deployment to your infrastructure with documentation, monitoring, and a clear handoff session.',
  },
];

export default function ExecutionFramework() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="How We Work"
          title={
            <>
              A straightforward <span className="text-glow-green">engineering process.</span>
            </>
          }
        />

        <div className="timeline-grid" style={{ position: 'relative' }}>
          {/* Connecting rail (desktop) */}
          <div
            aria-hidden="true"
            className="timeline-rail-line"
            style={{
              position: 'absolute',
              top: '19px',
              left: '19px',
              right: 'calc(25% - 19px)',
              height: '1px',
              background: 'linear-gradient(90deg, var(--green-border) 0%, var(--border) 100%)',
              zIndex: 0,
            }}
          />

          {steps.map((step, idx) => (
            <Reveal
              key={step.num}
              delay={idx * 90}
              className="timeline-cell"
              style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '18px', padding: '0 24px 8px 0' }}
            >
              <div className="timeline-node">{step.num}</div>
              <div>
                <h3 className="heading-md" style={{ marginBottom: '10px', fontSize: '1.18rem' }}>
                  {step.title}
                </h3>
                <p className="body" style={{ fontSize: '0.88rem' }}>
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px 0;
        }
        .timeline-cell .timeline-node { margin-bottom: 2px; }

        @media (max-width: 900px) {
          .timeline-grid { grid-template-columns: 1fr; gap: 36px; }
          .timeline-rail-line {
            left: 19px !important;
            right: auto !important;
            top: 20px !important;
            bottom: 20px;
            width: 1px;
            height: auto !important;
            background: linear-gradient(180deg, var(--green-border) 0%, var(--border) 100%) !important;
          }
          .timeline-cell { padding: 0 0 0 68px !important; }
          .timeline-cell .timeline-node { position: absolute; left: 0; top: 0; }
        }
      `}</style>
    </section>
  );
}
