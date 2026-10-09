import React, { useState, useEffect } from 'react';
import { Cpu, Lightbulb, Globe, MessageSquare, Zap, TrendingUp, CheckCircle2, Terminal, Activity, Server, ShieldCheck } from 'lucide-react';

export default function HeroMatrix() {
  const [activeNode, setActiveNode] = useState(null);
  const [terminalLogs, setTerminalLogs] = useState([
    "[SYSTEM_INIT] Neural Core Matrix online",
    "[RAG_ENGINE] Pinecone vector index connected (38ms)",
    "[AGENT_ORCHESTRATOR] 4 autonomous tools registered",
    "[LLM_ROUTER] Claude 3.5 Sonnet & GPT-4o pool ready",
    "[STATUS 200] Awaiting incoming business telemetry..."
  ]);

  useEffect(() => {
    const logPool = [
      "[RAG_QUERY] Vector similarity search executed (0.984 match)",
      "[AGENT_TOOL] Executing CRM Lead Sync API call...",
      "[VISION_MODEL] Object detection buffer processed at 60 FPS",
      "[N8N_WORKHOOK] Invoice extraction completed without errors",
      "[AUTONOMOUS_EXEC] User query resolved in 184ms"
    ];

    const interval = setInterval(() => {
      const nextLog = logPool[Math.floor(Math.random() * logPool.length)];
      setTerminalLogs(prev => [...prev.slice(1), nextLog]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nodeDetails = {
    friction: {
      title: "01 Enterprise Problem / Data Intake",
      status: "INPUT STREAM ACTIVE",
      desc: "Manual operational friction, unstructured document sets, customer support queues, or vision streams.",
      metrics: "Raw Input → Vector Chunking"
    },
    core: {
      title: "02 KINETIX AI Core Engine",
      status: "ACTIVE • MULTI-MODEL MATRIX",
      desc: "LLM orchestration, Pinecone vector RAG retrieval, custom prompt function calling & agent tool execution.",
      metrics: "Sub-200ms Latency • 99.8% Grounded Accuracy"
    },
    webapp: {
      title: "03 AI SaaS Platforms",
      status: "PRODUCTION SYSTEM",
      desc: "Next.js 14 real-time dashboard UI, user authentication, usage monetization & analytics.",
      metrics: "FastAPI Async • REST/Sockets"
    },
    agents: {
      title: "04 Autonomous AI Agents",
      status: "AGENT NETWORK ACTIVE",
      desc: "Multi-agent digital workers interacting with external APIs, databases, and customer channels.",
      metrics: "24/7 Support • 80% Auto-resolution"
    },
    automation: {
      title: "05 Self-Healing Workflows",
      status: "n8n PIPELINE LIVE",
      desc: "Background synchronization across databases, CRMs, document OCR, and automated notifications.",
      metrics: "Zero manual hours required"
    },
    scale: {
      title: "06 Exponential Enterprise Scale",
      status: "BUSINESS OUTCOME ACHIEVED",
      desc: "Massive drop in operating overhead, zero-lag response times, and high-margin proprietary AI software.",
      metrics: "3.5x Throughput Acceleration"
    }
  };

  const currentInfo = nodeDetails[activeNode] || {
    title: "KINETIX AI System Architecture",
    status: "SYSTEM MATRIX OPERATIONAL",
    desc: "Hover over any neural node to inspect real-time system flow and enterprise telemetry.",
    metrics: "Production-Grade Autonomous Infrastructure"
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        background: 'var(--surface-1)',
        border: '1px solid var(--border-hover)',
        borderRadius: 'var(--radius-xl)',
        padding: '28px',
        boxShadow: 'var(--card-shadow), 0 0 50px rgba(139, 92, 246, 0.15)',
        backdropFilter: 'blur(24px)',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '35%',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(35px)'
        }}
      />

      {/* Top System Status Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '16px',
          marginBottom: '20px',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', letterSpacing: '0.06em' }}>
            NEURAL MATRIX • TELEMETRY LIVE
          </span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ fontSize: '0.72rem', background: 'rgba(59, 130, 246, 0.14)', color: '#60A5FA', padding: '3px 9px', borderRadius: '6px', border: '1px solid rgba(59, 130, 246, 0.3)', fontFamily: 'var(--font-mono)' }}>
            RAG v4.2
          </span>
          <span style={{ fontSize: '0.72rem', background: 'rgba(139, 92, 246, 0.14)', color: '#A78BFA', padding: '3px 9px', borderRadius: '6px', border: '1px solid rgba(139, 92, 246, 0.3)', fontFamily: 'var(--font-mono)' }}>
            AGENTS
          </span>
          <span style={{ fontSize: '0.72rem', background: 'rgba(6, 182, 212, 0.14)', color: '#22D3EE', padding: '3px 9px', borderRadius: '6px', border: '1px solid rgba(6, 182, 212, 0.3)', fontFamily: 'var(--font-mono)' }}>
            VISION
          </span>
        </div>
      </div>

      {/* Node Matrix Network Flow */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative', zIndex: 2 }}>
        
        {/* Step 1: Input Friction */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onMouseEnter={() => setActiveNode('friction')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '10px 22px',
              background: activeNode === 'friction' ? 'rgba(59, 130, 246, 0.22)' : 'var(--surface-2)',
              border: activeNode === 'friction' ? '1px solid #3B82F6' : '1px solid var(--border-light)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: activeNode === 'friction' ? 'var(--blue-glow)' : 'none'
            }}
          >
            <Lightbulb size={17} color="#3B82F6" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F8FAFC' }}>ENTERPRISE DATA & PROBLEM</span>
          </div>
        </div>

        {/* Pulse Arrow */}
        <div style={{ textAlign: 'center', color: '#8B5CF6', fontSize: '0.8rem', lineHeight: 1 }}>
          <span className="animate-pulse-glow" style={{ display: 'inline-block' }}>↓</span>
        </div>

        {/* Step 2: Core AI Engine */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onMouseEnter={() => setActiveNode('core')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '16px 22px',
              background: activeNode === 'core' ? 'linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(59,130,246,0.25) 100%)' : 'var(--surface-3)',
              border: activeNode === 'core' ? '1px solid #8B5CF6' : '1px solid rgba(139, 92, 246, 0.45)',
              borderRadius: '16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--accent-glow)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
              <Cpu size={20} color="#A78BFA" />
              <span style={{ fontWeight: 800, fontSize: '1rem', color: '#FFF', letterSpacing: '0.02em', fontFamily: 'var(--font-heading)' }}>
                KINETIX AI CORE ENGINE
              </span>
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'center', gap: '10px', fontFamily: 'var(--font-mono)' }}>
              <span>LLMs</span> • <span>Vector RAG</span> • <span>Agent Tools</span> • <span>Vision</span>
            </div>
          </div>
        </div>

        {/* Triple Split Arrows */}
        <div style={{ display: 'flex', justifyContent: 'space-around', color: '#8B5CF6', fontSize: '0.8rem', padding: '0 20px' }}>
          <span>↙</span>
          <span>↓</span>
          <span>↘</span>
        </div>

        {/* Step 3: Output Branches */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {/* SaaS */}
          <div
            onMouseEnter={() => setActiveNode('webapp')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '12px 10px',
              background: activeNode === 'webapp' ? 'rgba(59, 130, 246, 0.18)' : 'var(--surface-2)',
              border: activeNode === 'webapp' ? '1px solid #3B82F6' : '1px solid var(--border-light)',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Globe size={16} color="#3B82F6" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F8FAFC' }}>AI SaaS</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Platforms & UIs</div>
          </div>

          {/* Agents */}
          <div
            onMouseEnter={() => setActiveNode('agents')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '12px 10px',
              background: activeNode === 'agents' ? 'rgba(139, 92, 246, 0.18)' : 'var(--surface-2)',
              border: activeNode === 'agents' ? '1px solid #8B5CF6' : '1px solid var(--border-light)',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <MessageSquare size={16} color="#8B5CF6" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F8FAFC' }}>AI Agents</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Tool Workers</div>
          </div>

          {/* Workflows */}
          <div
            onMouseEnter={() => setActiveNode('automation')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              padding: '12px 10px',
              background: activeNode === 'automation' ? 'rgba(6, 182, 212, 0.18)' : 'var(--surface-2)',
              border: activeNode === 'automation' ? '1px solid #06B6D4' : '1px solid var(--border-light)',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Zap size={16} color="#06B6D4" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F8FAFC' }}>Automation</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>n8n & APIs</div>
          </div>
        </div>

        {/* Convergence Arrow */}
        <div style={{ textAlign: 'center', color: '#10B981', fontSize: '0.8rem', lineHeight: 1 }}>
          <span>↓</span>
        </div>

        {/* Step 4: Enterprise Scale */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onMouseEnter={() => setActiveNode('scale')}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              width: '100%',
              padding: '14px 20px',
              background: activeNode === 'scale' ? 'rgba(16, 185, 129, 0.22)' : 'rgba(16, 185, 129, 0.07)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
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
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#F8FAFC' }}>EXPONENTIAL ENTERPRISE SCALE</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Automated operations • Cost reduction</div>
              </div>
            </div>
            <CheckCircle2 size={18} color="#10B981" />
          </div>
        </div>

      </div>

      {/* Live System Terminal Box */}
      <div
        style={{
          marginTop: '20px',
          padding: '14px 16px',
          background: '#040507',
          border: '1px solid var(--border-light)',
          borderRadius: '10px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.76rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', paddingBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ color: '#A78BFA', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Terminal size={14} color="#A78BFA" />
            <span>{currentInfo.title}</span>
          </span>
          <span style={{ color: '#10B981', fontSize: '0.7rem' }}>
            {currentInfo.status}
          </span>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.76rem', marginBottom: '8px', lineHeight: 1.4 }}>
          {currentInfo.desc}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', opacity: 0.85 }}>
          {terminalLogs.slice(-2).map((log, idx) => (
            <div key={idx} style={{ color: '#38BDF8', fontSize: '0.72rem' }}>
              › {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
