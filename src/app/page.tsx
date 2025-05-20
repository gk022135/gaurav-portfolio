// app/page.tsx
import { NavbarDemo } from "@/components/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import All from "@/components/AllProject";
import { ThreeDCardDemo } from "@/components/Card3D";
import CardHelper from "@/components/Card3DHelper";
import { AnimatedTestimonialsDemo } from "@/components/Learn";
import TechMarquee from "@/components/AllLearn";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <Hero
      <HeroSection />
      <TechMarquee />

      <h1 className='flex text-5xl justify-center content-center font-bold antialiased bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 p-10'>
        Projects
      </h1>
      <All />
      <h1>Hello ji</h1>
      <Timeline />

      <h1 className='flex text-5xl justify-center content-center font-bold antialiased bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 p-4'>
        Coding Platforms
      </h1>
      <CardHelper />
      <AnimatedTestimonialsDemo />
      <Footer />
    </div>
  );
}
