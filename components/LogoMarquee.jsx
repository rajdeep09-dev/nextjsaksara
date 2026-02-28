'use client';

import React from 'react';
import Image from 'next/image';

export default function LogoMarquee() {
  const logos = [
    { src: '/testimonials/adidas.png', alt: 'Adidas' },
    { src: '/testimonials/starbucks.png', alt: 'Starbucks' },
    { src: '/testimonials/decathlon.png', alt: 'Decathlon' },
    // Repeat to make marquee longer
    { src: '/testimonials/adidas.png', alt: 'Adidas' },
    { src: '/testimonials/starbucks.png', alt: 'Starbucks' },
    { src: '/testimonials/decathlon.png', alt: 'Decathlon' },
    { src: '/testimonials/adidas.png', alt: 'Adidas' },
    { src: '/testimonials/starbucks.png', alt: 'Starbucks' },
    { src: '/testimonials/decathlon.png', alt: 'Decathlon' },
  ];

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: '40px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.75rem',
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.25)',
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        Trusted By
      </div>
      <div
        style={{
          display: 'flex',
          width: '200%',
          animation: 'marquee 35s linear infinite',
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        <div style={{ display: 'flex', width: '50%', justifyContent: 'space-around', alignItems: 'center' }}>
          {logos.map((logo, index) => (
            <div
              key={index}
              style={{
                opacity: 0.35,
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
                padding: '0 32px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 0.8;
                e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0.35;
                e.currentTarget.style.filter = 'grayscale(100%)';
              }}
            >
              <Image src={logo.src} alt={logo.alt} width={80} height={80} loading="lazy" style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', width: '50%', justifyContent: 'space-around', alignItems: 'center' }}>
          {logos.map((logo, index) => (
            <div
              key={index + 'copy'}
              style={{
                opacity: 0.35,
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
                padding: '0 32px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 0.8;
                e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0.35;
                e.currentTarget.style.filter = 'grayscale(100%)';
              }}
            >
              <Image src={logo.src} alt={logo.alt} width={80} height={80} loading="lazy" style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
