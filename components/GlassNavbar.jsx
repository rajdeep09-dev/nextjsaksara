'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from './icons'

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 100)
      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      lastScrollY = currentScrollY
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: [0.3, 0.5, 0.8] })
    
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(s => observer.observe(s))
    
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  return (
    <>
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-auto max-w-[90vw] transition-all duration-400 ease-out-expo ${hidden ? '-translate-y-[100px] opacity-0' : 'translate-y-0 opacity-100'} ${scrolled ? 'scale-98' : 'scale-100'}`}
      >
        <div className={`flex items-center gap-2 rounded-full border border-white/5 transition-all duration-400 ease-out-expo ${
            scrolled 
              ? 'bg-[#05000A]/80 backdrop-blur-[30px] border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5),_0_0_0_1px_rgba(255,255,255,0.05)_inset]' 
              : 'bg-[#05000A]/60 backdrop-blur-[24px] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),_0_0_0_1px_rgba(255,255,255,0.03)_inset]'
          } md:px-6 md:py-3 px-5 py-2.5`}
        >
          <Link href="#hero" className="font-syne font-extrabold text-white text-[1.1rem] tracking-wider whitespace-nowrap mr-4">
            AKARSA
          </Link>

          <div className="hidden md:block w-px h-5 bg-white/10 mx-2" />

          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full font-inter font-normal text-[0.85rem] transition-all duration-300 ease-out ${
                  activeSection === link.href.slice(1) 
                    ? 'text-white bg-[#5E17EB]/15' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="ml-2 bg-gradient-to-br from-[#5E17EB] to-[#7B2FFF] text-white px-5 py-2 rounded-full font-inter font-medium text-[0.8rem] border-none cursor-pointer transition-all duration-300 ease-out shadow-[0_2px_12px_rgba(94,23,235,0.3)] hover:shadow-[0_4px_20px_rgba(94,23,235,0.5)] hover:-translate-y-[1px] hover:brightness-110 active:translate-y-0 active:scale-95"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button 
            className="md:hidden flex items-center justify-center text-white p-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[2000] bg-[#05000A]/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <button 
              className="text-white p-2 border border-white/10 rounded-full bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col justify-center flex-grow gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-syne text-4xl font-bold tracking-tight opacity-80 hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  setTimeout(() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 300)
                }}
                style={{
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s cubic-bezier(0.76,0,0.24,1) ${0.1 * idx}s`
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
