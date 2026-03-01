import { Inter, Syne } from "next/font/google";
import "./globals.css";
import GlassNavbar from "../components/GlassNavbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import CursorFollower from "../components/CursorFollower";
import { PreloaderProvider } from "../components/context/PreloaderContext";
import Preloader from "../components/Preloader";
import GradientBackground from "../components/GradientBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });

export const metadata = {
  title: "Akarsa | Digital Solutions Agency",
  description: "A creative and digital solutions agency that believes in redefining how brands communicate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth text-selection-accent`}>
      <body className="bg-[#05000A] text-white antialiased relative min-h-screen flex flex-col hide-scrollbar overflow-x-hidden">
        <PreloaderProvider>
          <GradientBackground />
          <Preloader />
          <CursorFollower />
          <GlassNavbar />
          <main className="flex-grow pt-[80px]">
            {children}
          </main>
          <ScrollToTop />
        </PreloaderProvider>
      </body>
    </html>
  );
}
