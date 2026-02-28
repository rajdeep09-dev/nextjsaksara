'use client';

import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isPreloaderExited, setIsPreloaderExited] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderExited(true);
    }, 3500); // Trigger matching preloader exit timing (~3.5s after load)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineText = "Crafting Digital Experiences That Inspire Growth";
  const words = headlineText.split(' ');

  // Wrap "Growth" in gradient word span
  const getGradientWord = (word) => {
    if (word === "Growth") {
      return <span className="gradient-text">{word}</span>;
    }
    return word;
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
        position: 'relative',
      }}
    >
      {/* Eyebrow badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '100px',
          padding: '8px 20px',
          fontFamily: 'var(--font-inter)',
          fontSize: '0.8rem',
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: '#5E17EB',
          marginBottom: '32px',
          opacity: 0,
          transform: 'translateY(30px)',
          animation: 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#5E17EB',
            animation: 'pulseDot 2s ease-in-out infinite',
          }}
        />
        Akarsa Studio
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(8px) translateX(-50%); }
        }
      `}} />

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: '800',
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          lineHeight: '1.0',
          letterSpacing: '-0.04em',
          color: 'white',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              marginRight: index < words.length - 1 ? '0.3em' : '0',
              opacity: isPreloaderExited ? 1 : 0,
              transform: isPreloaderExited ? 'translateY(0) blur(0)' : 'translateY(100%) blur(4px)',
              transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
              transitionDelay: `${index * 0.08}s`,
              willChange: 'transform, opacity, filter',
            }}
          >
            {getGradientWord(word)}
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: '300',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: '580px',
          margin: '24px auto 0',
          lineHeight: '1.8',
          opacity: 0,
          transform: 'translateY(30px)',
          animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.0s forwards',
        }}
      >
        At Akarsa, we blend creativity, technology, and strategy to design powerful digital solutions that inspire growth. From graphic design and branding to web development, digital marketing, and AI-powered collaborations, we help brands evolve, connect, and thrive in today&apos;s fast-changing world.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginTop: '40px',
          flexWrap: 'wrap',
          opacity: 0,
          transform: 'translateY(30px)',
          animation: 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards',
        }}
        className="flex-col md:flex-row w-full md:w-auto"
      >
        <a href="/services" style={{ width: '100%' }}>
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
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(0.97)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
          >
            Explore Services
          </button>
        </a>
        <a href="/work" style={{ width: '100%' }}>
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
            View Portfolios
          </button>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounceDown 2s ease-in-out infinite',
          opacity: scrollY > 100 ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div style={{ height: '20px', width: '1.5px', background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </div>
  );
}
