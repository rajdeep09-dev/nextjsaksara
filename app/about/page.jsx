import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'About | AKARSA - Digital Agency',
  description: 'Learn about AKARSA, our team, mission, and the values that drive our work.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-[clamp(24px,6vw,100px)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subheading="About Us"
            heading="We Design Digital Excellence"
            gradientWord="Excellence"
            description="AKARSA is a premium creative agency dedicated to delivering bold, innovative digital experiences that demand attention."
          />

          <div className="grid md:grid-cols-2 gap-16 mt-20">
            <div>
              <h3 className="text-xl font-bold font-syne mb-6 uppercase" style={{ color: 'var(--text-primary)' }}>
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We believe great design is more than aesthetics—it's about solving problems, telling stories, and creating meaningful connections between brands and their audiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-syne mb-6 uppercase" style={{ color: 'var(--text-primary)' }}>
                Our Approach
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We combine strategic thinking with creative excellence and technical mastery. Every project is an opportunity to push boundaries and deliver something truly extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  );
}
