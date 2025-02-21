"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

import X from '../app/X.png'

export function BackgroundGradientDemo({obj1}) {
    console.log(obj1.heading)
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black text-white dark:bg-zinc-900">
        <Image
          src ={obj1.image}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          {obj1.heading}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {obj1.para}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-green-600 mt-4 text-xs font-bold dark:bg-zinc-800">
          <span> <a href="https://github.com/settings/profile"> view ..</a></span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
