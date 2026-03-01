'use client';

import React, { useEffect } from 'react';

export default function MagneticButtonManager() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only apply on desktop (not touch devices)
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' && 'ontouchstart' in window) ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    if (isTouchDevice()) return;

    const magneticButtons = document.querySelectorAll('.magnetic-button');

    magneticButtons.forEach((button) => {
      let magneticX = 0;
      let magneticY = 0;

      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxDistance = 100;

        if (distance < maxDistance) {
          magneticX = (distanceX / maxDistance) * 15;
          magneticY = (distanceY / maxDistance) * 15;

          button.style.transform = `translate(${magneticX}px, ${magneticY}px)`;
        }
      };

      const handleMouseLeave = () => {
        magneticX = 0;
        magneticY = 0;
        button.style.transform = 'translate(0, 0)';
      };

      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return null;
}
