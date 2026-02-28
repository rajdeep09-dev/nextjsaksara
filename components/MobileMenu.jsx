'use client';

import React from 'react';
import Link from 'next/link';

export default function MobileMenu({ isOpen, setIsOpen, links }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: '0',
        background: 'rgba(5, 0, 10, 0.92)',
        backdropFilter: 'blur(30px)',
        zIndex: '999',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mobileLinkFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      {links.map((link, i) => (
        <Link 
          key={link.name} 
          href={link.href}
          onClick={() => setIsOpen(false)}
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: '700',
            color: 'white',
            textAlign: 'center',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: `mobileLinkFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s forwards`
          }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
