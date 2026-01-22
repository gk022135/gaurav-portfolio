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
    <div className="bg-black text-white relative">
      {/* Background */}
      <FloatingElements />

      {/* Navbar */}
      {/* <NavbarDemo /> */}

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl w-full px-6 text-center">
          <HeroSection />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full px-6 text-center">
          <Projects />
        </div>
      </section>

      {/* SKILLS / CARDS */}
      <section
        id="skills"
        className="py-24 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full px-6 text-center">
          <CardHelper />
          <div className="mt-12">
            <ToolsLearned />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        id="timeline"
        className="py-24 flex items-center justify-center"
      >
        <div className="max-w-5xl w-full px-6 text-center">
          <Timeline />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-24 flex items-center justify-center"
      >
        <div className="max-w-5xl w-full px-6 text-center">
          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* TECH */}
      <section
        id="tech"
        className="py-24 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full px-6 text-center">
          <TechMarquee />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 flex items-center justify-center"
      >
        <div className="max-w-4xl w-full px-6 text-center">
          <Contact />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex justify-center">
        <div className="max-w-6xl w-full px-6 text-center">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
