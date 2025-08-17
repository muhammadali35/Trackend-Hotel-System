import React, { useEffect, useState } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import Addhotel from '../Addhotel/Addhotel';

function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingHotel, setEditingHotel] = useState(null);

  const fetchHotels = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/hotels');
      const data = await res.json();
      setHotels(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this hotel?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/hotels/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) fetchHotels();
      else alert('Delete failed');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Add/Edit Modal */}
      <Addhotel
        openModal={openModal}
        setOpenModal={setOpenModal}
        editingHotel={editingHotel}
        fetchHotels={fetchHotels}
      />

      {/* Page Content */}
      <div className='w-full min-h-screen bg-zinc-800'>
        <div className='flex items-center justify-center'>
          <div className='w-[95%] border-t-2 border-zinc-600'></div>
        </div>

        <div className='grid justify-between lg:grid-cols-2 md:grid-cols-1 grid-cols-1 px-8'>
          <h1 className='text-4xl text-white py-8 font-semibold underline underline-offset-8 decoration-[#F2D17A]'>Hotel</h1>
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <input
                type="search"
                placeholder='searching....'
                className='w-52 py-1.5 rounded-lg placeholder:text-sm border-none pl-7 pr-2'
              />
              <MdOutlineSearch className='absolute top-0 left-2 mt-1.5 text-xl text-zinc-400' />
            </div>
            <button
              onClick={() => { setEditingHotel(null); setOpenModal(true); }}
              className='bg-white rounded-md text-sm font-semibold flex items-center gap-1 w-28 px-2 py-1.5'
            >
              <IoIosAddCircle className='bg-yellow-200 rounded-lg w-7 p-1 h-6 text-zinc-800' />
              Add Hotel
            </button>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-8 gap-5'>
          {hotels.map(hotel => (
            <div key={hotel._id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <img
                src={hotel.images && hotel.images.length > 0 ? `http://localhost:5000/${hotel.images[0]}` : 'https://via.placeholder.com/400x300'}
                alt="hotel"
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h2 className='text-xl font-bold'>{hotel.name}</h2>
                <p className='text-sm text-gray-600'>{hotel.address}</p>
                <p className='text-sm mt-2'>{hotel.description?.slice(0, 100)}...</p>
                <div className='flex gap-3 mt-4'>
                  <button
                    onClick={() => {
                      setEditingHotel(hotel);
                      setOpenModal(true);
                    }}
                    className='text-blue-600 font-semibold'
                  >Edit</button>
                  <button
                    onClick={() => handleDelete(hotel._id)}
                    className='text-red-600 font-semibold'
                  >Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hotel;