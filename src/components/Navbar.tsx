"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Timeline", id: "timeline" },
  
];

export function NavbarDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <a href="/">Portfolio</a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
           <a
              href="/about"
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              Me
            </a>
           <a
              href="/blog"
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              Blogs
            </a>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
              href="/admin/inbox"
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              Inbox
            </a>
         
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-3 space-y-2">
             <a
              href="/about"
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              Me
            </a>
            <a
              href="/blog"
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              Blogs
            </a>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/admin/inbox"
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              Inbox
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
