'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = [
    { name: 'Sarah Connor', role: 'CEO at Cyberdyne', text: 'Akarsa completely transformed our digital presence. The attention to detail and brutalist design aesthetic perfectly aligned with our new product launch.', img: '/public/testimonials/starbucks.png' },
    { name: 'John Doe', role: 'Founder, Startup X', text: 'Working with them felt like a true partnership. They pushed back on our bad ideas and delivered an experience that won us 3 industry awards.', img: '/public/testimonials/decathlon.png' },
    { name: 'Alice Smith', role: 'CMO at GlobalBrand', text: 'The typography, the motion, the entire vibe—they nailed it. Our conversion rate increased by 40% within the first month of deploying the new site.', img: '/public/testimonials/adidas.png' },
    { name: 'Mike Johnson', role: 'Director of E-comm', text: 'I have worked with dozens of agencies. Akarsa is the only one that truly understands the balance between high-end aesthetics and actual business metrics.', img: null }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const itemWidth = scrollContainerRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className="w-full bg-[#05000A] py-[clamp(80px,12vw,160px)] overflow-hidden">
      
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] mb-12">
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[1px] bg-[#5E17EB]" />
          <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]">TESTIMONIALS</span>
        </div>
        <h2 className="heading-section mt-4 text-white">What Our Clients Say</h2>
      </div>

      {/* Scrolling Strip */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-[24px] px-[clamp(24px,5vw,80px)] overflow-x-auto snap-x snap-mandatory scrollbar-hide py-[40px] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
        style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}} />
        
        {testimonials.map((testi, i) => (
          <div 
            key={i} 
            className="min-w-[clamp(320px,40vw,500px)] flex-shrink-0 snap-start bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-[40px_36px] flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-2 transition-all duration-300"
          >
            <div>
              <div className="text-[#5E17EB] text-[0.9rem] tracking-[3px] mb-[24px]">★★★★★</div>
              <p className="font-inter text-[1.05rem] font-light text-white/75 leading-[1.7] italic select-none">
                "{testi.text}"
              </p>
            </div>
            
            <div className="flex items-center gap-[16px] mt-[32px]">
              {testi.img ? (
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden border border-white/10 shrink-0">
                  <img src={testi.img} alt={testi.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#5E17EB]/30 to-[#FF007F]/30 flex items-center justify-center border border-white/10 shrink-0">
                  <span className="font-syne font-bold text-white text-[1.2rem]">{testi.name[0]}</span>
                </div>
              )}
              <div>
                <h4 className="font-inter text-[0.95rem] font-medium text-white select-none">{testi.name}</h4>
                <p className="font-inter text-[0.8rem] font-light text-white/50 select-none">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-[8px] mt-[32px]">
        {testimonials.map((_, i) => (
          <div 
            key={i}
            className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-[#5E17EB] scale-125' : 'bg-white/15'}`}
          />
        ))}
      </div>

    </div>
  );
}
