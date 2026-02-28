'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function CountUpNumber({ target, duration = 2000, suffix = '', prefix = '' }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuad
            const easedProgress = progress * (2 - progress);
            setCurrentValue(Math.floor(easedProgress * target));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCurrentValue(target);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [target, duration, hasAnimated]);

  return <span ref={elementRef}>{prefix}{currentValue}{suffix}</span>;
}
