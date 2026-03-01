import React from 'react';

const tierStyles = {
  whisper: {
    background: 'rgba(var(--glass-bg-rgb), 0.3)',
    backdropFilter: 'blur(8px)',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 4px 12px var(--shadow-color)',
  },
  soft: {
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(16px)',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 8px 32px var(--shadow-color)',
  },
  medium: {
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(var(--glass-border-rgb), 1.3)',
    boxShadow: '0 8px 32px var(--shadow-color), inset 0 1px 0 rgba(255,255,255,0.06)',
  },
  strong: {
    background: 'var(--glass-strong-bg)',
    backdropFilter: 'blur(32px) saturate(1.2)',
    border: '1px solid var(--glass-strong-border)',
    boxShadow: '0 16px 48px var(--shadow-color), inset 0 1px 0 rgba(255,255,255,0.08)',
  },
  accent: {
    background: 'rgba(94,23,235,0.08)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(94,23,235,0.15)',
    boxShadow: '0 8px 32px rgba(94,23,235,0.1), inset 0 1px 0 rgba(94,23,235,0.15)',
  },
};

export default function GlassCard({
  children,
  tier = 'medium',
  hover = true,
  className = '',
  as: Component = 'div',
  glow = false,
  tilt = false,
}) {
  const baseStyle = tierStyles[tier] || tierStyles.medium;

  const hoverStyle = hover ? {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  } : {};

  return (
    <Component
      className={`relative rounded-[20px] ${className}`}
      style={{
        ...baseStyle,
        WebkitBackdropFilter: baseStyle.backdropFilter,
        ...hoverStyle,
      }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{
          background: 'repeating-radial-gradient(circle at 1px 1px, transparent 0, rgba(255,255,255,0.02) 1px)',
          backgroundSize: '3px 3px',
          opacity: 0.3,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Top highlight */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none rounded-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
        }}
      />

      {/* Glow effect */}
      {glow && (
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(94,23,235,0.1) 0%, transparent 60%)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
