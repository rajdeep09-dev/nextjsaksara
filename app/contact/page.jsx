import React from 'react';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: 'Contact — Akarsa',
  description: 'Great ideas start with a conversation. Let’s create something extraordinary together.',
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          Contact
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          Great ideas start with a conversation. Let’s create something extraordinary together. Your vision deserves a partner who brings it to life.
        </p>
      </div>

      <AnimateOnScroll animation="fade-up">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 80px', display: 'grid', gap: '32px' }} className="md:grid-cols-2">
          
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', fontWeight: '700', marginBottom: '24px' }}>Let’s Create Beyond Noise</h2>
            <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', marginBottom: '32px' }}>
              Whether you&apos;re a brand, artist, or seeker, Akarsa is open to collaborations that are soulful, intelligent, and disruptive. Tell us your idea — or your problem — and let&apos;s reimagine it together.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>Our Headquarter</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)' }}>Shagun Arcade (Vijay Nagar), 7th Floor, Cabin No. 2 (702), Indore</div>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>Head Office Line</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)' }}>+91 8109801383</div>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>HQ Mail</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)' }}>beakarsa@gmail.com</div>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.5rem' }}>⏰</span>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>Active Hours</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)' }}>Weekdays: 10:00 – 19:00 IST (India) / 08:30 – 17:30 GST (Dubai)<br/>Weekends: Experimental mode only</div>
                </div>
              </li>
            </ul>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px' }}>Quick Contact Form</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Name*" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', color: 'white', outline: 'none' }} />
              <input type="email" placeholder="Email*" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', color: 'white', outline: 'none' }} />
              <input type="tel" placeholder="Phone Number*" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', color: 'white', outline: 'none' }} />
              <textarea placeholder="Write Your Messages..." rows="6" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', color: 'white', outline: 'none', resize: 'none' }}></textarea>
              <button type="submit" style={{ background: '#5E17EB', color: 'white', padding: '16px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', border: 'none', marginTop: '8px' }}>Send Message</button>
            </form>
          </div>

        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
