import React from 'react';
import HeroSectionNew from '@/components/HeroSectionNew';
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
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="scroll-mt-24"><HeroSectionNew /></section>
      <section id="marquee" className="scroll-mt-24"><LogoMarquee /></section>
      <SectionDivider />
      <section id="about" className="scroll-mt-24"><AboutSection /></section>
      <SectionDivider />
      <section id="services" className="scroll-mt-24"><ServicesSection /></section>
      <SectionDivider />
      <section id="big-statement" className="scroll-mt-24"><BigStatementSection /></section>
      <SectionDivider />
      <section id="work" className="scroll-mt-24"><PortfolioSection /></section>
      <SectionDivider />
      <section id="process" className="scroll-mt-24"><ProcessSection /></section>
      <SectionDivider />
      <section id="testimonials" className="scroll-mt-24"><TestimonialsSection /></section>
      <SectionDivider />
      <section id="team" className="scroll-mt-24"><TeamSection /></section>
      <SectionDivider />
      <section id="faq" className="scroll-mt-24"><FAQSection /></section>
      <SectionDivider />
      <section id="contact" className="scroll-mt-24"><ContactSection /></section>
      <SectionDivider />
      <section id="cta" className="scroll-mt-24"><CTASection /></section>
    </div>
  );
}
