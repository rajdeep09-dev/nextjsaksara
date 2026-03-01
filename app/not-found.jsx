import Link from 'next/link';
import GlassCard from '@/components/GlassCard';

export const metadata = {
  title: '404 - Page Not Found | AKARSA',
  description: 'The page you\'re looking for doesn\'t exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-[clamp(24px,6vw,100px)]">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl md:text-9xl font-bold font-syne mb-6" style={{ color: 'var(--accent)' }}>
          404
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold font-syne mb-4" style={{ color: 'var(--text-primary)' }}>
          Page Not Found
        </h1>
        
        <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-8 py-3 rounded-full font-medium text-white transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--accent), #7B2FFF)',
              boxShadow: '0 2px 12px rgba(94,23,235,0.3)',
            }}
          >
            Back Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
            }}
          >
            Get Help
          </Link>
        </div>
      </div>
    </div>
  );
}
