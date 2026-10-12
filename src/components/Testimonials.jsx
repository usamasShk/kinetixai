import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

const testimonials = [
  {
    quote: 'They understood our workflow immediately and turned complex requirements into a tool that actually works. Ticket response times dropped significantly after deployment.',
    name: 'Sarah Jenkins',
    role: 'Operations Director, GrowthScale Media',
    avatar: 47,
  },
  {
    quote: 'Their expertise in computer vision gave us a working product that impressed our stakeholders. The codebase was clean, documented, and easy to hand off.',
    name: 'Marcus Vance',
    role: 'Head of Product, Athletic AI Studio',
    avatar: 12,
  },
  {
    quote: "They think through the business impact, not just the technical implementation. Our team's document search went from frustrating to instant.",
    name: 'David Miller',
    role: 'Founder & CEO, DocuSense AI',
    avatar: 60,
  },
];

/* Client photo with initials fallback if the image can't load */
function ClientAvatar({ name, img }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  if (failed) {
    return (
      <span
        aria-hidden="true"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: '0.88rem',
          fontWeight: 700,
          color: 'var(--green-bright)',
          background: 'var(--green-dim)',
          border: '1px solid var(--green-border)',
          flexShrink: 0,
        }}
      >
        {initials}
      </span>
    );
  }

  return (
    <img
      src={`https://i.pravatar.cc/96?img=${img}`}
      onError={() => setFailed(true)}
      alt={`${name}, ${name.split(' ')[0]}'s photo`}
      style={{
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '1px solid var(--green-border)',
        boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.08)',
        flexShrink: 0,
      }}
    />
  );
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Client Feedback"
          title={
            <>
              What clients <span className="text-glow-green">say.</span>
            </>
          }
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="testimonial-grid">
          {testimonials.map((t, idx) => (
            <Reveal
              key={t.name}
              delay={idx * 90}
              className="card card-hairline"
              style={{ padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {/* Quote glyph + stars */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.2rem',
                    fontWeight: 700,
                    lineHeight: 0.6,
                    color: 'var(--green)',
                    textShadow: '0 0 24px rgba(34, 197, 94, 0.4)',
                  }}
                >
                  &ldquo;
                </span>
                <span style={{ display: 'flex', gap: '3px' }} aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="var(--green)" color="var(--green)" />
                  ))}
                </span>
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {t.quote}
              </blockquote>

              {/* Client — photo, name, role */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '20px',
                }}
              >
                <ClientAvatar name={t.name} img={t.avatar} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
