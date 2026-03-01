'use client';

import React from 'react';
import Image from 'next/image';

export default function TeamSection() {
  const team = [
    { name: 'Elena Rostova', role: 'Creative Director', img: '/public/G6.jpg' },
    { name: 'Marcus Chen', role: 'Lead Engineer', img: '/public/G7.jpg' },
    { name: 'Sarah Jenkins', role: 'Strategy Head', img: '/public/G8.jpg' },
    { name: 'David Kim', role: 'Motion Designer', img: '/public/G5.jpg' }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(80px,12vw,160px)]">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[1px] bg-[#5E17EB]" />
          <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]">THE TEAM</span>
          <div className="w-[40px] h-[1px] bg-[#5E17EB]" />
        </div>
        <h2 className="heading-section mt-4 max-w-[800px]">Meet the Minds Behind the Work</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div key={i} className="group relative overflow-hidden rounded-[20px] aspect-[3/4]">
            <Image
              src={member.img}
              alt={member.name}
              fill
              className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05000A]/90 via-[#05000A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="font-syne text-[1.1rem] font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{member.name}</h3>
              <p className="font-inter text-[0.85rem] font-light text-[#5E17EB] mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
