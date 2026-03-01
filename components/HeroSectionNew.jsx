'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import GlassCard from './GlassCard';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const animationStyle = (delay) => ({
    animation: isVisible ? `fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay} forwards` : 'none',
  });

  return (
    <section className="hero-section">
      <div
        className="hero-bg-image"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fractal-glass-gradients-textures-3-medium-L2I866vVENcSd3rSlfaBGifxoWiY2v.jpg)',
        }}
      />

      <div className="hero-bg-overlay" />

      <div className="hero-content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="hero-left-column" style={animationStyle('0.3s')}>
            <GlassCard tier="medium" className="hero-eyebrow-badge">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">
                Premium Digital Agency
              </span>
            </GlassCard>

            <h1 className="hero-heading">
              Crafting Digital Excellence
            </h1>

            <p className="hero-description">
              We transform ambitious ideas into stunning digital experiences. From concept to execution, we bring creativity and precision to every project.
            </p>

            <div className="hero-cta-buttons">
              <Link href="/contact">
                <button className="hero-cta-primary">
                  Start a Project
                </button>
              </Link>
              <Link href="/work">
                <button className="hero-cta-secondary">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>

          <div className="hero-right-column" style={animationStyle('0.6s')}>
            <GlassCard tier="soft" className="hero-floating-card hero-floating-card-1">
              <div className="hero-card-content">
                <div className="hero-card-stat">150+</div>
                <p className="hero-card-label">Projects Completed</p>
              </div>
            </GlassCard>

            <GlassCard tier="strong" className="hero-floating-card hero-floating-card-2">
              <div className="hero-card-content">
                <div className="hero-card-stat">12+</div>
                <p className="hero-card-label">Years of Excellence</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" style={animationStyle('1.2s')}>
        <div className="hero-scroll-indicator-content">
          <span className="hero-scroll-indicator-text">Scroll to explore</span>
          <div className="hero-scroll-indicator-line" />
        </div>
      </div>
    </section>
  );
}
