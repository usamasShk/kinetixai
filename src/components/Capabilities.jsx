import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'AI Workflow Automation',
    description: 'Stop copying data between tools. We connect your existing stack and automate invoice processing, CRM updates, and data sync — without rebuilding your entire setup.',
    tags: ['API Integrations', 'Webhooks', 'OCR', 'Custom Pipelines'],
  },
  {
    num: '02',
    title: 'Autonomous AI Agents',
    description: 'Agents that handle your repetitive operations — qualifying inbound leads, resolving Tier-1 support tickets, processing documents — 24 hours a day without human intervention.',
    tags: ['LangChain', 'GPT-4o', 'Function Calling', 'FastAPI'],
  },
  {
    num: '03',
    title: 'AI Customer Support Bot',
    description: 'A trained chatbot that understands your product, handles FAQ, troubleshoots issues, and escalates only when necessary. Resolves up to 80% of tickets automatically.',
    tags: ['Custom LLM', 'Knowledge Base', 'Zendesk API', 'Fallback Routing'],
  },
  {
    num: '04',
    title: 'Enterprise Knowledge Search',
    description: 'Give your team instant answers from thousands of internal documents. Ask in plain English, get grounded answers with source citations — no more digging through folders.',
    tags: ['Pinecone', 'OpenAI Embeddings', 'LangChain', 'PostgreSQL'],
  },
  {
    num: '05',
    title: 'AI-Powered SaaS Products',
    description: 'We build full-stack web products with AI features embedded from day one — usage tracking, API backends, and polished interfaces that are ready for real users.',
    tags: ['Next.js', 'Python', 'FastAPI', 'Stripe'],
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="section">
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '56px',
          alignItems: 'end',
        }} className="services-header">
          <h2 className="heading-xl">
            What we <span style={{ color: 'var(--green)' }}>build.</span>
          </h2>
          <p className="body-lg">
            Five focused disciplines. Each one applied only where it creates measurable business value.
          </p>
        </div>

        {/* Stair-step service rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((s, idx) => (
            <div
              key={s.num}
              className="service-row"
              style={{
                borderTop: '1px solid var(--border)',
                padding: '32px 0',
                paddingLeft: `${idx * 40}px`,
                display: 'grid',
                gridTemplateColumns: '52px 1fr 1fr',
                gap: '28px',
                alignItems: 'start',
                cursor: 'default',
              }}
            >
              {/* Number */}
              <span
                className="mono service-num"
                style={{ color: 'var(--text-muted)', paddingTop: '3px', transition: 'color 0.22s ease' }}
              >
                {s.num}
              </span>

              {/* Title */}
              <h3
                className="heading-lg service-title"
                style={{ fontWeight: 600, transition: 'color 0.22s ease' }}
              >
                {s.title}
              </h3>

              {/* Description + tags */}
              <div>
                <p className="body" style={{ marginBottom: '14px' }}>
                  {s.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {s.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* Footer CTA */}
        <div style={{ marginTop: '36px' }}>
          <a href="#contact" className="btn btn-ghost" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Have a specific requirement? Let's talk <ArrowRight size={15} style={{ display: 'inline' }} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-header { grid-template-columns: 1fr !important; }
          .service-row {
            grid-template-columns: 40px 1fr !important;
            padding-left: 0 !important;
          }
          .service-row > div:last-child { grid-column: 2; }
        }
        @media (max-width: 580px) {
          .service-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
