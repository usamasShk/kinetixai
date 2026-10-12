import React from 'react';
import { X, AlertCircle, Lightbulb, Layers, Code2, ShieldCheck, TrendingUp } from 'lucide-react';
import VideoPlayerFrame from './VideoPlayerFrame';

export default function DeploymentDrawer({ deployment, onClose }) {
  const { caseStudy } = deployment;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.25s var(--ease)',
      }}
      onClick={onClose}
    >
      <div
        className="drawer-panel"
        style={{
          width: '100%',
          maxWidth: '640px',
          height: '100vh',
          background: 'var(--surface)',
          borderLeft: '1px solid var(--border-strong)',
          overflowY: 'auto',
          padding: '48px',
          position: 'relative',
          animation: 'slideIn 0.35s var(--ease)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Green top accent line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--green), transparent)',
            boxShadow: '0 0 16px rgba(34, 197, 94, 0.5)',
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close case study"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'var(--surface-raised)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius)',
            width: '36px',
            height: '36px',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--green)';
            e.currentTarget.style.color = 'var(--green)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-strong)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <span className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="eyebrow-dot" />
            <span>{deployment.badge}</span>
          </span>
          <h2 className="heading-xl" style={{ margin: '16px 0 6px 0', fontSize: '2rem' }}>
            {deployment.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{deployment.subtitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
            {deployment.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {deployment.videoUrl && (
            <div style={{ marginTop: '24px' }}>
              <VideoPlayerFrame
                src={deployment.videoUrl}
                title={`${deployment.id}_full_demo.mp4`}
                label="DEMO PLAYBACK"
              />
            </div>
          )}
        </div>

        {/* Case Study Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            { icon: <AlertCircle size={16} />, label: '1. Problem', content: caseStudy.problem },
            { icon: <Lightbulb size={16} />, label: '2. Approach', content: caseStudy.approach },
            { icon: <Code2 size={16} />, label: '4. Implementation', content: caseStudy.implementation },
            { icon: <ShieldCheck size={16} />, label: '5. Challenges', content: caseStudy.challenges },
          ].map((block) => (
            <div key={block.label} style={{ borderTop: '1px solid var(--border)', padding: '24px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--text-muted)' }}>
                {block.icon}
                <span className="caption">{block.label}</span>
              </div>
              <p className="body">{block.content}</p>
            </div>
          ))}

          {/* Architecture steps */}
          <div style={{ borderTop: '1px solid var(--border)', padding: '24px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-muted)' }}>
              <Layers size={16} />
              <span className="caption">3. Architecture</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {caseStudy.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '14px',
                    borderLeft: idx < caseStudy.architecture.length - 1 ? '1px solid var(--border)' : 'none',
                    marginLeft: '10px',
                    paddingLeft: '20px',
                  }}
                >
                  <div>
                    <div className="mono" style={{ color: 'var(--green)', marginBottom: '2px' }}>
                      {arch.step}
                    </div>
                    <div className="body" style={{ fontSize: '0.88rem' }}>
                      {arch.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div
            style={{
              borderTop: '1px solid var(--border)',
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--green-dim)',
              border: '1px solid var(--green-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--green)' }}>
              <TrendingUp size={16} />
              <span className="caption" style={{ color: 'var(--green)' }}>
                6. Result
              </span>
            </div>
            <p className="body" style={{ color: 'var(--text-primary)' }}>
              {caseStudy.results}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '32px' }}>
          <a href="#contact" className="btn btn-primary" onClick={onClose}>
            Build something similar
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(48px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @media (max-width: 640px) {
          .drawer-panel { padding: 28px 20px !important; }
        }
      `}</style>
    </div>
  );
}
