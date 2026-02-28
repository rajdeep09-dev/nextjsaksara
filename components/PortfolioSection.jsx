'use client';

import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'Blossom E-Commerce Website',
      desc: 'We developed a fully responsive and SEO-optimized e-commerce platform for Blossom Essentials, designed to offer a smooth and intuitive shopping experience with strong branding and modern UI.',
      img: '/W1.svg',
      tag: 'Web Development',
    },
    {
      title: 'Aurora Branding Identity',
      desc: 'Complete brand system for Aurora — logo family, color systems, and visual language that elevated their presence across digital and print platforms.',
      img: '/W2.svg',
      tag: 'Branding',
    },
    {
      title: 'Nexa Digital Campaign',
      desc: 'Data-driven digital marketing campaign combining social, performance ads and creative content that improved visibility and conversions for Nexa.',
      img: '/Nexa Digital Campaign.svg',
      tag: 'Digital Marketing',
    },
    {
      title: 'Studio Showreel & Production',
      desc: 'Video production & showreel for a creative studio — story-driven short-form content that boosted engagement across socials.',
      img: '/Aurora Branding Identity.svg', // using the available asset from text extract
      tag: 'Video Production',
    }
  ];

  return (
    <div
      style={{
        paddingTop: 'clamp(80px, 12vw, 160px)',
        paddingBottom: 'clamp(80px, 12vw, 160px)',
      }}
      id="portfolio"
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            color: '#5E17EB',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8rem',
            fontWeight: '500',
            letterSpacing: '0.15em',
            marginBottom: '16px',
          }}
        >
          OUR WORK
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: 'white',
          }}
        >
          Showcasing Our Creative Excellence
        </h2>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mb-6">
          {projects.slice(0, 2).map((project, index) => (
            <AnimateOnScroll key={index} animation="scale-in" delay={index * 0.15}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  const img = e.currentTarget.querySelector('.portfolio-img');
                  if (img) img.style.transform = 'scale(1.06)';
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'translateY(0)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  const img = e.currentTarget.querySelector('.portfolio-img');
                  if (img) img.style.transform = 'scale(1)';
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) {
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'translateY(10px)';
                  }
                }}
              >
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                  <Image
                    className="portfolio-img"
                    src={project.img}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div
                    className="hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: '0',
                      background: 'rgba(5,0,10,0.65)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transform: 'translateY(10px)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      View Project <span>→</span>
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px', flexGrow: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'white',
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      color: 'rgba(255,255,255,0.35)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginTop: '6px',
                    }}
                  >
                    {project.tag}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
          {projects.slice(2, 4).map((project, index) => (
            <AnimateOnScroll key={index} animation="scale-in" delay={index * 0.15}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  const img = e.currentTarget.querySelector('.portfolio-img');
                  if (img) img.style.transform = 'scale(1.06)';
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'translateY(0)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  const img = e.currentTarget.querySelector('.portfolio-img');
                  if (img) img.style.transform = 'scale(1)';
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) {
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'translateY(10px)';
                  }
                }}
              >
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                  <Image
                    className="portfolio-img"
                    src={project.img}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div
                    className="hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: '0',
                      background: 'rgba(5,0,10,0.65)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transform: 'translateY(10px)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      View Project <span>→</span>
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px', flexGrow: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'white',
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      color: 'rgba(255,255,255,0.35)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginTop: '6px',
                    }}
                  >
                    {project.tag}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
