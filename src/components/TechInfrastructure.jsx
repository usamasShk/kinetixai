import React from 'react';
import { Cpu, Database, Server, Layout, Eye, Cloud, Zap } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

const techUnits = [
  {
    heading: 'Frontend',
    icon: <Layout size={16} />,
    frameworks: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    heading: 'Backend',
    icon: <Server size={16} />,
    frameworks: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    heading: 'AI Automation',
    icon: <Zap size={16} />,
    frameworks: ['n8n Workflows', 'Socket.IO', 'Webhooks', 'Zapier', 'JWT Auth'],
  },
  {
    heading: 'AI & LLMs',
    icon: <Cpu size={16} />,
    frameworks: ['GPT-4o', 'Claude 3.5', 'Llama 3', 'Fine-Tuning', 'Prompt Eng.'],
  },
  {
    heading: 'Computer Vision',
    icon: <Eye size={16} />,
    frameworks: ['PyTorch', 'YOLOv8', 'OpenCV', 'EfficientNet', 'Grad-CAM'],
  },
  {
    heading: 'RAG & Agents',
    icon: <Database size={16} />,
    frameworks: ['LangChain', 'LlamaIndex', 'Pinecone', 'pgvector', 'OpenAI Embeddings'],
  },
  {
    heading: 'Deployment',
    icon: <Cloud size={16} />,
    frameworks: ['Docker', 'AWS Lambda', 'Vercel', 'GitHub Actions', 'Linux'],
  },
];

function MarqueeRow({ units, reverse, duration }) {
  // Duplicate twice for a seamless -50% translate loop
  const loop = [...units, ...units];
  return (
    <div className="marquee" style={{ marginBottom: '16px' }}>
      <div className="marquee-fade left" />
      <div className="marquee-fade right" />
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': duration }}
      >
        {loop.map((unit, idx) => (
          <div key={`${unit.heading}-${idx}`} className="tech-unit-card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <span
                  style={{
                    color: 'var(--green)',
                    display: 'flex',
                    alignItems: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '7px',
                    background: 'var(--green-dim)',
                    border: '1px solid var(--green-border)',
                    justifyContent: 'center',
                  }}
                >
                  {unit.icon}
                </span>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {unit.heading}
                </h3>
              </div>

              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--green)',
                  boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                  display: 'inline-block',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {unit.frameworks.map((fw) => (
                <span key={fw} className="tech-badge">
                  {fw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechInfrastructure() {
  const rowA = techUnits.slice(0, 4);
  const rowB = techUnits.slice(4);

  return (
    <section id="tech" className="section" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Technical Stack"
          title={
            <>
              What we <span className="text-glow-green">build with.</span>
            </>
          }
        />
      </div>

      {/* Two counter-scrolling rows with edge fades */}
      <Reveal y={16}>
        <MarqueeRow units={rowA} reverse={false} duration="44s" />
        <MarqueeRow units={rowB} reverse duration="36s" />
      </Reveal>

      <style>{`
        .tech-unit-card {
          flex-shrink: 0;
          width: 270px;
          background: linear-gradient(180deg, var(--surface-raised) 0%, var(--surface) 100%);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 18px 20px;
          margin: 0 9px;
          display: flex;
          flex-direction: column;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          padding: 4px 9px;
          border-radius: 4px;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .tech-unit-card:hover {
          border-color: var(--green-border);
          transform: translateY(-4px);
          box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.5), 0 0 24px -6px rgba(34, 197, 94, 0.3);
        }

        .tech-unit-card:hover .tech-badge {
          border-color: var(--green-border);
          color: var(--green-bright);
          background: var(--green-dim);
        }

        @media (max-width: 768px) {
          .tech-unit-card { width: 230px; padding: 14px 16px; }
        }
      `}</style>
    </section>
  );
}
