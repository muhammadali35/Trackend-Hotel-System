import React, { useEffect, useState } from 'react';
import profile from './assets/profile.png';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [recentBookings, setRecentBookings] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchRecentBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        const bookings = res.data;
        setRecentBookings(bookings);

        // Calculate total revenue
        const total = bookings.reduce((acc, booking) => acc + (parseFloat(booking.totalPrice) || 0), 0);
        setTotalRevenue(total);

        // Calculate total ratings
        const rated = bookings.filter(b => b.rating !== undefined && b.rating !== null);
        const ratingsSum = rated.reduce((acc, b) => acc + Number(b.rating), 0);
        setTotalRating(rated.length);
        setAverageRating(rated.length > 0 ? (ratingsSum / rated.length).toFixed(1) : 0);

      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };

    fetchRecentBookings();
  }, []);

  return (
    <div className='w-full bg-zinc-800 min-h-screen'>
      {/* Top border */}
      <div className='flex items-center justify-center'>
        <div className='w-[95%] border-t-2 border-zinc-600'></div>
      </div>

      {/* Profile and Greeting */}
      <div className='grid justify-between lg:grid-cols-2 md:grid-cols-1'>
        <div className='flex fle-col gap-4 items-center p-8'>
          <Link to='/Profile'>
            <img className='w-24 border border-[#F2D17A] rounded-full' src={profile} alt="profile" />
          </Link>
          <div className='text-white'>
            <h1 className='lg:text-3xl md:text-2xl text-xl font-bold'>Welcome Jonathan Alvarado</h1>
            <h1 className='lg:text-xl md:text-lg text-md text-sm font-light'>Discover the Statistics of Trekend</h1>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-5 p-4 items-center justify-end mr-5'>
          <Link to="/History">
            <button className='bg-[#F2D17A] w-36 py-2.5 tracking-tight text-sm rounded-lg'>Payment history</button>
          </Link>
          <Link to="/Profile">
            <button className='bg-white py-1 rounded-md text-sm font-semibold flex justify-center items-center gap-2 w-24'>
              <CgProfile className='bg-yellow-200 rounded-lg w-7 p-1 h-8' />Profile
            </button>
          </Link>
        </div>
      </div>

      {/* Dashboard Stats */}
      <h1 className='text-4xl text-white p-8 font-semibold underline underline-offset-8 decoration-[#F2D17A]'>Dashboard</h1>
      <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center px-8'>

        <div className='p-8 bg-white text-zinc-800 flex-col justify-center gap-2 rounded-lg'>
          <h1 className='text-4xl tracking-tight'>Total Ratings</h1>
          <h1 className='text-2xl font-bold'>{totalRating} ratings</h1>
          <h2 className='text-lg'>Avg Rating: ⭐ {averageRating}</h2>
        </div>

        <div className='p-8 bg-white text-zinc-800 flex-col justify-center gap-2 rounded-lg'>
          <h1 className='text-4xl tracking-tight'>Recent Booking</h1>
          <h1 className='text-4xl font-bold'>{recentBookings.length}</h1>
        </div>

        <div className='p-8 bg-white text-zinc-800 flex-col justify-center gap-2 rounded-lg'>
          <h1 className='text-4xl tracking-tight'>Total Revenue</h1>
          <h1 className='text-4xl font-bold'>PKR {totalRevenue.toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
