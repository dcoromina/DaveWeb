"use client";
import React from "react";
import Image from "next/image";

const CareerSection = () => {
  const experiences = [
    {
      company: "Myoo.io",
      role: "Chief Technology Officer",
      period: "2022 - Present",
      logo: "https://dcoromina.s-ul.eu/career/UaOSuGDu",
      responsibilities: [
        "In charge of building and maintaining the project infrastructure.",
        "Responsible for building and managing a dev team.",
        "Main software developer.",
      ],
    },
    {
      company: "MyHealp",
      role: "Full Stack Developer",
      period: "2021 - 2022",
      logo: "https://dcoromina.s-ul.eu/career/UaOSuGDu", // Placeholder
      responsibilities: [
        "Developed full-stack features using React and Node.js.",
        "Collaborated with design team to implement UI/UX improvements.",
      ],
    },
    {
      company: "GourmetFuel",
      role: "Frontend Developer",
      period: "2020 - 2021",
      logo: "https://dcoromina.s-ul.eu/career/UaOSuGDu", // Placeholder
      responsibilities: [
        "Built responsive web interfaces for e-commerce platform.",
        "Optimized website performance and SEO.",
      ],
    },
    {
      company: "Siolot",
      role: "Junior Developer",
      period: "2019 - 2020",
      logo: "https://dcoromina.s-ul.eu/career/UaOSuGDu", // Placeholder
      responsibilities: [
        "Assisted in developing internal tools.",
        "Fixed bugs and maintained legacy code.",
      ],
    },
  ];

  return (
    <section id="CareerSection" className="w-full py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">CAREER</h2>
          <p className="text-gray-400 mt-4">My professional journey and experience.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-white/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 z-10 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                  <div className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group relative">
                    {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-surface border-t border-l border-white/10 rotate-45 ${index % 2 === 0 ? "-left-2 border-r-0 border-b-0" : "-right-2 border-l-0 border-t-0 rotate-[225deg]"}`} />

                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 p-2 shrink-0">
                        <Image src={exp.logo} fill className="object-contain" alt={exp.company} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium text-sm">@ {exp.company}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-primary mt-1.5 text-[10px]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
