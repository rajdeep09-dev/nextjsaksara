'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const testimonialsData = [
  {
    quote: "Akarsa didn't just make an ad, they created motion. They captured the joy, the sweat, the laughter, and the teamwork that lives inside our stores. From script to screen, everything felt natural and real. The video still gives us goosebumps. It's not marketing, it's storytelling with soul.",
    name: "Decathlon Indore",
    role: "Indore",
    image: null
  }
]

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [activeDot, setActiveDot] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Drag to scroll functionality
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  // Update active dot on scroll
  const handleScroll = () => {
    if (!containerRef.current) return
    const scrollPosition = containerRef.current.scrollLeft
    const cardWidth = containerRef.current.offsetWidth
    const newActiveDot = Math.round(scrollPosition / cardWidth)
    setActiveDot(newActiveDot)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="relative w-full py-[clamp(120px,15vw,200px)] scroll-mt-[100px] overflow-hidden">
      
      {/* Section Header */}
      <div className={`max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-16 lg:mb-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center mb-4">
          <div className="w-[40px] h-px bg-[#5E17EB] mr-3 inline-block" />
          <span className="font-inter font-medium text-[0.8rem] text-[#5E17EB] uppercase tracking-[0.15em]">Testimonials</span>
        </div>
        <h2 className="font-syne font-bold text-[clamp(2.5rem,7vw,5rem)] text-white tracking-[-0.02em] leading-none">
          What Our Clients Say
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className={`w-full opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${inView ? 'opacity-100' : ''}`}>
        <div 
          ref={containerRef}
          className={`flex gap-6 overflow-x-auto px-6 md:px-12 lg:px-20 pb-10 pt-4 snap-x snap-mandatory hide-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index}
              className="min-w-[clamp(320px,40vw,500px)] flex-shrink-0 snap-start bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-[clamp(32px,4vw,40px)] flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-1 select-none"
            >
              
              <div className="flex flex-col">
                <div className="text-[#5E17EB] font-inter text-[0.9rem] tracking-[3px] mb-6">
                  ★★★★★
                </div>
                <p className="font-inter font-normal text-[1.05rem] text-white/75 leading-[1.7] italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#5E17EB]/30 to-[#FF007F]/30 border border-white/10 shrink-0">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="font-syne font-bold text-white text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="font-inter font-medium text-[0.95rem] text-white">
                    {testimonial.name}
                  </span>
                  <span className="font-inter font-light text-[0.8rem] text-white/50">
                    {testimonial.role}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicators */}
      <div className={`flex justify-center gap-2 mt-8 opacity-0 transition-opacity duration-700 delay-500 ${inView ? 'opacity-100' : ''}`}>
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ease-out ${activeDot === index ? 'bg-[#5E17EB] scale-125' : 'bg-white/15 hover:bg-white/30'}`}
            onClick={() => {
              if (!containerRef.current) return
              const cardWidth = containerRef.current.offsetWidth
              containerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
              })
            }}
          />
        ))}
      </div>

    </section>
  )
}
