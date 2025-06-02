import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: '/skills/react.png' },
  { name: 'JavaScript', icon: '/skills/javascript.png' },
  { name: 'Node.js', icon: '/skills/nodejs.png' },
  { name: 'Tailwind CSS', icon: '/skills/tailwind.png' },
  { name: 'Python', icon: '/skills/python.png' },
  { name: 'HTML', icon: '/skills/html.png' },
  { name: 'Git', icon: '/skills/git.png' },
  { name: 'SQL', icon: '/skills/sql.png' },
  { name: 'C/C++', icon: '/skills/cpp.png' },
  { name: 'MongoDB', icon: '/skills/mongodb.png' },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <section className="bg-[#0e111a] text-white px-4 py-10 min-h-screen flex flex-col items-center">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          variants={item}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-[10px] border-[#1f2330] overflow-hidden shadow-lg mb-6 mx-auto"
        >
          <img
            src="/me.png"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text"
        >
          DEEPAK KUMAR
        </motion.h1>
        <motion.p variants={item} className="text-lg text-gray-400 mt-2">
          Full Stack Developer
        </motion.p>
        <motion.p
          variants={item}
          className="text-sm text-gray-500 max-w-xl mt-4 mx-auto"
        >
          Passionate about creating innovative web solutions and bringing ideas to life through code.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h2
          variants={item}
          className="text-2xl font-bold text-center mb-8 text-gray-100"
        >
          My Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#131722] rounded-xl p-4 flex flex-col items-center shadow hover:scale-105 transition-transform"
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
              <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
