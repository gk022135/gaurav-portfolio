// components/About.tsx
import Image from "next/image";
import profilepic from "../../Assets/Gaurav Profile bst.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-black to-zinc-900 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10">About</h2>
        <div className="h-px w-full bg-white/10 mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-14">
          {/* Left Profile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative w-44 h-44 rounded-full overflow-hidden border border-white/10 mb-6">
              <Image
                src={profilepic} // replace with your image
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold">Gaurav</h3>
            <p className="text-sm text-white/60 mt-1">
              Software Engineer
            </p>
            <p className="text-sm text-white/50">
              Full-Stack Developer(Backend Focused)
            </p>
            <p className="text-sm text-white/50">
              gk022135@gmail.com
            </p>
            <p className="text-sm text-white/50">
              +91 7295976697
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              A passionate software engineer focused on building scalable,
              reliable, and user-centric digital products. I enjoy solving
              complex problems, learning new technologies, and turning ideas
              into production-ready systems.
            </p>

            <p>
              Currently, I’m a <span className="text-white font-medium">
                Computer Science student
              </span>{" "}
              with hands-on experience in building modern web applications
              using React, Next.js, Node.js, and TypeScript.
            </p>

            <p>
              I’ve worked on projects involving authentication systems,
              REST APIs, databases, and performance-optimized frontends.
              I’m particularly interested in system design, backend
              architecture, and cloud-native development.
            </p>

            <p>
              Outside of development, I actively learn by building side
              projects, exploring DevOps tools, and strengthening my
              problem-solving skills through DSA and real-world system
              design.
            </p>

            {/* Resume Button */}
            <div className="pt-4">
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRmzn8bmRglYrBDDf7kKiY0pw1kO-vkXfNcJ78tK9vgWAPwfudtLHwoKmNq5n3_fw/pub"
                target="_blank"
                className="inline-block rounded-lg border border-white/20 px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition"
              >
                Resume
              </a>
            </div>

            {/* Skills */}
            <div className="pt-10">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Skills
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                  "Git",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
