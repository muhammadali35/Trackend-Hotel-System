import React from 'react'
import forget from './assets/forget.png'
import loginBG from "./assets/img1.jpg";
import forgetmain from './assets/forgetmain.png'
import btn from "./assets/btn.png";
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Forgetpas() {
  return (
    <div  style={{ backgroundImage: `url(${loginBG})` }}
    className="w-full min-h-screen bg-fill bg-center">
       <div className="w-full px-8 py-7">
        <div className="flex justify-end items-center">
          <button>
            <img src={btn} />
          </button>
        </div>
      </div>
      <div className="flex justify-center  ">
        <div className="lg:w-[43%] md:w-[70%] w-full p-4 backdrop-blur-sm bg-zinc-600/30 rounded-3xl relative">
          <div className="asolute flex-col items-center pb-14 bg-zinc-800 rounded-3xl">
          <div className='flex-col pt-5'>
            <button><IoArrowBack className='text-white w-6 h-6 rounded-full p-1 ml-10 mt-3 bg-zinc-700 cursor-pointer'/></button></div>
            <div className="px-5 flex justify-center items-center">
              <img className="items-center w-56" src={forget} />
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <div> <img className='w-52 mt-4' src={forgetmain} alt="" /></div>
              <div className="flex-col w-[65%] flex gap-1 justify-center ">
                <h1 className='text-center text-zinc-300 mt-2'>Forget your password?</h1>
                <h1 className='text-center text-zinc-500 mt-2 text-sm '>Please enter the email address associated with your account. We'll mail you a link to reset your password.</h1>
                <label className="text-sm text-zinc-300 mt-2">Email address</label>
                <input
                  className="w-full bg-transparent border px-4 border-zinc-600 text-white py-1.5 rounded-lg placeholder:text-sm placeholder:text-zinc-600"
                  placeholder="boance.oliver@mail.com"
                  type="text"
                />
                <div className='flex items-center text-center justify-center'>
                <Link to='/' className="w-[80%] py-2 mt-3 text-sm bg-[#F2D17A] rounded-md">
                Send
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgetpas