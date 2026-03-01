import { Inter, Syne } from "next/font/google";
import "./globals.css";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import CursorFollower from "@/components/CursorFollower";
import MagneticButtonManager from "@/components/MagneticButtonManager";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata = {
  title: "AKARSA | Creative Agency",
  description: "A premium creative agency delivering bold digital experiences that demand attention. Editorial design meets brutalist web experiences.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
    minimumScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${syne.variable} bg-[#05000A] text-white min-h-screen relative font-inter overflow-x-hidden selection:bg-[#5E17EB] selection:text-white`}>
        <ScrollProgress />
        <Preloader />
        <CustomCursor />
        <CursorFollower />
        <MagneticButtonManager />
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#5E17EB] opacity-[0.15] blur-[120px] mix-blend-screen animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#FF007F] opacity-[0.12] blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#5E17EB] opacity-[0.1] blur-[150px] mix-blend-screen animate-blob animation-delay-4000"></div>
        </div>
        <GlassNavbar />
        <main className="relative z-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
