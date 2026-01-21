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
      <NavbarDemo />
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
