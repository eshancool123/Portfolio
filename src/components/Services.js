"use client";

import { motion } from 'framer-motion';
import { Code, Globe, Database, Smartphone, Cloud, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive, modern websites using React, Next.js, and cutting-edge technologies.',
      features: ['React & Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Focused']
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Full-stack development with clean code, best practices, and scalable architectures.',
      features: ['Clean Code', 'SOLID Principles', 'Testing', 'Documentation']
    },
    {
      icon: Database,
      title: 'Full-Stack Applications',
      description: 'End-to-end application development from database design to user interface.',
      features: ['API Development', 'Database Design', 'Authentication', 'Real-time Features']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating mobile-friendly applications and progressive web apps.',
      features: ['PWA Development', 'Mobile-First Design', 'Cross-Platform', 'App Store Ready']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms like AWS, Vercel, and Firebase.',
      features: ['Cloud Deployment', 'CI/CD Pipelines', 'Monitoring', 'Scalability']
    },
    {
      icon: Cpu,
      title: 'IoT Development',
      description: 'Hardware integration and IoT solutions using ESP32, sensors, and real-time data.',
      features: ['Hardware Integration', 'Sensor Data', 'Real-time Monitoring', 'Web Dashboards']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;