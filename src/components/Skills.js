"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code, Database, GitBranch, Lightbulb,
  // Programming Languages
  Atom, Box, Braces, Binary, CodeXml,
  // Frontend Development
  LayoutPanelLeft, Palette, Globe, View, Airplay,
  // Backend Development
  Server, Cloud, LayoutGrid, Key,
  // Databases
  CloudCog, Table, Files,
  // Tools & Technologies
  Terminal, Monitor, Layers,
  // Soft Skills
  MessageSquare, Users, Puzzle, Brain,
  // Creative icons
  Sparkles, Star
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Programming Languages',
      emoji: '🧬',
      description: 'The building blocks of innovation',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      bgGlow: 'from-red-500/20 to-orange-500/20',
      skills: [
        { name: 'JavaScript', icon: Code, color: 'bg-yellow-500' },
        { name: 'Python', icon: CodeXml, color: 'bg-blue-500' },
        { name: 'Java', icon: Atom, color: 'bg-red-500' },
        { name: 'C#', icon: Braces, color: 'bg-purple-500' },
        { name: 'PHP', icon: Box, color: 'bg-indigo-500' },
        { name: 'C', icon: Binary, color: 'bg-gray-500' }
      ]
    },
    {
      title: 'Frontend Development',
      emoji: '🎨',
      description: 'Crafting beautiful user experiences',
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      bgGlow: 'from-pink-500/20 to-purple-500/20',
      skills: [
        { name: 'React.js', icon: LayoutPanelLeft, color: 'bg-cyan-500' },
        { name: 'HTML5', icon: Palette, color: 'bg-orange-500' },
        { name: 'CSS3', icon: View, color: 'bg-blue-500' },
        { name: 'Tailwind CSS', icon: Airplay, color: 'bg-teal-500' },
        { name: 'Next.js', icon: Globe, color: 'bg-black' }
      ]
    },
    {
      title: 'Backend Development',
      emoji: '⚙️',
      description: 'Powering robust server architectures',
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
      bgGlow: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'Node.js', icon: Server, color: 'bg-green-500' },
        { name: 'Express.js', icon: Cloud, color: 'bg-gray-600' },
        { name: 'ASP.NET', icon: LayoutGrid, color: 'bg-blue-600' },
        { name: 'Ballerina', icon: Key, color: 'bg-orange-500' },
      ]
    },
    {
      title: 'Databases',
      emoji: '🗄️',
      description: 'Managing data with precision',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      bgGlow: 'from-blue-500/20 to-purple-500/20',
      skills: [
        { name: 'MongoDB', icon: Database, color: 'bg-green-500' },
        { name: 'MySQL', icon: CloudCog, color: 'bg-blue-500' },
        { name: 'SQL Server', icon: Table, color: 'bg-red-500' },
        { name: 'Firebase', icon: Files, color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'Tools & Technologies',
      emoji: '🧰',
      description: 'Essential development arsenal',
      gradient: 'from-violet-500 via-purple-500 to-indigo-500',
      bgGlow: 'from-violet-500/20 to-purple-500/20',
      skills: [
        { name: 'Git & GitHub', icon: GitBranch, color: 'bg-gray-800' },
        { name: 'VS Code', icon: Terminal, color: 'bg-blue-500' },
        { name: 'Visual Studio', icon: Monitor, color: 'bg-purple-600' },
        { name: 'Docker', icon: Layers, color: 'bg-blue-400' }
      ]
    },
    {
      title: 'Soft Skills',
      emoji: '🤝',
      description: 'Human-centered collaboration',
      gradient: 'from-teal-500 via-green-500 to-emerald-500',
      bgGlow: 'from-teal-500/20 to-green-500/20',
      skills: [
        { name: 'Leadership', icon: Lightbulb, color: 'bg-yellow-500' },
        { name: 'Communication', icon: MessageSquare, color: 'bg-blue-500' },
        { name: 'Team Collaboration', icon: Users, color: 'bg-purple-500' },
        { name: 'Problem Solving', icon: Puzzle, color: 'bg-red-500' },
        { name: 'Critical Thinking', icon: Brain, color: 'bg-pink-500' }
      ]
    }
  ];

  const SkillCard = ({ skill, delay }) => {
    const SkillIcon = skill.icon;
       
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
        }}
        transition={{ 
          delay: delay,
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.1, 
          y: -5,
          transition: { duration: 0.3 }
        }}
        className="group relative cursor-pointer flex flex-col items-center" // UPDATED
        viewport={{ once: true }}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-110`}></div>
           
        {/* UPDATED: Changed from fixed w-24 h-24 to responsive w-full aspect-square */}
        <div className={`
          relative w-full max-w-[96px] aspect-square ${skill.color} rounded-2xl flex flex-col items-center justify-center
          shadow-lg group-hover:shadow-2xl transition-all duration-500
          overflow-hidden
        `}>
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
             
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <SkillIcon className="w-8 h-8 text-white z-10" />
          </motion.div>
             
          {/* Sparkle effects */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <Sparkles className="absolute top-2 right-2 w-3 h-3 text-white/60" />
            <Sparkles className="absolute bottom-2 left-2 w-2 h-2 text-white/40" />
          </motion.div>
             
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            whileHover={{ x: "200%" }}
            transition={{ duration: 0.6 }}
          />
        </div>
           
        {/* Skill name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.4 }}
          className="text-sm font-semibold text-center mt-3 text-foreground group-hover:text-primary transition-colors duration-300"
        >
          {skill.name}
        </motion.p>
      </motion.div>
    );
  };

  const CategorySection = ({ category, categoryIndex }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: categoryIndex * 0.2,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="relative group mb-20"
      >
        {/* Background glow effect */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${category.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
           
        {/* Main card */}
        <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-full h-full text-primary" />
            </motion.div>
          </div>
             
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-xl`}>
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {category.emoji}
                </motion.span>
              </div>
            </motion.div>
               
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm italic">
                {category.description}
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                delay={categoryIndex * 0.2 + skillIndex * 0.1}
              />
            ))}
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${60 + i * 10}%`,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 relative min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
           
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Skills & Expertise
            </h2>

            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
            </motion.div>
          </div>
             
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive showcase of technologies and methodologies that power my development journey,
            each skill carefully honed through passion, practice, and real-world application.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <CategorySection 
              key={category.title} 
              category={category} 
              categoryIndex={categoryIndex}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <p className="text-lg text-muted-foreground italic">
              &quot;Constantly evolving, perpetually learning, endlessly creating&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;