import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------
   Hero — Full-bleed background image with headline and CTAs.
   ------------------------------------------------------------------ */

export default function Hero({ onViewWork }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-scene">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="hero-bg-image" aria-hidden="true" />

      {/* ===== Animated orb glow overlay ===== */}
      <div className="hero-orb-pulse" aria-hidden="true" />

      {/* ===== Dark overlays for readability ===== */}
      <div className="hero-overlay-top" aria-hidden="true" />
      <div className="hero-overlay-bottom" aria-hidden="true" />


      {/* ===== CONTENT ===== */}
      <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%' }}>
        <div className="hero-layout">
          {/* Upper content */}
          <div className="hero-upper">
            {/* Headline */}
            <h1 className={`display hero-fade-item ${loaded ? 'hero-visible' : ''}`} style={{
              maxWidth: '900px',
              margin: '0 auto 20px auto',
              transitionDelay: '0.2s',
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: 'clamp(1.15rem, 2.4vw, 1.95rem)',
              lineHeight: 1.3,
              textShadow: '0 2px 18px rgba(0, 0, 0, 0.9), 0 4px 44px rgba(0, 0, 0, 0.6)',
            }}>
              We build AI systems for{' '}
              <span className="text-glow-green">businesses</span> that need{' '}
              <span className="text-glow-green">results.</span>
            </h1>

            {/* CTAs */}
            <div className={`hero-fade-item ${loaded ? 'hero-visible' : ''}`} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              transitionDelay: '0.45s',
            }}>
              <a href="#contact" className="btn hero-btn-book">
                Book A Call
              </a>
              <button onClick={onViewWork} className="btn btn-outline hero-btn-services" style={{
                padding: '13px 28px',
                fontSize: '0.95rem',
                borderRadius: '999px',
              }}>
                Our Services
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ===== SCENE ===== */
        .hero-scene {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #0A0A0A;
        }

        /* ===== BACKGROUND IMAGE ===== */
        .hero-bg-image {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image: url('/hero-bg.jpg');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          transform: scaleX(1.3);
          transform-origin: 50% 0%;
        }

        /* ===== ANIMATED ORB PULSE ===== */
        .hero-orb-pulse {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 110%;
          height: 50%;
          z-index: 1;
          border-radius: 50%;
          background: radial-gradient(
            ellipse 60% 80% at 50% 80%,
            rgba(34, 197, 94, 0.15) 0%,
            rgba(34, 197, 94, 0.05) 50%,
            transparent 100%
          );
          animation: orbPulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes orbPulse {
          0%, 100% {
            opacity: 0.6;
            transform: translateX(-50%) scale(1);
            filter: blur(0px);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.08);
            filter: blur(2px);
          }
        }

        /* Top overlay: ensures text readability over the orb glow */
        .hero-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          z-index: 2;
          background: linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.45) 0%,
            rgba(10, 10, 10, 0.3) 30%,
            rgba(10, 10, 10, 0.45) 60%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* Bottom fade to seamlessly blend into the next section */
        .hero-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 25%;
          z-index: 2;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(10, 10, 10, 0.5) 50%,
            #0A0A0A 100%
          );
          pointer-events: none;
        }

        /* ===== LAYOUT ===== */
        .hero-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding-top: clamp(96px, 12vh, 150px);
          padding-bottom: 40px;
        }

        .hero-upper {
          flex: 0 0 auto;
          text-align: center;
        }

        /* ===== FADE ANIMATIONS ===== */
        .hero-fade-item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
        }
        .hero-fade-item.hero-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== BOOK A CALL BUTTON ===== */
        .hero-btn-book {
          padding: 13px 28px;
          font-size: 0.95rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(22, 163, 74, 0.5) 100%);
          color: #ffffff;
          border: 1px solid var(--green-border);
          box-shadow: 0 0 30px -8px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.3s var(--ease);
        }
        .hero-btn-book:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.45) 0%, rgba(22, 163, 74, 0.65) 100%);
          transform: translateY(-2px);
          box-shadow: 0 0 40px -4px rgba(34, 197, 94, 0.5), inset 0 1px 0 rgba(255,255,255,0.12);
        }

        /* Our Services — white text */
        .hero-btn-services {
          color: #ffffff !important;
        }
        .hero-btn-services:hover {
          color: var(--green-bright) !important;
        }


        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .hero-layout {
            padding-top: clamp(70px, 10vh, 100px);
          }
          .hero-bg-image {
            background-position: center center;
            transform: scaleX(1.12);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
          .hero-orb-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
