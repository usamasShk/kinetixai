import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, ArrowRight, Clock, DollarSign, Briefcase, User, Mail, Building } from 'lucide-react';
import { companyInfo } from '../data/portfolioData';

export default function ProjectIntakeModal({ prefilledService, onClose }) {
  const [formData, setFormData] = useState({
    serviceType: prefilledService || 'AI-Powered SaaS & Web Platforms',
    details: '',
    stage: 'Idea Phase',
    budget: '$3,000 - $5,000',
    timeline: '2 - 4 weeks',
    name: '',
    email: '',
    company: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  const serviceOptions = [
    'AI-Powered SaaS & Web Platforms',
    'Autonomous AI Agents & Support Bots',
    'Enterprise AI Workflow Automation',
    'Enterprise RAG & Neural Search',
    'Computer Vision System',
    'Custom Neural Architecture'
  ];

  const stageOptions = ['Idea Phase', 'Prototype Ready', 'Existing System Upgrade', 'Scaling Enterprise'];
  const budgetOptions = ['< $3,000', '$3,000 - $5,000', '$5,000 - $10,000', '$10,000+'];
  const timelineOptions = ['1 - 2 weeks', '2 - 4 weeks', '1 - 2 months', 'Flexible Scope'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hi KINETIX AI Team! We'd like to submit a project inquiry:
- System Type: ${formData.serviceType}
- Contact: ${formData.name || 'N/A'} (${formData.company || 'N/A'})
- Stage: ${formData.stage}
- Budget: ${formData.budget}
- Timeline: ${formData.timeline}
- System Details: ${formData.details}`;

    return `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="book" style={{ padding: '105px 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        <div
          className="glass-card"
          style={{
            padding: '60px 48px',
            border: '1px solid var(--border-hover)',
            boxShadow: 'var(--card-shadow), 0 0 70px rgba(139, 92, 246, 0.18)'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 44px auto' }}>
            <div className="section-label">
              <span className="dot"></span>
              <span>Project Intake & Discovery</span>
            </div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3rem)' }}>
              Let's Build Something That Moves Your Business Forward.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
              Tell us about your system requirements, operational bottlenecks, or product vision. Our AI engineering team will review your specifications and prepare a system roadmap.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
              
              {/* Step 1: System Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.96rem', fontWeight: 800, color: '#FFF', marginBottom: '14px', fontFamily: 'var(--font-heading)' }}>
                  1. What system do you need? <span style={{ color: '#8B5CF6' }}>*</span>
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.serviceType === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, serviceType: opt })}
                        style={{
                          padding: '11px 20px',
                          borderRadius: '999px',
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          background: isSelected ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.04)',
                          color: isSelected ? '#FFF' : 'var(--text-secondary)',
                          border: isSelected ? '1px solid transparent' : '1px solid var(--border-light)',
                          boxShadow: isSelected ? 'var(--accent-glow)' : 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: System Specifications */}
              <div>
                <label style={{ display: 'block', fontSize: '0.96rem', fontWeight: 800, color: '#FFF', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
                  2. System Specifications & Workflow Details <span style={{ color: '#8B5CF6' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your current manual workflow, desired AI integrations, target features, or operational bottlenecks..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '18px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '14px',
                    color: '#FFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.96rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.55)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              {/* Step 3: Stage, Budget & Timeline */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Project Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    {stageOptions.map(stg => (
                      <option key={stg} value={stg} style={{ background: '#090B10' }}>{stg}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    {budgetOptions.map(bgt => (
                      <option key={bgt} value={bgt} style={{ background: '#090B10' }}>{bgt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Expected Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    {timelineOptions.map(tml => (
                      <option key={tml} value={tml} style={{ background: '#090B10' }}>{tml}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 4: Contact Info */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Your Name <span style={{ color: '#8B5CF6' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Executive Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Work Email <span style={{ color: '#8B5CF6' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="executive@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Company / Enterprise
                  </label>
                  <input
                    type="text"
                    placeholder="Company Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '16px' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ cursor: 'pointer', width: '100%', maxWidth: '340px' }}>
                  <Send size={18} />
                  <span>Submit System Request</span>
                </button>

                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  ⚡ KINETIX AI SLA: Engineering response within 24 hours
                </div>
              </div>
            </form>
          ) : (
            /* Success Panel */
            <div style={{ textAlign: 'center', padding: '44px 0' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.18)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
                }}
              >
                <CheckCircle2 size={40} />
              </div>

              <h3 style={{ fontSize: '2rem', color: '#FFF', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                System Request Logged!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', maxWidth: '540px', margin: '0 auto 32px auto' }}>
                Thank you <strong style={{ color: '#FFF' }}>{formData.name}</strong>. KINETIX AI has received your requirements for <strong style={{ color: '#A78BFA' }}>{formData.serviceType}</strong> and assigned a lead systems architect to review your inquiry.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageSquare size={19} />
                  <span>Connect directly on WhatsApp →</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-lg"
                >
                  Submit Another Project
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
