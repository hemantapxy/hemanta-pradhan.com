import React from "react";
import { FaSchool, FaUniversity, FaGraduationCap, FaLaptopCode } from "react-icons/fa"; // Import icons

const Education = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Education</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* 10th Grade */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-l-4 border-blue-500">
          <div className="flex items-center mb-4">
            <FaSchool className="text-blue-500 text-2xl mr-4" />
            <h2 className="text-2xl font-semibold text-white">10th Grade</h2>
          </div>
          <p className="text-gray-300">
            <strong>School:</strong> Shree Jagannath Vidyapitha, Puri
          </p>
          <p className="text-gray-300">
            <strong>Board:</strong> BSE, Odisha
          </p>
          <p className="text-gray-300">
            <strong>Year of Passing:</strong> 2018
          </p>
          <p className="text-gray-300">
            <strong>Percentage/CGPA:</strong> 78.67%
          </p>
          <div className="mt-4">
            <img
              src="https://res.cloudinary.com/djvgkqgkt/image/upload/v1737871667/imageUpload/uversa3so1qaef2hjq8k.png"
              alt="10th Grade School"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* 12th Grade */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-l-4 border-green-500">
          <div className="flex items-center mb-4">
            <FaSchool className="text-green-500 text-2xl mr-4" />
            <h2 className="text-2xl font-semibold text-white">12th Grade</h2>
          </div>
          <p className="text-gray-300">
            <strong>School:</strong> Swadhin Higher Secondary School, Nimapada, Puri
          </p>
          <p className="text-gray-300">
            <strong>Board:</strong> CHSE, Odisha
          </p>
          <p className="text-gray-300">
            <strong>Year of Passing:</strong> 2020
          </p>
          <p className="text-gray-300">
            <strong>Percentage/CGPA:</strong> 68.67%
          </p>
          <div className="mt-4">
            <img
              src="https://res.cloudinary.com/djvgkqgkt/image/upload/v1737871765/imageUpload/e6b29euhipurqjpukfhx.png"
              alt="12th Grade School"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Graduation */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-l-4 border-purple-500">
          <div className="flex items-center mb-4">
            <FaUniversity className="text-purple-500 text-2xl mr-4" />
            <h2 className="text-2xl font-semibold text-white">Graduation</h2>
          </div>
          <p className="text-gray-300">
            <strong>Degree:</strong> B.Sc (Bachelor of Science)
          </p>
          <p className="text-gray-300">
            <strong>College/University:</strong> Utkal University, Bhubaneswar
          </p>
          <p className="text-gray-300">
            <strong>Year of Passing:</strong> 2023
          </p>
          <p className="text-gray-300">
            <strong>Percentage/CGPA:</strong> 8.69
          </p>
          <div className="mt-4">
            <img
              src="https://res.cloudinary.com/djvgkqgkt/image/upload/v1737871853/imageUpload/m6zpm23l2xocu9n4jxdx.png"
              alt="Graduation College"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* MCA */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-l-4 border-yellow-500">
          <div className="flex items-center mb-4">
            <FaLaptopCode className="text-yellow-500 text-2xl mr-4" />
            <h2 className="text-2xl font-semibold text-white">MCA (Master of Computer Applications)</h2>
          </div>
          <p className="text-gray-300">
            <strong>College/University:</strong> Centurion University of Technology and Management, Bhubaneswar
          </p>
          <p className="text-gray-300">
            <strong>Year of Passing:</strong> 2025
          </p>
          <p className="text-gray-300">
            <strong>Percentage/CGPA:</strong> 8.57
          </p>
          <div className="mt-4">
            <img
              src="https://res.cloudinary.com/djvgkqgkt/image/upload/v1737871895/imageUpload/zzamra5jiztjw7ddw9sh.png"
              alt="MCA College"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;