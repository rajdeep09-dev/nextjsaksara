import React from 'react';
import HeroSection from '@/components/HeroSection';
import LogoMarquee from '@/components/LogoMarquee';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BigStatementSection from '@/components/BigStatementSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="scroll-mt-24"><HeroSection /></section>
      <section id="marquee" className="scroll-mt-24"><LogoMarquee /></section>
      <section id="about" className="scroll-mt-24"><AboutSection /></section>
      <section id="services" className="scroll-mt-24"><ServicesSection /></section>
      <section id="big-statement" className="scroll-mt-24"><BigStatementSection /></section>
      <section id="work" className="scroll-mt-24"><PortfolioSection /></section>
      <section id="process" className="scroll-mt-24"><ProcessSection /></section>
      <section id="testimonials" className="scroll-mt-24"><TestimonialsSection /></section>
      <section id="team" className="scroll-mt-24"><TeamSection /></section>
      <section id="faq" className="scroll-mt-24"><FAQSection /></section>
      <section id="contact" className="scroll-mt-24"><ContactSection /></section>
      <section id="cta" className="scroll-mt-24"><CTASection /></section>
    </div>
  );
}
