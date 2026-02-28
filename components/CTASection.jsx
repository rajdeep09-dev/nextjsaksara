'use client';

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function CTASection() {
  const getGradientWord = (word) => {
    if (word === "Remarkable") {
      return <span className="gradient-text">{word}</span>;
    }
    return word;
  };

  const words = "Let’s Build Something Remarkable".split(' ');

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(80px, 12vw, 140px) 32px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <AnimateOnScroll animation="fade-up">
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: '800',
              color: 'white',
              textShadow: '0 0 40px rgba(94,23,235,0.15)',
            }}
          >
            {words.map((word, index) => (
              <span key={index} style={{ display: 'inline-block', marginRight: index < words.length - 1 ? '0.3em' : '0' }}>
                {getGradientWord(word)}
              </span>
            ))}
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-up" delay={0.15}>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.1rem',
              fontWeight: '300',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '16px',
            }}
          >
            Ready to take your brand to the next level? Partner with Akarsa for a future-focused digital journey.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.3}>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              marginTop: '40px',
              flexWrap: 'wrap',
            }}
            className="flex-col md:flex-row"
          >
            <a href="/contact" style={{ width: '100%', maxWidth: 'max-content' }}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #5E17EB, #7B2FFF)',
                  color: 'white',
                  padding: '16px 40px',
                  borderRadius: '100px',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: '500',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 25px rgba(94,23,235,0.35)',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 35px rgba(94,23,235,0.5)';
                  e.currentTarget.style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 25px rgba(94,23,235,0.35)';
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              >
                Contact Us
              </button>
            </a>
            <a href="/contact" style={{ width: '100%', maxWidth: 'max-content' }}>
              <button
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'white',
                  padding: '16px 40px',
                  borderRadius: '100px',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: '400',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                }}
              >
                Request a Proposal
              </button>
            </a>
          </div>
          
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '24px',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#22C55E',
                animation: 'pulseDot 2s ease-in-out infinite',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.8rem',
                fontWeight: '400',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Typically responds within 2 hours
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
