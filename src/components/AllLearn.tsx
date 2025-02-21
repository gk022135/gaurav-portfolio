import Image from 'next/image';

import js from '../Assets/Js.jpeg';
import css from '../Assets/Css.jpg';
import Docker from '../Assets/Docker.jpeg';
import Express from '../Assets/Express.png';
import Java from '../Assets/Java.jpg';
import Kafka from '../Assets/Kafka.jpeg';
import MongD from '../Assets/MongoDb.jpeg';
import NextJS from '../Assets/NextJs.png';
import Node from '../Assets/NodeJS.jpg';
import postman from '../Assets/Postman.png';
import ReactLogo from '../Assets/React.jpeg';
import Tailwind from '../Assets/Tailwind.jpeg';
import Typescript from '../Assets/TypeScript.jpeg';

export default function TechMarquee() {
  const techImages = [
    { src: js, alt: 'JavaScript' },
    { src: css, alt: 'CSS' },
    { src: Docker, alt: 'Docker' },
    { src: Express, alt: 'ExpressJS' },
    { src: Java, alt: 'Java' },
    { src: Kafka, alt: 'Kafka' },
    { src: MongD, alt: 'MongoDB' },
    { src: NextJS, alt: 'NextJS' },
    { src: Node, alt: 'NodeJS' },
    { src: postman, alt: 'Postman' },
    { src: ReactLogo, alt: 'ReactJS' },
    { src: Tailwind, alt: 'Tailwind CSS' },
    { src: Typescript, alt: 'TypeScript' },
  ];

  return (
    <div className="w-full overflow-hidden py-10 mb-20 ">
      <h1 className="flex justify-center content-center text-white text-2xl font-bold m-2">
        What I've Learned Till Now
      </h1>
      <div className="flex animate-marquee whitespace-nowrap gap-10">
        {techImages.map((tech, index) => (
          <Image
            key={index}
            src={tech.src}
            alt={tech.alt}
            width={120}
            height={120}
            className="w-28 h-28 object-cover rounded-2xl shadow-2xl bg-transparent p-2"
          />
        ))}
      </div>
    </div>
  );
}
