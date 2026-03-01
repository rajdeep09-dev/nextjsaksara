'use client';

import React from 'react';
import Link from 'next/link';

export default function MobileMenu({ isOpen, setIsOpen, links, handleSmoothScroll }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'var(--bg-base)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
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
          <Link
            key={link.id}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${0.2 + i * 0.1}s, transform 0.4s ease ${0.2 + i * 0.1}s`,
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Email at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          textAlign: 'center',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.4s ease 0.8s, transform 0.4s ease 0.8s`,
        }}
      >
        <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          hello@akarsa.com
        </p>
      </div>
    </div>
  );
}
