"use client";

import { motion } from 'framer-motion';
import { Code, Globe, Database, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive, modern websites using React, Next.js, and cutting-edge technologies.',
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Full-stack development with clean code, best practices, and scalable architectures.',
    },
    {
      icon: Database,
      title: 'Full-Stack Applications',
      description: 'End-to-end application development from database design to user interface.',
    },
    {
      icon: Cpu,
      title: 'IoT Development',
      description: 'Hardware integration and IoT solutions using ESP32, sensors, and real-time data.',
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I provide a range of services designed to bring your innovative ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 border-2 border-primary/20 group-hover:bg-card/80 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;