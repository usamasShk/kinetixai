import React from 'react';
import { Cpu, Database, Server, Layout, Eye, Cloud, Zap } from 'lucide-react';

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

export default function TechInfrastructure() {
  // Duplicate array 3 times for seamless infinite continuous scroll
  const duplicatedUnits = [...techUnits, ...techUnits, ...techUnits];

  return (
    <section id="tech" className="section" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <p className="caption" style={{ marginBottom: '10px' }}>Technical Stack</p>
          <h2 className="heading-xl">
            What we <span style={{ color: 'var(--green)' }}>build with.</span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Slider with Edge Fade Masks */}
      <div className="tech-marquee-wrapper" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Gradient edge masks for smooth fade in/out */}
        <div className="edge-fade edge-fade-left" />
        <div className="edge-fade edge-fade-right" />

        {/* Continuous Track moving Right to Left */}
        <div className="tech-marquee-track">
          {duplicatedUnits.map((unit, idx) => (
            <div
              key={`${unit.heading}-${idx}`}
              className="tech-unit-card"
            >
              {/* Main Heading Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#16A34A', display: 'flex', alignItems: 'center' }}>
                    {unit.icon}
                  </span>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#15803D',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}>
                    {unit.heading}
                  </h3>
                </div>

                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#16A34A',
                  boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                  display: 'inline-block',
                }} />
              </div>

              {/* List of Frameworks */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {unit.frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="tech-badge"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-marquee-wrapper {
          padding: 8px 0 24px 0;
        }

        .edge-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 140px;
          z-index: 10;
          pointer-events: none;
        }

        .edge-fade-left {
          left: 0;
          background: linear-gradient(to right, var(--bg) 0%, transparent 100%);
        }

        .edge-fade-right {
          right: 0;
          background: linear-gradient(to left, var(--bg) 0%, transparent 100%);
        }

        .tech-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeScroll 36s linear infinite;
        }

        .tech-marquee-wrapper:hover .tech-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        /* Clean Frosted White Glass Card */
        .tech-unit-card {
          flex-shrink: 0;
          width: 250px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 10px;
          padding: 18px 20px;
          margin: 0 16px; /* Generous spacing between cards */
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
          position: relative;
          box-shadow: 0 10px 25px -6px rgba(0, 0, 0, 0.35), 0 0 15px rgba(34, 197, 94, 0.12);
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #15803D;
          background: rgba(240, 253, 244, 0.9);
          border: 1px solid rgba(34, 197, 94, 0.35);
          padding: 4px 9px;
          border-radius: 4px;
          white-space: nowrap;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .tech-unit-card:hover {
          background: rgba(255, 255, 255, 0.95);
          border-color: #22C55E;
          transform: translateY(-4px);
          box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.45), 0 0 24px rgba(34, 197, 94, 0.35);
        }

        .tech-unit-card:hover .tech-badge {
          border-color: #16A34A;
          background: #DCFCE7;
          color: #14532D;
        }

        @media (max-width: 768px) {
          .edge-fade {
            width: 40px;
          }
          .tech-unit-card {
            width: 220px;
            padding: 14px 16px;
            margin: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}
