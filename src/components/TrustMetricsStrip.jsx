import React from 'react';
import { ShieldCheck, Zap, Activity, Award } from 'lucide-react';

export default function TrustMetricsStrip() {
  const metrics = [
    { value: "$42M+", label: "Client Impact Value Created", icon: <Award size={20} color="#F59E0B" /> },
    { value: "1.4B+", label: "LLM Tokens Processed", icon: <Activity size={20} color="#8B5CF6" /> },
    { value: "< 140ms", label: "Average Vector API Latency", icon: <Zap size={20} color="#3B82F6" /> },
    { value: "99.99%", label: "Enterprise Uptime SLA", icon: <ShieldCheck size={20} color="#10B981" /> }
  ];

  return (
    <section style={{ padding: '40px 0', position: 'relative', background: 'var(--surface-1)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-light)' }}>
                {m.icon}
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFF', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
