import React from 'react';
import { Search, Compass, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps, methodologyPoints } from '../data/portfolioData';

export default function HowIWork({ onOpenIntake }) {
  const stepIcons = {
    '01': <Search size={22} color="#3B82F6" />,
    '02': <Compass size={22} color="#8B5CF6" />,
    '03': <Code size={22} color="#06B6D4" />,
    '04': <Rocket size={22} color="#10B981" />
  };

  return (
    <section id="process" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Uncertainty Reduction</span>
          </div>
          <h2 className="section-heading">From Idea to Working Product</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            A structured, 4-step execution framework designed to eliminate guesswork, keep you updated at every stage, and ship reliable software.
          </p>
        </div>

        {/* Visual Flow Banner */}
        <div
          style={{
            marginBottom: '48px',
            padding: '16px 24px',
            background: 'var(--surface-1)',
            border: '1px solid var(--border-light)',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)'
          }}
        >
          <span style={{ color: '#F8FAFC', fontWeight: 600 }}>IDEA</span>
          <span style={{ color: '#8B5CF6' }}>→</span>
          <span style={{ color: '#F8FAFC', fontWeight: 600 }}>STRATEGY</span>
          <span style={{ color: '#8B5CF6' }}>→</span>
          <span style={{ color: '#F8FAFC', fontWeight: 600 }}>DEVELOPMENT</span>
          <span style={{ color: '#8B5CF6' }}>→</span>
          <span style={{ color: '#F8FAFC', fontWeight: 600 }}>TESTING</span>
          <span style={{ color: '#8B5CF6' }}>→</span>
          <span style={{ color: '#10B981', fontWeight: 700 }}>LAUNCH</span>
        </div>

        {/* 4 Process Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '72px'
          }}
        >
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="glass-card"
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 800, color: '#A78BFA' }}>
                    {step.num}
                  </span>
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-light)' }}>
                    {stepIcons[step.num]}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '4px' }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#38BDF8', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                  {step.sub}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "I start with the problem, not the technology" Section */}
        <div
          className="glass-card"
          style={{
            padding: '44px',
            background: 'linear-gradient(135deg, rgba(13,15,20,0.9) 0%, rgba(27,31,45,0.9) 100%)',
            border: '1px solid var(--border-hover)'
          }}
        >
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '10px' }}>
              I start with the problem, not the technology.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Most developers jump straight to code without understanding business metrics. I take full end-to-end ownership:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {methodologyPoints.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '14px' }}>
                <div style={{ marginTop: '3px' }}>
                  <CheckCircle2 size={20} color="#8B5CF6" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#FFF', marginBottom: '6px' }}>{m.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'right' }}>
            <button onClick={() => onOpenIntake()} className="btn btn-primary" style={{ cursor: 'pointer' }}>
              <span>Start Your Discovery Call</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
