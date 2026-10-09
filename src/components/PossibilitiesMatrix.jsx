import React from 'react';
import { ArrowRight, Sparkles, Rocket, Headphones, DollarSign, Cpu, FileSearch, ShieldAlert } from 'lucide-react';
import { possibilities } from '../data/portfolioData';

export default function PossibilitiesMatrix({ onOpenIntake }) {
  const themeClasses = ['theme-blue', 'theme-violet', 'theme-emerald', 'theme-cyan', 'theme-amber', 'theme-rose'];
  const accentColors = ['#3B82F6', '#8B5CF6', '#10B981', '#06B6D4', '#F59E0B', '#F43F5E'];

  const iconMap = {
    'ai-saas': <Rocket size={24} color="#3B82F6" />,
    'support-ai': <Headphones size={24} color="#8B5CF6" />,
    'sales-assistant': <DollarSign size={24} color="#10B981" />,
    'business-automation': <Cpu size={24} color="#06B6D4" />,
    'knowledge-assistant': <FileSearch size={24} color="#F59E0B" />,
    'custom-ai': <ShieldAlert size={24} color="#F43F5E" />
  };

  return (
    <section id="solutions" style={{ padding: '105px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Targeted Systems Matrix</span>
          </div>
          <h2 className="section-heading">Have an Idea? Let's Turn It Into a System.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.12rem', lineHeight: 1.65 }}>
            Here are concrete autonomous software systems KINETIX AI builds to drive high ROI and enterprise scale.
          </p>
        </div>

        {/* 6 Bento Tiles with 6 Distinct Color Themes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {possibilities.map((pos, idx) => (
            <div
              key={pos.id}
              className={`glass-card glass-card-interactive ${themeClasses[idx % themeClasses.length]}`}
              style={{
                padding: '38px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                borderTop: `3px solid ${accentColors[idx % accentColors.length]}`
              }}
              onClick={() => onOpenIntake(pos.title)}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ padding: '12px', borderRadius: '14px', background: `${accentColors[idx % accentColors.length]}15`, border: `1px solid ${accentColors[idx % accentColors.length]}35` }}>
                    {iconMap[pos.id]}
                  </div>
                  <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', border: '1px solid var(--border-light)' }}>
                    {pos.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                  {pos.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '28px' }}>
                  {pos.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: accentColors[idx % accentColors.length], fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Build this system for your enterprise</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            marginTop: '64px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 32px'
          }}
        >
          <h3 style={{ fontSize: '1.65rem', color: '#FFF', marginBottom: '12px' }}>
            Have a custom neural requirement? Let's design it together.
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
            Whether it's a multi-modal computer vision system or proprietary vector database RAG pipeline, KINETIX AI can build it.
          </p>
          <button onClick={() => onOpenIntake()} className="btn btn-primary btn-lg" style={{ cursor: 'pointer' }}>
            <Sparkles size={19} />
            <span>Have a concept? Let's talk →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
