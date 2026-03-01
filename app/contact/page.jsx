import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Contact | AKARSA - Digital Agency',
  description: 'Get in touch with AKARSA. We\'re ready to discuss your next project.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-[clamp(24px,6vw,100px)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subheading="Get In Touch"
            heading="Let's Start Something Together"
            gradientWord="Together"
            description="We'd love to hear from you. Reach out and let's discuss your next big project."
          />

          <div className="grid md:grid-cols-2 gap-16 mt-20">
            <div>
              <h3 className="text-xl font-bold font-syne mb-6 uppercase" style={{ color: 'var(--text-primary)' }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium uppercase mb-2" style={{ color: 'var(--accent)' }}>Email</p>
                  <p style={{ color: 'var(--text-secondary)' }}>hello@akarsa.com</p>
                </div>
                <div>
                  <p className="text-sm font-medium uppercase mb-2" style={{ color: 'var(--accent)' }}>Phone</p>
                  <p style={{ color: 'var(--text-secondary)' }}>+91 8109801383</p>
                </div>
                <div>
                  <p className="text-sm font-medium uppercase mb-2" style={{ color: 'var(--accent)' }}>Location</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Indore, India</p>
                </div>
              </div>
            </div>

            <GlassCard tier="medium" className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-medium text-white transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), #7B2FFF)',
                    boxShadow: '0 2px 12px rgba(94,23,235,0.3)',
                  }}
                >
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  );
}
