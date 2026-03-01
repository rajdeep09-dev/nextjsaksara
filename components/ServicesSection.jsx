'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from './icons'

const servicesData = [
  {
    name: 'Graphic Design',
    desc: 'From logos to marketing collateral, we design visual identities that tell your brand’s story with clarity and impact.',
    tags: ['Branding', 'Visual Identity', 'Collateral'],
  },
  {
    name: 'Web Development',
    desc: 'We build responsive, user-friendly, and SEO-optimized websites that enhance user experience and drive conversions.',
    tags: ['React', 'Next.js', 'E-commerce'],
  },
  {
    name: 'Web Maintenance',
    desc: 'Keep your website secure, fast, and up to date with our ongoing maintenance and support services.',
    tags: ['Security', 'Updates', 'Support'],
  },
  {
    name: 'Branding & Strategy',
    desc: 'We cra brand strategies that connect emotionally with your audience and position your business for long-term success.',
    tags: ['Positioning', 'Research', 'Strategy'],
  },
  {
    name: 'Digital Marketing',
    desc: 'Boost your online presence with our data-driven campaigns in SEO, social media, and performance marketing.',
    tags: ['SEO', 'Social Media', 'PPC'],
  },
  {
    name: 'Video Composition',
    desc: 'Engage your audience through story-driven video content that elevates your brand communication.',
    tags: ['Motion Graphics', 'Production', 'Editing'],
  },
  {
    name: 'Creative AI Collaboration',
    desc: 'We integrate AI creativity tools to co-design innovative solutions that push boundaries and spark new possibilities.',
    tags: ['AI Integration', 'Generative Tech', 'Innovation'],
  },
]

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const handleInteraction = (index, type) => {
    if (isMobile) {
      if (type === 'click') {
        setExpandedIndex(expandedIndex === index ? null : index)
      }
    } else {
      if (type === 'enter') setExpandedIndex(index)
      if (type === 'leave') setExpandedIndex(null)
    }
  }

  return (
    <section id="services" ref={containerRef} className="relative w-full py-[clamp(120px,15vw,200px)] scroll-mt-[100px] overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-[-20px] right-[-5%] pointer-events-none z-0 overflow-hidden whitespace-nowrap">
        <span className="font-syne font-extrabold text-[clamp(6rem,20vw,15rem)] text-transparent text-stroke-1 opacity-20">
          SERVICES
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col items-start opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}>
          <div className="flex items-center">
            <div className="w-[40px] h-px bg-[#5E17EB] mr-3 inline-block" />
            <span className="font-inter font-medium text-[0.8rem] text-[#5E17EB] uppercase tracking-[0.15em]">What We Do</span>
          </div>
          <h2 className="font-syne font-bold text-[clamp(2.5rem,7vw,5rem)] text-white mt-4 tracking-[-0.02em]">
            Services
          </h2>
        </div>

        {/* Services List */}
        <div className="mt-12 flex flex-col gap-0">
          {servicesData.map((service, index) => {
            const isExpanded = expandedIndex === index
            
            return (
              <div 
                key={index}
                className={`group relative w-full border-t border-white/5 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${index === servicesData.length - 1 ? 'border-b' : ''} ${isExpanded ? 'bg-white/[0.02]' : ''} opacity-0`}
                style={{ 
                  animation: inView ? `fadeUp 0.6s ease forwards ${index * 0.12}s` : 'none',
                }}
                onMouseEnter={() => handleInteraction(index, 'enter')}
                onMouseLeave={() => handleInteraction(index, 'leave')}
                onClick={() => handleInteraction(index, 'click')}
              >
                
                {/* Accent Line on hover */}
                <div 
                  className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#5E17EB] to-[#FF007F] origin-left transition-transform duration-400 ease-out z-10 ${isExpanded ? 'scale-x-100' : 'scale-x-0'}`}
                />

                {/* Collapsed State (Always visible header) */}
                <div className="flex items-center justify-between py-10 px-0">
                  <div className="font-inter font-normal text-[0.85rem] text-white/25 min-w-[50px]">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className={`flex-1 font-syne font-extrabold text-[clamp(1.5rem,5vw,4rem)] uppercase tracking-[-0.02em] transition-all duration-400 ease-out ${isExpanded ? 'text-white drop-shadow-[0_0_30px_rgba(94,23,235,0.2)]' : 'text-white/85'}`}>
                    {service.name}
                  </h3>
                  <div className={`text-[1.5rem] transition-all duration-400 ease-out ${isExpanded ? 'text-[#5E17EB] rotate-45' : 'text-white/20 rotate-0'}`}>
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>

                {/* Expanded Content */}
                <div 
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ maxHeight: isExpanded ? '400px' : '0' }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pl-[50px] pb-8 lg:pb-10 transition-opacity duration-300 delay-100 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    
                    {/* Left side (Text) */}
                    <div className="flex flex-col justify-start max-w-[450px]">
                      <p className="font-inter font-light text-[1rem] text-white/60 leading-[1.75]">
                        {service.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-5">
                        {service.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="bg-[#5E17EB]/10 border border-[#5E17EB]/20 rounded-full px-4 py-1.5 font-inter font-normal text-[0.75rem] text-[#5E17EB]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side (Image) */}
                    <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5E17EB]/20 to-[#FF007F]/20" />
                      <div className={`w-full h-full flex items-center justify-center text-white/20 font-syne text-xl transition-all duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExpanded ? 'clip-path-full' : 'clip-path-inset-right'}`} style={{ clipPath: isExpanded ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)', transitionDelay: '0.2s' }}>
                         {/* Placeholder for real image */}
                         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm" />
                         <span>{service.name} Image</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
