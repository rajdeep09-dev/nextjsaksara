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
    <div className="services-section-container glass-whisper">
      
      {/* Background Watermark */}
      <div className="services-watermark">
        WHAT WE DO
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="services-header">
          <div className="flex items-center gap-3">
            <div className="services-header-line" />
            <span className="services-header-subtitle">WHAT WE DO</span>
          </div>
          <h2 className="heading-section services-header-title">Services</h2>
        </div>

        {/* Services List */}
        <div className="mt-12 flex flex-col w-full">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            const serviceItemClasses = `service-item ${isExpanded ? 'expanded' : ''}`;
            
            return (
              <div 
                key={i}
                className={serviceItemClasses}
                onMouseEnter={() => !isMobile && setExpandedIndex(i)}
                onMouseLeave={() => !isMobile && setExpandedIndex(null)}
                onClick={() => isMobile && setExpandedIndex(isExpanded ? null : i)}
              >
                <div className="service-item-accent-line" />
                <div className="service-item-bg-overlay" />

                {/* Collapsed State (Always visible) */}
                <div className="service-item-collapsed">
                  <span className="service-item-number">
                    0{i + 1}
                  </span>
                  
                  <h3 className="service-item-title">
                    {service.title}
                  </h3>

                  <span className="service-item-arrow">
                    →
                  </span>
                </div>

                {/* Expanded Content */}
                <div className="service-item-expanded-content">
                  <div className={`service-item-expanded-grid ${isExpanded ? 'delay-200' : ''}`}>
                    
                    {/* Left: Text */}
                    <div className="flex flex-col justify-center order-2 md:order-1">
                      <p className="service-item-desc">
                        {service.desc}
                      </p>
                      <div className="service-item-tags">
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="tag glass-accent">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 md:order-2">
                      <div className="service-item-image-container glass-medium">
                        <div className="service-item-image">
                          <Image 
                            src={service.img} 
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="service-item-image-gradient" />
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
