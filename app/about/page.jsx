import React from 'react';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: 'About Us — Akarsa',
  description: 'Learn more about Akarsa Studio',
};

export default function AboutPage() {
  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          About Us
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          We don&apos;t just create designs—we build experiences. Akarsa helps businesses transform ideas into powerful digital identities that stand out in today&apos;s competitive world.
        </p>
      </div>
      <AnimateOnScroll animation="fade-up">
        <AboutSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
