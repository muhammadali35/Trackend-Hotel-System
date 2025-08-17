import React, { useState } from 'react'
import logo from './assets/logo.png'
import dashboard from './assets/dashboard.png'
import booking from './assets/booking.png'
import hotel from './assets/hotel.png'
import rooms from './assets/rooms.png'
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import img1 from './assets/img1.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
    const [handleMenu, sethandleMenu] = useState(false);
  return (
    <div className='w-full bg-zinc-800'>
        <div className='w-full flex justify-between items-center'>
            <div className='p-8 w-48'>
              <Link to="/Dashboard"><div><img src={logo} alt="" /></div></Link>
            </div>
            <div className='hidden lg:flex px-8 gap-20'>
                <Link to="/Dashboard" className='flex items-center gap-2 cursor-pointer hover:border-b-2 hover:pb-1 hover:border-[#F2D17A]'>
                    <img className='w-5' src={dashboard} />
                    <h1 className='text-white'>Dashboard</h1>
                </Link>
                <Link to="/Hotel" className='flex items-center gap-2 cursor-pointer hover:border-b-2 hover:pb-1 hover:border-[#F2D17A]'>
                   <img className='w-5' src={hotel} />
                    <h1 className='text-white'>Hotel</h1>
                </Link>
                <Link to="/Rooms" className='flex items-center gap-2 cursor-pointer hover:border-b-2 hover:pb-1 hover:border-[#F2D17A]'>
                    <img className='w-5' src={rooms} />
                    <h1 className='text-white'>Rooms</h1>
                </Link>
                <Link to="/Booking" className='flex items-center gap-2 cursor-pointer hover:border-b-2 hover:pb-1 hover:border-[#F2D17A]'>
                    <img className='w-5' src={booking} />
                    <h1 className='text-white'>Bookings</h1>
                </Link>
                <Link to="/Contact" className='flex items-center gap-2 cursor-pointer hover:border-b-2 hover:pb-1 hover:border-[#F2D17A]'>
                    <img className='w-5' src={booking} />
                    <h1 className='text-white'>Message</h1>
                </Link>
            </div>
        
            <Link to='/' className='hidden lg:flex px-8'>
                    <button className='bg-[#F2D17A] flex gap-0.5 rounded-md items-center text-sm w-24 py-1.5 justify-center'><IoMdLogOut />Logout</button>
            </Link>
            <button className="pr-8 lg:hidden">
          <AiOutlineBars onClick={() => sethandleMenu(!handleMenu)} className='text-[#F2D17A] w-8 h-6 font-bold border border-zinc-600 py-0.5'/>
        </button>

        <div id="nav-dialog" className={`${handleMenu ? 'inset-0 ': 'hidden'} fixed bg-zinc-800 text-white w-full h-screen shadow-xl z-[99999999]`}>
        <div className="flex-col items-center">
          <div className="nav-manue flex justify-between items-center p-6">
              <img className="w-36 ml-6 cursor-pointer" src={logo} alt="" />
            <button className="p-6" onClick={() => sethandleMenu(!handleMenu)}>
              <IoClose className="text-[#F2D17A] w-8 h-6 font-bold border border-zinc-600" />{" "}
            </button>
            </div>
            <div className='flex items-center justify-center'>
        <div className='w-[90%] border-t-2 border-zinc-600'></div>
    </div>
              <div className="flex flex-col gap-14 text-white justify-start items-center mt-24">
                <div className="flex flex-col gap-8">
              <Link onClick={() => sethandleMenu(!handleMenu)} to="/Dashboard" className='flex gap-2 items-center'><img className='w-6' src={dashboard} /><h1 className="font-bold cursor-pointer">Dashboard</h1></Link>
              <Link onClick={() => sethandleMenu(!handleMenu)} to="/Hotel" className='flex gap-2 items-center'><img className='w-6' src={hotel} /><p className="font-bold cursor-pointer">Hotel</p></Link>
              <Link onClick={() => sethandleMenu(!handleMenu)} to="/Rooms" className='flex gap-2 items-center'><img className='w-6' src={rooms} /><h1 className="font-bold cursor-pointer">Rooms</h1></Link>
              <Link onClick={() => sethandleMenu(!handleMenu)} to={"/Booking"} className='flex gap-2 items-center'><img className='w-6' src={booking} /><h1 className="font-bold cursor-pointer">Booking</h1></Link>
          
          </div>
          <Link to='/' className="flex gap-8">
          <button className='bg-[#F2D17A] flex gap-0.5 rounded-md text-black items-center text-sm w-28 py-1.5 justify-center'><IoMdLogOut />Logout</button>
          </Link>
          
              </div>

            </div>
            {/* <div className='flex items-center justify-center mt-20 px-8'>
                <img className='w-full rounded-2xl border-2 border-[#F2D17A]' src={img1} alt="" />
            </div> */}
        </div>

        </div>
    </div>
  )
}

export default Navbar