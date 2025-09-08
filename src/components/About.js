"use client";

import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '2+' },
    { icon: Rocket, label: 'Projects Completed', value: '10+' },
    { icon: Trophy, label: 'Hackathons', value: '6+' },
    { icon: Brain, label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, I create solutions that matter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Turning Ideas into Digital Reality
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am an enthusiastic IT undergraduate pursuing my BSc (Hons) in Information Technology 
                at the University of Moratuwa, with nearly two years of practical software development experience.
              </p>
              
              <p>
                My passion lies in building innovative full-stack web applications, designing intuitive user 
                interfaces, and creating robust database architectures. I thrive on solving real-world problems 
                through technology and continuously learning from experienced professionals.
              </p>
              
              <p>
                Currently seeking internship opportunities to apply my knowledge and contribute to impactful 
                projects, with the ambition of becoming a well-rounded full-stack developer who creates 
                meaningful software within creative and problem-solving teams.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-6 bg-card rounded-lg border">
              <h4 className="text-xl font-semibold mb-3">Education</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium">University of Moratuwa</h5>
                  <p className="text-sm text-muted-foreground">BSc (Hons) Information Technology</p>
                  <p className="text-sm text-muted-foreground">2023 - Present | GPA: 3.38</p>
                </div>
                <div>
                  <h5 className="font-medium">Maliyadeva Model College - Kurunegala</h5>
                  <p className="text-sm text-muted-foreground">G.C.E. Advanced Level (2021) | Z-Score: 1.6605</p>
                  <p className="text-sm text-muted-foreground">ICT - A, Combined Mathematics - B, Physics - B</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;