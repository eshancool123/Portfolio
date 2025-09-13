"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useCallback, useMemo } from 'react';

// Import particle engine
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Particle Component for the background
const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false, // Set to false to contain it within the Hero section
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 150,
          color: "#8b5cf6", // Primary color
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        }
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} className="absolute inset-0 z-0" />;
};


const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://customer-assets.emergentagent.com/job_740a080e-48f6-4dee-bd7e-ad91995dcc51/artifacts/zqxg82oj_CV1.pdf';
    link.download = 'Eshan_Senadhi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Framer Motion variants for staggered text animation
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const name = "Eshan Senadhi";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Particle Background */}
      <ParticlesComponent />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi there, I&apos;m
          </motion.p>

          <motion.h1
              // CHANGED: Adjusted font sizes for better responsiveness
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gradient mb-6 text-glow"
              variants={sentence}
              initial="hidden"
              animate="visible"
          >
              {name.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                  </motion.span>
              ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            // CHANGED: Corrected the inconsistent and jarring font size progression
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6"
          >
            Intern Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            IT Undergraduate at University of Moratuwa. Passionate about building innovative solutions that make a real impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 shimmer"
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="mt-16 flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;