'use client';

import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { name: 'Adidas', src: '/public/testimonials/adidas.png' },
    { name: 'Starbucks', src: '/public/testimonials/starbucks.png' },
    { name: 'Decathlon', src: '/public/testimonials/decathlon.png' },
    { name: 'Adidas', src: '/public/testimonials/adidas.png' },
    { name: 'Starbucks', src: '/public/testimonials/starbucks.png' }
  ];

  return (
    <div className="w-full overflow-hidden py-16 border-y border-white/5 bg-[#05000A]">
      <div className="flex w-[200%] animate-marquee">
        {/* First set */}
        <div className="flex-1 flex justify-around items-center px-8">
          {logos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.name} className="h-8 md:h-12 object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex-1 flex justify-around items-center px-8">
          {logos.map((logo, i) => (
            <img key={`dup-${i}`} src={logo.src} alt={logo.name} className="h-8 md:h-12 object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          ))}
        </div>
      </div>
    </div>
  );
}
