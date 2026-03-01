'use client';

import React from 'react';

export default function MobileMenu({ isOpen, setIsOpen, links, handleSmoothScroll }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(5, 0, 10, 0.95)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '0 24px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'center' }}>
        {links.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              handleSmoothScroll(e, link.id);
            }}
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'white',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${0.2 + i * 0.1}s, transform 0.4s ease ${0.2 + i * 0.1}s`,
            }}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Socials at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          display: 'flex',
          gap: '24px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.4s ease 0.8s, transform 0.4s ease 0.8s`,
        }}
      >
        <span style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>IG</span>
        <span style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>TW</span>
        <span style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>LI</span>
      </div>
    </div>
  );
}
