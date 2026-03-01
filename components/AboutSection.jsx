'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import CountUpNumber from './CountUpNumber'

export default function AboutSection() {
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
      { threshold: 0.2 }
    )
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) return // No parallax on mobile
    
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const offset = (window.innerHeight / 2) - (rect.top + rect.height / 2)
      setScrollY(offset)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-[clamp(120px,15vw,200px)] pb-[clamp(80px,10vw,120px)] scroll-mt-[100px]">
      
      {/* Top Area: Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-end">
        
        {/* Left Column (Text) */}
        <div className="relative z-10 flex flex-col justify-end h-full">
          <div className="flex items-center mb-6">
            <div className="w-[40px] h-px bg-[#5E17EB] mr-3 inline-block align-middle" />
            <span className="font-inter font-medium text-[0.8rem] text-[#5E17EB] uppercase tracking-[0.15em]">About Us</span>
          </div>

          <h2 className="font-syne font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[1.05] tracking-[-0.03em]">
            <span className="block mb-2">Great Digital</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F] mb-2">Agency For Your</span>
            <span className="block text-stroke-1 text-transparent">Business Solution</span>
          </h2>

          <p className="mt-8 font-inter font-light text-[1rem] leading-[1.8] text-white/60 max-w-[500px]">
            Akarsa is a creative and digital solutions agency that believes in redefining how brands communicate. With a blend of design, strategy, and innovation, we create meaningful experiences that resonate with audiences. Whether it&apos;s branding, digital marketing, or AI-driven creativity, our team delivers tailored solutions that inspire long-term impact.
          </p>
        </div>

        {/* Right Column (Visual) */}
        <div className="relative z-10 w-full lg:pr-10 pb-10">
          <div 
            className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ clipPath: inView ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)' }}
          >
            {/* Parallax Image inside mask */}
            <div 
              className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-100 ease-out"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05000A]/80 z-10" />
              <Image
                src="/akarsa.png"
                alt="Akarsa Creative Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale-[15%] opacity-90"
              />
            </div>
          </div>

          {/* Floating Glass Card */}
          <div 
            className={`absolute bottom-0 left-4 lg:left-[-40px] bg-[#05000A]/70 backdrop-blur-[20px] border border-white/10 rounded-[20px] px-7 py-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 transition-all duration-700 delay-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="font-syne font-extrabold text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-br from-[#5E17EB] to-[#FF007F] leading-none mb-1">
              <CountUpNumber target={100} suffix="+" start={inView} />
            </div>
            <div className="font-inter font-normal text-[0.8rem] text-white/50 tracking-wide uppercase">
              Businesses Empowered
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="mt-20 border border-white/10 rounded-2xl overflow-hidden grid grid-cols-2 lg:grid-cols-4 bg-white/[0.02]">
        
        {/* Stat 1 */}
        <div className={`p-8 lg:px-8 lg:py-10 border-b border-r lg:border-b-0 border-white/10 transition-colors duration-300 hover:bg-white/5 opacity-0 ${inView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-2">
            <CountUpNumber target={100} suffix="+" start={inView} />
          </div>
          <div className="font-inter font-light text-[0.85rem] text-white/50">Businesses Powering Growth</div>
        </div>

        {/* Stat 2 */}
        <div className={`p-8 lg:px-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-white/10 transition-colors duration-300 hover:bg-white/5 opacity-0 ${inView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-2">
            <CountUpNumber target={90} suffix="+" start={inView} />
          </div>
          <div className="font-inter font-light text-[0.85rem] text-white/50">Clients Worldwide</div>
        </div>

        {/* Stat 3 */}
        <div className={`p-8 lg:px-8 lg:py-10 border-r border-white/10 transition-colors duration-300 hover:bg-white/5 opacity-0 ${inView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-2">
            <CountUpNumber target={5} suffix="+" start={inView} />
          </div>
          <div className="font-inter font-light text-[0.85rem] text-white/50">Years Experience</div>
        </div>

        {/* Stat 4 */}
        <div className={`p-8 lg:px-8 lg:py-10 transition-colors duration-300 hover:bg-white/5 opacity-0 ${inView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-2">
            <CountUpNumber target={40} suffix="+" start={inView} />
          </div>
          <div className="font-inter font-light text-[0.85rem] text-white/50">Projects Delivered</div>
        </div>

      </div>

    </section>
  )
}
