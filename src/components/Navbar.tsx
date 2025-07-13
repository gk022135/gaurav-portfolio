"use client";

import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";


export function NavbarDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Floating elements animation
  // useEffect(() => {
  //   const bubbles = document.querySelectorAll('.floating-bubble');
  //   bubbles.forEach((bubble, index) => {
  //     bubble.style.animationDelay = `${index * 0.5}s`;
  //   });
  // }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Timeline', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`transition-colors ${activeSection === item.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Projects', 'Skills', 'Timeline', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
