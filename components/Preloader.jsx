'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#05000A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
        transform: progress === 100 ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', fontWeight: 800, color: 'white', letterSpacing: '0.1em', marginBottom: '40px' }}>
        AKARSA
      </div>
      <div style={{ width: '200px', height: '2px', backgroundColor: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #5E17EB, #FF007F)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>
      <div style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.5)', marginTop: '20px', fontSize: '0.9rem' }}>
        {progress}%
      </div>
    </div>
  );
}
