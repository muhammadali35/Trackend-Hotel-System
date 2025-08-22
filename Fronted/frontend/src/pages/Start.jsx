import React from 'react';
import { Link } from 'react-router-dom';
import start from './../assests/start.jpg'

const Start = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${start})` }} 
    >
      {/* Logo Section */}
      <div className="p-6">
        <img
          className="w-24"
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="Logo"
        />
      </div>

      {/* Content Box */}
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-t-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Get Started with Trekend Hotel</h2>
        <Link
          to="/home"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
