"use client"
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Code, Star, Calendar, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

import chat from '../../Assets/chat-app.png'
import QrScan from '../../Assets/Qr-scan.png';
import ShopEase from '../../Assets/produc-java.png';
import CodeCollab from '../../Assets/collaborative-coding.jpg';
import smvdex from '../../Assets/smvdex-home.png'
import todo from '../../Assets/todo.png'

export const Projects = () => {
    const projects = [
        {
            title: "smvdeX",
            description: "Full-stack educational web-based solution with React, Node.js, and MongoDB",
            tech: ["React", "Node.js", "MongoDB", "Express","Redis", "Nodemailer"],
            image: smvdex,
            github: "https://github.com/gk022135/01_project",
            live: "projects/SmvDex"
        },
        {
            title: "QR Entry-Exit System",
            description: "We avoid the mannual making log when use make entry exit from University gate (MERN)",
            tech: ["React", "API Integration", "CSS3"],
            image: QrScan,
            github: "https://github.com/gk022135",
            live: "projects/Qr-system"
        },
        {
            title: "ShopeEase",
            description: "A DeskTop App which grocery shop owner to keep track of utitlies and their suppliers",
            tech: ["React", "Firebase", "Tailwind CSS"],
            image: ShopEase,
            github: "https://github.com/gk022135",
            live: "#"
        },
        {
            title: "Web Chat",
            description: "online chating web app where anyomously anyone can make chat",
            tech: ["reactjs", "redux", "tailwindcss", "nodejs", "websocket"],
            image: chat,
            gtihub: 'https://github.com/gk022135',
            live: "projects/chat-app"
        },
        {
            title: "Shop :- ecommerce",
            description: "Get the experrenc on e-commerce how they work, how redux toolkit is used for adding product cart",
            tech: ["reactjs", "redux", "tailwindcss", "nodejs", "mongodb"],
            image: CodeCollab,
            github: 'https://my-shop-app.vercel.app/',
            live: ""
        },

        {
            title: "Todo app",
            description: "Keep track of your own working, feature like timmer, progress bar etc",
            tech: ["reactjs", "redux", "tailwindcss", "nodejs", "mongodb"],
            image: todo,
            github: 'https://github.com/gk022135',
            live: "projects/Todo"
        }
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
                            <img src={typeof project.image === 'string' ? project.image : project.image.src} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a href={project.github} className="flex items-center text-gray-300 hover:text-white transition-colors">
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </a>
                                    <a href={project.live} className="flex items-center text-gray-300 hover:text-white transition-colors">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}