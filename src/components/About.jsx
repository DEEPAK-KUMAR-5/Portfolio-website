// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0d0d1f] text-white px-4 py-10 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full" />
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        <motion.div
          className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg w-full md:w-[45%] backdrop-blur-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-purple-400 mb-2">My Journey</h2>
          <p className="text-sm text-gray-300">
            I’m a passionate full-stack developer experience creating innovative web solutions.
            My journey started with curiosity about how websites work and evolved into a deep passion for building
            user-centric applications.
            <br />
            <br />
            I specialize in modern JavaScript frameworks, particularly React and Node.js, and I’m always eager to learn
            new technologies and tackle challenging problems.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg w-full md:w-[45%] backdrop-blur-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-green-400 mb-2">What I Do</h2>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Frontend Development with React & JavaScript</li>
            <li>Backend Development with Node.js & Python</li>
            <li>Database Management</li>
            <li>UI/UX Design</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 w-full max-w-3xl bg-[#1a1a2e] p-6 rounded-xl text-center shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-orange-400 mb-3">Let's Connect</h2>
        <p className="text-sm text-gray-300 mb-5">
          I’m always interested in discussing new opportunities, interesting projects, or just chatting about technology.
          Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=deepak.kumar.h07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-blue-500/50 hover:scale-105"
          >
            Gmail Me
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-kumar-h0407"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-blue-400/50 hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
