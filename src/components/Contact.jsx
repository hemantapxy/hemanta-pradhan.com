import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);

      setIsSuccessModalOpen(true); // Show the success modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          The Ultimate Guide To Ace SDE Interviews. Let’s connect and build something amazing together!
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Contact Information
            </h3>
            <div className="flex flex-col items-center space-y-6">
              <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
                src="https://media.licdn.com/dms/image/v2/D5603AQFCnulgMWU2Pw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727279323690?e=1742428800&v=beta&t=RkKAHVDe6srGJs_sVdtKJYCcIUEpr5j0QXX9W6fUSrI"
                alt="Your Name"
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-lg"
              />
              <div className="text-center space-y-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> hemantapxy@gmail.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> +91 8260922913
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> Puri, Odisha, India
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/hemanta-pradhan-801146296/"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://github.com/hemantapxy"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://x.com/hemantapxy"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsSuccessModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-2xl max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out! We will get back to you soon. Have a great day!
            </p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;