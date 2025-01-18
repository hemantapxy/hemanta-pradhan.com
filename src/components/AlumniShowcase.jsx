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
              src="https://scontent.fbbi1-2.fna.fbcdn.net/v/t39.30808-6/333670269_716344963528042_3214660344800184075_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=pPKJPqqQCMAQ7kNvgFNUl2N&_nc_zt=23&_nc_ht=scontent.fbbi1-2.fna&_nc_gid=Ay3JX8DVx7bVMWPwZCGvtD-&oh=00_AYAb47vgW0D6lxfo1cGeSyg9dft0V_X6__x5p2HF9i6M4w&oe=6789A8E8" // Replace with Haraprasad Sahoo's photo URL
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
              src="https://media.licdn.com/dms/image/v2/D4D35AQHi3nyWZpPtng/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1680503845748?e=1737302400&v=beta&t=t_P1SZsL2XjIknhRpn5qplria8Za0hK1igNTUX9CoVo" // Replace with Subhajit Pradhan's photo URL
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
              src="https://scontent.fbbi1-2.fna.fbcdn.net/v/t39.30808-6/454940184_1566981000607645_7339159509915486505_n.jpg?stp=c0.89.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=714c7a&_nc_ohc=LP_sH1FnNyYQ7kNvgHaJFT3&_nc_zt=23&_nc_ht=scontent.fbbi1-2.fna&_nc_gid=AEesJOCOfe5A9yuXBDJh-hU&oh=00_AYCk62Ng3z0FlbUeg51Q8T6vAw0Q0aBY18QxLlL2RVb-5Q&oe=6789BAD5" // Replace with Lalatendu Rout's photo URL
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