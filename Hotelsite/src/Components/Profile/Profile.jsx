import React, { useRef, useState } from 'react'
import profile from "./assets/profile.png";


const Profile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

const handleImageClick = () =>{
  inputRef.current.click();
};
const handleImageChange = (event) =>{
  const file = event.target.files[0];
  setImage(event.target.files[0]);

};
  
  return (
    <div className='w-full min-h-screen bg-zinc-800'>
        <div className='flex items-center justify-center'>
        <div className='w-[95%] border-t-2 border-zinc-600'></div>
    </div>
    <div className='px-8'>
    <h1 className='text-4xl text-white py-8 font-semibold underline underline-offset-8
             decoration-[#F2D17A]'>Profile</h1>
             </div>

             <div className=" px-8 flex justify-around gap-4 flex-wrap ">
              <div className='lg:order-2 order-1'>
              <div  className=" cursor-pointer  border-2 rounded-full p-1 border-[#3F3F3F]" onClick={handleImageClick}>
            {image ? <img src={URL.createObjectURL(image)} className="w-44 object-cover rounded-full object-center h-44" /> : <img src={profile} className="lg:w-48  w-36" />}
              
              <input type="file" ref={inputRef}  className="hidden" onChange={handleImageChange}/>
            </div>
            <div className='flex justify-center items-center'>
          <button className="bg-[#F2D17A] px-4 py-1 font-medium rounded-md mt-2"onClick={handleImageClick} >Edit</button></div>
        
              </div>
              <div className="py-4 text-white lg:order-1 order-2">
            <div className="flex py-4 gap-10 justify-center w-full">
              <div className="w-full  ">
                <label className="text-xl  font-medium ">First Name</label>
                <input
                  type="text"
                  className=" p-4 mt-4  w-full border-2 placeholder:text-zinc-500 rounded-lg bg-transparent border-[#3F3F3F]"
                  placeholder="Bianca"
                />
              </div>
              <div className="w-full   ">
                <label className=" lg:text-xl md:text-xl text-sm font-medium">
                  Business Name
                </label>
                <input
                  type="text"
                  className=" p-4 mt-4 w-full placeholder:text-zinc-500 border-2 rounded-lg bg-transparent border-[#3F3F3F]"
                  placeholder="Oliver"
                />
              </div>
            </div>
            <div className="w-full   ">
              <label className="text-xl font-medium">Email address</label>
              <input
                type="text"
                className=" p-4 mt-4 w-full border-2 placeholder:text-zinc-500 rounded-lg bg-transparent border-[#3F3F3F]"
                placeholder="biancaoliver@jeux.com"
              />
            </div>

            <h2 className="text-3xl mt-4 py-4 font-bold text-white   ">
              Payment Details
            </h2>
            <div className="w-full mt-6  ">
              <label className=" text-xl  font-medium">Card Number</label>
              <input
                type="text"
                className=" p-4 mt-4 w-full placeholder:text-zinc-500 border-2 rounded-lg bg-transparent border-[#3F3F3F]"
                placeholder="4387-1127-9522-134"
              />
            </div>
            <div className="w-full mt-5  ">
              <label className=" text-xl font-medium">Card holder Name</label>
              <input
                type="text"
                className=" p-4 mt-4 w-full border-2 placeholder:text-zinc-500 rounded-lg bg-transparent border-[#3F3F3F]"
                placeholder="Haider Ali"
              />
            </div>
            <div className="flex py-4 gap-10 justify-center w-full">
              <div className="w-full  ">
                <label className=" text-xl font-medium ">CVC</label>
                <input
                  type="text"
                  className=" p-4 mt-4 placeholder:text-zinc-500  w-full border-2 rounded-lg bg-transparent border-[#3F3F3F]"
                  placeholder="123"
                />
              </div>
              <div className="w-full   ">
                <label className="lg:text-xl md:text-xl text-lg font-medium">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className=" p-4 mt-4 w-full border-2 placeholder:text-zinc-500 rounded-lg bg-transparent border-[#3F3F3F]"
                  placeholder="11 / 25"
                />
              </div>
            </div>
          </div>
</div>
    </div>
  )
}

export default Profile