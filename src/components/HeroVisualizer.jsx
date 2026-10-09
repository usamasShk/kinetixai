import React, { useState } from 'react';
import { Cpu, Lightbulb, Globe, MessageSquare, Zap, TrendingUp, CheckCircle, Database, Layers } from 'lucide-react';

export default function HeroVisualizer() {
  const [activeNode, setActiveNode] = useState(null);

  const nodeDetails = {
    idea: {
      title: "01 Client Business Idea",
      status: "INPUT STREAM",
      desc: "Manual operational friction, unstructured data, or new AI SaaS product vision.",
      metrics: "Raw requirements → Product Spec"
    },
    engine: {
      title: "02 Core AI Engine",
      status: "ACTIVE • GPT-4o / Claude 3.5 / RAG",
      desc: "Multi-modal processing, vector search embeddings, function calling & autonomous agent decision logic.",
      metrics: "Latency < 250ms • Accuracy 99.2%"
    },
    webapp: {
      title: "03 AI Web App",
      status: "PRODUCTION UI",
      desc: "React/Next.js dynamic interface, user management, vector search & interactive dashboard.",
      metrics: "FastAPI REST • Vector DB"
    },
    chatbot: {
      title: "04 AI Chatbot & Agent",
      status: "AUTONOMOUS AGENT",
      desc: "Context-aware conversational agent connected to enterprise knowledge base & APIs.",
      metrics: "24/7 Support • 80% Auto-resolution"
    },
    automation: {
      title: "05 n8n & API Workflows",
      status: "SYSTEM AUTOMATION",
      desc: "Seamless background synchronization across CRMs, databases, and document parsing.",
      metrics: "Zero manual data entry"
    },
    growth: {
      title: "06 Business Growth",
      status: "BUSINESS OUTCOME",
      desc: "Drastic reduction in operating costs, automated throughput, and scalable SaaS revenue.",
      metrics: "3.5x Faster Execution"
    }
  };

  const currentInfo = nodeDetails[activeNode] || {
    title: "AI System Architecture",
    status: "SYSTEM OPERATIONAL",
    desc: "Hover over any node to inspect real-time system flow and architectural metrics.",
    metrics: "Production-Grade AI Pipelines"
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        background: 'var(--surface-1)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '28px',
        boxShadow: 'var(--card-shadow), 0 0 40px rgba(139, 92, 246, 0.1)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient glow circle */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }}
      />

      {/* Top Telemetry Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '18px',
          marginBottom: '20px',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
            SYSTEM PIPELINE ACTIVE
          </span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ fontSize: '0.72rem', background: 'rgba(59, 130, 246, 0.12)', color: '#60A5FA', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            RAG
          </span>
          <span style={{ fontSize: '0.72rem', background: 'rgba(139, 92, 246, 0.12)', color: '#A78BFA', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
            LLMs
          </span>
          <span style={{ fontSize: '0.72rem', background: 'rgba(6, 182, 212, 0.12)', color: '#22D3EE', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
            Vision
          </span>
        </div>
      </div>

      {/* Node System Network Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 2 }}>
        
        {/* Step 1: Idea / Input */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onMouseEnter={() => setActiveNode('idea')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '12px 24px',
              background: activeNode === 'idea' ? 'rgba(59, 130, 246, 0.2)' : 'var(--surface-2)',
              border: activeNode === 'idea' ? '1px solid #3B82F6' : '1px solid var(--border-light)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: activeNode === 'idea' ? 'var(--blue-glow)' : 'none'
            }}
          >
            <Lightbulb size={18} color="#3B82F6" />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#F8FAFC' }}>BUSINESS PROBLEM / IDEA</span>
          </div>
        </div>

        {/* Connection Pulse Arrow */}
        <div style={{ textAlign: 'center', color: '#8B5CF6', fontSize: '0.8rem', lineHeight: 1 }}>
          <span className="animate-pulse-glow" style={{ display: 'inline-block' }}>↓</span>
        </div>

        {/* Step 2: AI Core Engine Center Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onMouseEnter={() => setActiveNode('engine')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              width: '100%',
              maxWidth: '380px',
              padding: '18px 24px',
              background: activeNode === 'engine' ? 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(59,130,246,0.2) 100%)' : 'var(--surface-3)',
              border: activeNode === 'engine' ? '1px solid #8B5CF6' : '1px solid rgba(139, 92, 246, 0.4)',
              borderRadius: '16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--accent-glow)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
              <Cpu size={20} color="#A78BFA" />
              <span style={{ fontWeight: 800, fontSize: '1rem', color: '#FFF', letterSpacing: '0.02em' }}>
                INTELLIGENT AI ENGINE
              </span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <span>LLM Orchestration</span> • <span>Vector RAG</span> • <span>APIs</span>
            </div>
          </div>
        </div>

        {/* Splitting Arrows */}
        <div style={{ display: 'flex', justifyContent: 'space-around', color: '#8B5CF6', fontSize: '0.8rem', padding: '0 20px' }}>
          <span>↙</span>
          <span>↓</span>
          <span>↘</span>
        </div>

        {/* Step 3: 3 Solution Branches */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {/* Web App */}
          <div
            onMouseEnter={() => setActiveNode('webapp')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '14px 12px',
              background: activeNode === 'webapp' ? 'rgba(59, 130, 246, 0.15)' : 'var(--surface-2)',
              border: activeNode === 'webapp' ? '1px solid #3B82F6' : '1px solid var(--border-light)',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Globe size={18} color="#3B82F6" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F8FAFC' }}>AI Web App</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>SaaS & Dashboards</div>
          </div>

          {/* Chatbot */}
          <div
            onMouseEnter={() => setActiveNode('chatbot')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '14px 12px',
              background: activeNode === 'chatbot' ? 'rgba(139, 92, 246, 0.15)' : 'var(--surface-2)',
              border: activeNode === 'chatbot' ? '1px solid #8B5CF6' : '1px solid var(--border-light)',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <MessageSquare size={18} color="#8B5CF6" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F8FAFC' }}>AI Agents</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Chatbots & Support</div>
          </div>

          {/* Automation */}
          <div
            onMouseEnter={() => setActiveNode('automation')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '14px 12px',
              background: activeNode === 'automation' ? 'rgba(6, 182, 212, 0.15)' : 'var(--surface-2)',
              border: activeNode === 'automation' ? '1px solid #06B6D4' : '1px solid var(--border-light)',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Zap size={18} color="#06B6D4" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F8FAFC' }}>Automation</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Workflows & APIs</div>
          </div>
        </div>

        {/* Convergence Arrow */}
        <div style={{ textAlign: 'center', color: '#10B981', fontSize: '0.8rem', lineHeight: 1 }}>
          <span>↓</span>
        </div>

        {/* Step 4: Business Outcome */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onMouseEnter={() => setActiveNode('growth')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              width: '100%',
              padding: '14px 20px',
              background: activeNode === 'growth' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.06)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <TrendingUp size={20} color="#10B981" />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F8FAFC' }}>BUSINESS GROWTH & SCALE</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Automated operations • Cost reduction</div>
              </div>
            </div>
            <CheckCircle size={18} color="#10B981" />
          </div>
        </div>

      </div>

      {/* Dynamic Inspector Panel */}
      <div
        style={{
          marginTop: '20px',
          padding: '14px 16px',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid var(--border-light)',
          borderRadius: '10px',
          fontSize: '0.8rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontWeight: 700, color: '#A78BFA', fontFamily: 'var(--font-mono)' }}>
            {currentInfo.title}
          </span>
          <span style={{ fontSize: '0.7rem', color: '#10B981', fontFamily: 'var(--font-mono)' }}>
            {currentInfo.status}
          </span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', margin: '4px 0' }}>
          {currentInfo.desc}
        </p>
        <div style={{ color: '#38BDF8', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
          ⚡ {currentInfo.metrics}
        </div>
      </div>
    </div>
  );
}
