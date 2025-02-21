"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image, { StaticImageData } from "next/image";

import X from '../app/X.png';

interface Obj1Props {
  heading: string;
  para: string;
  image: StaticImageData | string; // Supports both local and external images
}

// ✅ Function with proper type annotation
export function BackgroundGradientDemo({ obj1 }: { obj1: Obj1Props }) {
  console.log(obj1.heading);

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black text-white dark:bg-zinc-900">
        <Image
          src={obj1.image}
          alt="Project Image"
          height={400}
          width={400}
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          {obj1.heading}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {obj1.para}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-green-600 mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>
            <a href="https://github.com/settings/profile">View ..</a>
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
