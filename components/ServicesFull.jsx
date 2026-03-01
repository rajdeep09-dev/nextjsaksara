'use client';

import { useState } from 'react';
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
  {
    id: 'video-composition',
    icon: '🎬',
    number: '06',
    name: 'Video Composition',
    description: 'Engage your audience through story-driven video content that elevates your brand communication.',
    tags: ['Video Production', 'Motion Graphics', 'Storytelling', 'Content'],
  },
  {
    id: 'creative-ai',
    icon: '🤖',
    number: '07',
    name: 'Creative AI Collaboration',
    description: 'We integrate AI creativity tools to co-design innovative solutions that push boundaries and spark new possibilities.',
    tags: ['AI Tools', 'Innovation', 'Automation', 'Creative Tech'],
  },
  {
    id: 'cultural-strategy',
    icon: '🌍',
    number: '08',
    name: 'Cultural Strategy',
    description: 'Helping brands align with cultural trends and audience behavior to create authentic, relatable campaigns.',
    tags: ['Cultural Trends', 'Audience Behavior', 'Authenticity', 'Campaigns'],
  },
  {
    id: 'something-undefined',
    icon: '✨',
    number: '09',
    name: 'Something Undefined',
    description: 'We love challenges. Share your unique idea and let\'s create something extraordinary together.',
    tags: ['Custom Projects', 'Innovation', 'Collaboration', 'Beyond Boundaries'],
  },
];

export default function ServicesFull() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="py-20 md:py-32 px-[clamp(24px,6vw,100px)]">
      <div className="max-w-7xl mx-auto mb-20">
        <SectionHeading
          subheading="All Services"
          heading="Our Complete Service Offerings"
          gradientWord="Service"
          description="Nine specialized services to bring your vision to life"
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {services.map((service) => (
          <div key={service.id}>
            <div
              className="flex items-center justify-between py-8 md:py-10 px-0 cursor-pointer group"
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              <div className="flex items-center gap-6 flex-1">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <div
                    className="text-sm font-medium opacity-50 transition-colors group-hover:opacity-100"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {service.number}
                  </div>
                  <h3
                    className="text-2xl md:text-4xl font-bold font-syne uppercase tracking-tight transition-all group-hover:text-[var(--accent)]"
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
                className="text-2xl transition-transform group-hover:translate-x-1 group-hover:rotate-45"
                style={{ color: 'var(--text-muted)' }}
              >
                →
              </div>
            </div>

            {/* Expanded Content */}
            {expandedId === service.id && (
              <GlassCard tier="soft" className="p-8 md:p-10 mb-4 animate-in fade-in duration-300">
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
                    className="h-48 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, var(--gradient-blob-${(services.indexOf(service) % 3) + 1}), transparent)`,
                      opacity: 0.3,
                    }}
                  />
                </div>
              </GlassCard>
            )}

            {/* Divider */}
            {services.indexOf(service) < services.length - 1 && (
              <div
                style={{
                  height: '1px',
                  background: 'var(--glass-border)',
                  margin: '0 0 0 0',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
