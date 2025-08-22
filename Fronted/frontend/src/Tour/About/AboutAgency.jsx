import React from 'react';
import explore from '../../assests/heropic.jpg';

const AboutAgency = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 px-6 py-12 lg:px-16 bg-white">
      {/* Left: Image */}
      <div className="w-full lg:w-[60%] flex justify-center">
        <img
          src={explore}
          alt="TourSphere Agency"
          className="rounded-3xl shadow-2xl w-[90%] max-w-2xl h-[550px] object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-[40%] space-y-6">
        <p className="text-yellow-500 italic text-lg font-medium">Learn about us</p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Dare to Explore with <span className="text-yellow-500">TourSphere</span>
        </h1>

        <p className="text-gray-600 text-base leading-relaxed">
          Trusted by thousands of travelers, TourSphere provides top-tier travel services around the globe.
          From personalized adventures to curated luxury tours, we make your journey memorable.
          With a focus on safety and comfort, we are your go-to travel agency for the perfect experience.
        </p>

        {/* Progress Bars */}
        <div className="space-y-6 pt-4">
          {/* Services Progress */}
          <div>
            <div className="flex justify-between mb-1">
              <p className="font-semibold text-gray-800">Best Services</p>
              <span className="text-sm font-medium text-yellow-600">88%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-500 h-3 rounded-full w-[88%] transition-all duration-500"></div>
            </div>
          </div>

          {/* Agents Progress */}
          <div>
            <div className="flex justify-between mb-1">
              <p className="font-semibold text-gray-800">Tour Agents</p>
              <span className="text-sm font-medium text-yellow-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-500 h-3 rounded-full w-[75%] transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
