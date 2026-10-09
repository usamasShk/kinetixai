import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    description: 'We map your workflow, identify the bottleneck, and define what success looks like before writing a line of code.',
  },
  {
    num: '02',
    title: 'Architecture',
    description: 'We design the system — which models, databases, and APIs are needed, and how they connect.',
  },
  {
    num: '03',
    title: 'Build',
    description: 'Engineering the full stack — backend APIs, AI integrations, and front-end interfaces — with continuous testing.',
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
        <div style={{ marginBottom: '56px' }}>
          <p className="caption" style={{ marginBottom: '12px' }}>How We Work</p>
          <h2 className="heading-xl">
            A straightforward <span style={{ color: 'var(--green)' }}>engineering process.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--border)',
          borderLeft: '1px solid var(--border)',
        }} className="process-grid">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="process-cell"
              style={{
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                padding: '28px 24px',
              }}
            >
              <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.85rem', transition: 'color 0.22s ease' }}>
                {step.num}
              </div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>
                {step.title}
              </h3>
              <p className="body" style={{ fontSize: '0.87rem' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
