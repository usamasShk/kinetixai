import React from 'react';
import { X, CheckCircle, ArrowRight, Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function CaseStudyModal({ project, onClose, onOpenIntake }) {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          background: 'var(--surface-1)',
          border: '1px solid var(--border-hover)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 50px rgba(139, 92, 246, 0.2)',
          overflowY: 'auto',
          position: 'relative',
          padding: '40px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-light)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#A78BFA', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {project.badge} • CASE STUDY
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#FFF', marginTop: '6px', marginBottom: '8px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            {project.subtitle}
          </p>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="badge" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-light)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Approach */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div style={{ padding: '24px', background: 'var(--surface-2)', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#EF4444', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              THE PROBLEM
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              {caseStudy.problem}
            </p>
          </div>

          <div style={{ padding: '24px', background: 'var(--surface-2)', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8B5CF6', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              THE APPROACH & ARCHITECTURE
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              {caseStudy.approach}
            </p>
          </div>
        </div>

        {/* System Architecture Steps Diagram */}
        <div style={{ marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={18} color="#3B82F6" />
            <span>Technical System Pipeline</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {caseStudy.architecture.map((arch, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#38BDF8', fontWeight: 600, marginBottom: '4px' }}>
                  {arch.step}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {arch.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Measured Results */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#F59E0B" />
              <span>Engineering Challenges Solved</span>
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {caseStudy.challenges}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={16} color="#10B981" />
              <span>Measured Business Impact</span>
            </h4>
            <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', color: '#10B981', fontWeight: 600, fontSize: '0.95rem' }}>
              ✓ {caseStudy.results}
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ color: '#FFF', fontWeight: 600, fontSize: '1rem' }}>Want a similar AI architecture for your business?</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Let's discuss requirements, timeline, and scope.</div>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenIntake(project.title);
            }}
            className="btn btn-primary"
            style={{ cursor: 'pointer' }}
          >
            <span>Start Similar Project</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
