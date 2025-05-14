'use client';

import React from 'react';
import Image from 'next/image';
import smvdex from '../../../Assets/smvdex-home.png';
import feature from '../../../Assets/smvdex-feat.png';

const Smvdex: React.FC = () => {
    return (
        <section className="min-h-screen w-full px-4 md:px-20 py-16 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
            {/* Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-teal-400">SMVDEX</h1>
                <p className="mt-4 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
                    A smart QR-based Entry-Exit system designed to enhance campus security and streamline student tracking.
                </p>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center mb-12">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-teal-500/20 border border-zinc-800 max-w-4xl w-full">
                    <Image
                        src={smvdex}
                        alt="SMVDEX Home"
                        className="w-full h-auto object-cover"
                        placeholder="blur"
                    />
                </div>
            </div>

            {/* Description Section */}
            <div className="max-w-5xl mx-auto text-base md:text-lg leading-8 text-neutral-300 space-y-6 px-2">
                <p>
                    <span className="text-teal-400 font-semibold">SMVDEX</span> (Shri Mata Vaishno Devi Entry & Exit System) is a secure web-based application tailored for universities to monitor student movement through QR code scanning.
                    It replaces traditional manual log books and saves time while maintaining a secure, verifiable digital record.
                </p>

                <p>
                    Students simply scan a QR code displayed at the gate, and their details are recorded in real-time.
                    The system ensures <span className="text-amber-400 font-semibold">data integrity</span>, supports admin dashboards, and can scale to include attendance and analytics.
                </p>

                <p>
                    It was built using the <span className="text-teal-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js), making it a highly responsive and scalable solution.
                </p>
            </div>

            {/* Features Image */}
            <div className="flex justify-center mt-16">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-amber-500/20 border border-zinc-800 max-w-4xl w-full">
                    <Image
                        src={feature}
                        alt="SMVDEX Features"
                        className="w-full h-auto object-cover"
                        placeholder="blur"
                    />
                </div>
            </div>

            {/* Tech Stack + Link */}
            <div className="mt-20 max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">🚀 Tech Stack</h2>
                <p className="text-neutral-400 text-md">
                    ReactJS • Node.js • Express • MongoDB • TailwindCSS • QR Code Scanner API
                </p>

                <a
                    href="https://frontend-uniator.vercel.app/" // Replace with actual deployed link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-medium transition"
                >
                    Visit Project
                </a>
            </div>
        </section>
    );
};

export default Smvdex;
