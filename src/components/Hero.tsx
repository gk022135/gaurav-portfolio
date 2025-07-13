"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
    return (

        <div className="relative isolate overflow-hidden bg-base-100 h-screen">
            <div className="mx-auto mt-0 flex h-full max-w-7xl flex-col-reverse items-center justify-center px-6 py-10 lg:flex-row lg:items-center lg:gap-x-10 lg:px-8">
                {/* Left Content (Text or Other Stuff) */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Being a Programmer....
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                       It is literally true that you can succeed best and quickest by helping others to succeed.
                    </p>
                </div>

                {/* Right Image with Animation */}
                <motion.div
                    className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
                        alt="Flowers & Saints design concept"
                        width={600}
                        height={600}
                        className="w-[300px] md:w-[400px] lg:w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
                    />
                </motion.div>
            </div>
        </div>

    )
}
