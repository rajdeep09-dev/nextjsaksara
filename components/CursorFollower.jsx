'use client';

import React, { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device is touch based
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Global listener for interactive elements
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? '40px' : '8px',
        height: isHovering ? '40px' : '8px',
        backgroundColor: isHovering ? 'rgba(94, 23, 235, 0.2)' : 'white',
        border: isHovering ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: `translate(${position.x - (isHovering ? 20 : 4)}px, ${position.y - (isHovering ? 20 : 4)}px)`,
        transition: 'width 0.3s, height 0.3s, background-color 0.3s, border 0.3s, transform 0.15s linear',
        zIndex: 9998,
        mixBlendMode: 'difference'
      }}
    />
  );
}
