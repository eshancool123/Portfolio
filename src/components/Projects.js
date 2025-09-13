"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Trophy, CheckCircle, Briefcase, Code, Gamepad, HeartPulse } from 'lucide-react';

const Projects = () => {
  // Your projects data remains the same...
  const projects = [
    {
      title: 'AskHire - Recruitment Automation System',
      description: 'A comprehensive recruitment process automation system featuring AI-powered CV matching, MCQ-based pre-screening tests, automated interview scheduling, candidate management, and job postings.',
      icon: <Briefcase className="w-16 h-16 text-primary/30" />,
      technologies: ['React.js', '.NET Core', 'MSSQL', 'Tailwind CSS'],
      features: [
        'AI-powered CV matching algorithm',
        'Automated interview scheduling system',
        'MCQ-based pre-screening tests',
      ],
      category: 'Level 2 Software Project',
      status: 'Completed',
      github: 'https://github.com/AskHire',
      live: null
    },
    {
      title: 'Spirit11 - Fantasy Cricket League',
      description: 'A full-stack fantasy cricket league application with responsive UI, RESTful APIs, MongoDB integration, and AI chatbot features for enhanced user experience.',
      icon: <Gamepad className="w-16 h-16 text-primary/30" />,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google AI'],
      features: [
        'Fantasy team creation and management',
        'Real-time cricket data integration',
        'AI-powered chatbot assistance',
      ],
      category: 'SpiritX Competition',
      status: 'Completed',
      github: 'https://github.com/Code-Crusaders-UOM',
      live: null
    },
    {
      title: 'Foodi-Find - Street Food Discovery',
      description: 'A responsive web application enabling users to share and discover street food locations, built with React.js frontend and Ballerina backend services.',
      icon: <Code className="w-16 h-16 text-primary/30" />,
      technologies: ['React.js', 'Ballerina', 'MongoDB Atlas', 'Firebase'],
      features: [
        'Location sharing and discovery',
        'Google Authentication integration',
        'Interactive maps and geolocation',
      ],
      category: 'Innovate with Ballerina',
      status: 'Completed',
      github: 'https://github.com/eshancool123/iwb346-code-crusaders',
      live: null
    },
    {
      title: 'WearRecover - Smart Health Band',
      description: 'An innovative IoT wearable device using ESP32 and sensors to capture vital signs, enabling physical therapists to create tailored rehabilitation plans.',
      icon: <HeartPulse className="w-16 h-16 text-primary/30" />,
      technologies: ['ESP32', 'Firebase', 'IoT Sensors', 'OLED Display'],
      features: [
        'Real-time vital signs monitoring',
        'Heart rate and temperature tracking',
        'Web dashboard for remote monitoring',
      ],
      category: 'Hardware Project',
      status: 'Completed',
      github: null,
      live: null
    }
  ];

  // Your hackathons data remains the same...
  const hackathons = [
    { name: 'CodeRush', position: '2nd Place', year: '2024', organizer: 'Faculty of IT, University of Moratuwa' },
    { name: 'Innovate with Ballerina', position: 'Top 10', year: '2024', organizer: 'IEEE SB UoM & WSO2' },
    { name: 'MoraXtreme 9.0', position: 'Participant', year: '2024', organizer: 'IEEE SB, University of Moratuwa' },
    { name: 'AlgoXplore 1.0', position: 'Participant', year: '2024', organizer: 'Hackathon Hub, NSBM Green University' },
    { name: 'SpiritX', position: 'Participant', year: '2025', organizer: 'MoraSpirit 360' },
    { name: 'HackMoral 7.0', position: 'Participant', year: '2025', organizer: 'Faculty of IT, University of Moratuwa' }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects and competitions.
          </p>
        </motion.div>

        {/* --- Enhanced Projects Grid --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border flex flex-col overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="h-48 bg-secondary flex items-center justify-center border-b">
                {project.icon}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Features:</h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 mr-2 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-border/50 flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Enhanced Hackathons Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold">Hackathons & Competitions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-5 rounded-xl border border-border/80 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-foreground text-base leading-tight pr-4">{hackathon.name}</h4>
                  <span className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                    {hackathon.position}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{hackathon.organizer}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{hackathon.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;