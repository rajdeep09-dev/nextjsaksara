'use client';

import React from 'react';
import Image from 'next/image';
import CountUpNumber from './CountUpNumber';
import AnimateOnScroll from './AnimateOnScroll';

export default function AboutSection() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        paddingTop: 'clamp(80px, 12vw, 160px)',
        paddingBottom: 'clamp(80px, 12vw, 160px)',
      }}
      id="about"
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '24px',
          padding: 'clamp(32px, 5vw, 48px)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          
          <div style={{ order: 2 }} className="md:order-1">
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
              WHO WE ARE
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.1',
                marginBottom: '20px',
              }}
            >
              Great Digital Agency For Your Business Solution
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: '1.75',
              }}
            >
              Akarsa is a creative and digital solutions agency that believes in redefining how brands communicate. With a blend of design, strategy, and innovation, we create meaningful experiences that resonate with audiences. Whether it&apos;s branding, digital marketing, or AI-driven creativity, our team delivers tailored solutions that inspire long-term impact.
            </p>
            
            <div
              style={{
                display: 'flex',
                gap: 'clamp(24px, 4vw, 32px)',
                marginTop: '32px',
                flexWrap: 'wrap',
              }}
            >
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                      fontWeight: '800',
                      color: 'white',
                    }}
                  >
                    <CountUpNumber target={100} suffix="+" />
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      color: 'rgba(255,255,255,0.35)',
                      marginTop: '4px',
                    }}
                  >
                    Businesses Powering Growth
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-up" delay={0.25}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                      fontWeight: '800',
                      color: 'white',
                    }}
                  >
                    <CountUpNumber target={90} suffix="+" />
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      color: 'rgba(255,255,255,0.35)',
                      marginTop: '4px',
                    }}
                  >
                    Clients Worldwide
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
          
          <div style={{ order: 1 }} className="md:order-2">
            <div
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '1/1',
                width: '100%',
              }}
            >
              <div 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'rgba(255,255,255,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Image 
                  src="/akarsa.png" 
                  alt="About Us" 
                  fill 
                  style={{ objectFit: 'contain', padding: '2rem' }} 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
