import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NPL MODEL',
    description: 'Voice Recognizing model provides automation in work',
    tags: ['Python', 'SpeechRecognition', 'PyAutoGUI', 'BeautifulSoup'],
    demo: '',
    code: 'https://github.com/DEEPAK-KUMAR-5/max-assist/tree/main/ASSIST%20AI%20MAX',
    icon: '🤖',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio showcasing projects and skills with interactive animations.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    demo: '',
    code: 'https://github.com/DEEPAK-KUMAR-5/Portfolio-website',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              className="bg-[#1a1a2e] p-5 rounded-xl shadow-md transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl mb-2">{project.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs px-2 py-1 rounded-full bg-[#2e2e4d] text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs mt-4 text-blue-400 underline text-right">View on GitHub</p>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
