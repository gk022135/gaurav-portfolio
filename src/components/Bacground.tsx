"use client"
import { useEffect } from "react";

export const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Bubbles */}
        {[...Array(8)].map((_, i) => (
            <div
                key={`bubble-${i}`}
                className={`floating-bubble absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm animate-bounce`}
                style={{
                    width: `${Math.random() * 60 + 20}px`,
                    height: `${Math.random() * 60 + 20}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`
                }}
            />
        ))}

        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
            <div
                key={`dot-${i}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 2 + 1}s`,
                    animationDelay: `${Math.random() * 3}s`
                }}
            />
        ))}

        {/* Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
            <div
                key={`shape-${i}`}
                className="absolute w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 5}s`,
                    animationDelay: `${Math.random() * 2}s`
                }}
            />
        ))}
    </div>
);