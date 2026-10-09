import React from 'react';
import { Globe, Bot, Workflow, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services({ onOpenIntake }) {
  const serviceVisuals = {
    'ai-web-apps': (
      <div style={{ padding: '16px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border-light)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
        <div style={{ color: '#3B82F6', marginBottom: '8px', fontWeight: 600 }}>// AI SaaS Dashboard Stack</div>
        <div style={{ color: 'var(--text-secondary)' }}>UI: React / Next.js</div>
        <div style={{ color: 'var(--text-secondary)' }}>API: FastAPI (Async Python)</div>
        <div style={{ color: '#10B981', marginTop: '6px' }}>✓ Usage Analytics & Subscription Billing</div>
      </div>
    ),
    'ai-chatbots-agents': (
      <div style={{ padding: '16px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border-light)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
        <div style={{ color: '#8B5CF6', marginBottom: '8px', fontWeight: 600 }}>// Autonomous Tool-Using Agent</div>
        <div style={{ color: 'var(--text-secondary)' }}>Trigger → Query Processing</div>
        <div style={{ color: 'var(--text-secondary)' }}>Action → CRM Lookup & Tool Exec</div>
        <div style={{ color: '#10B981', marginTop: '6px' }}>✓ 24/7 Multi-channel Auto-Response</div>
      </div>
    ),
    'ai-automation': (
      <div style={{ padding: '16px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border-light)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
        <div style={{ color: '#06B6D4', marginBottom: '8px', fontWeight: 600 }}>// n8n / Webhook Pipeline</div>
        <div style={{ color: 'var(--text-secondary)' }}>Email PDF → AI Extraction</div>
        <div style={{ color: 'var(--text-secondary)' }}>Parsed JSON → Database Sync</div>
        <div style={{ color: '#10B981', marginTop: '6px' }}>✓ 0 Manual Hours Spent</div>
      </div>
    ),
    'rag-llm-apps': (
      <div style={{ padding: '16px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border-light)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
        <div style={{ color: '#10B981', marginBottom: '8px', fontWeight: 600 }}>// Enterprise Document RAG</div>
        <div style={{ color: 'var(--text-secondary)' }}>Docs → Pinecone Vector Search</div>
        <div style={{ color: 'var(--text-secondary)' }}>Context → Grounded LLM Response</div>
        <div style={{ color: '#10B981', marginTop: '6px' }}>✓ 100% Citation Accuracy</div>
      </div>
    )
  };

  return (
    <section id="services" style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '60px' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Core Development Offerings</span>
          </div>
          <h2 className="section-heading">What I Build</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            From intelligent customer experiences to internal workflow automation, I architect complete AI systems around real business needs.
          </p>
        </div>

        {/* 2x2 Large Editorial Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '32px'
          }}
          className="services-grid"
        >
          {services.map((srv) => (
            <div
              key={srv.id}
              className="glass-card"
              style={{
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `3px solid ${srv.accent}`
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: srv.accent,
                      opacity: 0.9
                    }}
                  >
                    SERVICE {srv.num}
                  </span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `${srv.accent}15`,
                      border: `1px solid ${srv.accent}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: srv.accent
                    }}
                  >
                    {srv.id === 'ai-web-apps' && <Globe size={20} />}
                    {srv.id === 'ai-chatbots-agents' && <Bot size={20} />}
                    {srv.id === 'ai-automation' && <Workflow size={20} />}
                    {srv.id === 'rag-llm-apps' && <Database size={20} />}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '14px' }}>
                  {srv.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {srv.description}
                </p>

                {/* Example Bullets */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    Typical Deliverables & Examples
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {srv.examples.map((ex, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={14} color={srv.accent} />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mini Visual Diagram Card & CTA */}
              <div>
                {serviceVisuals[srv.id]}
                <button
                  onClick={() => onOpenIntake(srv.title)}
                  style={{
                    marginTop: '20px',
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${srv.accent}20`;
                    e.currentTarget.style.borderColor = srv.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <span>Build {srv.title}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
