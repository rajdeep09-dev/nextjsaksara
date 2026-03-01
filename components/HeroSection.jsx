'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineWords1 = ["WE", "CRAFT"];
  const headlineWords2 = ["BOLD"];
  const headlineWords3 = ["EXPERIENCES"];

  return (
    <div className="relative w-full h-[100vh] min-h-[100svh] flex overflow-hidden pt-[160px] pb-[100px] px-[clamp(24px,5vw,80px)]">
      {/* Grain texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
        }}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative h-full">
        {/* Left Column */}
        <div className="flex flex-col justify-start items-start text-left max-w-[700px] h-full z-20">
          
          <div className="flex items-center mb-8 animate-[fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
            <span className="inline-block w-[40px] h-[1px] bg-[#5E17EB] mr-3" />
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-[0.75rem] font-inter uppercase tracking-widest text-white/80">Premium Digital Agency</span>
            </div>
          </div>

          <h1 className="heading-massive flex flex-col items-start w-full relative">
            <div className="flex gap-4 overflow-hidden">
              {headlineWords1.map((word, i) => (
                <span key={i} className="inline-block text-white"
                  style={{
                    animation: `fade-up 0.8s cubic-bezier(0.76, 0, 0.24, 1) ${0.6 + (i * 0.1)}s both`,
                    transformOrigin: 'left bottom'
                  }}>
                  {word}
                </span>
              ))}
            </div>
            <div className="flex gap-4 overflow-hidden mt-[-10px]">
              {headlineWords2.map((word, i) => (
                <span key={i} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F]"
                  style={{
                    animation: `fade-up 0.8s cubic-bezier(0.76, 0, 0.24, 1) ${0.8 + (i * 0.1)}s both`,
                    transformOrigin: 'left bottom'
                  }}>
                  {word}
                </span>
              ))}
            </div>
            <div className="flex gap-4 overflow-hidden mt-[-10px]">
              {headlineWords3.map((word, i) => (
                <span key={i} className="inline-block text-transparent"
                  style={{
                    WebkitTextStroke: '1.5px white',
                    animation: `fade-up 0.8s cubic-bezier(0.76, 0, 0.24, 1) ${0.9 + (i * 0.1)}s both`,
                    transformOrigin: 'left bottom'
                  }}>
                  {word}
                </span>
              ))}
            </div>
          </h1>

          <p className="mt-8 font-inter font-light text-[clamp(1rem,2vw,1.15rem)] text-white/50 leading-[1.8] max-w-[480px] animate-[fade-up_0.6s_ease_1.2s_both]">
            We build $100K digital experiences. Editorial typography, brutalist layouts, and magnetic interactions that make people stop scrolling.
          </p>

          <div className="mt-12 flex items-center justify-start gap-6 animate-[fade-up_0.5s_ease_1.4s_both]">
            <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5E17EB] to-[#7B2FFF] text-white font-inter font-semibold text-[1rem] shadow-[0_4px_20px_rgba(94,23,235,0.4)] hover:shadow-[0_8px_30px_rgba(94,23,235,0.6)] hover:-translate-y-1 transition-all duration-300">
              Start a Project
            </a>
            <a href="#work" className="text-white font-inter font-medium text-[0.95rem] flex items-center gap-2 hover:gap-4 transition-all duration-300 group">
              View Our Work <span className="text-[#5E17EB] group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="mt-auto pt-16 flex flex-row gap-12 animate-[fade-up_0.5s_ease_1.6s_both]">
            <div className="flex flex-col border-r border-white/10 pr-12">
              <span className="font-syne font-extrabold text-3xl text-white">50+</span>
              <span className="font-inter text-xs text-white/40 mt-1 uppercase tracking-wider">Projects Delivered</span>
            </div>
            <div className="flex flex-col border-r border-white/10 pr-12">
              <span className="font-syne font-extrabold text-3xl text-white">100%</span>
              <span className="font-inter text-xs text-white/40 mt-1 uppercase tracking-wider">Client Satisfaction</span>
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-syne font-extrabold text-3xl text-white">Awwwards</span>
              <span className="font-inter text-xs text-white/40 mt-1 uppercase tracking-wider">Winning Quality</span>
            </div>
          </div>
        </div>

        {/* Right Column / Mobile Background */}
        <div className="absolute inset-0 md:relative md:flex md:justify-end md:items-stretch overflow-hidden z-0 md:z-10 rounded-l-[24px]">
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-[#05000A]/85 md:hidden z-10" />
          
          <div 
            className="w-full h-full relative"
            style={{
              clipPath: 'inset(0 0 0 0)',
              animation: 'clip-reveal 1.2s cubic-bezier(0.76, 0, 0.24, 1) 1s both',
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes clip-reveal {
                0% { clip-path: inset(0 100% 0 0); }
                100% { clip-path: inset(0 0 0 0); }
              }
            `}} />
            <Image 
              src="/public/G4.jpg" 
              alt="Hero Visual"
              fill
              priority
              className="object-cover md:rounded-l-[24px]"
            />
            {/* Gradient overlay for text blending on desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05000A] via-[#05000A]/50 to-transparent hidden md:block" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fade-up_0.5s_ease_2.0s_both] z-20">
        <span className="font-inter text-[0.7rem] text-white/30 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-white/30 to-transparent animate-[bounce-down_2s_infinite]" />
      </div>
    </div>
  );
}
