'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      title: "Digital Strategy",
      desc: "We dive deep into your brand, market, and audience. This isn't just about pretty pixels; it's about business transformation and outmaneuvering your competition.",
      tags: ["Brand Positioning", "Market Research", "Digital Transformation"],
      img: "/G3.jpg"
    },
    {
      title: "Branding & Identity",
      desc: "We forge brutal, unapologetic brand identities. We craft visual languages that demand attention and speak directly to your audience's core desires.",
      tags: ["Logo Design", "Visual Language", "Brand Guidelines"],
      img: "/G4.jpg"
    },
    {
      title: "Web Experience",
      desc: "Immersive, high-performance web experiences. We combine editorial typography with butter-smooth WebGL animations to create sites that feel alive.",
      tags: ["UI/UX Design", "Frontend Dev", "Creative Coding"],
      img: "/G5.jpg"
    },
    {
      title: "Content Production",
      desc: "High-end 3D, motion graphics, and video production. We create thumb-stopping content that elevates your brand narrative across every touchpoint.",
      tags: ["Motion Graphics", "3D Animation", "Video Editing"],
      img: "/G6.jpg"
    }
  ];

  return (
    <div className="glass-whisper rounded-[32px] mx-[clamp(16px,3vw,40px)] mt-[clamp(40px,8vw,80px)] pt-[clamp(48px,8vw,80px)] pb-[clamp(48px,8vw,80px)] relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-[-20px] right-[-5%] font-syne text-[clamp(6rem,20vw,15rem)] font-extrabold text-transparent z-0 pointer-events-none whitespace-nowrap overflow-hidden select-none"
           style={{ WebkitTextStroke: '1px rgba(255,255,255,0.02)' }}>
        WHAT WE DO
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-[1px] bg-[#5E17EB]" style={{
              width: 0,
              animation: 'accent-line-appear 0.6s cubic-bezier(0.76, 0, 0.24, 1) both'
            }} />
            <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]" style={{
              animation: 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both'
            }}>WHAT WE DO</span>
          </div>
          <h2 className="heading-section mt-4 text-white" style={{
            animation: 'fade-up 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.3s both'
          }}>Services</h2>
        </div>

        {/* Services List */}
        <div className="mt-[48px] flex flex-col w-full">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            
            return (
              <div 
                key={i}
                className="w-full relative cursor-pointer group transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) border-t border-white/[0.06] last:border-b"
                onMouseEnter={() => !isMobile && setExpandedIndex(i)}
                onMouseLeave={() => !isMobile && setExpandedIndex(null)}
                onClick={() => isMobile && setExpandedIndex(isExpanded ? null : i)}
              >
                {/* Accent Line on hover/active */}
                <div 
                  className="absolute top-[-1px] left-0 w-full h-[3px] bg-gradient-to-r from-[#5E17EB] to-[#FF007F] origin-left transition-transform duration-400 ease-out z-10"
                  style={{ transform: isExpanded ? 'scaleX(1)' : 'scaleX(0)' }}
                />

                {/* Background overlay on active — glass effect */}
                <div 
                  className="absolute inset-0 transition-all duration-400 pointer-events-none rounded-[20px] -m-[16px] md:-m-[24px]"
                  style={{ 
                    opacity: isExpanded ? 1 : 0,
                    background: isExpanded 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
                      : 'transparent',
                    backdropFilter: isExpanded ? 'blur(16px)' : 'blur(0px)',
                    WebkitBackdropFilter: isExpanded ? 'blur(16px)' : 'blur(0px)',
                    border: isExpanded ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    boxShadow: isExpanded ? '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.04)' : 'none'
                  }}
                />

                {/* Collapsed State (Always visible) */}
                <div className="relative flex items-center justify-between py-[40px] z-10">
                  <span className="font-inter text-[0.85rem] font-normal text-white/25 min-w-[50px]">
                    0{i + 1}
                  </span>
                  
                  <h3 
                    className="font-syne text-[clamp(1.5rem,5vw,4rem)] font-extrabold uppercase tracking-[-0.02em] flex-1 transition-all duration-400 ease-out"
                    style={{ 
                      color: isExpanded ? '#FFFFFF' : 'rgba(255,255,255,0.85)',
                      textShadow: isExpanded ? '0 0 30px rgba(94,23,235,0.2)' : 'none'
                    }}
                  >
                    {service.title}
                  </h3>

                  <span 
                    className="font-light text-[1.5rem] transition-all duration-400 ease-out"
                    style={{ 
                      color: isExpanded ? '#5E17EB' : 'rgba(255,255,255,0.2)',
                      transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    →
                  </span>
                </div>

                {/* Expanded Content */}
                <div 
                  className="relative z-10 overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
                  style={{
                    maxHeight: isExpanded ? '600px' : '0',
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-[40px] pb-[32px] md:pb-[40px] md:pl-[50px] ${isExpanded ? 'delay-200' : ''}`}>
                    
                    {/* Left: Text */}
                    <div className="flex flex-col justify-center order-2 md:order-1">
                      <p className="font-inter text-[1rem] font-light text-white/60 leading-[1.75] max-w-[450px]">
                        {service.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="glass-accent px-[16px] py-[6px] rounded-full border border-[#5E17EB]/20 font-inter text-[0.75rem] text-[#5E17EB] backdrop-blur-sm transition-all duration-300 hover:glass-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 md:order-2">
                      <div className="glass-medium p-[6px] rounded-[16px] overflow-hidden relative"
                           style={{
                             clipPath: isExpanded ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                             transition: 'clip-path 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.2s',
                             width: '100%',
                             aspectRatio: '16/10'
                           }}>
                        <div className="relative w-full h-full rounded-[12px] overflow-hidden">
                          <Image 
                            src={service.img} 
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#05000A]/80 to-transparent" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
