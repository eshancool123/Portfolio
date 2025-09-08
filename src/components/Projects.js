"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Trophy } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AskHire - Recruitment Automation System',
      description: 'A comprehensive recruitment process automation system featuring AI-powered CV matching, MCQ-based pre-screening tests, automated interview scheduling, candidate management, and job postings.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', '.NET Core', 'MSSQL', 'Tailwind CSS'],
      features: [
        'AI-powered CV matching algorithm',
        'Automated interview scheduling system',
        'MCQ-based pre-screening tests',
        'Comprehensive candidate management',
        'Job posting and application tracking'
      ],
      category: 'Level 2 Software Project',
      status: 'Completed',
      github: 'https://github.com/AskHire',
      live: null
    },
    {
      title: 'Spirit11 - Fantasy Cricket League',
      description: 'A full-stack fantasy cricket league application with responsive UI, RESTful APIs, MongoDB integration, and AI chatbot features for enhanced user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Google AI'],
      features: [
        'Fantasy team creation and management',
        'Real-time cricket data integration',
        'AI-powered chatbot assistance',
        'User authentication and profiles',
        'Leaderboards and scoring system'
      ],
      category: 'SpiritX Competition',
      status: 'Completed',
      github: 'https://github.com/Code-Crusaders-UOM',
      live: null
    },
    {
      title: 'Foodi-Find - Street Food Discovery',
      description: 'A responsive web application enabling users to share and discover street food locations, built with React.js frontend and Ballerina backend services.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Ballerina', 'MongoDB Atlas', 'Firebase', 'Tailwind CSS'],
      features: [
        'Location sharing and discovery',
        'Google Authentication integration',
        'Interactive maps and geolocation',
        'User reviews and ratings',
        'Menu and price information'
      ],
      category: 'Innovate with Ballerina Competition',
      status: 'Completed',
      github: 'https://github.com/eshancool123/iwb346-code-crusaders',
      live: null
    },
    {
      title: 'WearRecover - Smart Health Band',
      description: 'An innovative IoT wearable device using ESP32 and sensors to capture vital signs, enabling physical therapists to create tailored rehabilitation plans.',
      image: '/api/placeholder/600/400',
      technologies: ['ESP32', 'Firebase', 'HTML/CSS/JS', 'IoT Sensors', 'OLED Display'],
      features: [
        'Real-time vital signs monitoring',
        'Heart rate and temperature tracking',
        'Skin resistance measurement',
        'OLED display for data visualization',
        'Web dashboard for remote monitoring'
      ],
      category: 'Microcontroller-Based Hardware Project',
      status: 'Completed',
      github: null,
      live: null
    }
  ];

  const hackathons = [
    { name: 'CodeRush', position: '2nd place', year: '2024', organizer: 'Faculty of Information Technology, University of Moratuwa' },
    { name: 'Innovate with Ballerina', position: 'Most Popular Top 10', year: '2024', organizer: 'IEEE Student Branch UoM & WSO2' },
    { name: 'MoraXtreme 9.0', position: 'Participant', year: '2024', organizer: 'IEEE Student Branch, University of Moratuwa' },
    { name: 'AlgoXplore 1.0', position: 'Participant', year: '2024', organizer: 'Hackathon Hub, NSBM Green University' },
    { name: 'SpiritX', position: 'Participant', year: '2025', organizer: 'MoraSpirit 360' },
    { name: 'HackMoral 7.0', position: 'Participant', year: '2025', organizer: 'Faculty of Information Technology, University of Moratuwa' }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects and competitions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl text-primary/30">📱</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-lg border"
        >
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Hackathons & Competitions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/50 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{hackathon.year}</span>
                </div>
                <h4 className="font-semibold mb-1">{hackathon.name}</h4>
                <p className="text-sm text-primary mb-2">{hackathon.position}</p>
                <p className="text-xs text-muted-foreground">{hackathon.organizer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;