'use client';

import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Counter logic
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    // Timer logic for exit sequence
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1.0s after exit starts
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="preloader"
      style={{
        position: 'fixed',
        inset: '0',
        zIndex: '9999',
        background: '#05000A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="preloader-curtain-left"
        style={{
          position: 'absolute',
          top: '0',
          height: '100%',
          width: '50.5%',
          background: '#05000A',
          transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
          left: '0',
          transform: isExiting ? 'translateX(-100%)' : 'translateX(0)',
          transitionDelay: '0.2s',
        }}
      />
      <div
        className="preloader-curtain-right"
        style={{
          position: 'absolute',
          top: '0',
          height: '100%',
          width: '50.5%',
          background: '#05000A',
          transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
          right: '0',
          transform: isExiting ? 'translateX(100%)' : 'translateX(0)',
          transitionDelay: '0.2s',
        }}
      />
      <div
        className="preloader-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? 'scale(1.15)' : 'scale(1)',
          transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: '800',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: '#FFFFFF',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            animation: 'logoFadeIn 0.6s ease-out 0.2s forwards',
            opacity: 0,
            transform: 'scale(0.8)',
          }}
        >
          Akarsa
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes logoFadeIn {
            to { opacity: 1; transform: scale(1); }
          }
        `}} />
        <div
          style={{
            width: '220px',
            height: '2px',
            background: 'rgba(255,255,255,0.06)',
            marginTop: '36px',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #5E17EB, #FF007F, #FF6A3D)',
              borderRadius: '2px',
              boxShadow: '0 0 20px rgba(94,23,235,0.5), 0 0 40px rgba(255,0,127,0.25)',
              animation: 'preloaderFill 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              width: '0%', // Start at 0, filled by animation
            }}
          />
        </div>
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: '300',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.3)',
            marginTop: '24px',
            letterSpacing: '0.25em',
          }}
        >
          {counter.toString().padStart(3, '0')}
        </div>
      </div>
    </div>
  );
}
