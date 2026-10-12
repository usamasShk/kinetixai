import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------
   Reveal — fades/rises content in when it enters the viewport.
   Respects prefers-reduced-motion (renders final state immediately).
   ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = '',
  style = {},
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        '--reveal-y': `${y}px`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------
   SectionHeader — mono eyebrow with index + display heading.
   Title is passed as JSX so green accent spans stay flexible.
   ------------------------------------------------------------------ */
export function SectionHeader({ index, eyebrow, title, description, align = 'left', children }) {
  return (
    <Reveal
      style={{
        marginBottom: '56px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'left',
      }}
    >
      <span className="eyebrow">
        {index && <span style={{ color: 'var(--text-muted)' }}>{index}</span>}
        <span className="eyebrow-dot" />
        <span>{eyebrow}</span>
      </span>

      <h2 className="heading-xl" style={{ maxWidth: '720px' }}>
        {title}
      </h2>

      {description && (
        <p className="body-lg" style={{ maxWidth: '560px' }}>
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
}

/* ------------------------------------------------------------------
   CountUp — animates the numeric part of a stat string ("3+", "100%")
   the first time it scrolls into view.
   ------------------------------------------------------------------ */
export function CountUp({ value, duration = 1300, className = '', style = {} }) {
  const ref = useRef(null);
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const prefix = match ? match[1] : '';
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return undefined;
    }

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(eased * target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
