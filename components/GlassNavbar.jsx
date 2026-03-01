'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

export default function GlassNavbar() {
  const pathname = usePathname();
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
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'Work', href: '/work', id: 'work' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Contact', href: '/contact', id: 'contact' },
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

  const navContainerClasses = `
    nav-container 
    ${isScrolled ? 'nav-container-scrolled' : 'nav-container-top'}
    glass-strong
  `;

  const mobileMenuIconClasses = `
    mobile-menu-icon 
    ${mobileMenuOpen ? 'mobile-menu-icon-open' : 'mobile-menu-icon-closed'}
  `;

  return (
    <>
      <nav
        className={navContainerClasses}
        style={{
          transform: `translateX(-50%) translateY(${isHidden ? '-100px' : '0'})`,
        }}
      >
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="nav-logo"
        >
          AKARSA
        </a>

        {/* Divider desktop */}
        <div className="hidden md:block nav-divider" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-[4px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const linkClasses = `
              interactive 
              nav-link 
              ${isActive ? 'nav-link-active' : 'nav-link-inactive'}
            `;
            return (
            <Link
              key={link.id}
              href={link.href}
              className={linkClasses}
            >
              {link.name}
            </Link>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:block interactive magnetic-button nav-cta"
        >
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={mobileMenuIconClasses}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} links={navLinks} handleSmoothScroll={handleSmoothScroll} />
    </>
  );
}
