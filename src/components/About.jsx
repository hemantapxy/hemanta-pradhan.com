import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="text-center mb-12 animate-fadeInDown">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide">
          About Me
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Discover who I am and what I do.
        </p>
      </header>

      {/* Introduction Section */}
      <section
        className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-slideInLeft">
          Hello! I'm Hemanta Pradhan
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed animate-fadeInUp">
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
        className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-slideInRight">
          My Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-3 animate-fadeInUp">
          <li>Fullstack MERN Development</li>
          <li>Blockchain Technology</li>
          <li>HTML, CSS, JavaScript, React, Node.js, Express.js</li>
          <li>Database Management with MongoDB and MySQL</li>
          <li>Python, Java, and C++</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section
        className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-slideInLeft">
          Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-3 animate-fadeInUp">
          <li>Winner of Avalanche Hackathon at CUTM 2024</li>
          <li>Winner of Agoric Hackathon at CUTM 2025</li>
          <li>Created a Decentralized Marketplace for Local Produce</li>
          <li>Built a weather app showcasing real-time weather data</li>
          <li>President of Biju Chhatra Janata Dal at Nimapada Autonomous College,Nimapada,Puri,Odisha</li>
          <li>Representive of MLA and School & Masseducation minister of Odisha</li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer className="text-center mt-12 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-gray-800">
          Let's Connect!
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Feel free to reach out to me at{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 font-semibold underline"
          >
          hemantapxy@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            href="https://github.com/hemantapxy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold underline"
          >
            GitHub
          </a>.
        </p>
      </footer>
    </div>
  );
}

export default About;
