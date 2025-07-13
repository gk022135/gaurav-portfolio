// app/page.tsx
import { NavbarDemo } from "@/components/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import CardHelper from "@/components/Card3DHelper";
import { AnimatedTestimonialsDemo } from "@/components/Learn";
import TechMarquee from "@/components/AllLearn";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import Hero from "@/components/Hero";
import { FloatingElements } from "@/components/Bacground";
import { Projects } from "./projects/all-projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div>
      <FloatingElements />
      <NavbarDemo />
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full">
          <HeroSection />
        </div>
        <div className="w-1/2 h-full">
          <Hero />
        </div>
      </div>
      <Projects />

      
      <CardHelper />
      <Timeline />
      <AnimatedTestimonialsDemo />
      <TechMarquee />
      <Contact />
      <Footer />
    </div>
  );
}
