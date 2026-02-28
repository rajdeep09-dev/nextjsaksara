'use client';

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function TestimonialsSection() {
  return (
    <div
      style={{
        paddingTop: 'clamp(80px, 12vw, 160px)',
        paddingBottom: 'clamp(80px, 12vw, 160px)',
      }}
      id="testimonials"
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            color: '#5E17EB',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8rem',
            fontWeight: '500',
            letterSpacing: '0.15em',
            marginBottom: '16px',
          }}
        >
          Our Testimonials
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: 'white',
          }}
        >
          Trusted By Clients Worldwide
        </h2>
      </div>

      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <AnimateOnScroll animation="scale-in">
          <div
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '24px',
              padding: 'clamp(40px, 8vw, 64px) clamp(24px, 6vw, 48px)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '5rem',
                color: '#5E17EB',
                opacity: '0.2',
                lineHeight: '1',
                marginBottom: '-20px',
                fontFamily: 'serif',
              }}
            >
              &quot;
            </div>
            <blockquote
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                fontWeight: '600',
                color: 'white',
                fontStyle: 'italic',
                lineHeight: '1.6',
              }}
            >
              Akarsa didn&apos;t just make an ad, they created motion. They captured the joy, the sweat, the laughter, and the teamwork that lives inside our stores. From script to screen, everything felt natural and real. The video still gives us goosebumps. It&apos;s not marketing, it&apos;s storytelling with soul.
            </blockquote>
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                fontWeight: '500',
                color: 'white',
                marginTop: '32px',
              }}
            >
              Decathlon Indore
            </div>
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.35)',
                marginTop: '4px',
              }}
            >
              Indore
            </div>
            <div
              style={{
                color: '#5E17EB',
                fontSize: '1rem',
                letterSpacing: '4px',
                marginTop: '16px',
              }}
            >
              ★★★★★
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
