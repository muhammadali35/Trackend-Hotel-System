import React from 'react';
import {
  FaMapMarkerAlt,
  FaBed,
  FaCalendarAlt,
  FaUsers,
  FaSearch
} from 'react-icons/fa';
import front from '../../assests/rooms.jpg';

const RoomFront = () => {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${front})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Find Your Ideal Room</h1>
        <p className="text-lg md:text-xl mb-8">
          Discover comfort and elegance in every stay
        </p>

        {/* Search Card */}
        <div className="bg-white shadow-2xl rounded-xl p-6 flex flex-wrap justify-center gap-6 max-w-5xl w-full">
          {/* City */}
          <div className="flex items-center gap-3 min-w-[150px]">
            <FaMapMarkerAlt className="text-yellow-500 text-xl" />
            <div>
              <p className="text-sm text-gray-500">City</p>
              <p className="font-semibold text-gray-800">Karachi</p>
            </div>
          </div>

          {/* Room Type */}
          <div className="flex items-center gap-3 min-w-[150px]">
            <FaBed className="text-yellow-500 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Room Type</p>
              <p className="font-semibold text-gray-800">Double</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-3 min-w-[150px]">
            <FaCalendarAlt className="text-yellow-500 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-semibold text-gray-800">24 June 2025</p>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 min-w-[150px]">
            <FaUsers className="text-yellow-500 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Guests</p>
              <p className="font-semibold text-gray-800">2 Adults</p>
            </div>
          </div>

          {/* Button */}
          <button className="flex items-center gap-2 bg-yellow-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-all">
            <FaSearch />
            Search Rooms
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomFront;
