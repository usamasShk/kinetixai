import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, Send } from 'lucide-react';
import { companyInfo } from '../data/portfolioData';

const WHATSAPP_NUM = '923075563077';
const WHATSAPP_MSG = encodeURIComponent("Hi KINETIX AI — I'd like to discuss a project.");

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
          'Accept': 'application/json',
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
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Left Column — Contact Info & Direct WhatsApp */}
          <div>
            <p className="caption" style={{ marginBottom: '12px' }}>Start a Project</p>
            <h2 className="heading-xl" style={{ marginBottom: '20px' }}>
              Tell us what you're <span style={{ color: 'var(--green)' }}>building.</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: '420px', marginBottom: '32px' }}>
              Describe your problem, workflow bottleneck, or custom AI requirement. When you submit the form, your inquiry is sent directly to our email <strong style={{ color: '#FFFFFF' }}>{companyInfo.email}</strong>.
            </p>

            {/* Direct Contact Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
              {/* Direct Email Link */}
              <a
                href={`mailto:${companyInfo.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'all var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--green)';
                  e.currentTarget.style.background = 'var(--surface-raised)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--surface)';
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'var(--green-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--green)',
                  flexShrink: 0,
                }}>
                  <Mail size={16} />
                </div>
                <div>
                  <div className="caption" style={{ fontSize: '0.7rem', marginBottom: '2px' }}>Official Email</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>{companyInfo.email}</div>
                </div>
              </a>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: 'var(--surface)',
                  border: '1px solid #22C55E',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'all var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--surface)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: '#22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000000',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.014 13.212C14.684 13.092 14.444 13.032 14.204 13.392C13.964 13.752 13.274 14.562 13.064 14.802C12.854 15.042 12.644 15.072 12.284 14.892C11.924 14.712 10.764 14.332 9.388 13.102C8.318 12.146 7.594 10.966 7.384 10.606C7.174 10.246 7.362 10.052 7.542 9.873C7.704 9.712 7.902 9.452 8.082 9.242C8.262 9.032 8.322 8.882 8.442 8.642C8.562 8.402 8.502 8.192 8.412 8.012C8.322 7.832 7.602 6.062 7.302 5.342C7.01 4.642 6.714 4.736 6.494 4.726C6.284 4.716 6.044 4.714 5.804 4.714C5.564 4.714 5.174 4.804 4.844 5.164C4.514 5.524 3.584 6.394 3.584 8.164C3.584 9.934 4.874 11.644 5.054 11.884C5.234 12.124 7.594 15.764 11.214 17.324C12.074 17.694 12.746 17.917 13.271 18.084C14.135 18.358 14.919 18.319 15.541 18.226C16.234 18.122 17.672 17.355 17.972 16.515C18.272 15.675 18.272 14.955 18.182 14.805C18.092 14.655 17.832 14.562 17.472 14.382Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.441 17.175L2.059 22.215L7.245 20.852C8.71 21.685 10.308 22.154 12 22.154C17.523 22.154 22 17.677 22 12C22 6.477 17.523 2 12 2ZM12 20.154C10.518 20.154 9.108 19.724 7.904 18.98L7.618 18.804L4.544 19.61L5.364 16.613L5.172 16.307C4.372 15.034 3.923 13.565 3.923 12C3.923 7.546 7.546 3.923 12 3.923C16.454 3.923 20.077 7.546 20.077 12C20.077 16.454 16.454 20.154 12 20.154Z" />
                  </svg>
                </div>
                <div>
                  <div className="caption" style={{ fontSize: '0.7rem', color: '#22C55E', marginBottom: '2px' }}>Instant Chat</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>WhatsApp Us</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column — Email Submission Form */}
          <div>
            {status === 'success' ? (
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--green)' }}>
                  <CheckCircle2 size={24} />
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Message Sent to {companyInfo.email}!</span>
                </div>
                <p className="body" style={{ color: 'var(--text-secondary)' }}>
                  Thank you! Your message has been sent directly to <strong style={{ color: '#FFFFFF' }}>{companyInfo.email}</strong>. We will reply to your email within 24 hours.
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
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label className="caption" style={{ display: 'block', marginBottom: '6px' }}>Your Name</label>
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
                  <label className="caption" style={{ display: 'block', marginBottom: '6px' }}>Your Email</label>
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

                <div>
                  <label className="caption" style={{ display: 'block', marginBottom: '6px' }}>Project Details & Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to build, automate, or solve..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    className="form-input"
                  />
                </div>

                {status === 'error' && (
                  <div style={{
                    padding: '12px 16px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.85rem',
                    color: '#F87171',
                  }}>
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
                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary"
                    style={{
                      gap: '8px',
                      opacity: status === 'loading' ? 0.7 : 1,
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                        Sending message to {companyInfo.email}...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  color: 'var(--text-primary)',
  fontSize: '0.92rem',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.18s ease',
};
