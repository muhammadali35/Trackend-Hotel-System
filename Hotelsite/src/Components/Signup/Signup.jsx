import React, { useState } from 'react'
import btn from "./assets/btn.png";
import loginBG from "./assets/img1.jpg";
import signup from "./assets/signup.png";
import profile from "./assets/profile.png";
import camera from "./assets/camera.png";
import { Link } from 'react-router-dom';


function Signup() {
    
    const [profilePic, setProfilePic] = useState(profile);

    const handleFileChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setProfilePic(URL.createObjectURL(event.target.files[0]));
      }
    };
  return (
    <div style={{ backgroundImage: `url(${loginBG})` }}
    className="w-full min-h-screen bg-fill bg-center">
        <div className="w-full px-8 py-7">
        <div className="flex justify-start items-center">
          <button>
            <img src={btn} />
          </button>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center px-3 lg:pr-10 pb-5 bottom-0">
        <div className="lg:w-[43%] md:w-[70%] w-full p-4 backdrop-blur-sm bg-zinc-600/30 rounded-3xl relative">
          <div className="asolute flex-col items-center pb-14 bg-zinc-800 rounded-3xl">
            <div className="flex justify-center">
              <img className="py-3 w-28" src={signup} />
            </div>
            
                <div className='flex justify-center items-center '>
                    <img id='profile-pic' className='w-32 object-cover object-center h-32 border-2 border-[#F2D17A] rounded-full relative' src={profilePic}/>
                    <input type="file" onChange={handleFileChange} accept='image/png, image/jpg, image/jpeg,' className='hidden' id='input-file'/>
                    <label className='absolute' htmlFor="input-file"><img className='w-10 ml-20 mt-20' src={camera}/></label>
                    </div>
           
            <div className="flex justify-center items-center">
              <div className="flex-col w-[65%] flex gap-4 justify-center ">
                <label className="text-sm text-zinc-300">Full Name</label>
                <input
                  className="w-full bg-transparent border px-4 border-zinc-600 text-zinc-300 py-1.5 rounded-lg placeholder:text-sm placeholder:text-zinc-600"
                  placeholder="boance.oliver@mail.com"
                  type="text"
                />
                <label className="text-sm text-zinc-300">
                  Email
                </label>
                <input
                  className="w-full text-zinc-300 bg-transparent border px-4 border-zinc-600 py-1.5 rounded-lg placeholder:text-sm placeholder:text-zinc-600"
                  placeholder="mohsin@jeux.com"
                  type="email"
                />
                 <label className="text-sm text-zinc-300">
                  Choose a password
                </label>
                <input
                  className="w-full text-zinc-300 bg-transparent border px-4 border-zinc-600 py-1.5 rounded-lg placeholder:text-sm placeholder:text-zinc-600"
                  placeholder="Password"
                  type="password"
                />
                 <label className="text-sm text-zinc-300">
                  Bussines
                </label>
                <input
                  className="w-full bg-transparent text-zinc-300 border px-4 border-zinc-600 py-1.5 rounded-lg placeholder:text-sm placeholder:text-zinc-600"
                  placeholder="Your Bussines"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              
              <Link to='/' className="w-[65%] py-2 text-sm text-center bg-[#F2D17A] rounded-md">
                Signup
              </Link>
              
            </div>
            <div className="text-center py-2">
              <p className="text-zinc-400 text-sm ">
                You already have an aacount?<Link to='/' className='ml-1 text-white hover:text-[#F2D17A] underline' href="#"><i>Login!</i></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup