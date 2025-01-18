import React from 'react';

const QuickCompiler = () => {
  // Updated default code snippet
  const defaultCode = `<html>
  <head>
    <title>Quick Compiler</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Welcome to Quick Compiler</h1>
    <p>Edit this code and see the results in real-time!</p>
    <script>
      console.log('Hello, Quick Compiler!');
    </script>
  </body>
</html>`;

  return (
    <div className="font-sans p-6 mt-7 bg-white rounded-lg shadow-md max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">
          <a href="/" className="no-underline">Quick Compiler</a>
        </h1>
        <nav className="flex space-x-4">
          <a href="one/" className="text-green-500 no-underline hover:text-blue-700 hover:scale-105 transition-all duration-300 font-bold">Replit</a>
          <a href="two/" className="text-green-500 no-underline hover:text-blue-700 hover:scale-105 transition-all duration-300 font-bold">VS Code</a>
          <a href="three/" className="text-green-500 no-underline hover:text-blue-700 hover:scale-105 transition-all duration-300 font-bold">C Lion</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-500 transition-colors duration-300">
          Code On-the-Go with Quick Compiler
        </h2>
        <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
          Quick Compiler is your go-to tool for real-time code editing and testing. Whether you're a beginner or an expert, our platform makes coding effortless and fun.
        </p>

        {/* Flex Container for Code Snippet and Button */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Code Snippet */}
          <div className="bg-gray-100 p-4 rounded-lg text-left hover:bg-gray-200 transition-colors duration-300 flex-1">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
              <code>{defaultCode}</code>
            </pre>
          </div>

          {/* Try It Yourself Button */}
          <div className="flex items-center justify-center flex-1">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300">
              Try It Yourself
            </button>
          </div>
        </div>

        <p className="mt-6 text-gray-600 hover:text-gray-800 transition-colors duration-300">Need help? Contact us!</p>
      </main>
    </div>
  );
};

export default QuickCompiler;