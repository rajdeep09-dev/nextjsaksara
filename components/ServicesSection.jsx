'use client';

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function ServicesSection() {
  const services = [
    {
      name: 'Graphic Design',
      desc: 'From logos to marketing collateral, we design visual identities that tell your brand’s story with clarity and impact.',
      icon: '🎨',
    },
    {
      name: 'Web Development',
      desc: 'We build responsive, user-friendly, and SEO-optimized websites that enhance user experience and drive conversions.',
      icon: '💻',
    },
    {
      name: 'Web Maintenance',
      desc: 'Keep your website secure, fast, and up to date with our ongoing maintenance and support services.',
      icon: '⚙️',
    },
    {
      name: 'Branding & Strategy',
      desc: 'We cra brand strategies that connect emotionally with your audience and position your business for long-term success.',
      icon: '🚀',
    },
    {
      name: 'Digital Marketing',
      desc: 'Boost your online presence with our data-driven campaigns in SEO, social media, and performance marketing.',
      icon: '📈',
    },
    {
      name: 'Video Composition',
      desc: 'Engage your audience through story-driven video content that elevates your brand communication.',
      icon: '🎬',
    },
    {
      name: 'Creative AI Collaboration',
      desc: 'We integrate AI creativity tools to co-design innovative solutions that push boundaries and spark new possibilities.',
      icon: '🤖',
    },
    {
      name: 'Cultural Strategy',
      desc: 'Helping brands align with cultural trends and audience behavior to create authentic, relatable campaigns.',
      icon: '🌍',
    },
    {
      name: 'Something Undefined',
      desc: 'We love challenges. Share your unique idea and let’s create something extraordinary together.',
      icon: '✨',
    }
  ];

  return (
    <div
      style={{
        paddingTop: 'clamp(80px, 12vw, 160px)',
        paddingBottom: 'clamp(80px, 12vw, 160px)',
      }}
      id="services"
    >
      <div style={{ textAlign: 'center' }}>
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
          WHAT WE DO
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '48px',
          }}
        >
          End-to-End Digital Solutions<br className="hidden md:block"/> For Modern Businesses
        </h2>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.15}>
            <div
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '40px 32px 40px 40px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
                const bar = e.currentTarget.querySelector('.left-accent-bar');
                if (bar) {
                  bar.style.width = '4px';
                  bar.style.boxShadow = '0 0 15px rgba(94,23,235,0.4), 0 0 30px rgba(94,23,235,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                const bar = e.currentTarget.querySelector('.left-accent-bar');
                if (bar) {
                  bar.style.width = '3px';
                  bar.style.boxShadow = 'none';
                }
              }}
            >
              <div
                className="left-accent-bar"
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '10%',
                  height: '80%',
                  width: '3px',
                  background: 'linear-gradient(180deg, #5E17EB, #FF007F)',
                  borderRadius: '0 3px 3px 0',
                  transition: 'all 0.3s ease',
                }}
              />
              <span style={{ fontSize: '2.5rem', marginBottom: '16px', display: 'block' }}>
                {service.icon}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                {service.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.9rem',
                  fontWeight: '300',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: '1.7',
                }}
              >
                {service.desc}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
