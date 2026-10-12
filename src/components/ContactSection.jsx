import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, Send, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/portfolioData';
import { Reveal } from './ui';

const WHATSAPP_NUM = '923075563077';
const WHATSAPP_MSG = encodeURIComponent("Hi KINETIX AI, I'd like to discuss a project.");

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Send directly to contactkinetixai@gmail.com via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/contactkinetixai@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Project Inquiry from ${form.name} (KINETIX AI Website)`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Could not send automatically. Click below to open your email client.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Click below to send via your email client.');
    }
  };

  return (
    <section id="contact" className="section">
      {/* Ambient glow behind the contact panel */}
      <div
        aria-hidden="true"
        className="glow-orb"
        style={{
          width: '640px',
          height: '480px',
          top: '10%',
          left: '50%',
          marginLeft: '-320px',
          background: 'radial-gradient(closest-side, rgba(34, 197, 94, 0.08), transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.05fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column — Contact Info & Direct WhatsApp */}
          <Reveal>
            <span className="eyebrow" style={{ marginBottom: '18px' }}>
              <span style={{ color: 'var(--text-muted)' }}>06</span>
              <span className="eyebrow-dot" />
              <span>Start a Project</span>
            </span>

            <h2 className="heading-xl" style={{ marginBottom: '20px', marginTop: '18px' }}>
              Tell us what you're <span className="text-glow-green">building.</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: '440px', marginBottom: '30px' }}>
              Describe your problem, workflow bottleneck, or custom AI requirement. When you submit
              the form, your inquiry is sent directly to our email{' '}
              <strong style={{ color: '#FFFFFF' }}>{companyInfo.email}</strong>.
            </p>

            {/* Meta chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              <span className="tag" style={{ gap: '7px', alignItems: 'center' }}>
                <MapPin size={12} color="var(--green)" /> {companyInfo.location}
              </span>
              <span className="tag" style={{ gap: '7px', alignItems: 'center' }}>
                <Clock size={12} color="var(--green)" /> Replies within 24 hours
              </span>
            </div>

            {/* Direct Contact Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
              {/* Direct Email Link */}
              <a href={`mailto:${companyInfo.email}`} className="contact-channel">
                <span className="channel-icon">
                  <Mail size={16} />
                </span>
                <span>
                  <span className="caption" style={{ fontSize: '0.66rem', marginBottom: '2px', display: 'block' }}>
                    Official Email
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{companyInfo.email}</span>
                </span>
                <Send size={14} className="channel-arrow" style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel contact-channel-wa"
              >
                <span
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'linear-gradient(180deg, var(--green-bright), var(--green-deep))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000000',
                    flexShrink: 0,
                    boxShadow: '0 0 20px -4px rgba(34, 197, 94, 0.5)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.014 13.212C14.684 13.092 14.444 13.032 14.204 13.392C13.964 13.752 13.274 14.562 13.064 14.802C12.854 15.042 12.644 15.072 12.284 14.892C11.924 14.712 10.764 14.332 9.388 13.102C8.318 12.146 7.594 10.966 7.384 10.606C7.174 10.246 7.362 10.052 7.542 9.873C7.704 9.712 7.902 9.452 8.082 9.242C8.262 9.032 8.322 8.882 8.442 8.642C8.562 8.402 8.502 8.192 8.412 8.012C8.322 7.832 7.602 6.062 7.302 5.342C7.01 4.642 6.714 4.736 6.494 4.726C6.284 4.716 6.044 4.714 5.804 4.714C5.564 4.714 5.174 4.804 4.844 5.164C4.514 5.524 3.584 6.394 3.584 8.164C3.584 9.934 4.874 11.644 5.054 11.884C5.234 12.124 7.594 15.764 11.214 17.324C12.074 17.694 12.746 17.917 13.271 18.084C14.135 18.358 14.919 18.319 15.541 18.226C16.234 18.122 17.672 17.355 17.972 16.515C18.272 15.675 18.272 14.955 18.182 14.805C18.092 14.655 17.832 14.562 17.472 14.382Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.441 17.175L2.059 22.215L7.245 20.852C8.71 21.685 10.308 22.154 12 22.154C17.523 22.154 22 17.677 22 12C22 6.477 17.523 2 12 2ZM12 20.154C10.518 20.154 9.108 19.724 7.904 18.98L7.618 18.804L4.544 19.61L5.364 16.613L5.172 16.307C4.372 15.034 3.923 13.565 3.923 12C3.923 7.546 7.546 3.923 12 3.923C16.454 3.923 20.077 7.546 20.077 12C20.077 16.454 16.454 20.154 12 20.154Z" />
                  </svg>
                </span>
                <span>
                  <span
                    className="caption"
                    style={{ fontSize: '0.66rem', color: 'var(--green)', marginBottom: '2px', display: 'block' }}
                  >
                    Instant Chat
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>WhatsApp Us</span>
                </span>
                <Send size={14} className="channel-arrow" style={{ marginLeft: 'auto', color: 'var(--green)' }} />
              </a>
            </div>
          </Reveal>

          {/* Right Column — Email Submission Form */}
          <Reveal delay={120}>
            <div className="card card-hairline" style={{ padding: '34px 32px' }}>
              {status === 'success' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '12px 4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--green)' }}>
                    <CheckCircle2 size={24} />
                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Message Sent to {companyInfo.email}!</span>
                  </div>
                  <p className="body" style={{ color: 'var(--text-secondary)' }}>
                    Thank you! Your message has been sent directly to{' '}
                    <strong style={{ color: '#FFFFFF' }}>{companyInfo.email}</strong>. We will reply to your
                    email within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn btn-outline"
                    style={{ width: 'fit-content', marginTop: '16px' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div className="form-row">
                    <div>
                      <label className="caption" style={{ display: 'block', marginBottom: '8px' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Miller"
                        style={inputStyle}
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="caption" style={{ display: 'block', marginBottom: '8px' }}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        style={inputStyle}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="caption" style={{ display: 'block', marginBottom: '8px' }}>
                      Project Details & Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe what you want to build, automate, or solve..."
                      rows={6}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                      className="form-input"
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(239, 68, 68, 0.08)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: 'var(--radius)',
                        fontSize: '0.85rem',
                        color: '#F87171',
                      }}
                    >
                      {errorMessage}{' '}
                      <a
                        href={`mailto:${companyInfo.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`}
                        style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 600 }}
                      >
                        Click here to email directly
                      </a>
                    </div>
                  )}

                  {/* Single Primary "Send Message" Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary"
                    style={{ gap: '8px', justifyContent: 'center', padding: '13px 24px', opacity: status === 'loading' ? 0.7 : 1 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                        Sending message to {companyInfo.email}...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .contact-channel {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          text-decoration: none;
          transition: all var(--transition);
        }
        .contact-channel:hover {
          border-color: var(--green);
          background: var(--surface-raised);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -12px rgba(0, 0, 0, 0.6), 0 0 24px -8px rgba(34, 197, 94, 0.25);
        }
        .contact-channel:hover .channel-arrow { color: var(--green) !important; transform: translateX(3px); }
        .channel-arrow { transition: all var(--transition); }

        .channel-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--green-dim);
          border: 1px solid var(--green-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--green);
          flex-shrink: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '13px 15px',
  background: 'rgba(10, 10, 10, 0.55)',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--radius)',
  color: 'var(--text-primary)',
  fontSize: '0.92rem',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
};
