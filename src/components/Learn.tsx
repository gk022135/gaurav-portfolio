import js from '../Assets/Js.jpeg'
import css from '../Assets/Css.jpg'
import Docker from '../Assets/Docker.jpeg'
import Express from '../Assets/Express.png'
import Java from '../Assets/Java.jpg'
import Kafka from '../Assets/Kafka.jpeg';
import MongD from '../Assets/MongoDb.jpeg'
import NextJS from '../Assets/NextJs.png';
import Node from '../Assets/NodeJS.jpg'
import postman from '../Assets/Postman.png'
import React from  '../Assets/React.jpeg'
import Tailwind from '../Assets/Tailwind.jpeg'
import Typescript from '../Assets/TypeScript.jpeg'

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "JavaScript is a versatile, high-level programming language used for web development. It enables dynamic content, interactive user interfaces, server-side development (Node.js), and supports frameworks like React, Angular, and Vue.js",
      name: "JavaScript",
      designation: "",
      src: js.src,
    },
    {
      quote:
        "React.js is a JavaScript library for building fast, interactive user interfaces using reusable components, virtual DOM, and hooks.",
      name: "React JS",
      designation: "",
      src: React.src,
    },
    {
      quote:
        "TypeScript is a superset of JavaScript that adds static typing, improving code quality, readability, and scalability for large applications.",
      name: "TypeScript",
      designation: "",
      src: Typescript.src,
    },
    {
      quote:
        "Node.js is a runtime environment that allows JavaScript to run on the server side. It uses an event-driven, non-blocking I/O model, enabling scalable, fast web applications and real-time services.",
      name: "NodeJs",
      designation: "",
      src: Node.src,
    },
    {
      quote:
        "Next.js is a React framework for building fast, scalable web applications. It offers server-side rendering, static site generation, API routes, and optimized performance, making it ideal for SEO-friendly and production-ready apps.",
      name: "NextJs",
      designation: "",
      src: NextJS.src,
    },
    {
        quote : "Tailwind CSS is a utility-first CSS framework for creating responsive, customizable user interfaces quickly with predefined classes, ensuring clean and maintainable code.",
        name : "TailwindCss",
        designation : "",
        src : Tailwind.src,
    },
    {
        quote : "Cascade Style Sheet",
        name : "Cascade Style Sheet",
        designation : "",
        src : css.src,
    },
    {
        quote : "Postman is a powerful API testing tool that simplifies development by enabling API requests, automation, debugging, documentation, and collaboration in a user-friendly interface.",
        name : "Post Man",
        designation : "",
        src : postman.src,
    },
    {
        quote : "Java is a versatile, object-oriented programming language known for its platform independence, robust performance, and security. It’s widely used in web applications, Android development, enterprise software, and backend systems.",
        name : "Java",
        designation : "",
        src : Java.src,
    },
    {
        quote : "Docker is a platform that enables developers to build, deploy, and run applications in lightweight, portable containers. It ensures consistency across environments, simplifies development workflows, and supports scalable deployments.",
        name : "Docker",
        designation : "",
        src : Docker.src,
    },
    {
        quote : "Familiar with kafka",
        name : "Kafka",
        designation : "",
        src : Kafka.src,
    },
    {
        quote : "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like formats. It offers high performance, scalability, and real-time analytics, making it ideal for modern web and mobile applications.",
        name : "MongoDB",
        designation : "",
        src : MongD.src,
    },
    {
        quote : "Express.js is a minimal and flexible Node.js web application framework that provides robust features for building APIs and web applications. It simplifies server-side development with middleware support and routing capabilities.",
        name : "Express Js",
        designation : "",
        src : Express.src,
    }
  ];
  return (
    <div>
        <h1 className='flex text-5xl justify-center content-center font-bold antialiased bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 p-4'>What I Learn Till Now</h1>
        <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
