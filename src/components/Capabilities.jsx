import React from 'react';
import { ArrowRight, Workflow, Bot, MessagesSquare, Search, Rocket } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

const services = [
  {
    num: '01',
    title: 'AI Workflow Automation',
    description: 'Stop copying data between tools. We connect your existing stack and automate invoice processing, CRM updates, and data sync without rebuilding your entire setup.',
    tags: ['API Integrations', 'Webhooks', 'OCR', 'Custom Pipelines'],
    icon: <Workflow size={22} />,
    span: 3,
  },
  {
    num: '02',
    title: 'Autonomous AI Agents',
    description: 'Agents that handle your repetitive operations: qualifying inbound leads, resolving Tier-1 support tickets, processing documents, 24 hours a day without human intervention.',
    tags: ['LangChain', 'GPT-4o', 'Function Calling', 'FastAPI'],
    icon: <Bot size={22} />,
    span: 3,
  },
  {
    num: '03',
    title: 'AI Customer Support Bot',
    description: 'A trained chatbot that understands your product, handles FAQ, troubleshoots issues, and escalates only when necessary. Resolves up to 80% of tickets automatically.',
    tags: ['Custom LLM', 'Knowledge Base', 'Zendesk API', 'Fallback Routing'],
    icon: <MessagesSquare size={22} />,
    span: 2,
  },
  {
    num: '04',
    title: 'Enterprise Knowledge Search',
    description: 'Give your team instant answers from thousands of internal documents. Ask in plain English, get grounded answers with source citations. No more digging through folders.',
    tags: ['Pinecone', 'OpenAI Embeddings', 'LangChain', 'PostgreSQL'],
    icon: <Search size={22} />,
    span: 2,
  },
  {
    num: '05',
    title: 'AI-Powered SaaS Products',
    description: 'We build full-stack web products with AI features embedded from day one: usage tracking, API backends, and polished interfaces that are ready for real users.',
    tags: ['Next.js', 'Python', 'FastAPI', 'Stripe'],
    icon: <Rocket size={22} />,
    span: 2,
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="Capabilities"
          title={
            <>
              What we <span className="text-glow-green">build.</span>
            </>
          }
          description="Five focused disciplines. Each one applied only where it creates measurable business value."
        />

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }} className="services-bento">
          {services.map((s, idx) => (
            <Reveal
              key={s.num}
              delay={idx * 70}
              className="card card-hairline service-card"
              style={{ gridColumn: `span ${s.span}`, padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '230px' }}
            >
              {/* Watermark numeral */}
              <span
                aria-hidden="true"
                className="mono"
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '20px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  opacity: 0.7,
                  transition: 'color var(--transition), opacity var(--transition)',
                }}
              >
                /{s.num}
              </span>

              {/* Icon */}
              <span
                className="service-icon"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--green)',
                  background: 'var(--green-dim)',
                  border: '1px solid var(--green-border)',
                  transition: 'all var(--transition)',
                }}
              >
                {s.icon}
              </span>

              {/* Title + description */}
              <div style={{ flex: 1 }}>
                <h3 className="heading-lg" style={{ marginBottom: '10px', fontSize: '1.18rem' }}>
                  {s.title}
                </h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>
                  {s.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer CTA */}
        <Reveal delay={120} style={{ marginTop: '40px' }}>
          <a href="#contact" className="btn btn-ghost" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Have a specific requirement? Let's talk <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>

      <style>{`
        .service-card:hover .service-icon {
          background: var(--green) !important;
          color: #000000 !important;
          box-shadow: 0 0 26px -4px rgba(34, 197, 94, 0.55);
        }
        .service-card:hover .tag {
          border-color: var(--green-border);
          color: var(--green-bright);
        }

        @media (max-width: 900px) {
          .services-bento { grid-template-columns: 1fr 1fr !important; }
          .service-card { grid-column: span 2 !important; }
        }
        @media (max-width: 580px) {
          .services-bento { grid-template-columns: 1fr !important; }
          .service-card { grid-column: span 1 !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}
