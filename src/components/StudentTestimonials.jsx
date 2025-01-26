import React, { useState, useEffect } from 'react';

const StudentTestimonials = () => {
  const testimonials = [
    {
      name: 'Alokesh Beaura',
      role: 'Devops Developer',
      review:
        ' DevOps Developer is a professional who bridges the gap between development and operations teams to streamline the software development lifecycle and improve collaboration. ',// description for devops developer
      image: 'https://res.cloudinary.com/djvgkqgkt/image/upload/v1737870792/imageUpload/s9hoyuad0tij1r8mgc9k.png', // Replace with Parth Singh's photo URL
    },
    {
      name: 'Sarbeshwar Parida',
      role: 'AR-VR Developer',
      review:
        "An AR/VR Developer is a technology professional who designs, develops, and implements immersive experiences using Augmented Reality (AR) and Virtual Reality (VR) technologies.",
      image: 'https://res.cloudinary.com/djvgkqgkt/image/upload/v1737871219/imageUpload/og2csoe7afrvq5mmdvag.png', // Replace with Vedant Jain's photo URL
    },
    {
      name: 'Shakti Shree Mishra',
      role: 'Intern at DSDA',
      review:
        'DSDA Intern (Data Science and Data Analytics Intern) for the Government of Odisha is a professional engaged in applying data science and analytical techniques to solve real-world problems.',
      image: 'https://res.cloudinary.com/djvgkqgkt/image/upload/v1737870955/imageUpload/rpnl6ecngp9xmdwc3zcx.png', // Replace with Tushar Gupta's photo URL
    },
    {
      name: 'Satya Prangyan Dash',
      role: 'Final year student of MCA',
      review:
        '  MCA is advanced computing concepts, software development, and IT applications. As they approach the culmination of their academic journey.',
      image: 'https://res.cloudinary.com/djvgkqgkt/image/upload/v1737870891/imageUpload/wjh0qhgzxhy5cggrgiqe.png', // Replace with Anshika Aggarwal's photo URL
    },
    // {
    //   name: 'Bhaiya Bhalla',
    //   role: 'Student',
    //   review:
    //     'This course is beginner-friendly, starting from the basics of C++ to advanced concepts such as...',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQ8GQ2PihKtlqL3woEn683qXLukteWuoVZQ&s', // Replace with Bhaiya Bhalla's photo URL
    // },
    // {
    //   name: 'Debasish Nayak',
    //   role: 'Software Developer',
    //   review:
    //     'CodeHelp has been a game-changer for me. The courses are well-structured, and the instructors are amazing!',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQ8GQ2PihKtlqL3woEn683qXLukteWuoVZQ&s', // Replace with Friend 1's photo URL
    // },
    // {
    //   name: 'Sarbeswar Parida',
    //   role: 'Data Scientist',
    //   review:
    //     'The DSA course helped me crack my dream job. Highly recommended for anyone preparing for tech interviews.',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQ8GQ2PihKtlqL3woEn683qXLukteWuoVZQ&s', // Replace with Friend 2's photo URL
    // },
  ];

  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) => [
        (prev[0] + 1) % testimonials.length,
        (prev[1] + 1) % testimonials.length,
        (prev[2] + 1) % testimonials.length,
      ]);
    }, 5000); // Change testimonials every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
          What My Friends Say
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Discover inspiration and insights through recent reviews from our students. Their success stories reflect the transformative journey of learning and growth with CodeHelp.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {currentIndices.map((index, colIndex) => (
            <div
              key={colIndex}
              className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 ${
                colIndex === 0
                  ? 'animate-float-up'
                  : colIndex === 1
                  ? 'animate-float-down'
                  : 'animate-float-up'
              }`}
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Student Photo */}
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-24 h-24 rounded-full border-4 border-blue-500"
                />

                {/* Testimonial Details */}
                <h2 className="text-xl font-bold text-blue-600">
                  {testimonials[index].name}
                </h2>
                <p className="text-gray-600 font-semibold">
                  {testimonials[index].role}
                </p>
                <p className="text-gray-600 text-center">
                  {testimonials[index].review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonials;