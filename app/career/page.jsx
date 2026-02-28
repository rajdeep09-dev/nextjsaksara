import React from 'react';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';

export const metadata = {
  title: 'Careers — Akarsa',
  description: 'Join The Akarsa Team',
};

export default function CareerPage() {
  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          Careers
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          Join The Akarsa Team
        </p>
      </div>

      <AnimateOnScroll animation="fade-up">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px 80px', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '48px' }}>
            <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', marginBottom: '32px', lineHeight: '1.8' }}>
              We&apos;re always on the lookout for creative thinkers, tech innovators, and strategic minds. At Akarsa, you&apos;ll work on diverse projects, collaborate with global clients, and grow with a culture that values innovation and originality.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }} className="flex-col md:flex-row">
              <Link href="/contact" style={{ background: 'linear-gradient(135deg, #5E17EB, #7B2FFF)', color: 'white', padding: '16px 40px', borderRadius: '100px', fontWeight: '500' }}>Explore Open Roles</Link>
              <Link href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'white', padding: '16px 40px', borderRadius: '100px' }}>Apply Now</Link>
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
