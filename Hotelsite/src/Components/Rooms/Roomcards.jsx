import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reservation from './Reservation';

function Roomcards(props) {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this room?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://trackend-hotel-system-id7k.vercel.app/api/rooms/${props.roomId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('Room deleted successfully');
        props.fetchRooms(); // Refresh the room list after deletion
      } else {
        alert('Failed to delete room');
      }
    } catch (error) {
      console.error('Error deleting room:', error);
      alert('An error occurred while deleting the room');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Reservation openModal={openModal} setOpenModal={setOpenModal} />

      <img src={props.img} alt="room" className="w-full h-48 object-cover" />

      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h1 className="font-bold">Room Number:</h1>
            <p>{props.roomnumber}</p>
          </div>
          <h1 className="font-bold text-xl">{props.price}</h1>
        </div>

        <div className="flex gap-2 mt-2">
          <h1 className="font-bold">Room Type:</h1>
          <p>{props.roomtype}</p>
        </div>

        <div className="flex gap-2 mt-2">
          <h1 className="font-bold">Description:</h1>
          <p>{props.description}</p>
        </div>

        <h1 className="mt-4 font-bold">Facilities</h1>
        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          {props.facilities?.map((item, i) => (
            <span key={i} className="border px-3 py-1 rounded-md border-gray-300">
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-5">
          {/* <button
            onClick={() => setOpenModal(true)}
            className="bg-[#F2D17A] text-black py-2 px-4 rounded-md w-1/2 mr-2"
          >
            Local Reservation
          </button> */}
          <div className="flex gap-2 w-1/2 justify-end">
            <Link to={`/Editroom/${props.roomId}`}>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                Edit
              </button>
            </Link>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roomcards;
