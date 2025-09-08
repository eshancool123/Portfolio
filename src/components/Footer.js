"use client";

import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Eshan Senadhi</h3>
            <p className="text-muted-foreground mb-4">
              IT Undergraduate passionate about creating innovative solutions through technology.
            </p>
            <p className="text-sm text-muted-foreground">
              Available for internship opportunities and collaborations.
            </p>
          </motion.div>

          {/* Center Section - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.querySelector(`#${item.toLowerCase()}`).scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h4 className="font-semibold mb-4">Built With</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Next.js & React</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
              <p>MongoDB</p>
              <p>Vercel Deployment</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Eshan Senadhi. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <Code className="h-4 w-4 text-primary" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-amber-500" />
              <span>in Sri Lanka</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;