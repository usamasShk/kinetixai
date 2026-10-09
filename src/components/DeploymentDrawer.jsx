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
        background: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          height: '100vh',
          background: 'var(--surface)',
          borderLeft: '1px solid var(--border)',
          overflowY: 'auto',
          padding: '48px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            width: '36px',
            height: '36px',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <p className="caption" style={{ marginBottom: '10px' }}>{deployment.badge}</p>
          <h2 className="heading-xl" style={{ marginBottom: '6px' }}>{deployment.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{deployment.subtitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
            {deployment.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
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
            { icon: <AlertCircle size={16} />, label: '1. Problem', content: caseStudy.problem, color: 'var(--text-muted)' },
            { icon: <Lightbulb size={16} />, label: '2. Approach', content: caseStudy.approach, color: 'var(--text-muted)' },
            { icon: <Code2 size={16} />, label: '4. Implementation', content: caseStudy.implementation, color: 'var(--text-muted)' },
            { icon: <ShieldCheck size={16} />, label: '5. Challenges', content: caseStudy.challenges, color: 'var(--text-muted)' },
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
                <div key={idx} style={{ display: 'flex', gap: '16px', paddingBottom: '14px', borderLeft: idx < caseStudy.architecture.length - 1 ? '1px solid var(--border)' : 'none', marginLeft: '10px', paddingLeft: '20px' }}>
                  <div>
                    <div className="mono" style={{ color: 'var(--green)', marginBottom: '2px' }}>{arch.step}</div>
                    <div className="body" style={{ fontSize: '0.88rem' }}>{arch.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div style={{ borderTop: '1px solid var(--border)', padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--green)' }}>
              <TrendingUp size={16} />
              <span className="caption" style={{ color: 'var(--green)' }}>6. Result</span>
            </div>
            <p className="body" style={{ color: 'var(--text-primary)' }}>{caseStudy.results}</p>
          </div>

        </div>

        {/* Footer */}
        <div style={{ marginTop: '32px' }}>
          <a href="#contact" className="btn btn-primary" onClick={onClose}>
            Build something similar
          </a>
        </div>
      </div>
    </div>
  );
}
