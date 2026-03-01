'use client'
import React from 'react'
import { Instagram, Twitter, Linkedin, Facebook, MapPin, Phone, Mail, ArrowRight } from './icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black/60 border-t border-white/[0.06] pt-[clamp(80px,12vw,140px)] relative z-20 overflow-hidden">
      
      {/* Top Area (Secondary CTA) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <a href="#contact" className="group inline-flex items-center font-syne font-extrabold text-[clamp(3rem,8vw,6rem)] text-white leading-none mb-20 transition-all duration-400 ease-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E17EB] hover:to-[#FF007F]">
          <span className="relative">
            Let&apos;s Talk
          </span>
          <ArrowRight className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ml-4 lg:ml-8 transform transition-transform duration-400 ease-out group-hover:translate-x-4 lg:group-hover:translate-x-6 text-[#5E17EB]" />
        </a>
      </div>

      {/* Columns Area */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start lg:pr-10">
          <div className="font-syne font-extrabold text-[1.5rem] text-white tracking-tight uppercase">
            AKARSA<span className="text-[#5E17EB]">.</span>
          </div>
          <p className="font-inter font-light text-[0.9rem] text-white/50 leading-[1.7] mt-4 max-w-[300px]">
            A creative and digital solutions agency that believes in redefining how brands communicate.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3 mt-8">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:text-white hover:-translate-y-0.5 hover:scale-110">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:text-white hover:-translate-y-0.5 hover:scale-110">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:text-white hover:-translate-y-0.5 hover:scale-110">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:text-white hover:-translate-y-0.5 hover:scale-110">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col items-start">
          <h4 className="font-syne font-bold text-[0.9rem] text-white uppercase tracking-[0.1em] mb-7">
            Navigation
          </h4>
          <div className="flex flex-col gap-3.5">
            <a href="#about" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">About Us</a>
            <a href="#services" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Services</a>
            <a href="#work" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Work</a>
            <a href="#process" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Process</a>
            <a href="#testimonials" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Testimonials</a>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col items-start">
          <h4 className="font-syne font-bold text-[0.9rem] text-white uppercase tracking-[0.1em] mb-7">
            Services
          </h4>
          <div className="flex flex-col gap-3.5">
            <a href="#services" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Graphic Design</a>
            <a href="#services" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Web Development</a>
            <a href="#services" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Digital Marketing</a>
            <a href="#services" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Branding Strategy</a>
            <a href="#services" className="font-inter font-light text-[0.9rem] text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1 block">Video Production</a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col items-start lg:pl-4">
          <h4 className="font-syne font-bold text-[0.9rem] text-white uppercase tracking-[0.1em] mb-7">
            Contact
          </h4>
          <div className="flex flex-col gap-5">
            
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#5E17EB] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[0.75rem] text-white/40 uppercase tracking-[0.1em] mb-1">Email</span>
                <a href="mailto:hello@akarsa.com" className="font-inter font-light text-[0.9rem] text-white transition-colors duration-300 hover:text-[#5E17EB]">
                  hello@akarsa.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#5E17EB] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[0.75rem] text-white/40 uppercase tracking-[0.1em] mb-1">Phone</span>
                <a href="tel:+1234567890" className="font-inter font-light text-[0.9rem] text-white transition-colors duration-300 hover:text-[#5E17EB]">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#5E17EB] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[0.75rem] text-white/40 uppercase tracking-[0.1em] mb-1">Address</span>
                <span className="font-inter font-light text-[0.9rem] text-white leading-[1.5]">
                  123 Creative Studio Ave<br />
                  Design District, NY 10012
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto mt-20 px-6 md:px-12 lg:px-20 border-t border-white/[0.04]">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4 md:gap-0 text-center md:text-left">
          
          <div className="font-inter font-light text-[0.8rem] text-white/25">
            © {currentYear} Akarsa. All rights reserved.
          </div>
          
          <div className="font-inter font-light text-[0.8rem] text-white/25">
            Crafted with passion by <a href="https://f12x.studio" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#5E17EB] transition-colors duration-300">F12X Studio</a>
          </div>

        </div>
      </div>

    </footer>
  )
}
