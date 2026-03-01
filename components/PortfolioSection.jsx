'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from './icons'

const portfolioData = [
  {
    title: 'Blossom E-Commerce Website',
    category: 'WEB DEVELOPMENT',
    desc: 'We developed a fully responsive and SEO-optimized e-commerce platform for Blossom Essentials, designed to offer a smooth and intuitive shopping experience with strong branding and modern UI.',
    tags: ['Web Design', 'Development', 'Art Direction'],
    image: '/W1.svg',
    link: '#'
  },
  {
    title: 'Aurora Branding Identity',
    category: 'BRANDING',
    desc: 'Complete brand system for Aurora — logo family, color systems, and visual language that elevated their presence across digital and print platforms.',
    tags: ['Identity', 'Design', 'Strategy'],
    image: '/W2.svg',
    link: '#'
  },
  {
    title: 'Nexa Digital Campaign',
    category: 'DIGITAL MARKETING',
    desc: 'Data-driven digital marketing campaign combining social, performance ads and creative content that improved visibility and conversions for Nexa.',
    tags: ['Marketing', 'Ads', 'Content'],
    image: '/Nexa Digital Campaign.svg',
    link: '#'
  },
  {
    title: 'Studio Showreel & Production',
    category: 'VIDEO PRODUCTION',
    desc: 'Video production & showreel for a creative studio — story-driven short-form content that boosted engagement across socials.',
    tags: ['Video', 'Production', 'Creative'],
    image: '/Aurora Branding Identity.svg',
    link: '#'
  }
]

export default function PortfolioSection() {
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [scrollY, setScrollY] = useState(0)

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
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) return // No parallax on mobile
    
    const handleScroll = () => {
      if (!containerRef.current) return
      // Calculate scroll position relative to section
      const rect = containerRef.current.getBoundingClientRect()
      const offset = (window.innerHeight / 2) - (rect.top + rect.height / 2)
      setScrollY(offset)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="work" ref={containerRef} className="relative w-full py-[clamp(120px,15vw,200px)] scroll-mt-[100px]">
      
      {/* Section Header */}
      <div className={`max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 mb-16 lg:mb-24 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center mb-4">
          <div className="w-[40px] h-px bg-[#5E17EB] mr-3 inline-block" />
          <span className="font-inter font-medium text-[0.8rem] text-[#5E17EB] uppercase tracking-[0.15em]">Selected Work</span>
        </div>
        <h2 className="font-syne font-bold text-[clamp(2.5rem,7vw,5rem)] text-white tracking-[-0.02em] leading-none flex items-end gap-4">
          <span>Our Work</span>
          <span className="font-inter font-light text-[1rem] text-white/50 mb-2 whitespace-nowrap hidden sm:inline-block">({portfolioData.length.toString().padStart(2, '0')} Projects)</span>
        </h2>
      </div>

      {/* Projects List */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-[clamp(80px,12vw,150px)]">
        {portfolioData.map((project, index) => {
          const isEven = index % 2 !== 0
          
          return (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-[${isEven ? '1fr_1.3fr' : '1.3fr_1fr'}] gap-12 lg:gap-16 items-center group`}
            >
              
              {/* Image Side */}
              <div 
                className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]`}
                style={{ 
                  clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div 
                  className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-100 ease-out"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-all duration-[800ms] ease-out saturate-[0.8] brightness-[0.9] group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05000A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out z-10 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-out flex items-center gap-2">
                      <span className="font-inter font-medium text-[0.9rem] text-white">View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div 
                className={`flex flex-col items-start order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'} opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                style={{ 
                  animation: inView ? `fadeUp 0.8s ease forwards ${0.3 + index * 0.2}s` : 'none',
                }}
              >
                <div className="font-inter font-light text-[0.85rem] text-white/20 mb-4 tracking-widest">
                  {(index + 1).toString().padStart(2, '0')} —
                </div>
                
                <div className="font-inter font-medium text-[0.8rem] text-[#5E17EB] uppercase tracking-[0.15em] mb-4">
                  {project.category}
                </div>
                
                <h3 className="font-syne font-bold text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.1] tracking-[-0.02em]">
                  {project.title}
                </h3>
                
                <p className="font-inter font-light text-[1rem] text-white/60 leading-[1.75] mt-5 max-w-[400px]">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="bg-white/[0.04] border border-white/[0.08] rounded-full px-3.5 py-1.5 font-inter font-normal text-[0.75rem] text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#" className="group/link mt-8 flex items-center gap-2 font-inter font-medium text-[0.9rem] text-[#5E17EB] transition-colors duration-300 hover:text-white">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
              
            </div>
          )
        })}
      </div>

    </section>
  )
}
