import React, { useState } from 'react'
import edit from './assets/edit.png'
import deleteimg from './assets/delete.png'
import add from './assets/add.png'
import { BsThreeDots } from "react-icons/bs";
import hotel1 from './assets/hotel1.png'
import { Link } from 'react-router-dom';


function Cards(props) {
  const [Dropdown, setDropdown] = useState(false);
  const toggleMenue = () => {
    setDropdown(!Dropdown)
  }
  return (
    <div>
         <div className='p-2 bg-white rounded-lg'>
            <div className='flex relative'>
            <img className='w-full flex  h-80' src={props.img} alt="" />
        <button onClick={toggleMenue} className='absolute right-6 top-5'><BsThreeDots className='bg-white text-black rounded-full w-6 h-6'/></button>
        {Dropdown && <ul className='bg-white absolute right-10 top-10 p-4 rounded-lg space-y-2'>
          <Link to="/Edithotel"> <li className='flex gap-2 items-center border-b-2 border-dotted decoration-[lightgrey]'><img src={edit} className='w-7'/>Edit</li></Link>
          <li className='flex gap-2 items-center border-b-2 border-dotted decoration-[lightgrey]'><img src={deleteimg} className='w-7'/> Delete</li>
          <li className='flex gap-2 items-center border-b-2 border-dotted decoration-[lightgrey]'><img src={add} className='w-7' /> Add rooms</li>
        </ul>}</div>
            <div className='flex gap-1 px-2 mt-4'>
              <h1 className='font-bold'>Hotel Name:</h1>
              <p>{props.title}</p>
            </div>
            <div className='flex gap-1 px-2'>
              <h1 className='font-bold'>Location:</h1>
              <p>{props.location}</p>
            </div>
            <div className='flex gap-1 px-2'>
              <h1 className='font-bold'>Description:</h1>
              <p>{props.description}</p>
            </div>
          </div>
    </div>
  )
}

export default Cards