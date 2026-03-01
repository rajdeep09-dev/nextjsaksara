'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const services = [
  {
    id: 'graphic-design',
    icon: '🎨',
    number: '01',
    name: 'Graphic Design',
    description: 'From logos to marketing collateral, we design visual identities that tell your brand\'s story with clarity and impact.',
    tags: ['Logo Design', 'Brand Identity', 'Marketing Collateral', 'Visual Design'],
  },
  {
    id: 'web-development',
    icon: '💻',
    number: '02',
    name: 'Web Development',
    description: 'We build responsive, user-friendly, and SEO-optimized websites that enhance user experience and drive conversions.',
    tags: ['Responsive Design', 'SEO', 'UI/UX', 'Performance'],
  },
  {
    id: 'web-maintenance',
    icon: '🔧',
    number: '03',
    name: 'Web Maintenance',
    description: 'Keep your website secure, fast, and up to date with our ongoing maintenance and support services.',
    tags: ['Security', 'Updates', 'Performance', 'Support'],
  },
  {
    id: 'branding-strategy',
    icon: '🎯',
    number: '04',
    name: 'Branding & Strategy',
    description: 'We craft brand strategies that connect emotionally with your audience and position your business for long-term success.',
    tags: ['Brand Strategy', 'Positioning', 'Audience Research', 'Identity'],
  },
  {
    id: 'digital-marketing',
    icon: '📈',
    number: '05',
    name: 'Digital Marketing',
    description: 'Boost your online presence with our data-driven campaigns in SEO, social media, and performance marketing.',
    tags: ['SEO', 'Social Media', 'PPC', 'Analytics'],
  },
];

export default function ServicesPreview() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="py-20 md:py-32 px-[clamp(24px,6vw,100px)]">
      <div className="max-w-7xl mx-auto mb-16">
        <SectionHeading
          subheading="What We Do"
          heading="End-to-End Digital Solutions"
          gradientWord="Digital"
          description="We offer 9 specialized services to bring your vision to life."
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className="mb-0">
            <div
              className="flex items-center justify-between py-6 md:py-8 px-0 cursor-pointer group transition-all"
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              <div className="flex items-center gap-4 md:gap-6 flex-1">
                <div className="text-3xl md:text-4xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <GlassCard
                    tier="soft"
                    className="w-fit px-3 py-1 mb-2 text-xs font-medium md:text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {service.number}
                  </GlassCard>
                  <h3
                    className="text-xl md:text-3xl font-bold font-syne uppercase tracking-tight transition-all group-hover:text-[var(--accent)]"
                    style={{
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {service.name}
                  </h3>
                </div>
              </div>
              <div
                className="text-2xl transition-transform flex-shrink-0 group-hover:translate-x-1 group-hover:rotate-45"
                style={{ color: 'var(--text-muted)' }}
              >
                →
              </div>
            </div>

            {/* Expanded Content */}
            {expandedId === service.id && (
              <GlassCard tier="soft" className="p-6 md:p-8 mb-4 animate-in fade-in duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p
                      className="text-base md:text-lg leading-relaxed mb-6"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <GlassCard
                          key={tag}
                          tier="accent"
                          className="px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </GlassCard>
                      ))}
                    </div>
                  </div>
                  <div
                    className="h-40 md:h-48 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, var(--gradient-blob-${(index % 3) + 1}), transparent)`,
                      opacity: 0.2,
                    }}
                  />
                </div>
              </GlassCard>
            )}

            {/* Divider */}
            {index < services.length - 1 && (
              <div
                style={{
                  height: '1px',
                  background: 'var(--glass-border)',
                  margin: '0',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="max-w-5xl mx-auto mt-12 md:mt-16">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-lg font-medium transition-all hover:translate-x-1"
          style={{ color: 'var(--accent)' }}
        >
          View All 9 Services →
        </Link>
      </div>
    </section>
  );
}
