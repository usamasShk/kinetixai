import React from 'react';

const testimonials = [
  {
    quote: "They understood our workflow immediately and turned complex requirements into a tool that actually works. Ticket response times dropped significantly after deployment.",
    name: "Sarah Jenkins",
    role: "Operations Director, GrowthScale Media",
  },
  {
    quote: "Their expertise in computer vision gave us a working product that impressed our stakeholders. The codebase was clean, documented, and easy to hand off.",
    name: "Marcus Vance",
    role: "Head of Product, Athletic AI Studio",
  },
  {
    quote: "They think through the business impact, not just the technical implementation. Our team's document search went from frustrating to instant.",
    name: "David Miller",
    role: "Founder & CEO, DocuSense AI",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <p className="caption" style={{ marginBottom: '12px' }}>Client Feedback</p>
          <h2 className="heading-xl">
            What clients <span style={{ color: 'var(--green)' }}>say.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                borderTop: '1px solid var(--border)',
                padding: '40px 0',
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '48px',
                alignItems: 'start',
              }}
              className="testimonial-row"
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '5px' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {t.role}
                </div>
              </div>

              <blockquote style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontStyle: 'normal',
                margin: 0,
                padding: 0,
              }}>
                "{t.quote}"
              </blockquote>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonial-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
