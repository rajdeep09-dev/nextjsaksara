'use client';

import React, { useEffect, useState } from 'react';

export default function GradientBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBlobStyle = (blob) => {
    let style = { ...blob };
    if (isMobile) {
      if (style.width && typeof style.width === 'string' && style.width.endsWith('vw')) {
        style.width = `${parseFloat(style.width) * 0.7}vw`;
      }
      if (style.height && typeof style.height === 'string' && style.height.endsWith('vw')) {
        style.height = `${parseFloat(style.height) * 0.7}vw`;
      }
      style.filter = 'blur(70px)';
    }
    return style;
  };

  const allBlobsCss = {
    willChange: 'transform',
    borderRadius: '50%',
    mixBlendMode: 'screen',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '-1',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          ...allBlobsCss,
          ...getBlobStyle({
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            background: 'radial-gradient(circle, #5E17EB 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: '0.5',
            animation: 'blob1 20s ease-in-out infinite alternate',
          }),
        }}
      />
      <div
        style={{
          ...allBlobsCss,
          ...getBlobStyle({
            position: 'absolute',
            top: '-15%',
            right: '-10%',
            width: '55vw',
            height: '55vw',
            background: 'radial-gradient(circle, #FF007F 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: '0.45',
            animation: 'blob2 25s ease-in-out infinite alternate',
          }),
        }}
      />
      <div
        style={{
          ...allBlobsCss,
          ...getBlobStyle({
            position: 'absolute',
            top: '0%',
            right: '5%',
            width: '35vw',
            height: '35vw',
            background: 'radial-gradient(circle, #FF6A3D 0%, transparent 70%)',
            filter: 'blur(90px)',
            opacity: '0.35',
            animation: 'blob3 18s ease-in-out infinite alternate',
          }),
        }}
      />
      <div
        style={{
          ...allBlobsCss,
          ...getBlobStyle({
            position: 'absolute',
            top: '40%',
            left: '30%',
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle, #3A0088 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: '0.3',
            animation: 'blob4 22s ease-in-out infinite alternate',
          }),
        }}
      />
    </div>
  );
}
