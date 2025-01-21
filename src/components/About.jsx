import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 min-h-screen p-6">
      {/* Header Section */}
      <header className="text-center mb-12 animate-fadeInDown">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          About Me
        </h1>
        <p className="text-lg text-gray-300 mt-3">
          Discover who I am and what I do.
        </p>
      </header>

      {/* Introduction Section */}
      <section
        className="bg-gray-800 bg-opacity-75 shadow-2xl rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-white mb-6 animate-slideInLeft">
          Hello! I'm Hemanta Pradhan
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed animate-fadeInUp">
          I'm a passionate Fullstack MERN developer and blockchain enthusiast,
          currently pursuing my MCA. With hands-on experience in building
          projects ranging from weather apps to decentralized marketplaces, I
          thrive on crafting solutions that bridge innovation and practicality.
          My journey is fueled by a strong commitment to continuous learning
          and bringing creative ideas to life.
        </p>
      </section>

      {/* Skills Section */}
      <section
        className="bg-gray-800 bg-opacity-75 shadow-2xl rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-white mb-6 animate-slideInRight">
          My Skills
        </h2>
        <ul className="list-disc list-inside text-gray-300 text-lg space-y-3 animate-fadeInUp">
          <li>Fullstack MERN Development</li>
          <li>Blockchain Technology</li>
          <li>HTML, CSS, JavaScript, React, Node.js, Express.js</li>
          <li>Database Management with MongoDB and MySQL</li>
          <li>Python, Java, and C++</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section
        className="bg-gray-800 bg-opacity-75 shadow-2xl rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-white mb-6 animate-slideInLeft">
          Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-300 text-lg space-y-3 animate-fadeInUp">
          <li>Winner of Avalanche Hackathon at CUTM 2024</li>
          <li>Winner of Agoric Hackathon at CUTM 2025</li>
          <li>Created a Decentralized Marketplace for Local Produce</li>
          <li>Built a weather app showcasing real-time weather data</li>
          <li>President of Biju Chhatra Janata Dal at Nimapada Autonomous College, Nimapada, Puri, Odisha</li>
          <li>Representative of MLA and Higher Education Minister of Odisha</li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer className="text-center mt-12 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-white">
          Let's Connect!
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Feel free to reach out to me at{" "}
          <a
            href="mailto:hemantapxy@gmail.com"
            className="text-blue-400 font-semibold underline hover:text-blue-300"
          >
            hemantapxy@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            href="https://github.com/hemantapxy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold underline hover:text-blue-300"
          >
            GitHub
          </a>.
        </p>
      </footer>
    </div>
  );
}

export default About;