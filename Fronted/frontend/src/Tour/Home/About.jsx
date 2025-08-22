import React from "react";
import hotelimg from "../../assests/hotel.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white mt-20">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 max-h-[350px]">
        <img
          src={hotelimg}
          alt="Hotel Room"
          className="rounded-lg shadow-md w-full h-[300px] object-cover"
        />
        <div className="absolute top-4 left-4 text-yellow-500 text-4xl font-bold italic">
          30%
          <div className="text-black text-2xl font-semibold not-italic">Discount</div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
        <p className="text-yellow-500 italic text-xl mb-2">About Us</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
          Make Your Stay Memorable at <br />
          <span className="text-indigo-600">Trekend Hotel</span>
        </h1>
        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          Experience premium comfort, top-notch amenities, and outstanding service.
          Trekend Hotel offers luxury and affordability all in one place.
        </p>

        <ul className="space-y-3 text-gray-800 mb-6">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✔</span>
            Comfortable and clean rooms
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✔</span>
            24/7 room and reception service
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✔</span>
            Prime location with easy access
          </li>
        </ul>

        <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-white px-6 py-3 rounded-md shadow-md font-semibold">
          BOOK YOUR ROOM NOW
        </button>
      </div>
    </div>
  );
};

export default About;
