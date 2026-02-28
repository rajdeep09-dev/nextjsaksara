import React from 'react';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';

export const metadata = {
  title: 'Our Team — Akarsa',
  description: 'The Creative Minds Driving Your Success',
};

export default function TeamPage() {
  const team = [
    { name: "Bhupendra Yadav", role: "Cinematographer", img: "/akarsa.png" },
    { name: "Mayank Banna", role: "Video Editor", img: "/akarsa.png" },
    { name: "Abhay Thakur", role: "Backend Developer", img: "/akarsa.png" },
    { name: "Rishabh Mandal", role: "PPC Specialist", img: "/akarsa.png" },
    { name: "Aryan Mishra", role: "AI Engineer", img: "/akarsa.png" },
    { name: "Renu Chaturvedi", role: "CHRO", img: "/akarsa.png" },
    { name: "Riya Karn", role: "HR", img: "/akarsa.png" },
    { name: "Dhruvesh Patel", role: "UI/UX Designer", img: "/akarsa.png" },
  ];

  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          Our Team
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          The Creative Minds Driving Your Success
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 80px' }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <AnimateOnScroll key={i} animation="scale-in" delay={i * 0.1}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', position: 'relative', border: '2px solid rgba(255,255,255,0.1)' }}>
                <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.2rem', fontWeight: '700', color: 'white' }}>{member.name}</h3>
              <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '4px' }}>{member.role}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
