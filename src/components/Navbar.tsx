"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";

// ✅ Image imports
import LeetCode from '../app/LeetCode.png';
import X from '../app/X.png';
import GFG from '../app/GFG.jpg';
import Git from '../app/Github.jpeg';
import CN from '../app/Coding-Ninjas.jpg';

// ✅ ProductItem updated to handle StaticImageData
interface ProductItemProps {
  title: string;
  href: string;
  src: StaticImageData;
  description: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, href, src, description }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center">
      <Image src={src} alt={title} width={100} height={100} className="rounded-lg" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);

// ✅ NavbarDemo component
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

// ✅ Navbar component with ProductItem usage
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
<div
  className={cn(
    "fixed w-[400px] sm:fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
    "bg-[#111827] border border-gray-700 rounded-xl shadow-lg backdrop-blur-md",
    className
  )}
>      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Projets">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Qr Entry-Exit System</HoveredLink>
            <HoveredLink href="/interface-design">ShopEase</HoveredLink>
            <HoveredLink href="/seo">Web-chat App</HoveredLink>
            <HoveredLink href="/branding">My Blogs</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Coding Platforms">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="LeetCode"
              href="https://leetcode.com/u/Gaurav_krrr/"
              src={LeetCode} // ✅ No casting needed
              description="Starting is tough, but once you begin, it becomes addictive"
            />
            <ProductItem
              title="Github"
              href="https://github.com/gk022135"
              src={Git}
              description="Work together work collaboratively bro !!"
            />
            <ProductItem
              title="GeeKForGeeks"
              href="https://www.geeksforgeeks.org/user/gauravkrrr/"
              src={GFG}
              description="GFG Doing since six Month"
            />
            <ProductItem
              title="Coding Ninja"
              href="https://www.naukri.com/code360/profile/4badff1d-8ca4-4352-aa75-fef728851e81"
              src={CN}
              description="Practice makes perfect"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Social">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://x.com/Gaurav__krrr?t=4YHc7AuO_kGx-3T7I_AnSw&s=09">X</HoveredLink>
            <HoveredLink href="/individual">InstaGram</HoveredLink>
            <HoveredLink href="https://www.reddit.com/user/PlaneBirthday3659/">Redit</HoveredLink>
            <HoveredLink href="">Discord</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
