"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Trophy, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    // ... your projects data remains the same
    {
      id: 1,
      title: 'AskHire',
      subtitle: 'Recruitment Process Automation System',
      description: 'A comprehensive recruitment system featuring AI-powered CV matching, pre-screening tests, and automated interview scheduling to streamline the hiring process.',
      technologies: ['React.js', '.NET Core', 'MSSQL', 'Tailwind CSS'],
      category: 'Level 2 Software Project',
      status: 'Completed',
      github: 'https://github.com/AskHire',
      images: ['/images/askhire/askhire-1.png', '/images/askhire/askhire-2.png', '/images/askhire/askhire-3.png'],
    },
    {
      id: 2,
      title: 'Spirit11',
      subtitle: 'Fantasy Cricket League App',
      description: 'A full-stack fantasy cricket application with responsive UI, RESTful APIs, and an AI chatbot, built for the SpiritX competition.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Google AI'],
      category: 'SpiritX Competition',
      status: 'Completed',
      github: 'https://github.com/Code-Crusaders-UOM',
      images: ['/images/spirit11/spirit11-1.png', '/images/spirit11/spirit11-2.png', '/images/spirit11/spirit11-3.png'],
    },
    {
      id: 3,
      title: 'Foodi-Find',
      subtitle: 'Street Food Discovery Platform',
      description: 'A responsive web app enabling users to share and discover street food locations, built with a React.js frontend and Ballerina backend services.',
      technologies: ['React.js', 'Ballerina', 'MongoDB Atlas', 'Firebase'],
      category: 'Innovate with Ballerina',
      status: 'Completed',
      github: 'https://github.com/eshancool123/iwb346-code-crusaders',
      images: ['/images/foodifind/foodifind-1.png', '/images/foodifind/foodifind-2.png', '/images/foodifind/foodifind-3.png'],
    },
    {
      id: 4,
      title: 'WearRecover',
      subtitle: 'IoT Health Monitoring System',
      description: 'An innovative IoT wearable using ESP32 and sensors to capture vital signs, helping physical therapists create tailored rehabilitation plans.',
      technologies: ['ESP32', 'Firebase', 'IoT Sensors', 'OLED Display'],
      category: 'Hardware Project',
      status: 'Completed',
      github: null,
      images: ['/images/wearrecover/wearrecover-1.png', '/images/wearrecover/wearrecover-2.png', '/images/wearrecover/wearrecover-3.png'],
    }
  ];
  const hackathons = [
    // ... your hackathons data
    { name: 'CodeRush', position: '9th place', year: '2024', organizer: 'Faculty of IT, University of Moratuwa' },
    { name: 'Innovate with Ballerina', position: 'Top 10 Populer', year: '2024', organizer: 'IEEE SB UoM & WSO2' },
    { name: 'MoraXtreme 9.0', position: 'Participant', year: '2024', organizer: 'IEEE SB, University of Moratuwa' },
    { name: 'SpiritX', position: 'Participant', year: '2025', organizer: 'MoraSpirit 360' },
  ];

  const openLightbox = (project, index) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };
  const goToNextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  }, [selectedProject]);
  const goToPrevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') goToNextImage();
      if (e.key === 'ArrowLeft') goToPrevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, ); // Added closeLightbox to dependencies

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
      <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16" // <-- `text-center` is applied here
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
        Featured Projects
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        A showcase of my recent work, blending technical skill with creative problem-solving.
      </p>
    </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <motion.div key={project.id} /* ... card animation ... */
              className="bg-card rounded-xl border border-border/50 group overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="p-6 flex-grow flex flex-col">
                {/* ... card content ... */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">{project.category}</span>
                  <span className="text-xs font-semibold bg-green-500/10 text-green-400 px-3 py-1 rounded-full">{project.status}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-medium mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (<span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{tech}</span>))}
                </div>
                {project.github && (<a href={project.github} /* ... github link ... */ ><Github className="w-4 h-4" /> View Code</a>)}
              </div>

              {project.images && (
                <div className="grid grid-cols-3 gap-1 p-2 bg-secondary/50">
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative w-full h-24 overflow-hidden rounded-md cursor-pointer" onClick={() => openLightbox(project, imgIndex)}>
                      {/* --- THIS IS THE CORRECTED PART --- */}
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Trophy className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold text-foreground">Hackathons & Competitions</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hackathons.map((hackathon, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-card p-5 rounded-lg border border-border/60 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-semibold text-primary flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{hackathon.year}</span>
                                </div>
                                <h4 className="font-bold text-foreground mb-2">{hackathon.name}</h4>
                                <div className="text-sm font-semibold text-yellow-500 mb-3">{hackathon.position}</div>
                                <p className="text-xs text-muted-foreground">{hackathon.organizer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
      </div>

      <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
                        >
                            {/* Main Image Display */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.2 }}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            </AnimatePresence>
                            
                            {/* Close Button */}
                            <button onClick={closeLightbox} className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors z-10">
                                <X className="w-6 h-6" />
                            </button>

                            {/* Previous Button */}
                            <button onClick={goToPrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors">
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Next Button */}
                            <button onClick={goToNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
    </section>
  );
};

export default Projects;