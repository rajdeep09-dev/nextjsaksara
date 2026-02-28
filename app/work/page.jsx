import React from 'react';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: 'Portfolio — Akarsa',
  description: 'A showcase of work that blends innovation with functionality.',
};

export default function WorkPage() {
  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          Portfolio
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          A showcase of work that blends innovation with functionality. See how we help brands grow through design and digital excellence.
        </p>
      </div>
      <AnimateOnScroll animation="fade-up">
        <PortfolioSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
