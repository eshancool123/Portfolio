"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a temporary link to download the CV
    const link = document.createElement('a');
    link.href = 'https://customer-assets.emergentagent.com/job_740a080e-48f6-4dee-bd7e-ad91995dcc51/artifacts/zqxg82oj_CV1.pdf';
    link.download = 'Eshan_Senadhi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 gradient-animation opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi there, I'm
          </motion.p>

          {/* Name with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="typewriter mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient">
              Eshan Senadhi
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6"
          >
            Intern Software Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            IT Undergraduate at University of Moratuwa | Passionate about building innovative solutions 
            that make a real impact | Full-Stack Developer with 2+ years experience
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 glow"
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;