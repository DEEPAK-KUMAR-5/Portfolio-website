import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NPL MODEL',
    description: 'Voice Recognizing model provides automation in work',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    demo: '#',
    code: '#',
    color: 'from-indigo-500 to-gray-700',
    icon: '🤖',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio showcasing projects and skills with interactive animations.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    demo: '#',
    code: '#',
    color: 'from-cyan-500 to-gray-700',
    icon: '🌐',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0d0d1f] text-white px-4 py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-center text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        A showcase of my recent work and side projects
      </motion.p>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full" />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a2e] p-5 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="text-4xl mb-2">{project.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-xs px-2 py-1 rounded-full bg-[#2e2e4d] text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
