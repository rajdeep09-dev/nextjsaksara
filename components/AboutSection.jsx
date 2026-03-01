'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const CountUpNumber = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <>{count}</>;
};

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  const stats = [
    { num: 12, label: 'Years Experience' },
    { num: 150, label: 'Global Clients' },
    { num: 45, label: 'Awards Won' },
    { num: 200, label: 'Projects Completed' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="relative max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(80px,12vw,160px)]" ref={ref}>
      
      {/* Top Area */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[80px] items-end">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[40px] h-[1px] bg-[#5E17EB]" />
            <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]">ABOUT US</span>
          </div>

          <h2 className="font-syne text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.02em]">
            <span className="block" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease 0s, transform 0.8s ease 0s'
            }}>We don't follow</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F]" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
            }}>trends, we set</span>
            <span className="block text-transparent" style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.8)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
            }}>the standard.</span>
          </h2>

          <p className="font-inter text-[1rem] font-light text-white/50 leading-[1.8] mt-[32px] max-w-[500px]" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s'
          }}>
            Akarsa is a premium digital agency that partners with ambitious brands to create unforgettable online experiences. We believe in the power of bold design and rigorous strategy to transform businesses.
          </p>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="w-full aspect-[4/5] rounded-[24px] border border-white/[0.06] overflow-hidden relative"
               style={{
                 clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
                 transition: 'clip-path 1s cubic-bezier(0.76, 0, 0.24, 1) 0.4s'
               }}>
            <Image 
              src="/public/G7.jpg"
              alt="About Akarsa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Floating Glass Card */}
          <div className="absolute bottom-[-30px] left-[16px] md:left-[-40px] bg-[#05000A]/70 backdrop-blur-[20px] border border-white/[0.08] rounded-[20px] p-[24px_28px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-10"
               style={{
                 opacity: isVisible ? 1 : 0,
                 transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                 transition: 'opacity 0.6s ease 1s, transform 0.6s ease 1s'
               }}>
            <div className="font-syne text-[2.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F] leading-none">
              <CountUpNumber end={50} isVisible={isVisible} />+
            </div>
            <div className="font-inter text-[0.8rem] font-medium text-white/60 mt-[4px] uppercase tracking-wider">
              Team Members
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Stats Bar */}
      <div className="mt-[80px] grid grid-cols-2 md:grid-cols-4 gap-0 border-t md:border-t-0 border-white/[0.06]">
        {stats.map((stat, i) => (
          <div key={i} 
               className="p-[40px_32px] border-b md:border-b-0 md:border-l border-white/[0.06] flex flex-col items-center md:items-start group hover:bg-white/[0.02] transition-colors duration-300 first:border-l-0"
               style={{
                 opacity: isVisible ? 1 : 0,
                 transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                 transition: `opacity 0.6s ease ${0.8 + (i * 0.15)}s, transform 0.6s ease ${0.8 + (i * 0.15)}s`
               }}>
            <div className="font-syne text-[clamp(2rem,4vw,3rem)] font-extrabold text-white group-hover:text-[#5E17EB] transition-colors duration-300">
              <CountUpNumber end={stat.num} isVisible={isVisible} />
              {stat.num > 100 ? '+' : ''}
            </div>
            <div className="font-inter text-[0.85rem] font-light text-white/40 mt-[8px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
