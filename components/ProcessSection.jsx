'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { number: '01', title: 'Discovery', desc: 'Deep dive into your brand, market, and audience to uncover core opportunities.' },
    { number: '02', title: 'Strategy', desc: 'Crafting a brutalist, conversion-focused blueprint that breaks category norms.' },
    { number: '03', title: 'Design', desc: 'Creating bold, asymmetric layouts and massive typography that commands respect.' },
    { number: '04', title: 'Launch', desc: 'Deploying high-performance experiences with butter-smooth animations.' }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(80px,12vw,160px)]" ref={ref}>
      
      <div className="mb-16">
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[1px] bg-[#5E17EB]" />
          <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]">HOW WE WORK</span>
        </div>
        <h2 className="heading-section mt-4">Our Process</h2>
      </div>

      <div className="relative mt-24">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5E17EB]/30 to-transparent -z-10" />
        
        {/* Connecting Line (Mobile) */}
        <div className="md:hidden absolute top-0 left-[28px] w-[1px] h-full bg-gradient-to-b from-transparent via-[#5E17EB]/30 to-transparent -z-10" />

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between relative z-10">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="flex flex-row md:flex-col items-start gap-6 group flex-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`
              }}
            >
              <div className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#5E17EB]/10 border border-[#5E17EB]/30 font-syne font-extrabold text-[1.2rem] text-[#5E17EB] group-hover:bg-[#5E17EB]/20 group-hover:shadow-[0_0_20px_rgba(94,23,235,0.4)] transition-all duration-300 shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="font-syne text-[1.3rem] font-bold text-white md:mt-6">{step.title}</h3>
                <p className="font-inter text-[0.9rem] font-light text-white/50 mt-3 max-w-[250px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
