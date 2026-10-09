import React from 'react';
import { MessageSquare, ArrowRight, Zap } from 'lucide-react';
import { companyInfo } from '../data/portfolioData';

export default function WhatsAppCTA() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <section style={{ padding: '44px 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(9, 11, 16, 0.96) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 0 50px rgba(16, 185, 129, 0.15)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: '#10B981',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.45)'
              }}
            >
              <MessageSquare size={26} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                Prefer a quick executive conversation?
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginTop: '2px' }}>
                Skip the intake form and message KINETIX AI directly on WhatsApp for instant feedback.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
