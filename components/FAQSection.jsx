'use client';

import React, { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Our typical engagement runs between 6-12 weeks depending on the scope. We believe in moving fast but never compromising on the rigorous strategy and design required for a premium outcome."
    },
    {
      q: "Do you work with startups?",
      a: "Yes. We partner with ambitious startups who understand that brand perception directly impacts their valuation and ability to acquire customers."
    },
    {
      q: "What platforms do you build on?",
      a: "We are technology agnostic but heavily favor modern, high-performance stacks like Next.js, React, and WebGL for experiences that require complex interactions."
    },
    {
      q: "How does pricing work?",
      a: "We price based on the value we deliver, not hourly rates. Every project is unique, but our minimum engagement starts at $10,000 to ensure we can dedicate the required resources to produce award-winning work."
    }
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(80px,12vw,160px)]">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[1px] bg-[#5E17EB]" />
          <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]">FAQ</span>
          <div className="w-[40px] h-[1px] bg-[#5E17EB]" />
        </div>
        <h2 className="heading-section mt-4">Common Questions</h2>
      </div>

      <div className="flex flex-col border-t border-white/5">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-white/5 w-full">
            <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none transition-all duration-300"
            >
              <span className={`font-inter text-[1.05rem] font-medium pr-8 transition-colors duration-300 ${activeIndex === i ? 'text-white' : 'text-white/80'}`}>
                {faq.q}
              </span>
              <span 
                className="text-[#5E17EB] text-[24px] flex-shrink-0 transition-transform duration-300 ease-in-out font-light"
                style={{ transform: activeIndex === i ? 'rotate(45deg)' : 'rotate(0)' }}
              >
                +
              </span>
            </button>
            <div 
              className="overflow-hidden transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{
                maxHeight: activeIndex === i ? '300px' : '0',
                opacity: activeIndex === i ? 1 : 0
              }}
            >
              <p className="font-inter text-[0.95rem] font-light text-white/50 leading-[1.75] pb-6 pr-[20%]">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
