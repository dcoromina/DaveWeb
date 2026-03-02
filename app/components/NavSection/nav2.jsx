"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function NavSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "About", path: "#AboutSection" },

    { title: "Career", path: "#CareerSection" },
    { title: "Projects", path: "#ProjectsSection" },
    { title: "Contact", path: "#ContactSection" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative w-10 h-10 hover:scale-110 transition-transform">
          <Image
            src="https://dcoromina.s-ul.eu/logos/iOeEuVXG"
            fill
            className="object-contain"
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link
          href="https://www.linkedin.com/in/dcoromina"
          target="_blank"
          className="relative w-8 h-8 hover:scale-110 transition-transform opacity-80 hover:opacity-100"
        >
          <Image
            src="https://dcoromina.s-ul.eu/logos/ezNndJcm"
            fill
            className="object-contain " // Invert for dark mode if needed, or check original image
            alt="LinkedIn"
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavSection;
