import React from 'react';

export default function GlassCard({
  children,
  tier = 'medium',
  hover = true,
  className = '',
  as: Component = 'div',
  glow = false,
}) {
  const tierClass = `glass-${tier}`;
  const hoverClass = hover ? 'glass-card-hover' : '';

  return (
    <Component
      className={`relative rounded-[20px] ${tierClass} ${hoverClass} ${className}`}>
      <div className="glass-card-noise" />
      <div className="glass-card-highlight" />
      {glow && <div className="glass-card-glow" />}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
