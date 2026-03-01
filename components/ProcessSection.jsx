'use client'
import React, { useEffect, useRef, useState } from 'react'

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We start by understanding your goals, audience, and market. This research forms the foundation of our strategy.'
  },
  {
    num: '02',
    title: 'Conceptualization',
    desc: 'Our team brainstorms and develops creative concepts that align with the strategic direction and brand values.'
  },
  {
    num: '03',
    title: 'Design & Development',
    desc: 'Bringing the concepts to life through meticulous design and robust technical implementation.'
  },
  {
    num: '04',
    title: 'Launch & Optimize',
    desc: 'We deploy the solution, monitor performance, and continuously optimize for maximum impact and growth.'
  }
]

export default function ProcessSection() {
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
    <section id="process" ref={containerRef} className="relative w-full py-[clamp(120px,15vw,200px)] scroll-mt-[100px]">
      
      {/* Section Header */}
      <div className={`max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 mb-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center mb-4">
          <div className="w-[40px] h-px bg-[#5E17EB] mr-3 inline-block" />
          <span className="font-inter font-medium text-[0.8rem] text-[#5E17EB] uppercase tracking-[0.15em]">How We Work</span>
        </div>
        <h2 className="font-syne font-bold text-[clamp(2.5rem,7vw,5rem)] text-white tracking-[-0.02em] leading-none">
          Our Process
        </h2>
      </div>

      {/* Process Steps */}
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[28px] left-[120px] right-[120px] h-px bg-gradient-to-r from-transparent via-[#5E17EB]/30 to-[#FF007F]/30 z-0" />
        
        {/* Connecting Line (Mobile) */}
        <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[52px] w-px bg-gradient-to-b from-transparent via-[#5E17EB]/30 to-[#FF007F]/30 z-0" />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 relative z-10">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="group relative flex flex-row lg:flex-col items-start gap-6 lg:gap-0 lg:w-[250px] opacity-0"
              style={{ 
                animation: inView ? `fadeUp 0.6s ease forwards ${0.2 + index * 0.2}s` : 'none',
              }}
            >
              
              {/* Step Number */}
              <div className="w-[56px] h-[56px] min-w-[56px] rounded-full bg-[#5E17EB]/10 border border-[#5E17EB]/30 flex items-center justify-center font-syne font-extrabold text-[1.2rem] text-[#5E17EB] transition-all duration-300 group-hover:bg-[#5E17EB]/20 group-hover:shadow-[0_0_20px_rgba(94,23,235,0.4)] lg:mb-8 z-10">
                {step.num}
              </div>

              {/* Text Content */}
              <div className="flex flex-col mt-2 lg:mt-0">
                <h3 className="font-syne font-bold text-[1.3rem] text-white leading-[1.2] mb-3">
                  {step.title}
                </h3>
                <p className="font-inter font-light text-[0.9rem] text-white/50 leading-[1.6] max-w-[250px]">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
