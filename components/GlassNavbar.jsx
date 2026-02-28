'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function GlassNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          background: isScrolled ? 'rgba(5, 0, 10, 0.75)' : 'rgba(5, 0, 10, 0.4)',
          backdropFilter: isScrolled ? 'blur(30px)' : 'blur(24px)',
          WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(24px)',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.05)',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
          zIndex: '1000',
          padding: isScrolled ? '12px 0' : '18px 0',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: '800',
              fontSize: '1.3rem',
              color: 'white',
              letterSpacing: '0.08em',
              zIndex: '1001',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            AKARSA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2">
            <style dangerouslySetInnerHTML={{ __html: `
              .nav-link {
                color: rgba(255,255,255,0.55);
                font-family: var(--font-inter);
                font-weight: 400;
                font-size: 0.9rem;
                padding: 8px 16px;
                position: relative;
                transition: color 0.3s ease;
              }
              .nav-link:hover {
                color: #FFFFFF;
              }
              .nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 0%;
                height: 1.5px;
                background: #5E17EB;
                transition: width 0.3s ease;
              }
              .nav-link:hover::after {
                width: 70%;
              }
            `}} />
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="cta-btn"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '100px',
                fontFamily: 'var(--font-inter)',
                fontWeight: '500',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#5E17EB';
                e.currentTarget.style.borderColor = '#5E17EB';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(94,23,235,0.3)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: '1001',
              position: 'relative',
              width: '22px',
              height: '16px',
            }}
            aria-label="Toggle Menu"
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'white',
                transition: 'all 0.3s ease',
                position: 'absolute',
                top: '0',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'white',
                transition: 'all 0.3s ease',
                position: 'absolute',
                top: '7px',
                opacity: mobileMenuOpen ? 0 : 1,
                transform: mobileMenuOpen ? 'translateX(-10px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'white',
                transition: 'all 0.3s ease',
                position: 'absolute',
                top: '14px',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
              }}
            />
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            height: '1px',
            width: '100%',
            background: 'linear-gradient(90deg, transparent 0%, #5E17EB 30%, #FF007F 70%, transparent 100%)',
            opacity: '0.3',
          }}
        />
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} links={navLinks} />
    </>
  );
}
