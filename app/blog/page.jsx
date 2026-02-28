import React from 'react';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — Akarsa',
  description: 'Insights & Inspiration from Akarsa Studio',
};

export default function BlogPage() {
  const articles = [
    {
      title: "The Zero Law Era: Decoding the Data Behind Why Traditi...",
      excerpt: "At Akarsa, our mission is to seek truth in marketing. And the truth, according to our latest market analyses, is that the tradi...",
      image: "/blog/Blog 1.svg",
      author: "Akarsa Team",
      date: "Oct 10,2025"
    },
    {
      title: "When Philosophy Meets Branding: The Untold Power ...",
      excerpt: "In the dynamic chaos of the Zero Law Era – a world where old rules crumble and authenticity reigns – what truly separate...",
      image: "/blog/Blog 2.svg",
      author: "Akarsa Team",
      date: "Oct 10,2025"
    },
    {
      title: "Beyond Trends: Can Authenticity Go Viral? A Per...",
      excerpt: "The modern digital landscape is a relentless storm of manufactured moments. Influencer campaigns, paid tre...",
      image: "/blog/Blog 3.svg",
      author: "Akarsa Team",
      date: "Oct 10,2025"
    }
  ];

  return (
    <>
      <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '800', color: 'white' }}>
          Blog
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '20px auto 0' }}>
          Insights & Inspiration
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 80px' }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <AnimateOnScroll key={i} animation="fade-up" delay={i * 0.1}>
            <article style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>{article.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '24px' }}>{article.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Image src="/akarsa.png" alt="Author" width={32} height={32} style={{ borderRadius: '50%' }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: '500' }}>By {article.author}</div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{article.date}</div>
                  </div>
                </div>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll animation="fade-up">
        <CTASection />
      </AnimateOnScroll>
    </>
  );
}
