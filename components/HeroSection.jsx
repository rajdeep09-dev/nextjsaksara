'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from './icons'
import { usePreloader } from './context/PreloaderContext'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { isPreloaderDone } = usePreloader()

  useEffect(() => {
    if (isPreloaderDone) {
      setMounted(true)
    }
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isPreloaderDone])

  return (
    <section id="hero" className="relative min-h-[100vh] min-h-[100svh] w-full flex overflow-hidden lg:grid lg:grid-cols-[1.1fr_1fr] pt-[160px] pb-[100px] px-6 md:px-12 lg:px-20">
      
      {/* Texture Layer */}
      <div className="hero-grain" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] h-px bg-[#5E17EB]/10 rotate-12 origin-left transition-transform duration-100 ease-out"
          style={{ transform: `rotate(12deg) translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[120%] h-px bg-[#FF007F]/10 -rotate-12 origin-right transition-transform duration-100 ease-out"
          style={{ transform: `rotate(-12deg) translateY(${-scrollY * 0.15}px)` }}
        />
      </div>

      {/* Left Content (Text) */}
      <div className="relative z-10 flex flex-col items-start justify-center max-w-[700px]">
        
        {/* Eyebrow */}
        <div className={`flex items-center mb-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className={`h-px bg-[#5E17EB] mr-3 inline-block align-middle transition-all duration-800 delay-300 ${mounted ? 'w10' : 'w-0'}`} style={{ width: mounted ? '40px' : '0px' }} />
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.8rem] font-inter font-medium text-white/80 tracking-wide uppercase">
            Redefining Digital Experiences
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-left font-syne font-extrabold text-white text-[clamp(4rem,10vw,8rem)] leading-[0.95] tracking-[-0.05em] flex flex-col gap-0 relative z-20">
          <span className={`block transition-all duration-800 delay-[400ms] ${mounted ? 'opacity-100 translate-x-0 blur-none' : 'opacity-0 -translate-x-10 blur-sm'}`}>
            We Create
          </span>
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F] transition-all duration-800 delay-[500ms] ${mounted ? 'opacity-100 translate-x-0 blur-none' : 'opacity-0 -translate-x-10 blur-sm'}`}>
            Unforgettable
          </span>
          <span className={`block text-stroke-1 transition-all duration-800 delay-[600ms] ${mounted ? 'opacity-100 translate-x-0 blur-none' : 'opacity-0 -translate-x-10 blur-sm'}`}>
            Digital Brands
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`mt-8 text-left max-w-[480px] font-inter font-light text-[clamp(1rem,2vw,1.15rem)] text-white/50 leading-[1.8] transition-all duration-600 delay-[800ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          A creative and digital solutions agency that believes in redefining how brands communicate. We blend bold design with strategic thinking.
        </p>

        {/* Buttons */}
        <div className={`flex flex-wrap items-start justify-start gap-4 mt-12 transition-all duration-500 delay-[1000ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="group relative overflow-hidden bg-gradient-to-br from-[#5E17EB] to-[#7B2FFF] text-white px-8 py-4 rounded-full font-inter font-medium text-[0.95rem] border-none cursor-pointer transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(94,23,235,0.4)] hover:shadow-[0_6px_30px_rgba(94,23,235,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center gap-2">
            <span className="relative z-10">Start a Project</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
          
          <button className="group relative overflow-hidden bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-inter font-medium text-[0.95rem] cursor-pointer transition-all duration-300 hover:bg-white/5 hover:border-white/40 flex items-center gap-2">
            Our Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-12 flex flex-col items-center opacity-50 transition-all duration-500 delay-[1200ms] ${mounted ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[0.7rem] font-inter uppercase tracking-widest mb-2">Scroll to explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>

        {/* Stats */}
        <div className={`flex flex-row gap-12 mt-16 transition-all duration-500 delay-[1400ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col border-r border-white/10 pr-12">
            <span className="font-syne font-extrabold text-[2rem] text-white">40+</span>
            <span className="font-inter text-[0.75rem] font-normal text-white/50 mt-1 uppercase tracking-wider">Projects Delivered</span>
          </div>
          <div className="flex flex-col border-r border-white/10 pr-12">
            <span className="font-syne font-extrabold text-[2rem] text-white">99%</span>
            <span className="font-inter text-[0.75rem] font-normal text-white/50 mt-1 uppercase tracking-wider">Client Retention</span>
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-extrabold text-[2rem] text-white">5+</span>
            <span className="font-inter text-[0.75rem] font-normal text-white/50 mt-1 uppercase tracking-wider">Years Experience</span>
          </div>
        </div>

      </div>

      {/* Right Content (Visual) */}
      <div className="hidden lg:flex relative h-full w-full justify-end items-center right-0">
        <div 
          className={`absolute top-[10%] bottom-[10%] right-[-20px] w-full max-w-[90%] rounded-l-[40px] overflow-hidden border border-white/10 transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] delay-[800ms] ${mounted ? 'clip-path-full' : 'clip-path-inset-right'}`}
          style={{ clipPath: mounted ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }}
        >
          {/* Parallax Image Wrapper */}
          <div 
            className="w-full h-[120%] relative -top-[10%] transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#05000A] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05000A] z-10" />
            
            <Image
              src="/akarsa.png"
              alt="Akarsa Hero Visual"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 mix-blend-screen grayscale-[20%]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Background Fallback */}
      <div className="lg:hidden absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/akarsa.png"
          alt="Akarsa Hero Visual"
          fill
          priority
          sizes="100vw"
          className="object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05000A] via-[#05000A]/80 to-transparent" />
      </div>

    </section>
  )
}
