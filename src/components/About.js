"use client";

import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Trophy } from 'lucide-react';
import CountUp from 'react-countup';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: 2, suffix: '+' },
    { icon: Rocket, label: 'Projects Completed', value: 8, suffix: '+' },
    { icon: Trophy, label: 'Hackathons', value: 6, suffix: '+' },
    { icon: Brain, label: 'Technologies', value: 10, suffix: '+' },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm driven by a passion for turning complex problems into elegant digital solutions.
          </p>
        </motion.div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Bio & Education */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Bio Card */}
            {/* UPDATED: Added text-center */}
            <div className="bg-card/50 p-6 rounded-lg border hover:border-primary/50 transition-colors duration-300 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an enthusiastic IT undergraduate at the **University of Moratuwa**, bringing nearly two years of hands-on software development experience to the table. My passion is crafting innovative full-stack web applications with intuitive user interfaces and robust back-end architecture.
                </p>
                <p>
                  I thrive on solving real-world challenges through technology and am currently seeking an internship to contribute to impactful projects and grow within a creative, problem-solving team.
                </p>
              </div>
            </div>

            {/* Education Card */}
            {/* UPDATED: Added text-center */}
            <div className="bg-card/50 p-6 rounded-lg border hover:border-primary/50 transition-colors duration-300 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
              <div>
                <h4 className="font-bold">University of Moratuwa</h4>
                <p className="text-sm text-muted-foreground">BSc (Hons) Information Technology</p>
                <p className="text-sm text-muted-foreground">2023 - Present | Current GPA: 3.38</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card/50 p-6 rounded-lg border text-center transition-all duration-300 hover:border-primary/50 hover:transform hover:-translate-y-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;