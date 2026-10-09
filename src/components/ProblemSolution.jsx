import React from 'react';
import { AlertCircle, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

export default function ProblemSolution({ onOpenIntake }) {
  const steps = [
    {
      badge: "PROBLEM",
      title: "Too Much Manual Work",
      desc: "Repetitive data entry, slow support queues, and disconnected tools consume hours of daily effort and limit your team's ability to scale.",
      icon: <AlertCircle size={24} color="#EF4444" />,
      accentColor: "#EF4444"
    },
    {
      badge: "SOLUTION",
      title: "Intelligent AI & Automation",
      desc: "Architect custom LLM tools, RAG document engines, and n8n workflows that process information accurately and handle decisions autonomously.",
      icon: <Cpu size={24} color="#8B5CF6" />,
      accentColor: "#8B5CF6"
    },
    {
      badge: "OUTCOME",
      title: "Scalable Business Growth",
      desc: "Free up key personnel, lower operational overhead, serve customers 24/7, and build proprietary competitive advantages.",
      icon: <TrendingUp size={24} color="#10B981" />,
      accentColor: "#10B981"
    }
  ];

  return (
    <section style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Business Transformation</span>
          </div>
          <h2 className="section-heading">
            Your business doesn't need another generic website.{' '}
            <span className="text-gradient">It needs the right system.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Tell me what you're trying to build, automate, or improve. I'll help you figure out the best way to turn it into a high-performing digital product.
          </p>
        </div>

        {/* 3-Column Visual Flow */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            position: 'relative'
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `2px solid ${step.accentColor}`
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    background: `${step.accentColor}15`,
                    color: step.accentColor,
                    marginBottom: '20px',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {step.badge}
                </div>

                <div style={{ marginBottom: '16px' }}>{step.icon}</div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFF', marginBottom: '12px' }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div
                  style={{
                    marginTop: '24px',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Next step</span>
                  <ArrowRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '32px',
            background: 'var(--surface-1)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '4px' }}>
              Ready to eliminate operational drag with AI?
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              Let's map out your system requirements and estimate development timelines.
            </p>
          </div>
          <button onClick={onOpenIntake} className="btn btn-primary" style={{ cursor: 'pointer' }}>
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
