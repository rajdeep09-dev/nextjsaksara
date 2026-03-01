'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ParallaxImage({ src, alt, fill = false, ...props }) {
  const [isMobile, setIsMobile] = useState(false);
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    if (isMobile) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const diff = elementCenter - viewportCenter;
      setOffset(diff * 0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const style = isMobile ? {} : { transform: `translateY(${offset}px)`, transition: 'transform 0.1s ease-out' };

  if (fill) {
    return (
      <div ref={ref} style={style}>
        <Image src={src} alt={alt} fill {...props} />
      </div>
    );
  }

  return (
    <div ref={ref} style={style}>
      <Image src={src} alt={alt} {...props} />
    </div>
  );
}
