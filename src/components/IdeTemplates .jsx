import React from 'react';
import { FaJs, FaPython, FaJava, FaCuttlefish, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'; // Using React Icons for logos

const IdeTemplates = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          50+ POWERFUL IN-BROWSER IDE TEMPLATES TO PRACTICE ON
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Explore a wide range of templates to enhance your coding skills directly in your browser.
        </p>

        {/* Language Logos */}
        <div className="flex justify-center space-x-8 flex-wrap">
          {/* JavaScript */}
          <div className="flex flex-col items-center m-4">
            <FaJs className="text-6xl text-yellow-400 hover:text-yellow-500 transition-colors duration-300" />
            <p className="mt-2 text-gray-400">JavaScript</p>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center m-4">
            <FaPython className="text-6xl text-blue-500 hover:text-blue-600 transition-colors duration-300" />
            <p className="mt-2 text-gray-400">Python</p>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center m-4">
            <FaJava className="text-6xl text-red-600 hover:text-red-700 transition-colors duration-300" />
            <p className="mt-2 text-gray-400">Java</p>
          </div>

          {/* C++ */}
          <div className="flex flex-col items-center m-4">
            <FaCuttlefish className="text-6xl text-blue-700 hover:text-blue-800 transition-colors duration-300" />
            <p className="mt-2 text-gray-400">C++</p>
          </div>

          {/* HTML */}
          <div className="flex flex-col items-center m-4">
            <FaHtml5 className="text-6xl text-orange-500 hover:text-orange-600 transition-colors duration-300" />
            <p className="mt-2 text-gray-400">HTML</p>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center m-4">
            <FaCss3Alt className="text-6xl text-blue-400 hover:text-blue-500 transition-colors duration-300" />
            <p className="mt-2 text-gray-400">CSS</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-center m-4">
            <FaReact className="text-6xl text-blue-300 hover:text-blue-400 transition-colors duration-300" />
            <p className="mt-2 text-gray-400">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeTemplates;