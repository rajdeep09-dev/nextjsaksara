import { Syne, Inter } from 'next/font/google';
import './globals.css';
import GradientBackground from '@/components/GradientBackground';
import Preloader from '@/components/Preloader';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-syne'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'Akarsa',
  description: 'Akarsa Studio Pvt Ltd',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        <Preloader />
        <GradientBackground />
        <GlassNavbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
