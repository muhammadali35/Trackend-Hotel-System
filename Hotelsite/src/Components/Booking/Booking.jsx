import React, { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "../Navbar/Navbar";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-800">
      {/* <Navbar /> */}
      <div className='flex items-center justify-center'>
        <div className='w-[95%] border-t-2 border-zinc-600'></div>
      </div>

      <div className='grid justify-between lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        <div className='flex pl-8'>
          <h1 className='text-4xl text-white py-8 font-semibold underline underline-offset-8 decoration-[#F2D17A]'>Bookings</h1>
        </div>
      </div>

      <div className='grid px-8 gap-5 justify-center items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        {bookings.length === 0 ? (
          <div className="text-white text-center col-span-2">No bookings found.</div>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-white rounded-xl'>
              {/* If you have images in future, uncomment this part
              <div className='md:border-r-2 border-dashed flex items-center justify-center'>
                <img className='w-full object-cover object-center py-1 px-1' src={`http://localhost:5000/${booking.image}`} alt="room" />
              </div>
              */}
              <div className='flex-col gap-5 p-4'>
                <div className='flex gap-3'><h1 className='font-bold'>Room Type:</h1><h1>{booking.roomType}</h1></div>
                <div className='w-full border-b-2 border-dashed mt-2'></div>
                <div className='flex gap-3 mt-2'><h1 className='font-semibold'>User Name:</h1><h1>{booking.name}</h1></div>
<div className='flex gap-3 mt-2'>
  <h1 className='font-semibold'>Date:</h1>
  <h1>
    {new Date(booking.date).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })}
  </h1>
</div>


                <div className='flex gap-3'><h1 className='font-semibold'>Email:</h1><h1>{booking.email}</h1></div>
                <div className='flex gap-3'><h1 className='font-semibold'>Phone Number:</h1><h1>{booking.phone}</h1></div>
                <div className='flex gap-3'><h1 className='font-semibold'>Person:</h1><h1>{booking.persons}</h1></div>
                <div className='flex gap-3'><h1 className='font-semibold'>Booking Price:</h1><h1>PKR {booking.totalPrice}</h1></div>
               
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Booking;
