import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Mastering React Hooks',
      description: 'A comprehensive guide to understanding and using React Hooks effectively.',
      date: 'January 12, 2025',
      image: 'https://i.ytimg.com/vi/LlvBzyy-558/maxresdefault.jpg',
      link: 'https://plan-with-gudu.vercel.app/',
    },
    {
      id: 2,
      title: 'Tailwind CSS: The Ultimate Guide',
      description: 'Learn how to build modern and responsive UIs with Tailwind CSS.',
      date: 'December 20, 2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGVV8fOc_D2_vxf1_MrxRuPeF3Y1EFAJrxg&s',
      link: 'https://vercel.com/hemanta-pradhans-projects/smart-india/4bsmVetzEKP3zjZEq8vK5ewBPqH1',
    },
    {
      id: 3,
      title: 'Building a Decentralized Marketplace',
      description: 'Step-by-step guide to creating a blockchain-based marketplace using Solidity and Web3.js.',
      date: 'November 15, 2024',
      image: 'https://ares.decipherzone.com/blog-manager/uploads/banner_398db4c7-cc4f-41ee-8248-4e89a241ab90.jpg',
      link: 'powerchain-gudu-px35wahc3-hemanta-pradhans-projects.vercel.app',
    },
    {
      id: 4,
      title: 'Getting Started with Node.js',
      description: 'A beginner-friendly guide to building backend applications with Node.js.',
      date: 'October 10, 2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrNVwxlBhUzwBd6H4YqdJckckasr4N6PjQw&s',
      link: 'https://vercel.com/hemanta-pradhans-projects/www-quizgame-gudu/3bTM3ysQDuUHWEqjUsgzjfvTif3g',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            My Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore my latest blog posts on web development, programming, and technology.
          </motion.p>
        </div>

        {/* Blog Posts List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Blog Image */}
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full md:w-64 h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Blog Content */}
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Published on {post.date}
                  </p>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;