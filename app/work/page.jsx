import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Work | AKARSA - Digital Agency',
  description: 'Explore our portfolio of award-winning digital projects that blend innovation with functionality.',
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-[clamp(24px,6vw,100px)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subheading="Our Work"
            heading="Projects That Speak for Themselves"
            gradientWord="Speak"
            description="A showcase of our best work across web, design, and digital experiences."
          />
        </div>
      </section>
      <CTASection />
    </PageTransition>
  );
}
