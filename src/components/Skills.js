"use client";

import { motion } from 'framer-motion';
import {
  Code, HardDrive, Database, GitBranch, Lightbulb, UserCheck,
  // Programming Languages
  Atom, Box, Braces, Binary, CodeXml, GitCommit,
  // Frontend Development
  LayoutPanelLeft, Palette, Globe, View, Airplay, // Corrected 'Display' to 'Airplay'
  // Backend Development
  Server, Cloud, LayoutGrid, Key, Bug,
  // Databases
  CloudCog, Table, Files, Settings,
  // Tools & Technologies
  Terminal, Monitor, Folder, Layers,
  // Soft Skills
  Handshake, MessageSquare, Users, Puzzle, Brain,
} from 'lucide-react'; // Import necessary icons

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: Code },
        { name: 'Python', icon: CodeXml },
        { name: 'Java', icon: Atom },
        { name: 'C#', icon: Braces },
        { name: 'PHP', icon: Box },
        { name: 'C', icon: Binary }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: LayoutPanelLeft },
        { name: 'HTML5', icon: Palette },
        { name: 'CSS3', icon: View },
        { name: 'Tailwind CSS', icon: Airplay }, // Use the 'Airplay' icon
        { name: 'Next.js', icon: Globe }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: Cloud },
        { name: 'ASP.NET', icon: LayoutGrid },
        { name: 'Ballerina', icon: Key },
        { name: 'FastAPI', icon: Bug }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: Database },
        { name: 'MySQL', icon: CloudCog },
        { name: 'Microsoft SQL Server', icon: Table },
        { name: 'Firebase', icon: Files }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: GitBranch },
        { name: 'Visual Studio Code', icon: Terminal },
        { name: 'Visual Studio', icon: Monitor },
        { name: 'Docker', icon: Layers }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Leadership', icon: Lightbulb },
        { name: 'Communication', icon: MessageSquare },
        { name: 'Team Collaboration', icon: Users },
        { name: 'Problem Solving', icon: Puzzle },
        { name: 'Critical Thinking', icon: Brain }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3 p-2 rounded-md hover:bg-secondary/30 transition-colors">
                    {skill.icon && <skill.icon className="w-5 h-5 text-primary" />}
                    <span className="text-base font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;