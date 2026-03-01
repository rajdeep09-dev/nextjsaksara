import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import BigStatementSection from '../components/BigStatementSection'
import PortfolioSection from '../components/PortfolioSection'
import ProcessSection from '../components/ProcessSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import CTASection from '../components/CTASection'
import LogoMarquee from '../components/LogoMarquee'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-start min-h-screen">
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <ServicesSection />
      <BigStatementSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </main>
  )
}
