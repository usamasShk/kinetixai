import React from 'react';

const WHATSAPP_NUM = '923075563077';
const WHATSAPP_MSG = encodeURIComponent("Hi KINETIX AI — I'd like to discuss a project.");

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Contact Widget" style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 99 }}>
      <a
        href={`https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '52px',
          background: '#22C55E',
          borderRadius: '50%',
          color: '#000000',
          textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(34, 197, 94, 0.35)',
          transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.8), 0 0 24px rgba(34, 197, 94, 0.55)';
          e.currentTarget.style.background = '#16A34A';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(34, 197, 94, 0.35)';
          e.currentTarget.style.background = '#22C55E';
        }}
      >
        {/* WhatsApp Official Clean SVG Icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.014 13.212C14.684 13.092 14.444 13.032 14.204 13.392C13.964 13.752 13.274 14.562 13.064 14.802C12.854 15.042 12.644 15.072 12.284 14.892C11.924 14.712 10.764 14.332 9.388 13.102C8.318 12.146 7.594 10.966 7.384 10.606C7.174 10.246 7.362 10.052 7.542 9.873C7.704 9.712 7.902 9.452 8.082 9.242C8.262 9.032 8.322 8.882 8.442 8.642C8.562 8.402 8.502 8.192 8.412 8.012C8.322 7.832 7.602 6.062 7.302 5.342C7.01 4.642 6.714 4.736 6.494 4.726C6.284 4.716 6.044 4.714 5.804 4.714C5.564 4.714 5.174 4.804 4.844 5.164C4.514 5.524 3.584 6.394 3.584 8.164C3.584 9.934 4.874 11.644 5.054 11.884C5.234 12.124 7.594 15.764 11.214 17.324C12.074 17.694 12.746 17.917 13.271 18.084C14.135 18.358 14.919 18.319 15.541 18.226C16.234 18.122 17.672 17.355 17.972 16.515C18.272 15.675 18.272 14.955 18.182 14.805C18.092 14.655 17.832 14.562 17.472 14.382Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.441 17.175L2.059 22.215L7.245 20.852C8.71 21.685 10.308 22.154 12 22.154C17.523 22.154 22 17.677 22 12C22 6.477 17.523 2 12 2ZM12 20.154C10.518 20.154 9.108 19.724 7.904 18.98L7.618 18.804L4.544 19.61L5.364 16.613L5.172 16.307C4.372 15.034 3.923 13.565 3.923 12C3.923 7.546 7.546 3.923 12 3.923C16.454 3.923 20.077 7.546 20.077 12C20.077 16.454 16.454 20.154 12 20.154Z" />
        </svg>
      </a>
    </aside>
  );
}
