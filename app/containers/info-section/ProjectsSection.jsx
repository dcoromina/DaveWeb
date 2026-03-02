
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
      image: "https://dcoromina.s-ul.eu/n7ZQcdUJ", // Placeholder or reuse existing image
      tags: ["Next.js", "React", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Whatsapp/Telegram Personal Assistant",
      description: "A comprehensive dashboard for managing products, orders, and analytics.",
      image: "https://dcoromina.s-ul.eu/9iU9x0hZ", // Placeholder
      tags: ["Vue.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Fitness Tracker App",
      description: "Mobile application for tracking workouts and nutrition.",
      image: "https://dcoromina.s-ul.eu/pkItsxhG", // Placeholder
      tags: ["React Native", "Firebase"],
      link: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Tool to analyze social media engagement and growth.",
      image: "https://dcoromina.s-ul.eu/resources/sKlkHFzv", // Placeholder
      tags: ["Python", "Django", "D3.js"],
      link: "#",
    },
  ];

  return (
    <section id="ProjectsSection" className="w-full section-spacing">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">MY PROJECTS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className={`group relative h-80 rounded-2xl overflow-hidden block border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] fade-in-up stagger-${Math.min(index + 1, 4)}`}
            >
              <Image
                src={project.image}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent opacity-90 group-hover:opacity-95 transition-opacity p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2 opacity-90">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-8 fade-in-up stagger-4">
          <Link
            href="https://github.com/dcoromina"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-surface border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-white/20 transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/10"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

