import React, { useEffect, useState } from 'react';
import Addroom from './Addroom';
import Roomcards from './Roomcards';

function Rooms() {
  const [openModal, setOpenModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      const res = await fetch('https://trackend-hotel-system-id7k.vercel.app/api/rooms');
      const data = await res.json();
      setRooms(data);
    } catch (err) {
      console.error('Error fetching rooms:', err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <>
      <Addroom openModal={openModal} setOpenModal={setOpenModal} />
      <div className='w-full min-h-screen bg-zinc-800'>
        <div className='flex items-center justify-between px-8 py-6'>
          <h1 className='text-4xl text-white font-semibold underline underline-offset-8 decoration-[#F2D17A]'>Rooms</h1>
          <button
            onClick={() => setOpenModal(true)}
            className='bg-white rounded-md flex items-center gap-2 text-sm px-4 py-2'
          >
            Add Room
          </button>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-3 gap-5'>
          {rooms.map((room) => (
            <Roomcards
              key={room._id}
              roomId={room._id}
              roomnumber={room.roomNumber}
              roomtype={room.roomType}
              price={room.price}
              img={`http://localhost:5000/${room.images?.[0]}`}
              description={room.description}
              facilities={room.facilities}
              fetchRooms={fetchRooms}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Rooms;
