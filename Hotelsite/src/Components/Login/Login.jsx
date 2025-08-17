import React from "react";
import loginBG from "./assets/img1.jpg";
import btn from "./assets/btn.png";
import loginimg from "./assets/loginimg.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      style={{ backgroundImage: `url(${loginBG})` }}
      className="w-full h-screen bg-fill bg-center"
    >
      <div className="w-full px-8 py-7">
        <div className="flex justify-end items-center">
          <button>
            <img src={btn} />
          </button>
        </div>
      </div>
      <div className="flex lg:justify-start justify-center lg:p-10 p-2 bottom-0">
        <div className="lg:w-[43%] md:w-[70%] w-full p-4 backdrop-blur-sm bg-zinc-600/30 rounded-3xl relative">
          <div className="asolute flex-col items-center pb-14 bg-zinc-800 rounded-3xl">
            <div className="flex justify-center">
              <img className="py-3 w-28" src={loginimg} />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex-col w-[65%] flex gap-4 justify-center ">
                <label className="text-sm text-zinc-300">Email address</label>
                <input
                  className="w-full bg-transparent border px-4 border-zinc-600 text-white py-1.5 rounded-lg placeholder:text-sm placeholder:text-zinc-600"
                  placeholder="boance.oliver@mail.com"
                  type="text"
                />
                <label className="text-sm text-zinc-300">
                  Choose a password
                </label>
                <input
                  className="w-full bg-transparent border px-4 border-zinc-600 py-1.5 rounded-lg placeholder:text-sm placeholder:text-zinc-600"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </div>
            <div className="text-end mr-20 py-2">
              <Link to='/forgetpas' className="text-zinc-400 text-sm hover:text-[#F2D17A]" href="#">
                Forget Password?
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link to='/Dashboard' className="w-[65%] py-2 text-center text-sm bg-[#F2D17A] rounded-md">
                Login
              </Link>
            </div>
            <div className="text-center py-2">
              <p className="text-zinc-400 text-sm ">
                don't have an aacount?<Link to='/Signup' className='ml-1 text-white hover:text-[#F2D17A] underline'>Signup!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
