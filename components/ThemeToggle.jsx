'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-[44px] h-[24px] rounded-full border transition-all duration-300"
      style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      aria-label="Toggle theme"
    >
      {/* Toggle circle */}
      <div
        className="absolute top-[2px] w-[18px] h-[18px] rounded-full transition-all duration-400"
        style={{
          left: theme === 'dark' ? '2px' : '22px',
          background: theme === 'dark' ? '#FFFFFF' : '#FFB800',
          boxShadow: theme === 'dark' 
            ? '0 0 8px rgba(255,255,255,0.3)' 
            : '0 0 8px rgba(255,184,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </div>
    </button>
  );
}
