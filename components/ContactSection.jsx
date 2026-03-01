'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from './icons'

export default function ContactSection() {
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={containerRef} className="relative w-full py-[clamp(120px,15vw,200px)] scroll-mt-[100px]">
      
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
        
        {/* Left Side (Info) */}
        <div className={`flex flex-col items-start opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-x-0' : '-translate-x-8'}`}>
          <div className="flex items-center mb-4">
            <div className="w-[40px] h-px bg-[#5E17EB] mr-3 inline-block" />
            <span className="font-inter font-medium text-[0.8rem] text-[#5E17EB] uppercase tracking-[0.15em]">Get In Touch</span>
          </div>
          <h2 className="font-syne font-bold text-[clamp(2.5rem,7vw,4.5rem)] text-white tracking-[-0.02em] leading-none mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="font-inter font-light text-[1rem] text-white/50 leading-[1.75] max-w-[450px] mb-12">
            Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-8 w-full">
            
            {/* Contact Details */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5E17EB]/10 flex items-center justify-center shrink-0 mt-1 text-[#5E17EB]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[0.8rem] text-white/40 uppercase tracking-[0.1em] mb-1">Email</span>
                <a href="mailto:hello@akarsa.com" className="font-inter font-normal text-[1rem] text-white hover:text-[#5E17EB] transition-colors">
                  hello@akarsa.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5E17EB]/10 flex items-center justify-center shrink-0 mt-1 text-[#5E17EB]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[0.8rem] text-white/40 uppercase tracking-[0.1em] mb-1">Phone</span>
                <a href="tel:+1234567890" className="font-inter font-normal text-[1rem] text-white hover:text-[#5E17EB] transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5E17EB]/10 flex items-center justify-center shrink-0 mt-1 text-[#5E17EB]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[0.8rem] text-white/40 uppercase tracking-[0.1em] mb-1">Address</span>
                <span className="font-inter font-normal text-[1rem] text-white leading-[1.5]">
                  123 Creative Studio Ave<br />
                  Design District, NY 10012
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-12">
            <a href="#" className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:-translate-y-1">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:-translate-y-1">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:-translate-y-1">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Right Side (Form) */}
        <div className={`opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${inView ? 'opacity-100 translate-x-0' : 'translate-x-8'}`}>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-8 lg:p-10 w-full">
            <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col mb-5">
                <label className="font-inter font-medium text-[0.8rem] text-white/50 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white font-inter font-light text-[0.95rem] outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-4 focus:ring-[#5E17EB]/10 focus:bg-white/[0.04]"
                />
              </div>

              <div className="flex flex-col mb-5">
                <label className="font-inter font-medium text-[0.8rem] text-white/50 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white font-inter font-light text-[0.95rem] outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-4 focus:ring-[#5E17EB]/10 focus:bg-white/[0.04]"
                />
              </div>

              <div className="flex flex-col mb-5">
                <label className="font-inter font-medium text-[0.8rem] text-white/50 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white font-inter font-light text-[0.95rem] outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-4 focus:ring-[#5E17EB]/10 focus:bg-white/[0.04]"
                />
              </div>

              <div className="flex flex-col mb-6">
                <label className="font-inter font-medium text-[0.8rem] text-white/50 mb-2">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white font-inter font-light text-[0.95rem] outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-4 focus:ring-[#5E17EB]/10 focus:bg-white/[0.04] resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-br from-[#5E17EB] to-[#7B2FFF] text-white font-inter font-semibold text-[1rem] py-4 rounded-xl border-none cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-[0_4px_25px_rgba(94,23,235,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>

    </section>
  )
}
