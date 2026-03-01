'use client';

import React, { useEffect, useState } from 'react';

export default function BigStatementSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.3 });

    const el = document.getElementById('big-statement-content');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center py-[clamp(80px,15vw,200px)] px-[clamp(24px,5vw,80px)] max-w-[1000px] mx-auto text-center overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(94,23,235,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Quotes */}
      <div className="absolute top-[10%] left-[10%] text-[#5E17EB] opacity-[0.08] font-syne text-[8rem] leading-none select-none">"</div>
      <div className="absolute bottom-[10%] right-[10%] text-[#FF007F] opacity-[0.08] font-syne text-[8rem] leading-none select-none rotate-180">"</div>

      <div id="big-statement-content" className="relative z-10 font-syne text-[clamp(2rem,5vw,4.5rem)] font-bold text-white leading-[1.15]">
        <style dangerouslySetInnerHTML={{__html: `
          .clip-reveal-text {
            clip-path: inset(0 100% 0 0);
            transition: clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1);
          }
          .clip-reveal-text.visible {
            clip-path: inset(0 0 0 0);
          }
        `}} />
        
        <div className={`clip-reveal-text ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0s' }}>
          We don't build websites.
        </div>
        <div className={`clip-reveal-text ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          We build digital <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F]">experiences</span>
        </div>
        <div className={`clip-reveal-text ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          that demand attention.
        </div>
      </div>
    </div>
  );
}
