'use client';

import React, { useState } from 'react';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What is Akarsa?", a: "Akarsa is a creation studio where art meets intelligence. We build digital experiences, brands, and systems that blend human emotion with artificial precision. Every project begins with curiosity and ends with impact." },
    { q: "What kind of work does Akarsa do?", a: "We do branding, graphic design, web development, digital marketing, video production, and AI-assisted creative collaboration — all tailored to client needs." },
    { q: "How is Akarsa different from a regular agency?", a: "We mix studio-level craft with product thinking and AI tooling. That means cinematic storytelling, data-informed decisions, and scalable engineering delivered together." },
    { q: "Does Akarsa actually use artificial intelligence in its work?", a: "Yes — we use AI to accelerate ideation, generate creative assets, prototype UX, and enhance analytics. But human direction and craft remain central to our output." },
    { q: "What does it mean when Akarsa calls itself a Rule Breaking Studio?", a: "It means we challenge conventions: we prioritize fresh thinking, strategic risk-taking, and bespoke solutions over formulaic templates." },
    { q: "Who does Akarsa collaborate with?", a: "Brands of every size — startups, local businesses, and global enterprises — plus agencies and other creative partners." },
    { q: "How does Akarsa approach a project from start to finish?", a: "Discovery → Concepting → Design & Build → Launch → Learn. Each phase has clear milestones, client checkpoints, and iterative validation." },
    { q: "Can Akarsa handle both creative and technical projects?", a: "Yes — we combine creative production with full-stack engineering and product strategy to deliver end-to-end solutions." },
    { q: "What kind of brands should work with Akarsa?", a: "Brands seeking daring creativity, product-quality engineering, and measurable growth — especially those who want authentic storytelling." },
    { q: "How can someone start working with Akarsa?", a: "Use the Contact link or the Get Started CTA in the header to reach out. We typically begin with a short discovery call." }
  ];

  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          FAQs
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          Your Top Questions Answered
        </p>
      </div>

      <AnimateOnScroll animation="fade-up">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px 80px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '32px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i === faqs.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontFamily: 'var(--font-syne)', fontSize: '1.2rem', fontWeight: '600', textAlign: 'left' }}
                >
                  {faq.q}
                  <span style={{ color: '#5E17EB', fontSize: '1.5rem', transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div style={{ overflow: 'hidden', transition: 'max-height 0.3s ease', maxHeight: openIndex === i ? '200px' : '0' }}>
                  <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', marginTop: '16px', lineHeight: '1.7' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
