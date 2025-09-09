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

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to life.
          </p>
        </div>

        {/* --- UPDATED: This container now forces a single column on all screen sizes --- */}
        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 h-full text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;