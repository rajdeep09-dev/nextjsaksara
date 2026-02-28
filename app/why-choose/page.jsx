import React from 'react';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';

export const metadata = {
  title: 'Why Choose Us — Akarsa',
  description: 'Discover The Benefits Of Working With Akarsa',
};

export default function WhyChoosePage() {
  const reasons = [
    {
      title: "Human Centered Approach",
      desc: "Every design and strategy is built around real audience needs. We ensure every idea is both visually impactful and aligned with your business goals."
    },
    {
      title: "Tech-Driven Solutions",
      desc: "Leveraging the latest tools and AI innovations, our team integrates cutting-edge technology to deliver future-ready digital experiences."
    },
    {
      title: "Tailored For Your Brand",
      desc: "Every project is custom, not cookie-cutter. We create unique solutions that reflect your brand’s identity and vision so every detail is designed to make your brand stand out."
    },
    {
      title: "Global Perspective, Local Relevance",
      desc: "Strategies that connect with real audiences. Our insights help you resonate with diverse markets while staying authentic to your roots."
    }
  ];

  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          Why Choose Us
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          Discover The Benefits Of Working With Akarsa
        </p>
      </div>

      <AnimateOnScroll animation="fade-up">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 80px' }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
               <Image src="/testimonials/Our Testimonials.gif" alt="Why Choose Us" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {reasons.map((reason, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ color: '#5E17EB', fontSize: '1.5rem', fontWeight: 'bold' }}>&gt;&gt;</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.3rem', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{reason.title}</h3>
                    <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7' }}>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
