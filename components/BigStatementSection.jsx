'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function BigStatementSection() {
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
      { threshold: 0.3 }
    )
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="big-statement" 
      ref={containerRef} 
      className="relative min-h-[70vh] flex items-center justify-center py-[clamp(80px,15vw,200px)] px-[clamp(24px,5vw,80px)] text-center max-w-[1000px] mx-auto overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(94,23,235,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Quotation Marks */}
      <div className="absolute top-[10%] left-[10%] font-syne font-black text-[8rem] text-[#5E17EB]/[0.08] pointer-events-none z-0 leading-none">
        “
      </div>
      <div className="absolute bottom-[10%] right-[10%] font-syne font-black text-[8rem] text-[#5E17EB]/[0.08] pointer-events-none z-0 leading-none">
        ”
      </div>

      {/* Statement Content */}
      <div className="relative z-10 font-syne font-bold text-[clamp(2rem,5vw,4.5rem)] text-white leading-[1.15] tracking-[-0.02em] flex flex-col gap-2">
        <span 
          className="block overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }}
        >
          We believe in redefining
        </span>
        <span 
          className="block overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] delay-[200ms]"
          style={{ clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }}
        >
          how brands communicate
        </span>
        <span 
          className="block overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] delay-[400ms]"
          style={{ clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }}
        >
          by making the ordinary
        </span>
        <span 
          className="block overflow-hidden italic text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#FF007F] transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] delay-[600ms]"
          style={{ clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }}
        >
          extraordinary.
        </span>
      </div>

    </section>
  )
}
