'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const headlineWords = ["Let's", "Create", "Something", "Extraordinary"];

  return (
    <div className="relative w-full py-[clamp(100px,15vw,200px)] px-[clamp(24px,5vw,80px)] text-center overflow-hidden bg-[#05000A]" ref={ref}>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(94,23,235,0.15)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Brackets */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 font-syne text-[10rem] text-white/[0.03] select-none pointer-events-none z-0">
        [
      </div>
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 font-syne text-[10rem] text-white/[0.03] select-none pointer-events-none z-0">
        ]
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center">
        
        <div className="font-inter text-[1rem] font-normal text-[#5E17EB] uppercase tracking-[0.2em] mb-6">
          Ready to start?
        </div>

        <h2 className="font-syne text-[clamp(3rem,8vw,7rem)] font-extrabold text-white leading-none tracking-[-0.04em] flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2">
          {headlineWords.map((word, i) => (
            <span 
              key={i}
              className={`inline-block ${word === 'Extraordinary' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F]' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(15deg)',
                transition: `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p className="font-inter text-[clamp(1rem,2vw,1.2rem)] font-light text-white/50 mt-6 max-w-[500px]">
          We partner with visionary brands to create digital experiences that set the benchmark.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="magnetic-button px-10 py-5 rounded-full bg-gradient-to-r from-[#5E17EB] to-[#7B2FFF] text-white font-inter font-semibold text-[1.1rem] shadow-[0_4px_20px_rgba(94,23,235,0.4)] hover:shadow-[0_8px_30px_rgba(94,23,235,0.6)] hover:-translate-y-1 transition-all duration-300">
            Start a Project
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FF00]"></span>
          </div>
          <span className="font-inter text-[0.9rem] font-medium text-white/50">Available for new projects</span>
        </div>

      </div>

    </div>
  );
}
