import React from "react";
import { FaBed, FaConciergeBell } from "react-icons/fa";
import whychoose from './../../assests/why.jpg';

const WhyChoose = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch mb-10 mt-12">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src={whychoose}
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 bg-[#1F1B2E] text-white p-10 flex flex-col justify-center">
        <p className="text-yellow-400 italic text-lg mb-2">Why Guests Love Us</p>
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Why Choose <span className="text-yellow-400">Trekend Hotel</span>
        </h2>
        <p className="text-gray-300 mb-10">
          At Trekend Hotel, we prioritize your comfort with luxury rooms,
          world-class service, and a location close to major attractions. Your perfect stay begins here.
        </p>

        {/* Feature 1 */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="text-yellow-400 text-3xl mt-1">
            <FaBed />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              Comfortable & Modern Rooms
            </h4>
            <p className="text-gray-400 text-sm">
              Designed for comfort with premium bedding, stylish decor, and high-end amenities.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start space-x-4">
          <div className="text-yellow-400 text-3xl mt-1">
            <FaConciergeBell />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              24/7 Concierge & Room Service
            </h4>
            <p className="text-gray-400 text-sm">
              From late-night snacks to early check-ins, our staff is here around the clock for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
