'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from './icons'

export default function CTASection() {
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)

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
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta" ref={containerRef} className="relative w-full py-[clamp(100px,15vw,200px)] px-[clamp(24px,5vw,80px)] overflow-hidden text-center flex flex-col items-center justify-center min-h-[60vh]">
      
      {/* Intense Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(94,23,235,0.15)_0%,transparent_60%)] animate-pulse-slow" />
      </div>

      {/* Decorative Brackets */}
      <div className="absolute left-[5%] lg:left-[10%] top-1/2 -translate-y-1/2 font-syne font-black text-[10rem] text-white/[0.03] pointer-events-none select-none z-0">
        [
      </div>
      <div className="absolute right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 font-syne font-black text-[10rem] text-white/[0.03] pointer-events-none select-none z-0">
        ]
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
           style={{ opacity: inView ? 1 : 0 }}
      >
        
        {/* Top Text */}
        <div className="font-inter font-normal text-[1rem] text-[#5E17EB] uppercase tracking-[0.2em] mb-6">
          Ready to start?
        </div>

        {/* Main Heading */}
        <h2 className="font-syne font-extrabold text-[clamp(3rem,8vw,7rem)] text-white leading-none tracking-[-0.04em] mb-8 flex flex-wrap justify-center gap-x-4 lg:gap-x-6">
          <span className={`inline-block opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            Let&apos;s
          </span>
          <span className={`inline-block opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            Create
          </span>
          <span className={`inline-block opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            Something
          </span>
          <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
            Extraordinary
          </span>
        </h2>

        {/* Subtitle */}
        <p className={`font-inter font-light text-[clamp(1rem,2vw,1.2rem)] text-white/50 max-w-[500px] mb-12 opacity-0 transition-all duration-700 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}>
          Join the forward-thinking brands that trust us to redefine their digital presence and drive real growth.
        </p>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 transition-all duration-700 delay-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}>
          <button className="group relative overflow-hidden bg-gradient-to-br from-[#5E17EB] to-[#7B2FFF] text-white px-8 py-4 rounded-full font-inter font-medium text-[0.95rem] border-none cursor-pointer transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(94,23,235,0.4)] hover:shadow-[0_6px_30px_rgba(94,23,235,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] flex items-center gap-2">
            <span className="relative z-10">Start a Project</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Response Indicator */}
        <div className={`mt-8 flex items-center justify-center gap-3 opacity-0 transition-all duration-700 delay-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100' : ''}`}>
          <div className="relative flex items-center justify-center w-3 h-3">
            <div className="absolute w-full h-full bg-green-500 rounded-full animate-ping opacity-75" />
            <div className="relative w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <span className="font-inter font-light text-[0.8rem] text-white/40 uppercase tracking-wider">
            Usually responds within 24 hours
          </span>
        </div>

      </div>
    </section>
  )
}
