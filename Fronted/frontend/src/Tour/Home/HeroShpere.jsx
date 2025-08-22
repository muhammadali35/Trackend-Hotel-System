import React from "react";
// import { FaPlay } from "react-icons/fa";
import { FaMountain, FaParachuteBox, FaHiking, FaPlaneDeparture } from "react-icons/fa";
import mountain from './../../assests/mountain.jpg'

const Heroshpere = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen text-white px-6 md:px-16 py-20 " style={{ backgroundImage: `url(${mountain})` }}>
          <div className="absolute inset-0 bg-green-500 opacity-40 z-0"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center space-x-4">
            {/* <div className="bg-red-500 p-4 rounded-lg shadow-lg">
              {/* <FaPlay className="text-white text-xl" /> */}
            {/* </div>  */}
            <p className="italic text-red-400 text-xl">Are you ready to travel?</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          TourSphere is a World Leading <br />
            Online Tour Booking <br />
            Platform
          </h1>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
          <Card icon={<FaMountain />} title="Wildlife Tours" />
          <Card icon={<FaParachuteBox />} title="Paragliding Tours" />
          <Card icon={<FaHiking />} title="Adventure Tours" />
          <Card icon={<FaPlaneDeparture />} title="Hang Gliding Tours" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-gray-300/30 p-6 rounded-lg text-center transition hover:scale-105 duration-300">
    <div className="text-red-400 text-4xl mb-3">{icon}</div>
    <p className="font-semibold text-lg">{title}</p>
  </div>
);

export default Heroshpere;
