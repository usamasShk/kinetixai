import React from 'react';
import { ArrowRight, Sparkles, Rocket, Headphones, DollarSign, Cpu, FileSearch, ShieldAlert } from 'lucide-react';
import { possibilities } from '../data/portfolioData';

export default function PossibilitiesGrid({ onOpenIntake }) {
  const iconMap = {
    'ai-saas': <Rocket size={22} color="#3B82F6" />,
    'support-ai': <Headphones size={22} color="#8B5CF6" />,
    'sales-assistant': <DollarSign size={22} color="#10B981" />,
    'business-automation': <Cpu size={22} color="#06B6D4" />,
    'knowledge-assistant': <FileSearch size={22} color="#F59E0B" />,
    'custom-ai': <ShieldAlert size={22} color="#EC4899" />
  };

  return (
    <section id="possibilities" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Business Use Cases</span>
          </div>
          <h2 className="section-heading">Have an Idea? Let's Turn It Into a Product.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Rather than talking about abstract code syntax, here are concrete business systems I build to solve high-value problems.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {possibilities.map((pos) => (
            <div
              key={pos.id}
              className="glass-card glass-card-interactive"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => onOpenIntake(pos.title)}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-light)' }}>
                    {iconMap[pos.id]}
                  </div>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', padding: '3px 10px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', border: '1px solid var(--border-light)' }}>
                    {pos.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFF', marginBottom: '10px' }}>
                  {pos.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {pos.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A78BFA', fontSize: '0.88rem', fontWeight: 600 }}>
                <span>Build this for your business</span>
                <ArrowRight size={15} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            marginTop: '56px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 24px'
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '10px' }}>
            Have something else in mind? Let's figure it out together.
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '560px', margin: '0 auto 24px auto' }}>
            Whether it's a proprietary internal workflow or a brand new AI startup concept, I can help architect and build the solution.
          </p>
          <button onClick={() => onOpenIntake()} className="btn btn-primary btn-lg" style={{ cursor: 'pointer' }}>
            <Sparkles size={18} />
            <span>Have something in mind? Let's talk →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
