"use client"

import css from '../Assets/Css.jpg'  //
import Docker from '../Assets/Docker.jpeg' //
import Express from '../Assets/Express.png'
import Java from '../Assets/Java.jpg'
import Kafka from '../Assets/Kafka.jpeg';
import MongD from '../Assets/MongoDb.jpeg'
import NextJS from '../Assets/NextJs.png';  //
import Node from '../Assets/NodeJS.jpg'  //
import postman from '../Assets/Postman.png'
import Reactjs from '../Assets/React.jpeg'  //
import Tailwind from '../Assets/Tailwind.jpeg'  //
import Typescript from '../Assets/TypeScript.jpeg'


import React from "react";
import { Wrench, Code, BrainCircuit } from "lucide-react";

const tools = [
    {
        name: "React.js",
        type: "Library",
        icon: <Code className="text-blue-500 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "C++",
        type: "Programming Language",
        icon: <Code className="text-gray-500 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
        name: "JavaScript",
        type: "Programming Language",
        icon: <Code className="text-yellow-500 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        name: "Git & GitHub",
        type: "Version Control",
        icon: <Wrench className="text-orange-500 w-6 h-6" />,
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
        name: "Data Structures & Algorithms",
        type: "Concept",
        icon: <BrainCircuit className="text-purple-600 w-6 h-6" />,
        image: "https://cdn-icons-png.flaticon.com/512/2621/2621129.png",
    },
    {
        name: "Next.js",
        type: "Library",
        icon: <Code className="text-black w-6 h-6" />,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU35VFdX4bKh340YaH9n58oyTRg_EPP0mOQREhZ4M&usqp=CAE&s",
    },
    {
        name: "CSS",
        type: "Framework",
        icon: <Code className="text-blue-500 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
    },
    {
        name: "Tailwind",
        type: "CSS Framework",
        icon: <Code className="text-teal-500 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
        name: "Docker",
        type: "Container",
        icon: <Code className="text-blue-400 w-6 h-6" />,
        image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    },
    {
        name: "Express",
        type: "Server",
        icon: <Wrench className="text-gray-700 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
        name: "Java",
        type: "Language",
        icon: <BrainCircuit className="text-red-500 w-6 h-6" />,
        image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
        name: "Kafka",
        type: "Automation",
        icon: <Code className="text-gray-700 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Apache_kafka-icon.svg",
    },
    {
        name: "MongoDB",
        type: "Database",
        icon: <Code className="text-green-600 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MongoDB_Logo.png/960px-MongoDB_Logo.png?20180423174357",
    },
    {
        name: "Redis",
        type: "Database",
        icon: <Code className="text-red-500 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/640px-Logo-redis.svg.png",
    },
    {
        name: "Postgres",
        type: "Database",
        icon: <Code className="text-indigo-600 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png?20080116191800",
    },
    {
        name: "TypeScript",
        type: "Language",
        icon: <Code className="text-blue-600 w-6 h-6" />,
        image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
        name: "Postman",
        type: "Testing Tool",
        icon: <Wrench className="text-orange-500 w-6 h-6" />,
        image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
    },
    {
        name: "VS Code",
        type: "Editor",
        icon: <Code className="text-blue-500 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    },
    {
        name: "Sublime",
        type: "Editor",
        icon: <Code className="text-yellow-600 w-6 h-6" />,
        image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png",
    },
];


const ToolsLearned = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-200 antialiased">Tools & Languages I’ve Learned</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tools.map((tool, idx) => (
                    <div
                        key={idx}
                        className="bg-black text-white border border-gray-500 shadow-md rounded-2xl p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{tool.name}</h3>
                            <p className="text-sm text-gray-500 flex items-center space-x-1">
                                {tool.icon}
                                <span className="ml-2">{tool.type}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsLearned;
