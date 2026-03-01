'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function GlassNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);

      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '24px',
          left: '50%',
          transform: `translateX(-50%) translateY(${isHidden ? '-100px' : '0'}) scale(${isScrolled ? 0.98 : 1})`,
          width: 'auto',
          maxWidth: '90vw',
          background: isScrolled ? 'rgba(5, 0, 10, 0.8)' : 'rgba(5, 0, 10, 0.6)',
          backdropFilter: isScrolled ? 'blur(30px)' : 'blur(24px)',
          WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(24px)',
          border: isScrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.08)',
          borderRadius: '100px',
          padding: '12px 16px 12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: isScrolled ? '0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset' : '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset',
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both'
        }}
        className="nav-container"
      >
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: '1.1rem',
            color: 'white',
            letterSpacing: '0.05em',
            marginRight: '16px',
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}
        >
          AKARSA
        </a>

        {/* Divider desktop */}
        <div className="hidden md:block" style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 8px' }} />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-[4px]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className="interactive"
              style={{
                padding: '8px 16px',
                borderRadius: '100px',
                color: activeSection === link.id ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                background: activeSection === link.id ? 'rgba(94,23,235,0.15)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.id) {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.id) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          className="hidden md:block interactive magnetic-button"
          style={{
            background: 'linear-gradient(135deg, #5E17EB, #7B2FFF)',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '100px',
            fontFamily: 'var(--font-inter)',
            fontWeight: 500,
            fontSize: '0.8rem',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '8px',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 12px rgba(94,23,235,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(94,23,235,0.5)';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(94,23,235,0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            width: '24px',
            height: '18px',
            marginLeft: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span style={{
            display: 'block', position: 'absolute', width: '22px', height: '2px', background: 'white', transition: 'all 0.3s ease', top: mobileMenuOpen ? '8px' : '2px', transform: mobileMenuOpen ? 'rotate(45deg)' : 'none'
          }} />
          <span style={{
            display: 'block', position: 'absolute', width: '22px', height: '2px', background: 'white', transition: 'all 0.3s ease', top: '8px', opacity: mobileMenuOpen ? 0 : 1
          }} />
          <span style={{
            display: 'block', position: 'absolute', width: '22px', height: '2px', background: 'white', transition: 'all 0.3s ease', top: mobileMenuOpen ? '8px' : '14px', transform: mobileMenuOpen ? 'rotate(-45deg)' : 'none'
          }} />
        </button>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} links={navLinks} handleSmoothScroll={handleSmoothScroll} />
    </>
  );
}
