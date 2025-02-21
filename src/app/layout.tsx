import type { Metadata } from "next";



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import All from "@/components/AllProject";
import { ThreeDCardDemo } from "@/components/Card3D";
import CardHelper from "@/components/Card3DHelper";
import { AnimatedTestimonialsDemo } from "@/components/Learn";
import TechMarquee from "@/components/AllLearn";
import Footer from "@/components/Footer";




export default function RootLayout({
  children,
}: Readonly<{  //typescript
  children: React.ReactNode; //react ka konsa type accept hoga
}>) {
  return (
    <html lang="en">
      <body 
      className="bg-black" 
      >
        <NavbarDemo />
        <HeroSection />
        <TechMarquee />

        <h1 className='flex text-5xl justify-center content-center font-bold antialiased bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 p-10'>Projects</h1>

        <All />

        <h1 className='flex text-5xl justify-center content-center font-bold antialiased bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 p-4'>Coding Platfroms</h1>


        <CardHelper />
        
        <AnimatedTestimonialsDemo />
        <Footer />
        
      </body>
    </html>
  );
}
