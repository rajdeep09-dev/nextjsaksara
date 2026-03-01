'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(80px,12vw,160px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[64px]">
        {/* Left Side */}
        <div className="flex flex-col justify-start items-start">
          <div className="flex items-center gap-3">
            <div className="h-[1px] bg-[#5E17EB]" style={{
              width: 0,
              animation: 'accent-line-appear 0.6s cubic-bezier(0.76, 0, 0.24, 1) both'
            }} />
            <span className="text-[#5E17EB] uppercase font-inter text-[0.8rem] font-medium tracking-[0.15em]" style={{
              animation: 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both'
            }}>GET IN TOUCH</span>
          </div>
          <h2 className="heading-section mt-4" style={{
            animation: 'fade-up 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.3s both'
          }}>Let's Start a Conversation</h2>
          <p className="font-inter text-[1rem] font-light text-white/50 leading-[1.8] mt-6 max-w-[480px]">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-6 mt-10">
            <div className="flex items-start gap-3">
              <span className="text-[#5E17EB] text-[18px]">📧</span>
              <div>
                <div className="font-inter text-[0.8rem] uppercase tracking-[0.1em] text-white/40 mb-1">Email</div>
                <div className="font-inter text-[1rem] font-light text-white">hello@akarsa.agency</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#5E17EB] text-[18px]">📱</span>
              <div>
                <div className="font-inter text-[0.8rem] uppercase tracking-[0.1em] text-white/40 mb-1">Phone</div>
                <div className="font-inter text-[1rem] font-light text-white">+1 (800) 123-4567</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#5E17EB] text-[18px]">📍</span>
              <div>
                <div className="font-inter text-[0.8rem] uppercase tracking-[0.1em] text-white/40 mb-1">Address</div>
                <div className="font-inter text-[1rem] font-light text-white">123 Creative Studio, NY 10001</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            {['IG', 'TW', 'LI'].map((social) => (
              <a key={social} href="#" className="w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-inter text-[0.85rem] text-white hover:bg-[#5E17EB] hover:border-[#5E17EB] hover:-translate-y-1 transition-all duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-[clamp(32px,4vw,48px)_clamp(24px,3vw,40px)] shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-[12px] p-[14px_18px] text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-[3px] focus:ring-[#5E17EB]/15 mb-5" />

            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-[12px] p-[14px_18px] text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-[3px] focus:ring-[#5E17EB]/15 mb-5" />

            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Subject</label>
            <input type="text" placeholder="Project Inquiry" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-[12px] p-[14px_18px] text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-[3px] focus:ring-[#5E17EB]/15 mb-5" />

            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Message</label>
            <textarea rows="5" placeholder="Tell us about your project..." className="w-full bg-white/[0.03] border border-white/[0.08] rounded-[12px] p-[14px_18px] text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 focus:border-[#5E17EB] focus:ring-[3px] focus:ring-[#5E17EB]/15 mb-5 resize-y" />

            <button type="submit" className="magnetic-button w-full bg-gradient-to-br from-[#5E17EB] to-[#7B2FFF] text-white p-[16px] rounded-[12px] font-inter font-semibold text-[1rem] border-none cursor-pointer mt-2 transition-all duration-300 hover:brightness-110 hover:shadow-[0_4px_25px_rgba(94,23,235,0.4)] hover:-translate-y-[2px] active:translate-y-0 active:scale-95 will-change-transform">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
