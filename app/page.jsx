import React from 'react';
import HeroSection from '@/components/HeroSection';
import LogoMarquee from '@/components/LogoMarquee';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <AnimateOnScroll animation="fade-up">
        <AboutSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <ServicesSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <PortfolioSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="scale-in">
        <TestimonialsSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
