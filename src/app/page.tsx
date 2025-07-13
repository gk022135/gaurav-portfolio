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
import ToolsLearned from "@/components/Tool-learn";

export default function Home() {
  return (
    <div>
      <FloatingElements />
      <NavbarDemo />
      <div>
        <FloatingElements />
        <NavbarDemo />

        <div className="flex w-full h-screen">
          {/* Left Side: Always visible */}
          <div className="h-full">
            <HeroSection />
          </div>

          {/* Right Side: Hidden on small screens */}
          <div className="right-0 w-1/2 h-full hidden sm:block">
            <Hero />
          </div>
        </div>
      </div>

      <Projects />


      <CardHelper />
      <ToolsLearned />
      <Timeline />
      <AnimatedTestimonialsDemo />
      <TechMarquee />
      <Contact />
      <Footer />
    </div>
  );
}
