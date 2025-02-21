import Link from "next/link";
import { Button } from "./moving-border";
import { Spotlight } from "./Spotlight";



function HeroSection() {

    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-mdflex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py=0"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="pt-20 relative z-10 w-full text-center">

                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400"> Gaurav Krrr</h1>
                <div className=" text-neutral-300 py-12 px-6 md:px-20 rounded-2xl shadow-2xl">
                  
                    <p className="font-normal text-base md:text-lg leading-8 tracking-wide max-w-3xl mx-auto text-center">
                        Hi, I'm <span className="text-teal-400 font-semibold">Gaurav Kumar</span>, a passionate
                        <span className="text-teal-400 font-semibold"> Full-Stack Web Developer</span> skilled in the
                        <span className="text-teal-400 font-semibold"> MERN stack</span> and always eager to explore new technologies. I love building
                        scalable web applications and solving real-world problems through clean and efficient code.
                    </p>
                    <p className="font-normal text-base md:text-lg leading-8 tracking-wide max-w-3xl mx-auto text-center mt-6">
                        I've worked on diverse projects, including a
                        <span className="text-amber-400 font-semibold"> QR-based Entry-Exit System</span> for universities, a
                        <span className="text-amber-400 font-semibold"> real-time chat web application</span>, and 
                        
                        I'm currently exploring <span className="text-amber-400 font-semibold"></span> and planning projects involving
                        <span className="text-amber-400 font-semibold"> real-time code collaboration tools</span> and
                        <span className="text-amber-400 font-semibold"> event management systems</span>.
                    </p>
                    {/* <p className="font-normal text-base md:text-lg leading-8 tracking-wide max-w-3xl mx-auto text-center mt-6">
                        With over <span className="text-green-400 font-semibold">300+ problems solved on LeetCode</span>, I continuously sharpen my problem-solving skills.
                        I also enjoy participating in coding competitions like
                        <span className="text-green-400 font-semibold"> TCS CodeVita</span>,
                        <span className="text-green-400 font-semibold"> TATA Crucible Campus Quiz</span>, and
                        <span className="text-green-400 font-semibold"> Flipkart Grid</span>.
                    </p> */}

                </div>
            </div>

        </div>
    )
}

export default HeroSection