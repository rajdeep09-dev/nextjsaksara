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

          <div className="flex flex-col gap-4 mt-10">
            <div className="glass-soft rounded-[16px] p-5 flex items-start gap-3 hover:glass-medium transition-all duration-300">
              <span className="text-[#5E17EB] text-[20px]" style={{ minWidth: '24px' }}>📧</span>
              <div className="flex-1">
                <div className="font-inter text-[0.75rem] uppercase tracking-[0.1em] text-white/40 mb-1">Email</div>
                <div className="font-inter text-[0.95rem] font-light text-white">hello@akarsa.agency</div>
              </div>
            </div>
            <div className="glass-soft rounded-[16px] p-5 flex items-start gap-3 hover:glass-medium transition-all duration-300">
              <span className="text-[#5E17EB] text-[20px]" style={{ minWidth: '24px' }}>📱</span>
              <div className="flex-1">
                <div className="font-inter text-[0.75rem] uppercase tracking-[0.1em] text-white/40 mb-1">Phone</div>
                <div className="font-inter text-[0.95rem] font-light text-white">+1 (800) 123-4567</div>
              </div>
            </div>
            <div className="glass-soft rounded-[16px] p-5 flex items-start gap-3 hover:glass-medium transition-all duration-300">
              <span className="text-[#5E17EB] text-[20px]" style={{ minWidth: '24px' }}>📍</span>
              <div className="flex-1">
                <div className="font-inter text-[0.75rem] uppercase tracking-[0.1em] text-white/40 mb-1">Address</div>
                <div className="font-inter text-[0.95rem] font-light text-white">123 Creative Studio, NY 10001</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-10">
            {['IG', 'TW', 'LI'].map((social) => (
              <a key={social} href="#" className="glass-medium w-[44px] h-[44px] rounded-[12px] flex items-center justify-center font-inter text-[0.85rem] text-white hover:glass-accent hover:-translate-y-1 transition-all duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="glass-medium rounded-[24px] p-[clamp(48px,4vw,48px)_clamp(24px,3vw,40px)]" style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            borderRadius: '2px 2px 0 0',
            background: 'linear-gradient(90deg, #5E17EB, #FF007F, #FF6A3D)',
            marginLeft: '-48px',
            marginRight: '-48px',
            marginBottom: '24px',
            width: 'calc(100% + 96px)'
          }} />
          <form className="flex flex-col relative z-10" onSubmit={(e) => e.preventDefault()}>
            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-rgba(255,255,255,0.02) border border-white/[0.06] rounded-[14px] px-5 py-4 text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 focus:border-[#5E17EB]/40 focus:bg-rgba(255,255,255,0.03) focus:box-shadow-[0_0_0_3px_rgba(94,23,235,0.1),_0_0_16px_rgba(94,23,235,0.05),_inset_0_1px_0_rgba(94,23,235,0.08)] mb-5" style={{
              background: 'rgba(255,255,255,0.02)',
              borderColor: 'rgba(255,255,255,0.06)'
            }} 
            onFocus={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(94,23,235,0.4)';
              e.target.style.boxShadow = '0 0 0 3px rgba(94,23,235,0.1), 0 0 16px rgba(94,23,235,0.05), inset 0 1px 0 rgba(94,23,235,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.02)';
              e.target.style.borderColor = 'rgba(255,255,255,0.06)';
              e.target.style.boxShadow = 'none';
            }}
            />

            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full rounded-[14px] px-5 py-4 text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 mb-5" style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}
            onFocus={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(94,23,235,0.4)';
              e.target.style.boxShadow = '0 0 0 3px rgba(94,23,235,0.1), 0 0 16px rgba(94,23,235,0.05), inset 0 1px 0 rgba(94,23,235,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.02)';
              e.target.style.borderColor = 'rgba(255,255,255,0.06)';
              e.target.style.boxShadow = 'none';
            }}
            />

            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Subject</label>
            <input type="text" placeholder="Project Inquiry" className="w-full rounded-[14px] px-5 py-4 text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 mb-5" style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}
            onFocus={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(94,23,235,0.4)';
              e.target.style.boxShadow = '0 0 0 3px rgba(94,23,235,0.1), 0 0 16px rgba(94,23,235,0.05), inset 0 1px 0 rgba(94,23,235,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.02)';
              e.target.style.borderColor = 'rgba(255,255,255,0.06)';
              e.target.style.boxShadow = 'none';
            }}
            />

            <label className="font-inter text-[0.8rem] font-medium text-white/50 mb-2 block">Message</label>
            <textarea rows="5" placeholder="Tell us about your project..." className="w-full rounded-[14px] px-5 py-4 text-white font-inter text-[0.95rem] font-light outline-none transition-all duration-300 mb-5 resize-y" style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}
            onFocus={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(94,23,235,0.4)';
              e.target.style.boxShadow = '0 0 0 3px rgba(94,23,235,0.1), 0 0 16px rgba(94,23,235,0.05), inset 0 1px 0 rgba(94,23,235,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.02)';
              e.target.style.borderColor = 'rgba(255,255,255,0.06)';
              e.target.style.boxShadow = 'none';
            }}
            />

            <button type="submit" className="btn-primary-glass w-full mt-6 magnetic-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
