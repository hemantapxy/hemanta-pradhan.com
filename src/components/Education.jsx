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
              src="https://scontent.fbbi1-2.fna.fbcdn.net/v/t39.30808-6/352203474_771756934677449_246052972089898328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MtPsZ5pCRdwQ7kNvgEKNdjo&_nc_zt=23&_nc_ht=scontent.fbbi1-2.fna&_nc_gid=AGUZzL7uCLB7bZF7Kr48CD1&oh=00_AYB4Z63FNlb8pnIWfByDA7hnlQ75eyhFwFBceW1eVKYjUQ&oe=6792416C"
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
              src="https://content.jdmagicbox.com/comp/puri/u8/9999p6752.6752.131206122647.s2u8/catalogue/swadhin-residential-college-nimapara-puri-colleges-4a1hga7xpb.jpg"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxxCl0k1-quDIx6PZPjZJb-XCtUQ6zLfb2w&s"
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
              src="https://centurionuniv.edu.in/wp-content/uploads/school-slider/BBSR/2.jpg"
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