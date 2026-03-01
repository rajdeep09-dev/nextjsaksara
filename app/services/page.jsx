import PageTransition from '@/components/PageTransition';
import ServicesFull from '@/components/ServicesFull';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Services | AKARSA - Digital Agency',
  description: 'Explore our 9 specialized digital services designed to bring your vision to life.',
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesFull />
      <CTASection />
    </PageTransition>
  );
}
