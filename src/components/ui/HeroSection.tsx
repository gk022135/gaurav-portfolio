import Link from "next/link";
import { Button } from "./moving-border";
import { Spotlight } from "./Spotlight";

function HeroSection() {
    return (
        <div className="relative w-full h-auto md:h-[42rem] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 py-20">
            {/* Background Spotlight */}
            <Spotlight
                className="-top-40 left-0 md:left-40 md:-top-24 scale-150 opacity-40"
                fill="white"
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Title */}
                <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-slate-300 to-neutral-500 bg-clip-text text-transparent leading-tight tracking-wide drop-shadow-lg">
                    Gaurav Krrr
                </h1>

                {/* Card Style Description Box */}
                <div className="bg-black/70 dark:bg-zinc-900 border border-white/10 backdrop-blur-md mt-10 rounded-3xl px-6 py-10 md:px-16 md:py-12 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed md:leading-8 max-w-3xl mx-auto">
                        Hi, I'm <span className="text-teal-400 font-semibold">Gaurav Kumar</span>, a passionate 
                        <span className="text-teal-400 font-semibold"> Full-Stack Web Developer</span> skilled in the 
                        <span className="text-teal-400 font-semibold"> MERN stack</span>. I love building scalable apps and solving real-world problems through clean and efficient code.
                    </p>

                    <p className="text-neutral-400 text-base md:text-lg mt-6 leading-relaxed md:leading-8 max-w-3xl mx-auto">
                        I've worked on projects like a 
                        <span className="text-amber-400 font-semibold"> QR-based Entry-Exit System</span> for universities, a 
                        <span className="text-amber-400 font-semibold"> real-time chat web application</span>, and I'm currently exploring 
                        <span className="text-amber-400 font-semibold"> real-time code collaboration tools</span> and 
                        <span className="text-amber-400 font-semibold"> event management systems</span>.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="mt-10">
                    <Link href="https://www.linkedin.com/in/gauravkrrr/">
                        <button className="bg-gradient-to-tr from-teal-400 to-green-600 hover:from-teal-300 hover:to-green-500 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-teal-500/30">
                            View My LinkedIn 🚀
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
