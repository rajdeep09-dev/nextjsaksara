'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'rgba(0,0,0,0.5)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 0 32px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 md:text-left text-center">
          {/* Column 1 */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: '800',
                fontSize: '1.2rem',
                color: 'white',
              }}
            >
              AKARSA
            </div>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.35)',
                marginTop: '12px',
                maxWidth: '250px',
              }}
              className="mx-auto md:mx-0"
            >
              Akarsa is your trusted partner for graphic design, branding, web development, digital marketing, and AI-powered creativity. Let’s shape the future together.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '20px',
              }}
              className="justify-center md:justify-start"
            >
              {[
                { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61577404206425', icon: 'M22 12.073C22 6.485 17.523 2 12 2S2 6.485 2 12.073c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.773-1.63 1.565v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.2 22 17.064 22 12.073z' },
                { name: 'Instagram', url: 'https://www.instagram.com/akarsa_studio/', icon: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z' }, // Simplified
                { name: 'Twitter', url: 'https://x.com/AkarsaDyniq', icon: 'M23 3.2c-.8.35-1.65.6-2.54.72a4.36 4.36 0 0 0-7.44 3v.43A12.4 12.4 0 0 1 3 4.6s-4 9 7 13a13 13 0 0 1-7 2c9 5 20 0 20-11.5v-.5A8.2 8.2 0 0 0 23 3.2z' },
                { name: 'Pinterest', url: 'https://in.pinterest.com/beakarsa/', icon: 'M12 2C7.03 2 3 6.03 3 11c0 4 2.5 7.3 6.1 8-.1-.7-.2-1.8 0-2.5.2-.6 1.5-3.9 1.5-3.9s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.4.7 1.4 1.6 0 1-.6 2.6-1 3.9-.3 1 .7 1.9 1.6 1.9 1.9 0 3.3-2.3 3.3-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.6 2.6-5.6 5.1 0 1 .3 1.8.8 2.4.2.2.2.3.1.6-.1.2-.4.7-.5.9-.1.2-.4.3-.7.2-2.2-.8-3.3-3-3.3-5.4C3 6 7 2 12 2z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#5E17EB';
                    e.currentTarget.style.borderColor = '#5E17EB';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Quick Links
            </h4>
            {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link) => (
              <Link
                key={link}
                href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.85rem',
                  fontWeight: '300',
                  color: 'rgba(255,255,255,0.45)',
                  display: 'block',
                  marginBottom: '12px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Column 3 */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Services
            </h4>
            {[
              'Graphic Design',
              'Web Development',
              'Branding & Strategy',
              'Digital Marketing',
            ].map((service) => (
              <Link
                key={service}
                href="/services"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.85rem',
                  fontWeight: '300',
                  color: 'rgba(255,255,255,0.45)',
                  display: 'block',
                  marginBottom: '12px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                {service}
              </Link>
            ))}
          </div>

          {/* Column 4 */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Contact
            </h4>
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '12px',
              }}
            >
              Shagun Arcade (Vijay Nagar), 7th Floor, Cabin No. 2 (702), Indore
            </div>
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '12px',
              }}
            >
              beakarsa@gmail.com
            </div>
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '12px',
              }}
            >
              +91 8109801383
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.04)',
            paddingTop: '24px',
            marginTop: '48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8rem',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.3)',
          }}
          className="flex-col md:flex-row gap-2 text-center"
        >
          <div>
            © {currentYear} Akarsa. All rights reserved.
          </div>
          <div>
            <a 
              href="#"
              style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              Crafted by F12X Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
