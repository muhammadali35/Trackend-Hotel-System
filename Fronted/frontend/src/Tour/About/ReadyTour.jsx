import React from 'react'

const ReadyTour = () => {
  return (
  <div className="bg-[#eb5e4e] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center rounded-xl">
  {/* Left Content */}
  <div className="text-center md:text-left mb-6 md:mb-0">
    <p className="italic text-lg">Plan your trip with us</p>
    <h2 className="text-3xl md:text-4xl font-bold mt-2">
      Ready for an unforgettable tour?
    </h2>
  </div>

  {/* Button */}
  <div>
    <button className="bg-[#2c2d4f] text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-[#1f2038] transition">
      BOOK TOUR NOW
    </button>
  </div>
</div>


  )
}

export default ReadyTour