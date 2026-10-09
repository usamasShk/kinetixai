import React, { useState } from 'react';
import { AlertTriangle, Cpu, TrendingUp, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function TransformationStrip({ onOpenIntake }) {
  const [activeTab, setActiveTab] = useState('after');

  return (
    <section style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          <div className="section-label">
            <span className="dot"></span>
            <span>Enterprise Transformation</span>
          </div>
          <h2 className="section-heading">
            Your enterprise doesn't need another generic website.{' '}
            <span className="text-gradient">It needs an autonomous engine.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.12rem', lineHeight: 1.65 }}>
            Manual data entry, disconnected app silos, and slow response queues limit your team's ability to scale. We turn operational friction into automated throughput.
          </p>
        </div>

        {/* Dual Interactive Split View (Before vs After) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '32px' }} className="transformation-grid">
          
          {/* Panel 1: Legacy Manual Drag (Dark Crimson Alert Wireframe) */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              borderTop: '3px solid #EF4444',
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.06) 0%, rgba(9, 11, 16, 0.95) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#EF4444', letterSpacing: '0.08em', fontWeight: 800 }}>
                LEGACY FRICTION • BEFORE
              </span>
              <AlertTriangle size={20} color="#EF4444" />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              Manual Operational Drag
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '28px' }}>
              Repetitive data entry, slow customer response queues, human parsing errors, and disconnected software silos consume hundreds of labor hours each month.
            </p>

            {/* Pain Points List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#F87171' }}>
                <XCircle size={16} color="#EF4444" />
                <span>65% higher operational labor overhead</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#F87171' }}>
                <XCircle size={16} color="#EF4444" />
                <span>Average 4+ hour customer ticket resolution times</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#F87171' }}>
                <XCircle size={16} color="#EF4444" />
                <span>Manual PDF invoice extraction & CRM copy-pasting</span>
              </div>
            </div>
          </div>

          {/* Panel 2: KINETIX AI Engine (Cyber Cyan & Electric Violet Glow) */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              borderTop: '3px solid #8B5CF6',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.14) 0%, rgba(6, 182, 212, 0.1) 100%)',
              boxShadow: 'var(--accent-glow)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#A78BFA', letterSpacing: '0.08em', fontWeight: 800 }}>
                KINETIX AI MATRIX • AFTER
              </span>
              <div style={{ padding: '6px 12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '999px', color: '#10B981', fontSize: '0.74rem', fontFamily: 'var(--font-mono)' }}>
                ● 10X ACCELERATION
              </div>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              Autonomous System Matrix
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '28px' }}>
              Custom LLM orchestration, Pinecone vector RAG search, tool-using agents, and self-healing n8n pipelines that process information and execute tools 24/7.
            </p>

            {/* Impact Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#10B981', fontFamily: 'var(--font-display)' }}>- 65%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Operating Overhead</div>
              </div>

              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#38BDF8', fontFamily: 'var(--font-display)' }}>3.5x</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Throughput Speed</div>
              </div>
            </div>

            <button onClick={onOpenIntake} className="btn btn-primary" style={{ width: '100%', cursor: 'pointer' }}>
              <span>Architect Autonomous System</span>
              <ArrowRight size={17} />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .transformation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
