import React from "react";
import { motion } from "framer-motion";

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

const skills = [
  { name: "React", icon: "/skills/react.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "Node.js", icon: "/skills/nodejs.png" },
  { name: "Python", icon: "/skills/python.png" },
  { name: "TAILWIND CSS", icon: "/skills/tailwind.png" },
  { name: "HTML5", icon: "/skills/html.png" },
  { name: "Git", icon: "/skills/git.png" },
  { name: "SQL", icon: "/skills/sql.png" },
  { name: "C/C++", icon: "/skills/cpp.png" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
];

export default function Home() {
  return (
    <section className="bg-[#0e111a] text-white px-4 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center pt-20"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Profile Photo */}
        <motion.div
          variants={item}
          className="w-40 h-40 rounded-full border-[10px] border-[#1f2330] overflow-hidden shadow-lg mb-6"
        >
          <img
            src="/your-image.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text"
        >
          DEEPAK KUMAR
        </motion.h1>

        {/* Title & Bio */}
        <motion.p variants={item} className="text-lg text-gray-400 mt-2">
          Full Stack Developer
        </motion.p>
        <motion.p
          variants={item}
          className="text-sm text-gray-500 max-w-xl mt-4"
        >
          Passionate about creating innovative web solutions and bringing ideas
          to life through code.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-12 w-full"
        >
          <motion.h2
            variants={item}
            className="text-2xl font-bold text-gray-100 text-center mb-6"
          >
            My Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-[#131722] rounded-xl p-4 flex flex-col items-center transition transform hover:scale-105 hover:shadow-[0_0_15px_#a855f7]"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="text-sm text-gray-300 text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
