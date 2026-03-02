"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  const hobbies = [
    { name: "Cooking", icon: "https://dcoromina.s-ul.eu/icons/lFPl9AWz" },
    { name: "Reading", icon: "https://dcoromina.s-ul.eu/icons/CEYetTpH" },
    { name: "Traveling", icon: "https://dcoromina.s-ul.eu/icons/1rPi3d8L" },
    { name: "Sports", icon: "https://dcoromina.s-ul.eu/icons/H4kJoUNy" },
  ];

  const languages = [
    {
      name: "English",
      level: "C2",
      flag: "https://dcoromina.s-ul.eu/lang-flags/DCzGlUyv",
      bg: "https://dcoromina.s-ul.eu/pkItsxhG",
      details: ["Erasmus+ in Ireland", "Cambridge Certificate"],
    },
    {
      name: "Spanish",
      level: "Native",
      flag: "https://dcoromina.s-ul.eu/lang-flags/hFg9OTYb",
      bg: "https://dcoromina.s-ul.eu/9iU9x0hZ",
      details: ["Native Speaker", "Bilingual Proficiency"],
    },
    {
      name: "Catalan",
      level: "Native",
      flag: "https://dcoromina.s-ul.eu/lang-flags/pXy52NGf",
      bg: "https://dcoromina.s-ul.eu/n7ZQcdUJ",
      details: ["Native Speaker", "Daily Usage"],
    },
    {
      name: "Italian",
      level: "A2",
      flag: "https://dcoromina.s-ul.eu/lang-flags/7fb3Kohj",
      bg: "https://dcoromina.s-ul.eu/resources/sKlkHFzv",
      details: ["Basic Proficiency", "Learning in Progress"],
    },
  ];

  return (
    <section id="AboutSection" className="w-full section-spacing relative">
      <div className="container mx-auto px-4 space-y-16">

        {/* Intro */}
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">ABOUT ME</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to my portfolio! I&apos;m a passionate and dedicated developer with a knack for bringing creative ideas to life.
            I specialize in building high-quality web applications and am committed to delivering work that exceeds expectations.
            <br /><br />
            My journey has been driven by a love for innovation and a desire to continuously learn and grow.
            Each project is a new opportunity to challenge myself and craft unique solutions.
          </p>
        </div>

        <div className="flex flex-row justify-evenly  md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:justify-evenly lg:justify-evenly w-full  ">
          {/* ******************** Hobbies block ******************* */}
          <div className="flex flex-col items-center space-y-5  md:w-auto ">
            <h2 className="font-bold text-2xl ">HOBBIES</h2>
            <div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2">
              {hobbies.map((hobby, index) => (
                <div key={hobby.name} className={`glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:glass-strong hover:border-primary/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-primary/10 fade-in stagger-${index + 1}`}>
                  <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                    <Image src={hobby.icon} fill className="object-contain" alt={hobby.name} />
                  </div>
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ********************** Languages block ******************* */}
          <div className="flex flex-col items-center space-y-5 w-2/4 ">
            <h2 className="font-bold text-2xl white">LANGUAGES</h2>
            <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 w-full space-y-5 md:space-y-0 lg:space-y-0 ">
              {languages.map((lang) => (
                <div key={lang.name} className="group relative h-40 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <Image src={lang.bg} fill className="object-cover transition-transform duration-500 group-hover:scale-110" alt={lang.name} />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-colors flex flex-col justify-end p-4">

                    {/* Default View */}
                    <div className="flex flex-col items-end justify-between group-hover:opacity-0 transition-opacity absolute bottom-4 left-4 right-4">
                      <span className="text-xl font-bold text-white">{lang.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-bold">{lang.level}</span>
                        <Image src={lang.flag} width={24} height={24} alt="flag" className="rounded-sm" />
                      </div>
                    </div>

                    {/* Hover View */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <h4 className="text-lg font-bold text-primary mb-2">{lang.name} ({lang.level})</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {lang.details.map((detail, i) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> </div>
      </div>
    </section>
  );
};

export default AboutSection;
