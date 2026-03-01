'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000000]/60 border-t border-white/[0.06] pt-[clamp(80px,12vw,140px)] relative z-10">
      
      {/* Top CTA Area */}
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] mb-[80px]">
        <Link 
          href="#contact" 
          className="group inline-flex items-center gap-6 font-syne text-[clamp(3rem,8vw,6rem)] font-extrabold text-white leading-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E17EB] hover:to-[#FF007F] transition-all duration-400 ease-out"
        >
          Let's Talk
          <span className="group-hover:translate-x-4 transition-transform duration-400 ease-out text-[#5E17EB]">→</span>
        </Link>
      </div>

      {/* Columns Area */}
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-6 md:gap-6">
        
        {/* Brand Col */}
        <div className="glass-whisper rounded-[20px] p-6 flex flex-col">
          <Link href="/" className="font-syne font-extrabold text-[1.5rem] text-white tracking-[0.05em]">
            AKARSA
          </Link>
          <p className="font-inter text-[0.9rem] font-light text-white/50 mt-4 max-w-[300px] leading-relaxed">
            A premium digital agency delivering bold, brutalist, and unforgettable web experiences.
          </p>
          
          <div className="flex gap-3 mt-8">
            {['IG', 'TW', 'LI', 'FB'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="glass-medium w-[44px] h-[44px] rounded-[12px] flex items-center justify-center font-inter text-[0.85rem] text-white hover:glass-accent hover:-translate-y-[2px] hover:scale-105 transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Col */}
        <div className="glass-whisper rounded-[20px] p-6 flex flex-col">
          <h4 className="font-syne text-[0.9rem] font-bold text-white uppercase tracking-[0.1em] mb-7">Navigation</h4>
          <nav className="flex flex-col gap-3">
            {['Home', 'About', 'Services', 'Work', 'Contact'].map((link) => (
              <Link 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="font-inter text-[0.9rem] font-light text-white/40 hover:text-white hover:translate-x-[3px] transition-all duration-300 w-fit"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services Col */}
        <div className="glass-whisper rounded-[20px] p-6 flex flex-col">
          <h4 className="font-syne text-[0.9rem] font-bold text-white uppercase tracking-[0.1em] mb-7">Services</h4>
          <nav className="flex flex-col gap-3">
            {['Strategy', 'Branding', 'Web Design', 'Development'].map((link) => (
              <Link 
                key={link} 
                href="#services" 
                className="font-inter text-[0.9rem] font-light text-white/40 hover:text-white hover:translate-x-[3px] transition-all duration-300 w-fit"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Col */}
        <div className="glass-whisper rounded-[20px] p-6 flex flex-col">
          <h4 className="font-syne text-[0.9rem] font-bold text-white uppercase tracking-[0.1em] mb-7">Contact</h4>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-[#5E17EB] text-[18px] leading-none">📧</span>
              <div className="flex flex-col -mt-1">
                <span className="font-inter text-[0.75rem] font-medium text-white/40 uppercase tracking-[0.1em]">Email</span>
                <span className="font-inter text-[0.9rem] font-light text-white mt-1">hello@akarsa.agency</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-[#5E17EB] text-[18px] leading-none">📱</span>
              <div className="flex flex-col -mt-1">
                <span className="font-inter text-[0.75rem] font-medium text-white/40 uppercase tracking-[0.1em]">Phone</span>
                <span className="font-inter text-[0.9rem] font-light text-white mt-1">+1 (800) 123-4567</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#5E17EB] text-[18px] leading-none">📍</span>
              <div className="flex flex-col -mt-1">
                <span className="font-inter text-[0.75rem] font-medium text-white/40 uppercase tracking-[0.1em]">Address</span>
                <span className="font-inter text-[0.9rem] font-light text-white mt-1">123 Creative Studio, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="glass-whisper rounded-[16px] max-w-[1400px] mx-auto mt-[80px] mx-[clamp(24px,5vw,80px)] px-[clamp(24px,5vw,80px)] py-[24px] flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="font-inter text-[0.8rem] font-light text-white/25">
          © {currentYear} Akarsa Agency. All rights reserved.
        </div>
        <div className="font-inter text-[0.8rem] font-light text-white/25">
          Crafted with passion by <a href="#" className="text-white/40 hover:text-[#5E17EB] transition-colors duration-300">F12X Studio</a>
        </div>
      </div>

    </footer>
  );
}
