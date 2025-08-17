import React from 'react'
import img1 from "./assets/room1.png"
import img2 from "./assets/room2.png"


function History() {
  return (
    <div className='w-full min-h-screen bg-zinc-800'>
        <div className='flex items-center justify-center'>
        <div className='w-[95%] border-t-2 border-zinc-600'></div>
    </div>
    <div className='grid justify-between lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            <div className='flex pl-8'>
            <h1 className='text-4xl text-white py-8 font-semibold underline underline-offset-8
             decoration-[#F2D17A]'>Bookings</h1>
            </div>
        </div>
        <div className='grid px-8 gap-5 justify-center items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-2 pb-8 bg-white rounded-xl'>
                <div className='md:border-r-2 sm:flex sm:justify-center sm:items-center pl-1 border-dashed'>
                    <img className='pr-1 py-1 w-[100vw]' src={img1}/>
                </div>
                <div className='flex-col gap-5 p-4'>
                    <div className='flex gap-3'><h1 className='font-bold'>Room Number:</h1>
                    <h1>345</h1>
                    </div>
                    <div className='flex gap-3'><h1 className='font-bold'>Room Type:</h1>
                    <h1>non-smoking</h1>
                    </div>    
                <div className='w-full border-b-2 border-dashed mt-2'></div>

                <div className='flex gap-3 mt-2'>
                    <h1 className='font-semibold'>user Name:</h1>
                    <h1>Tommy Smith</h1>
                    </div>
                    <div className='flex gap-3'>
                    <h1 className='font-semibold'>Email:</h1>
                    <h1>janet.dean@mail.com</h1>
                    </div>
                    <div className='flex gap-3'>
                    <h1 className='font-semibold'>Phone Number:</h1>
                    <h1>(428)158-1450</h1>
                    </div><div className='flex gap-3'>
                    <h1 className='font-semibold'>Person:</h1>
                    <h1>2 Adults 2 Childs</h1>
                    </div><div className='flex gap-3'>
                    <h1 className='font-semibold'>Booking date:</h1>
                    <h1>10 Aug 12 aug</h1>
                    </div>
                    <div className='flex gap-3'>
                    <h1 className='font-semibold'>Booking Price:</h1>
                    <h1>$215</h1>
                    </div>
                </div>
                    <div className='absolute'>
                <button className='absolute top-3 ml-2 text-sm w-16 rounded-md bg-[#F2D17A]'>Paid</button>
            </div>
            </div>
            </div>
            <div className='grid relative lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-2 pb-8 bg-white rounded-xl'>
                <div className='md:border-r-2 border-dashed'>
                    <img className='pr-1 py-1 pl-1 w-[100vw]' src={img2}/>
                </div>
                <div className='flex-col gap-5 p-4'>
                    <div className='flex gap-3'><h1 className='font-bold'>Room Number:</h1>
                    <h1>154</h1>
                    </div>
                    <div className='flex gap-3'><h1 className='font-bold'>Room Type:</h1>
                    <h1>Non Smooking</h1>
                    </div>    
                <div className='w-full border-b-2 border-dashed mt-2'></div>

                <div className='flex gap-3 mt-2'>
                    <h1 className='font-semibold'>user Name:</h1>
                    <h1>Tommy Smith</h1>
                    </div>
                    <div className='flex gap-3'>
                    <h1 className='font-semibold'>Email:</h1>
                    <h1>janet.dean@mail.com</h1>
                    </div>
                    <div className='flex gap-3'>
                    <h1 className='font-semibold'>Phone Number:</h1>
                    <h1>(428)158-1450</h1>
                    </div><div className='flex gap-3'>
                    <h1 className='font-semibold'>Person:</h1>
                    <h1>2 Adults 2 Childs</h1>
                    </div><div className='flex gap-3'>
                    <h1 className='font-semibold'>Booking date:</h1>
                    <h1>10 Aug 12 aug</h1>
                    </div>
                    <div className='flex gap-3'>
                    <h1 className='font-semibold'>Booking Price:</h1>
                    <h1>$125</h1>
                    </div>
                </div>
            <div className='absolute'>
                <button className='absolute top-3 ml-4 text-sm w-16 rounded-md bg-zinc-600 text-white'>refund</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default History