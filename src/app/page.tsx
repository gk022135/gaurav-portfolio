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
import { Projects } from "./projects/page";
import { Contact } from "@/components/contact";
import ToolsLearned from "@/components/Tool-learn";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Background */}
      <FloatingElements />

      {/* Navbar */}
      {/* <NavbarDemo /> */}

      {/* HERO */}
      <section id="home" className="min-h-screen">
        <div className="flex w-full h-screen">
          {/* Left */}
          <div className="h-full">
            <HeroSection />
          </div>

          {/* Right */}
          <div className="right-0 w-1/2 h-full hidden sm:block">
            <Hero />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <Projects />
      </section>

      {/* CARDS */}
      <section id="skills" className="py-24">
        <CardHelper />
        <ToolsLearned />
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24">
        <Timeline />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24">
        <AnimatedTestimonialsDemo />
      </section>

      {/* TECH */}
      <section id="tech" className="py-24">
        <TechMarquee />
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
