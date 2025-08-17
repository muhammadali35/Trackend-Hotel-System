import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Edithotel from '../Edithotel/Edithotel';

function EditHotelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotelData, setHotelData] = useState(null);

  const fetchHotel = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/hotels/${id}`);
      const data = await res.json();
      setHotelData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHotel();
  }, [id]);

  if (!hotelData) return <div className='text-white p-10'>Loading...</div>;

  return (
    <Edithotel
      initialHotel={hotelData}
      onClose={() => navigate('/')}
    />
  );
}

export default EditHotelPage;