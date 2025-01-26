import React from 'react';

const AlumniShowcase = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          My Friends Graduates: Powering Top Tech Giants
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet my proud alumni shaping the future at major tech companies. Discover the impact CodelHelp has had on their careers and the tech landscape.
        </p>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Alumni 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://res.cloudinary.com/djvgkqgkt/image/upload/v1737869741/imageUpload/pyuqoxorz1enjiv3dipp.png" 
              // Replace with Haraprasad Sahoo's photo URL
              alt="Haraprasad Sahoo"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Haraprasad Sahoo</h2>
            <p className="text-gray-600 mb-4">Software Developer</p>
            <p className="text-gray-500">Microsoft Software Developer Intern</p>
          </div>

          {/* Alumni 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://res.cloudinary.com/djvgkqgkt/image/upload/v1737870082/imageUpload/iu7zd2us4eonao2firkp.png" // Replace with Subhajit Pradhan's photo URL
              alt="Subhajit Pradhan"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Subhajit Pradhan</h2>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <p className="text-gray-500">Human Holdings Data Scientist</p>
          </div>

          {/* Alumni 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://res.cloudinary.com/djvgkqgkt/image/upload/v1737870175/imageUpload/zfx6nfmymsvduluvjeb9.png" // Replace with Lalatendu Rout's photo URL
              alt="Lalatendu Rout"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Lalatendu Rout</h2>
            <p className="text-gray-600 mb-4">Associate Software Engineer</p>
            <p className="text-gray-500">Nagarro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniShowcase;