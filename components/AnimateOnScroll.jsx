'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function AnimateOnScroll({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 0.7, 
  threshold = 0.15,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentRef = wrapperRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [threshold]);

  const translateVal = isMobile ? '15px' : '30px';

  const getInitialStyle = () => {
    switch (animation) {
      case 'fade-up': return { opacity: 0, transform: `translateY(${translateVal})` };
      case 'fade-left': return { opacity: 0, transform: `translateX(-${translateVal})` };
      case 'fade-right': return { opacity: 0, transform: `translateX(${translateVal})` };
      case 'scale-in': return { opacity: 0, transform: 'scale(0.9)' };
      case 'clip-up': return { clipPath: 'inset(100% 0 0 0)' };
      case 'glass-appear': return { 
        opacity: 0, 
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        background: 'transparent',
        border: '1px solid transparent',
        transform: 'translateY(20px) scale(0.97)',
        boxShadow: 'none'
      };
      default: return { opacity: 0, transform: `translateY(${translateVal})` };
    }
  };

  const getVisibleStyle = () => {
    switch (animation) {
      case 'fade-up': return { opacity: 1, transform: 'translateY(0)' };
      case 'fade-left': return { opacity: 1, transform: 'translateX(0)' };
      case 'fade-right': return { opacity: 1, transform: 'translateX(0)' };
      case 'scale-in': return { opacity: 1, transform: 'scale(1)' };
      case 'clip-up': return { clipPath: 'inset(0 0 0 0)' };
      case 'glass-appear': return { 
        opacity: 1, 
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        transform: 'translateY(0) scale(1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)'
      };
      default: return { opacity: 1, transform: 'translateY(0)' };
    }
  };

  const style = {
    ...(isVisible ? getVisibleStyle() : getInitialStyle()),
    transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: 'transform, opacity',
  };

  return (
    <div ref={wrapperRef} style={style} className={className}>
      {children}
    </div>
  );
}
