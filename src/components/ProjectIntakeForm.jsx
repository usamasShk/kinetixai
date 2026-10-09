import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, ArrowRight, Clock, DollarSign, Briefcase, User, Mail, Building } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectIntakeForm({ prefilledService, onClose }) {
  const [formData, setFormData] = useState({
    serviceType: prefilledService || 'AI Web Application',
    details: '',
    stage: 'Idea',
    budget: '$1,000 - $3,000',
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
    'AI Web Application',
    'AI Chatbot',
    'AI Agent',
    'AI Automation',
    'AI Integration',
    'RAG / LLM Application',
    'Existing Application Enhancement',
    'Other'
  ];

  const stageOptions = ['Idea Phase', 'Prototype Ready', 'Existing Product', 'Scaling Up'];
  const budgetOptions = ['< $1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000+'];
  const timelineOptions = ['1 - 2 weeks', '2 - 4 weeks', '1 - 2 months', 'Flexible'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hi Usama! I just submitted a project inquiry:
- Need: ${formData.serviceType}
- Name: ${formData.name || 'Not provided'}
- Company: ${formData.company || 'N/A'}
- Stage: ${formData.stage}
- Budget: ${formData.budget}
- Timeline: ${formData.timeline}
- Details: ${formData.details}`;

    return `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="book" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Main Glass Card Container */}
        <div
          className="glass-card"
          style={{
            padding: '56px 44px',
            border: '1px solid var(--border-hover)',
            boxShadow: 'var(--card-shadow), 0 0 60px rgba(139, 92, 246, 0.15)'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px auto' }}>
            <div className="section-label">
              <span className="dot"></span>
              <span>Project Request</span>
            </div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              Let's Build Something That Moves Your Business Forward.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Tell me about your idea, current process, or requirements. I'll review your details and get back to you with the technical approach and roadmap.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Step 1: What do you need? */}
              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '14px' }}>
                  1. What do you need? <span style={{ color: '#8B5CF6' }}>*</span>
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
                          padding: '10px 18px',
                          borderRadius: '999px',
                          fontSize: '0.86rem',
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

              {/* Step 2: Project Details */}
              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '10px' }}>
                  2. Project Details <span style={{ color: '#8B5CF6' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your idea, current workflow, required features, or the problem you're trying to solve..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '12px',
                    color: '#FFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)')}
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
                      padding: '12px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    {stageOptions.map(stg => (
                      <option key={stg} value={stg} style={{ background: '#0D0F14' }}>{stg}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    {budgetOptions.map(bgt => (
                      <option key={bgt} value={bgt} style={{ background: '#0D0F14' }}>{bgt}</option>
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
                      padding: '12px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    {timelineOptions.map(tml => (
                      <option key={tml} value={tml} style={{ background: '#0D0F14' }}>{tml}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 4: Client Info */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Your Name <span style={{ color: '#8B5CF6' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Usama Asif"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Email Address <span style={{ color: '#8B5CF6' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="usama@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Company / Business
                  </label>
                  <input
                    type="text"
                    placeholder="My AI SaaS Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '16px' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ cursor: 'pointer', width: '100%', maxWidth: '320px' }}>
                  <Send size={18} />
                  <span>Submit Project Request</span>
                </button>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  ⚡ Guaranteed response within 24 hours
                </div>
              </div>
            </form>
          ) : (
            /* Submission Success Panel */
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  border: '1px solid rgba(16, 185, 129, 0.4)'
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '10px' }}>
                Project Request Received!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 28px auto' }}>
                Thank you <strong style={{ color: '#FFF' }}>{formData.name}</strong>. I've logged your request for <strong style={{ color: '#A78BFA' }}>{formData.serviceType}</strong> and will review your requirements shortly.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageSquare size={18} />
                  <span>Chat directly on WhatsApp →</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-lg"
                >
                  Submit Another Idea
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
