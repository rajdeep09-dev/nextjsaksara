'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProjectCard = ({ project, index, isMobile }) => {
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

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-center w-full group ${
        !isEven && !isMobile ? 'md:grid-cols-[1fr_1.3fr]' : ''
      }`}
    >
      {/* Image Side */}
      <div 
        className={`glass-medium p-[8px] rounded-[24px] overflow-hidden ${
          !isEven && !isMobile ? 'md:order-2' : 'md:order-1'
        } order-1`}
        style={{
          clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
          transition: 'clip-path 1s cubic-bezier(0.76, 0, 0.24, 1)'
        }}
      >
        <div 
          className="relative w-full aspect-[16/10] overflow-hidden rounded-[18px]"
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover saturate-80 opacity-80 group-hover:saturate-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          
          {/* Overlay on Hover - Glass effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
            background: 'linear-gradient(135deg, rgba(5,0,10,0.5) 0%, rgba(94,23,235,0.15) 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }} />
          <div className="absolute bottom-6 left-6 glass-strong rounded-full px-6 py-3 font-inter text-[0.9rem] font-medium text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-10">
            View Case Study →
          </div>

          {/* Glass reflection */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              animation: 'glass-shimmer 8s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Text Side */}
      <div 
        className={`flex flex-col justify-center items-start ${
          !isEven && !isMobile ? 'md:order-1' : 'md:order-2'
        } order-2`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
        }}
      >
        <div className="font-inter text-[0.85rem] font-light text-white/20 mb-4">0{index + 1} —</div>
        <div className="font-inter text-[0.8rem] font-medium text-[#5E17EB] uppercase tracking-[0.15em] mb-4">{project.category}</div>
        <h3 className="font-syne text-[clamp(1.8rem,4vw,3rem)] font-bold text-white leading-[1.1]">{project.title}</h3>
        <p className="font-inter text-[1rem] font-light text-white/50 leading-[1.75] mt-4 max-w-[400px]">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-white/[0.04] border border-white/[0.08] rounded-full px-[14px] py-[6px] font-inter text-[0.75rem] font-normal text-white/40">
              {tag}
            </span>
          ))}
        </div>

        <a href="#" className="font-inter text-[0.9rem] font-medium text-[#5E17EB] mt-8 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
          View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

export default function PortfolioSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      title: "Nova Identity System",
      category: "Branding",
      desc: "A brutalist visual identity for a disruptive fintech startup looking to redefine the banking experience.",
      tags: ["Identity", "Typography", "Motion"],
      img: "/portfolio/Something Undefined.svg"
    },
    {
      title: "Echo E-Commerce",
      category: "Web Experience",
      desc: "An immersive shopping experience blending 3D product interactions with seamless conversion flows.",
      tags: ["WebGL", "Next.js", "UI/UX"],
      img: "/portfolio/Creative AI Collaboration.svg"
    },
    {
      title: "Neon Campaign",
      category: "Digital Marketing",
      desc: "A multi-channel digital campaign that generated $2M in revenue within the first 30 days of launch.",
      tags: ["Strategy", "Ads", "Social"],
      img: "/portfolio/Digital Marketing.svg"
    }
  ];

  return (
    <div className="w-full bg-[#05000A] py-[clamp(80px,12vw,160px)]">
      
      {/* Header */}
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] mb-16">
        <div className="flex items-center gap-3">
          <div className="h-[1px] bg-[#5E17EB]" style={{
            width: 0,
            animation: 'accent-line-appear 0.6s cubic-bezier(0.76, 0, 0.24, 1) both'
          }} />
          <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]" style={{
            animation: 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both'
          }}>SELECTED WORK</span>
        </div>
        <h2 className="heading-section mt-4 text-white" style={{
          animation: 'fade-up 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.3s both'
        }}>Our Work</h2>
        <div className="font-inter text-[1rem] font-light text-white/40 mt-2">
          ( {projects.length < 10 ? '0' : ''}{projects.length} Projects )
        </div>
      </div>

      {/* Projects Container */}
      <div className="flex flex-col gap-[clamp(40px,8vw,100px)] max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)]">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} isMobile={isMobile} />
        ))}
      </div>

    </div>
  );
}
