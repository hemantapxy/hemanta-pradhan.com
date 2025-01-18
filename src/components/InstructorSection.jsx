import React, { useState, useEffect } from 'react';

const InstructorSection = () => {
  const instructors = [
    {
      name: 'Love Babbar',
      role: 'Founder - CodeHelp, Ex-Amazon, Ex-Microsoft',
      description: [
        'Love Babbar is a Software Engineer and a YouTuber, primarily known for his Coding and Software Engineering skills.',
        'He is quite a popular figure among students as well as working professionals on various social media platforms, his YouTube and LinkedIn profiles amassing almost 1M subscribers.',
        'He’s also mentored 500K+ students so far.',
        'He has done his B.Tech (IT) from the Netaji Subhash Institute of Technology (NSIT), Delhi, and worked in Amazon and Microsoft.',
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQour2SSj746OlvV0Xjf5FEMtvBWVMYkxfZfQ&s',
    },
    {
      name: 'Lakshay Kumar',
      role: 'CS @Adobe, Instructor @Code-Help',
      description: [
        'Lakshay Kumar is an ace software engineer working in the role of Computer Scientist at Adobe Systems and a popular computer science instructor on CodeHelp YouTube.',
        'He is working in the industry for the past 4.5 years, working on different real-world problems.',
        'He is well-known among students for his amazingly simplified explanations with real-life examples, enabling students to understand complex topics very easily.',
        'Many of his ex-students are now working in top tech companies.',
      ],
      image: 'https://media.licdn.com/dms/image/v2/D5603AQH7_B7Zb9E6Bw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714336290715?e=2147483647&v=beta&t=9QiFty-hztC8cFI_L-F8vHmWFl3y3CMEiMueA5BD_f0', // Replace with Lakshay Kumar's photo URL
    },
    {
      name: 'Abhi Mitra',
      role: 'CS @Adobe, Instructor @Unity',
      description: [
        'Certified Unity Developer | Certified AWS Solution Architect | Blockchain | Unreal Engine | Web3 | Community Management | Six Sigma Yellow Belt | Keynote Speaker | Building Metaverse for Skill Training',
      ],
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEH-KSAAfZ1wA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732787292229?e=1742428800&v=beta&t=4Iy1iMzImw3zooCcd0nyokUUl8nNq5kzVUk2SYxuxgA', // Replace with Lakshay Kumar's photo URL
    },
  ];

  const [currentInstructor, setCurrentInstructor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInstructor((prev) => (prev + 1) % instructors.length);
    }, 5000); // Change instructor every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [instructors.length]);

  const instructor = instructors[currentInstructor];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
          My Instructors
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at CodeHelp.
        </p>

        {/* Instructor Card */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-left transform transition-all duration-500 hover:scale-105 hover:shadow-lg animate-slide-in">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Instructor Photo */}
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-32 h-32 rounded-full border-4 border-blue-500 transform transition-all duration-500 hover:scale-110"
            />

            {/* Instructor Details */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-blue-600 animate-fade-in">
                {instructor.name}
              </h2>
              <p className="text-gray-600 mb-4 font-semibold animate-fade-in">
                {instructor.role}
              </p>
              {instructor.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 mb-4 animate-fade-in"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;