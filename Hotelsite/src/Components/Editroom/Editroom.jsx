import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const roomTypes = ["Single", "Double", "Triple", "Quad", "Queen", "King", "Twin"];

function Editroom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [roomData, setRoomData] = useState({
    roomNumber: '',
    roomType: '',
    price: '',
    facilities: [],
    description: '',
  });

  const [images, setImages] = useState([]);

  const fetchRoom = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/rooms/${id}`);
      setRoomData(res.data);
    } catch (err) {
      console.error("Error fetching room:", err);
    }
  };

  useEffect(() => {
    fetchRoom();
  }, [id]);

  const handleInputChange = (field, value) => {
    setRoomData(prev => ({ ...prev, [field]: value }));
  };

  const handleFacilityChange = (index, value) => {
    const updatedFacilities = [...roomData.facilities];
    updatedFacilities[index] = value;
    setRoomData(prev => ({ ...prev, facilities: updatedFacilities }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const updateRoom = async () => {
    try {
      const formData = new FormData();
      formData.append('roomNumber', roomData.roomNumber);
      formData.append('roomType', roomData.roomType);
      formData.append('price', roomData.price);
      formData.append('description', roomData.description);

      roomData.facilities.forEach(fac => formData.append('facilities', fac));
      images.forEach(file => formData.append('images', file));

      await axios.put(`http://localhost:5000/api/rooms/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert("Room updated successfully");
      navigate('/rooms');
    } catch (err) {
      console.error("Update Room Error:", err);
      alert("Failed to update room.");
    }
  };

  return (
    <div className='w-full min-h-screen bg-zinc-800 text-white'>
      <div className='flex justify-center border-t-2 border-zinc-600 w-[95%] mx-auto mt-6'></div>

      <div className='p-8'>
        <h1 className='text-4xl underline decoration-[#F2D17A] underline-offset-4'>Edit Room Details</h1>
      </div>

      <div className='grid p-6 lg:grid-cols-2 md:grid-cols-1 gap-8'>
        <div>
          <h1 className='text-2xl'>Room Number</h1>
          <input
            type='text'
            value={roomData.roomNumber}
            onChange={(e) => handleInputChange('roomNumber', e.target.value)}
            className='mt-2 px-5 py-5 rounded-lg bg-transparent border-2 text-white border-zinc-500 w-full placeholder:text-zinc-500'
            placeholder='Room Number'
          />
        </div>
        <div>
          <h1 className='text-2xl'>Room Type</h1>
          <select
            value={roomData.roomType}
            onChange={(e) => handleInputChange('roomType', e.target.value)}
            className='mt-2 px-5 py-5 rounded-lg bg-transparent border-2 text-white border-zinc-500 w-full'
          >
            <option value='' disabled>Select Room Type</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='px-6'>
        <h1 className='text-2xl'>Room Price</h1>
        <input
          type='text'
          value={roomData.price}
          onChange={(e) => handleInputChange('price', e.target.value)}
          className='mt-2 px-5 py-5 rounded-lg bg-transparent border-2 text-white border-zinc-500 w-full placeholder:text-zinc-500'
          placeholder='Room Price'
        />
      </div>

      <div className='px-6 mt-6'>
        <h1 className='text-2xl'>Facilities</h1>
        <div className='grid gap-4 mt-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
          {roomData.facilities.map((facility, index) => (
            <input
              key={index}
              type='text'
              value={facility}
              onChange={(e) => handleFacilityChange(index, e.target.value)}
              className='px-5 py-5 placeholder:text-center border-2 border-zinc-500 bg-transparent text-white rounded-lg text-center'
              placeholder='Facility'
            />
          ))}
        </div>
      </div>

      <div className='px-6 pt-6'>
        <h1 className='text-2xl'>Description</h1>
        <textarea
          rows={5}
          value={roomData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className='w-full mt-2 p-6 border-2 border-zinc-500 bg-transparent text-white rounded-lg'
          placeholder='Description'
        ></textarea>
      </div>

      <div className='px-6 pt-6'>
        <h1 className='text-2xl'>Upload Images</h1>
        <input
          type='file'
          multiple
          onChange={handleImageChange}
          className='mt-2 w-full text-white bg-transparent border-2 border-zinc-500 rounded-lg p-3'
        />
      </div>

      <div className='px-6 pt-6 pb-10'>
        <button
          onClick={updateRoom}
          className='bg-[#F2D17A] text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-300'
        >
          Update Room
        </button>
      </div>
    </div>
  );
}

export default Editroom;
