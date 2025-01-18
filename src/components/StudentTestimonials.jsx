import React, { useState, useEffect } from 'react';

const StudentTestimonials = () => {
  const testimonials = [
    {
      name: 'Alokesh Beaura',
      role: 'Devops Developer',
      review:
        ' DevOps Developer is a professional who bridges the gap between development and operations teams to streamline the software development lifecycle and improve collaboration. ',// description for devops developer
      image: 'https://scontent.fbbi1-2.fna.fbcdn.net/v/t39.30808-6/464009376_980564367208184_6517550152661259008_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ll-UfY3ZdHoQ7kNvgHWvq--&_nc_zt=23&_nc_ht=scontent.fbbi1-2.fna&_nc_gid=A121tDjyyo3MWrRTSZ5Z0lF&oh=00_AYDiBqIebdFaWPxvMrpNxxH5bcI0hmH2j3pt6p5ztHqm2g&oe=6790580F', // Replace with Parth Singh's photo URL
    },
    {
      name: 'Sarbeshwar Parida',
      role: 'AR-VR Developer',
      review:
        "An AR/VR Developer is a technology professional who designs, develops, and implements immersive experiences using Augmented Reality (AR) and Virtual Reality (VR) technologies.",
      image: 'https://scontent.fbbi1-1.fna.fbcdn.net/v/t39.30808-6/352798283_1401061134017859_4783735444320809805_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=64QxkSfHaoUQ7kNvgHicfgN&_nc_zt=23&_nc_ht=scontent.fbbi1-1.fna&_nc_gid=AC1Yy-p7PQuBFU__5qeKgG5&oh=00_AYABXB_4MYIb5K0Mb420V9Lw-OsEhewUUQmJ75iSg3Jb1g&oe=679059F1', // Replace with Vedant Jain's photo URL
    },
    {
      name: 'Shakti Shree Mishra',
      role: 'Intern at DSDA',
      review:
        'DSDA Intern (Data Science and Data Analytics Intern) for the Government of Odisha is a professional engaged in applying data science and analytical techniques to solve real-world problems.',
      image: 'https://scontent.fbbi1-2.fna.fbcdn.net/v/t39.30808-6/462355346_971698321428122_3665243599094423224_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zrU21Rm0KSkQ7kNvgGUuA-9&_nc_zt=23&_nc_ht=scontent.fbbi1-2.fna&_nc_gid=APkyCnlQnszxS2AqtiLc7CA&oh=00_AYD6Xr2L6K3iPIkCiW9A7epp-8AN3krVJSNGAFVBW85wJQ&oe=67905BDC', // Replace with Tushar Gupta's photo URL
    },
    {
      name: 'Satya Prangyan Dash',
      role: 'Final year student of MCA',
      review:
        '  MCA is advanced computing concepts, software development, and IT applications. As they approach the culmination of their academic journey.',
      image: 'https://scontent.fbbi1-1.fna.fbcdn.net/v/t39.30808-6/473314202_1258858388557677_8196290430711067962_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=tWRcGtQpCtsQ7kNvgG_-T0Y&_nc_zt=23&_nc_ht=scontent.fbbi1-1.fna&_nc_gid=Ax9vyIHLe9yrce_BKwESDpk&oh=00_AYCVhmbVjQ_Jc2_gWdE-z2OduzgQ2r9jcw60pwsTGxtYNA&oe=67906C5A', // Replace with Anshika Aggarwal's photo URL
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