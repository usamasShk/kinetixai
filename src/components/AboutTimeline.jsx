import React from 'react';
import { Award, BookOpen, Briefcase, MapPin, User, CheckCircle2 } from 'lucide-react';
import { personalInfo, timelineEvents } from '../data/portfolioData';

export default function AboutTimeline() {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column: Biography & Background */}
          <div>
            <div className="section-label">
              <span className="dot"></span>
              <span>About Usama Asif</span>
            </div>

            <h2 className="section-heading">Engineering with a Business Mindset</h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '24px' }}>
              I'm <strong style={{ color: '#FFF' }}>Usama Asif</strong>, a Full-Stack AI Engineer with a degree in Computer Science from <strong style={{ color: '#FFF' }}>FAST-NUCES</strong>. My focus is building practical, robust AI systems that solve genuine operational bottlenecks for companies and startups.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px' }}>
              Whether it's fine-tuning a custom computer vision model, embedding RAG semantic search across enterprise document sets, or connecting complex app APIs via n8n automation, I bridge the gap between AI research models and scalable production software.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
              <div style={{ padding: '16px', background: 'var(--surface-1)', border: '1px solid var(--border-light)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#A78BFA', fontFamily: 'var(--font-mono)' }}>EDUCATION</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginTop: '4px' }}>BS Computer Science</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>FAST-NUCES</div>
              </div>

              <div style={{ padding: '16px', background: 'var(--surface-1)', border: '1px solid var(--border-light)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginTop: '4px' }}>Pakistan</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Global Remote</div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Card */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Briefcase size={20} color="#8B5CF6" />
              <span>Experience & Trajectory</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
              {timelineEvents.map((evt, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#8B5CF6', boxShadow: '0 0 10px #8B5CF6' }}></div>
                    {idx < timelineEvents.length - 1 && (
                      <div style={{ width: '2px', flex: 1, background: 'var(--border-light)', margin: '4px 0' }}></div>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#38BDF8' }}>
                      {evt.period}
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginTop: '2px' }}>
                      {evt.role}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#A78BFA', marginBottom: '4px' }}>
                      {evt.org}
                    </div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {evt.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
