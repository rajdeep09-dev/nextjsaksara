'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#5E17EB] via-[#FF007F] to-[#FF6A3D] z-[10000]"
      style={{
        width: `${scrollProgress}%`,
        boxShadow: '0 0 8px rgba(94, 23, 235, 0.4), 0 0 16px rgba(255, 0, 127, 0.2)',
        transition: 'width 0.05s linear',
        borderRadius: '0 2px 2px 0',
      }}
    />
  );
}
