import Link from "next/link";


import { Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Code, Star, Calendar, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center relative px-4">
            <div className="text-center mt-0 max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl font-bold">
                        GK
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Gaurav Kumar
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Full Stack Developer & Problem Solver
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                            React/Nextjs Developer
                        </span>
                        <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                            Backend Developer
                        </span>
                        <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
                            Problem Solver
                        </span>
                    </div>
                </div>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/gk022135" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/gauravkrrr/" className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/gaurav_krr/" className="p-3 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="https://x.com/Gaurav__krrr" className="p-3 bg-blue-400 hover:bg-blue-500 rounded-full transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
                <div className="mt-12 animate-bounce">
                    <ChevronDown size={32} className="mx-auto text-gray-400" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
