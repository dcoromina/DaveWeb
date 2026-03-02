"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <motion.span
              className="block text-white mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi There!
            </motion.span>
            <motion.span
              className="text-gradient block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I&apos;M DAVID
            </motion.span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Developer, entrepreneur, athlete, dreamer, and all-around lunatic.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#ContactSection"
              className="group px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
            <a
              href="https://dcoromina.s-ul.eu/i6Db3zfX"
              download="CV"
              className="px-8 py-3 rounded-full bg-surface border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="flex-1 relative w-full max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full aspect-square md:aspect-[4/5]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-white/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <Image
              className="object-contain drop-shadow-2xl"
              src="https://dcoromina.s-ul.eu/UXusnDpS"
              fill
              priority
              alt="David Coromina"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <a href="#AboutSection" className="p-2 text-gray-400 hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
