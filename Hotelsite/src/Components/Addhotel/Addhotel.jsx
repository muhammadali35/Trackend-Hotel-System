import React, { useState } from 'react';
import { Button, Modal } from "flowbite-react";
import { FaPlus, FaTimes } from 'react-icons/fa';

function Addhotel({ openModal, setOpenModal }) {
  const [images, setImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleAddImage = (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...imagePreviews]);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const [hotelName, setHotelName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [facility, setFacility] = useState('');
  const [facilitiesList, setFacilitiesList] = useState([]);

  const handleAddFacility = () => {
    if (facility.trim()) {
      setFacilitiesList([...facilitiesList, facility]);
      setFacility('');
    }
  };

  const handleRemoveFacility = (index) => {
    const updatedList = facilitiesList.filter((_, i) => i !== index);
    setFacilitiesList(updatedList);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', hotelName);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('description', description);
    facilitiesList.forEach(fac => formData.append('facilities[]', fac));
    uploadedFiles.forEach(file => formData.append('images', file));

    try {
      const response = await fetch('http://localhost:5000/api/hotels', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (response.ok) {
        alert('Hotel added successfully!');
        setOpenModal(false);
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to add hotel');
    }
  };

  return (
    <Modal className='flex justify-center items-center scrollbar-none px-5 lg:px-16 ' size='xl' show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className='px-5'>
        <div className='w-full flex items-center px-10 pt-4 mr-5'>
          <h1 className='text-center font-bold text-4xl'>Add Hotel</h1>
        </div>
      </Modal.Header>
      <Modal.Body className='w-full flex flex-col items-center justify-center'>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-200">
              <img src={image} alt={`Uploaded ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}

          <label className="flex items-center justify-center w-full h-48 rounded-lg border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer">
            <span className="text-4xl font-bold">+</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleAddImage}
              className="hidden"
            />
          </label>
        </div>

        <div className="w-full px-5 lg:px-20 mt-5">
          <div className="bg-white rounded-lg w-full">
            <div className="mb-4">
              <label className="block text-xl font-bold mb-2">Hotel Name</label>
              <input
                type="text"
                placeholder="Hotel name"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-bold mb-2">Country</label>
              <input
                type="text"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-bold mb-2">City</label>
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-bold mb-2">Address</label>
              <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-bold mb-2">Facilities</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Add facility"
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pr-10"
                />
                <button
                  type="button"
                  onClick={handleAddFacility}
                  className="absolute top-5 right-2 p-1 bg-[#232323] text-white rounded-xl"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="mt-4 space-y-2 w-1/2">
                {facilitiesList.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-200 rounded-lg p-2">
                    <span className="text-gray-700">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFacility(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <label className="block text-xl font-bold mb-2">Description</label>
            <textarea
              rows={6}
              className='w-full border border-gray-300 p-4'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='flex flex-wrap justify-center items-center w-full gap-8'>
        <Button className='flex-wrap lg:order-1 bg-gray-300 text-black w-48 py-2' onClick={() => setOpenModal(false)}>Cancel</Button>
        <Button className='bg-[#F2D17A] w-48 py-2' onClick={handleSubmit}>
          Add Hotel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Addhotel;
