import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 text-white p-3 shadow-lg fixed w-full top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the Left */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
          Hemanta's'
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu - Centered */}
        <ul className="hidden md:flex space-x-6 items-center absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link to="/" className="hover:text-blue-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-200 transition duration-300">
             Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-blue-200 transition duration-300">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-200 transition duration-300">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-blue-200 transition duration-300">
              Education
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-200 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Login Button on the Right */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="block hover:text-blue-200 transition duration-300">
               Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-blue-200 transition duration-300">
               About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="block hover:text-blue-200 transition duration-300">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="block hover:text-blue-200 transition duration-300">
              Blogs
              </Link>
            </li>
            <li>
              <Link to="/projects" className="block hover:text-blue-200 transition duration-300">
                Projects
              </Link>
            </li>
            <li>
            <Link to="/education" className="hover:text-blue-200 transition duration-300">
              Education
            </Link>
          </li>
            <li>
              <Link to="/contact" className="block hover:text-blue-200 transition duration-300">
                Contact
              </Link>
            </li>
            {/* Login Button for Mobile */}
            <li>
              <Link
                to="/login"
                className="block bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;