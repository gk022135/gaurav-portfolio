"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-black">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
                    <motion.h1
                        className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-gradient-to-tr from-[#d9d9d9] via-[#c0c0c0] to-[#a6a6a6] bg-clip-text text-transparent antialiased">
                            Gaurav Krrr
                        </span>
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg leading-8 text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hi there! 👋
                        I’m currently a pre-final year Computer Science Engineering student with a passion for building efficient and scalable software. I enjoy exploring full-stack development, solving algorithmic problems, and continuously learning new technologies to expand my skill set. I'm enthusiastic about working on impactful projects and collaborating with like-minded developers.


                    </motion.p>
                    <motion.div
                        className="mt-10 flex items-center gap-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="https://www.flowersandsaints.com.au"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="apple-button text-white"
                        >
                            Explore My Works
                        </a>
                        <Link href="#projects">
                            <button className="text-blue-700">Go to --</button>
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    className="mx-auto mt-16 lg:mt-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="relative">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
                            alt="Flowers & Saints design concept"
                            width={600}
                            height={600}
                            className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
