"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

type Props = {
  obj1: {
    image: string;
    heading: string;
    para: string;
    url: string;
  };
};

export function BackgroundGradientDemo({ obj1 }: Props) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-black text-white dark:bg-zinc-900">
        {/* Image Container with consistent size */}
        <div className="w-full h-[250px] relative">
          <Image
            src={obj1.image}
            alt={obj1.heading}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Title */}
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 font-semibold">
          {obj1.heading}
        </p>

        {/* Description */}
        <p className="text-sm text-neutral-400 dark:text-neutral-400 mb-4">
          {obj1.para}
        </p>

        {/* Link Button */}
        <a
          href={obj1.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full px-4 py-2 text-white bg-green-600 hover:bg-green-700 text-xs font-bold transition dark:bg-zinc-800"
        >
          More..
        </a>
      </BackgroundGradient>
    </div>
  );
}
