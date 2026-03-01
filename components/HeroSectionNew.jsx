'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import GlassCard from './GlassCard';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-[80px]">
      {/* Fractal Glass Gradient Background Texture */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fractal-glass-gradients-textures-3-medium-L2I866vVENcSd3rSlfaBGifxoWiY2v.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(5,0,10,0.85) 0%, rgba(5,0,10,0.75) 50%, rgba(5,0,10,0.85) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <div
            className="opacity-0"
            style={{
              animation: isVisible ? 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' : 'none',
            }}
          >
            {/* Eyebrow Badge */}
            <GlassCard
              tier="medium"
              className="w-fit mb-8 px-4 py-2.5 inline-flex items-center gap-3"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 6px var(--accent), 0 0 12px rgba(94,23,235,0.4)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              <span
                className="text-[0.75rem] font-inter uppercase tracking-widest font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                Premium Digital Agency
              </span>
            </GlassCard>

            {/* Main Heading */}
            <h1
              className="font-syne font-bold leading-tight mb-6"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: '1.05',
                background: 'linear-gradient(135deg, var(--text-primary) 0%, rgba(255,255,255,0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Crafting Digital Excellence
            </h1>

            {/* Description */}
            <p
              className="font-inter font-light leading-relaxed mb-10"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                maxWidth: '550px',
                lineHeight: '1.75',
              }}
            >
              We transform ambitious ideas into stunning digital experiences. From concept to execution, we bring creativity and precision to every project.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/contact">
                <button
                  className="px-8 py-4 rounded-full font-inter font-medium text-[1rem] transition-all duration-300 hover:-translate-y-1 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), #7B2FFF)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(94,23,235,0.3)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 16px rgba(94,23,235,0.3), 0 8px 32px rgba(94,23,235,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                >
                  Start a Project
                </button>
              </Link>
              <Link href="/work">
                <button
                  className="px-8 py-4 rounded-full font-inter font-medium text-[1rem] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--glass-bg)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  View Our Work
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div
            className="relative hidden lg:block opacity-0"
            style={{
              animation: isVisible ? 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards' : 'none',
              minHeight: '500px',
            }}
          >
            {/* Floating Glass Cards */}
            <GlassCard
              tier="soft"
              className="absolute top-0 right-0 w-[280px] p-6"
              style={{
                transform: 'rotate(3deg)',
                zIndex: 1,
                animation: 'float 5s ease-in-out infinite',
              }}
            >
              <div className="text-center">
                <div
                  className="text-4xl font-syne font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  150+
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Projects Completed
                </p>
              </div>
            </GlassCard>

            <GlassCard
              tier="strong"
              className="absolute bottom-20 left-0 w-[280px] p-6"
              style={{
                transform: 'rotate(-2deg)',
                zIndex: 2,
                animation: 'float 4s ease-in-out infinite 0.5s',
              }}
            >
              <div className="text-center">
                <div
                  className="text-4xl font-syne font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  12+
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Years of Excellence
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{
          animation: isVisible ? 'fade-up 0.8s ease 1.2s forwards' : 'none',
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Scroll to explore
          </span>
          <div
            className="w-[2px] h-6 rounded-full"
            style={{
              background: 'var(--accent)',
              animation: 'scroll-indicator 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        @keyframes scroll-indicator {
          0%, 100% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}
