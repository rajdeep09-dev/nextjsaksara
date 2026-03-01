'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState('logo');
  const [progress, setProgress] = useState(0);
  const [gridExit, setGridExit] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('preloaderShown')) {
      setIsVisible(false);
      return;
    }

    const timings = {
      logoStart: 0,
      logoEnd: 400,
      barStart: 400,
      barEnd: 2200,
      taglineStart: 2000,
      taglineEnd: 2400,
      exitStart: 2400,
      exitEnd: 3400,
    };

    const timeline = [
      setTimeout(() => setPhase('bar'), timings.logoEnd),
      setTimeout(() => setPhase('tagline'), timings.taglineStart),
      setTimeout(() => setPhase('exit'), timings.taglineEnd),
      setTimeout(() => setGridExit(true), timings.exitStart),
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('preloaderShown', 'true');
      }, timings.exitEnd),
    ];

    if (phase === 'bar') {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + Math.random() * 40;
        });
      }, 14);

      return () => {
        clearInterval(progressInterval);
        timeline.forEach((t) => clearTimeout(t));
      };
    }

    return () => {
      timeline.forEach((t) => clearTimeout(t));
    };
  }, [phase]);

  if (!isVisible) return null;

  const companyName = 'AKARSA';

  return (
    <div className="fixed inset-0 z-[99999] bg-[var(--bg-base)] flex items-center justify-center overflow-hidden">
      {/* Logo Phase */}
      {(phase === 'logo' || phase === 'bar') && (
        <div className="text-center">
          <div className="mb-10">
            <div className="text-2xl md:text-4xl font-bold font-syne tracking-[0.4em] uppercase">
              {companyName.split('').map((char, idx) => (
                <span
                  key={idx}
                  className="inline-block"
                  style={{
                    opacity: phase === 'logo' ? 1 : 0,
                    transform:
                      phase === 'logo'
                        ? 'translateY(0) blur(0px)'
                        : 'translateY(20px) blur(4px)',
                    transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,
                    transitionDelay: `${idx * 50 + 200}ms`,
                    color: 'var(--text-primary)',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Loading Bar */}
          {phase === 'bar' && (
            <div className="flex flex-col items-center gap-5">
              <div className="w-[clamp(180px,30vw,260px)] h-[3px] bg-[var(--glass-border)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent-warm)] animate-gradient-shift"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    transition: 'width 0.3s ease-out',
                    boxShadow:
                      '0 0 12px rgba(94,23,235,0.4), 0 0 24px rgba(255,0,127,0.2)',
                    backgroundSize: '200% 100%',
                  }}
                />
              </div>
              <div
                className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase"
                style={{
                  color: 'var(--text-muted)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {String(Math.min(Math.floor(progress), 100)).padStart(3, '0')}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tagline Flash */}
      {phase === 'tagline' && (
        <div
          className="text-center text-xs md:text-sm font-light tracking-[0.2em] uppercase"
          style={{
            color: 'var(--text-muted)',
            animation: 'flash 0.4s ease-in-out forwards',
          }}
        >
          End-to-End Digital Solutions
        </div>
      )}

      {/* 3x3 Grid Exit */}
      {gridExit &&
        Array.from({ length: 9 }).map((_, idx) => {
          const row = Math.floor(idx / 3);
          const col = idx % 3;
          const directions = [
            { x: -100, y: -100 },
            { x: 0, y: -100 },
            { x: 100, y: -100 },
            { x: -100, y: 0 },
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: -100, y: 100 },
            { x: 0, y: 100 },
            { x: 100, y: 100 },
          ];
          const dir = directions[idx];

          return (
            <div
              key={idx}
              className="fixed bg-[var(--bg-base)]"
              style={{
                width: '33.333%',
                height: '33.333%',
                left: `${col * 33.333}%`,
                top: `${row * 33.333}%`,
                animation: `gridExit 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards`,
                animationDelay: `${idx * 100}ms`,
              }}
            />
          );
        })}

      <style jsx>{`
        @keyframes flash {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes gridExit {
          from {
            opacity: 1;
            transform: translate(0, 0);
          }
          to {
            opacity: 0;
            transform: translate(
              ${Array.from({ length: 9 }).map((_, i) => {
                const dirs = [
                  -100, 0, 100, -100, 0, 100, -100, 0, 100,
                ];
                return dirs[i];
              })[0]}%,
              ${Array.from({ length: 9 }).map((_, i) => {
                const dirs = [
                  -100, -100, -100, 0, 0, 0, 100, 100, 100,
                ];
                return dirs[i];
              })[0]}%
            );
          }
        }
      `}</style>
    </div>
  );
}
