"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const projects = [
    {
      title: "Fitness APP",
      description: "A modern, App for fitness with a more useful focus for the day to day.",
      fullDescription: "This app will be the main hub for an entire fitness ecosystem. It will include features like workout tracking, meal planning, progress tracking, and more, while being connected to different platforms for different fields of fitness and health.",
      image: "https://dcoromina.s-ul.eu/e65vxnZB",
      media: [
        { type: "image", url: "https://dcoromina.s-ul.eu/e65vxnZB" },
        { type: "image", url: "https://dcoromina.s-ul.eu/v0vYjo9d" },
        { type: "image", url: "https://dcoromina.s-ul.eu/sLizIH82" },
        { type: "video", url: "https://dcoromina.s-ul.eu/c6MrElFx" }
      ],
      tags: ["Expo.go", "React Native", "Tailwind CSS", "Supabase"],
      type: "Personal",
      progress: "Ongoing"
    },
    {
      title: "El Camino App",
      description: "A app for doing the el camino de santiago. To test the google IDE Firebase Studio",
      fullDescription: "This app helps pilgrims on the el camino de santiago to plan their trip and track their progress.It includes features like stamp collection, progress tracking all in a beautiful and easy to use interface.",
      image: "https://dcoromina.s-ul.eu/yZtkSi3c",
      media: [
        { type: "image", url: "https://dcoromina.s-ul.eu/yZtkSi3c" }
      ],
      tags: ["Flutter", "Firebase", "Firebase Studio"],
      type: "Personal",
      progress: "Needs update"
    },
    {
      title: "2D Boxing Game",
      description: "Mobile application for tracking workouts and nutrition.",
      fullDescription: "A fully fledged mobile application designed to help users track their daily fitness goals, log workouts, and monitor nutritional intake. Includes real-time synchronization and detailed progress analytics.",
      image: "https://dcoromina.s-ul.eu/megalo/mqmBaO5t",
      media: [
        { type: "image", url: "https://dcoromina.s-ul.eu/megalo/mqmBaO5t" },
        { type: "image", url: "https://dcoromina.s-ul.eu/megalo/mAgufKKm" },
        { type: "image", url: "https://dcoromina.s-ul.eu/megalo/8echmAHv" }
      ],
      tags: ["Godot", "GDScript"],
      type: "Personal",
      progress: "Ongoing"
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
    }
  };

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
    }
  };

  return (
    <section id="ProjectsSection" className="w-full section-spacing relative">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">MY PROJECTS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on in and outside of work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(project)}
              className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer block border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] fade-in-up stagger-${Math.min(index + 1, 4)}`}
            >
              <Image
                src={project.image}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt={project.title}
              />

              <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
                <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md shadow-lg ${project.type === 'Work' ? 'bg-blue-500/80 text-white' : 'bg-purple-500/80 text-white'}`}>
                  {project.type}
                </span>
                <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md shadow-lg ${project.progress === 'Completed' ? 'bg-green-500/80 text-white' : 'bg-orange-500/80 text-white'}`}>
                  {project.progress}
                </span>
              </div>

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
            </div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-surface/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-primary transition-colors backdrop-blur-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-full md:w-3/5 relative bg-black min-h-[300px] md:min-h-full flex items-center justify-center group">
                {selectedProject.media[currentMediaIndex].type === 'image' ? (
                  <Image
                    src={selectedProject.media[currentMediaIndex].url}
                    fill
                    className="object-contain"
                    alt={`${selectedProject.title} screenshot ${currentMediaIndex + 1}`}
                  />
                ) : (
                  <video
                    src={selectedProject.media[currentMediaIndex].url}
                    controls
                    className="w-full h-full max-h-[60vh] object-contain"
                    autoPlay
                    muted
                    loop
                  />
                )}

                {selectedProject.media.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                      className="absolute left-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary backdrop-blur-md"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                      className="absolute right-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary backdrop-blur-md"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.media.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentMediaIndex ? 'bg-primary scale-125' : 'bg-white/50'} transition-all`}></div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="w-full md:w-2/5 p-8 flex flex-col items-start bg-gradient-to-br from-surface to-surface/50 overflow-y-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${selectedProject.type === 'Work' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'}`}>
                    {selectedProject.type} Project
                  </span>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${selectedProject.progress === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}`}>
                    {selectedProject.progress}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>

                <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                  {selectedProject.fullDescription}
                </p>

                <div className="w-full">
                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-gray-200 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

