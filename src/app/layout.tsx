// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "GauravKrr",
  description: "A Programmer, A Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavbarDemo />

        {/* Page content offset for fixed navbar */}
        <main className="theme-surface pt-16 sm:pt-18">
          {children}
        </main>
      </body>
    </html>
  );
}
// testing for new github branch rules
