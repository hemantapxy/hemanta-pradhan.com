import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Image and Text */}
        <div className="text-xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo Image */}
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFCnulgMWU2Pw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727279323690?e=1742428800&v=beta&t=RkKAHVDe6srGJs_sVdtKJYCcIUEpr5j0QXX9W6fUSrI" // Replace with your logo URL
              alt="Logo"
              className="h-10 w-10"
            />
            {/* Logo Text */}
            <span className="text-2xl font-extrabold text-white">Hemanta's'</span>
            <span className="text-2xl font-light text-yellow-300">.</span>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 mt-4 lg:mt-0`}
        >
          <li>
            <Link to="/" className="hover:underline block lg:inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline block lg:inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:underline block lg:inline-block">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:underline block lg:inline-block">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:underline block lg:inline-block">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline block lg:inline-block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;