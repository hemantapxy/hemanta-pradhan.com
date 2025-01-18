import React from "react";
import { motion } from "framer-motion";
import QuickCompiler from "./QuickCompiler";
import IdeTemplates from "./IdeTemplates ";
import AlumniShowcase from "./AlumniShowcase";
import InstructorSection from "./InstructorSection";
import StudentTestimonials from "./StudentTestimonials";
import CodingFamily from "./CodingFamily";

// Import the QuickCompiler component

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-700 h-full col-span-2"></div>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="z-10 text-center px-8"
      >
        <p className="text-red-500 text-lg font-bold mb-2">Stay Tuned</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hemanta Pradhan <span className="text-red-500">a passionate</span> Fullstack Developer
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Get ready for our most powerful learning experience yet. It's time to go{" "}
          <span className="text-red-500">RED</span>.
        </p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          <motion.button
            variants={slideUp}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Notify Me
          </motion.button>
          <motion.button
            variants={slideUp}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Watch Video
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-gray-900 to-black w-full py-12 px-4"
      >
        <div className="max-w-6xl mx-auto rounded-lg bg-gray-800 shadow-md p-8 border border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Stat Item */}
            <motion.div
              variants={slideUp}
              className="p-4 rounded-lg bg-gray-900 shadow-sm border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-2">1.5k</h2>
              <p className="text-gray-400">Friends on Facebook</p>
            </motion.div>
            {/* Stat Item */}
            <motion.div
              variants={slideUp}
              className="p-4 rounded-lg bg-gray-900 shadow-sm border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-2">100 +</h2>
              <p className="text-gray-400">Followers on Twitter</p>
            </motion.div>
            {/* Stat Item */}
            <motion.div
              variants={slideUp}
              className="p-4 rounded-lg bg-gray-900 shadow-sm border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-2">200 +</h2>
              <p className="text-gray-400">Followers on Instagram</p>
            </motion.div>
            {/* Stat Item */}
            <motion.div
              variants={slideUp}
              className="p-4 rounded-lg bg-gray-900 shadow-sm border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-2">1.2k +</h2>
              <p className="text-gray-400">Followers on LinkedIn</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Learning Experience Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="bg-gray-100 text-gray-800 w-full py-12"
      >
        <div className="container mx-auto px-4">
          <header className="bg-blue-600 text-white py-5 rounded-t-lg">
            <h1 className="text-3xl font-bold">Hands-On Learning Experience</h1>
          </header>
          <div className="bg-white p-6 rounded-b-lg shadow-lg">
            <p className="text-lg mb-4">
              Why We're Your Best Choice for Code Learning
            </p>
            <p className="text-lg mb-4">
              As a student, I understand the importance of high-quality education. That's why CodeHelp offers courses designed by industry experts to ensure that the content you learn is both relevant and up-to-date with the latest trends in technology.
            </p>
            <p className="text-lg mb-6">
              Choose CodeHelp for an unparalleled coding experience.
            </p>
            <a
              href="#apply"
              className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-600 transition-colors"
            >
              Apply: Build, Play, Create
            </a>
          </div>
          <div id="apply" className="bg-white p-10 mt-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg">
              Bring ideas to life in CodeHelp's Apply.Build projects, play in boot
              playgrounds—all in your browser.
            </p>
            {/* Add QuickCompiler component here */}
            
          </div>


          <QuickCompiler />
          <IdeTemplates />
          <AlumniShowcase />
          <InstructorSection />
          <StudentTestimonials />
          <CodingFamily />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;