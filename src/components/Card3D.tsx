"use client";

import Image from "next/image";
import React from "react";
import X from '../app/X.png'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { StaticImageData } from 'next/image';

interface CardProps {
  card01: {
    head: string;
    para: string;
    image: StaticImageData; // Updated to accept StaticImageData
    url: string;
  };
}


export function ThreeDCardDemo({card01} :CardProps) {
  // console.log("upcoming card data ",card01);
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-t from-red-300 from-red-500 text-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-teal-300 dark:text-white "
        >
          {card01.head}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-green-400 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {card01.para}

        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={card01.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover group-hover/card:shadow-xl rounded-lg"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
          <a href={card01.url}><h2>Profile</h2></a>

          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
