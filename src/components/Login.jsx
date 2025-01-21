import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      {/* Container */}
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          {/* Learn Box */}
          <div className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
              <i className="text-white text-2xl">📘</i>
            </div>
            <p className="text-blue-400 text-lg font-semibold">
              Learn: Access 100+ Courses
            </p>
          </div>

          {/* Apply Box */}
          <div className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full">
              <i className="text-white text-2xl">📅</i>
            </div>
            <p className="text-pink-400 text-lg font-semibold">
              Apply: Build, Play, Create
            </p>
          </div>

          {/* Grow Box */}
          <div className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full">
              <i className="text-white text-2xl">🚀</i>
            </div>
            <p className="text-green-400 text-lg font-semibold">
              Grow: Elevate Your Career
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md text-white">
          <h2 className="text-2xl font-bold mb-4">Secure Access Made Simple</h2>
          <p className="text-gray-400 mb-6">
            Accessing your account is a CodeHelp. Pick your preferred login
            method.
          </p>

          {/* Login Options */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              <i className="text-2xl">🌐</i>
              <span>Continue with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              <i className="text-2xl">🐱</i>
              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="h-px bg-gray-700 flex-1"></div>
            <span className="px-4 text-gray-500">OR Register/Login with email</span>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          {/* Email Input */}
          <div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
              <i className="text-2xl">✉️</i>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 outline-none text-gray-300"
              />
            </div>
          </div>

          {/* Login Button */}
          <p className="text-gray-400 mt-4">Don’t have an account?</p>
          <button className="bg-blue-600 w-full py-2 rounded-lg text-lg mt-4 hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
