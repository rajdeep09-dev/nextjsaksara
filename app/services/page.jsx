import React from 'react';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: 'Services — Akarsa',
  description: 'Our comprehensive digital services.',
};

export default function ServicesPage() {
  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          Our Services
        </h1>
      </div>
      <AnimateOnScroll animation="fade-up">
        <ServicesSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
