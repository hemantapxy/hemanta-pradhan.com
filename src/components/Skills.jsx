import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'Figma', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Solidity', level: 'Beginner' },
  ];

  return (
    <div className="bg-gradient-to-tr from-blue-100 to-purple-100 py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with. I’m always learning and expanding my skill set!
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4 text-blue-600">
                {/* Add icons for skills (optional) */}
                {skill.name === 'HTML' && <i className="fab fa-html5"></i>}
                {skill.name === 'CSS' && <i className="fab fa-css3-alt"></i>}
                {skill.name === 'JavaScript' && <i className="fab fa-js"></i>}
                {skill.name === 'React' && <i className="fab fa-react"></i>}
                {skill.name === 'Node.js' && <i className="fab fa-node"></i>}
                {skill.name === 'Git' && <i className="fab fa-git-alt"></i>}
                {skill.name === 'Python' && <i className="fab fa-python"></i>}
                {skill.name === 'Figma' && <i className="fab fa-figma"></i>}
                {skill.name === 'Solidity' && <i className="fas fa-code"></i>}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;