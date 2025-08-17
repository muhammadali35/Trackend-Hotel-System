import React, { useState } from 'react';
import { Button, Modal } from "flowbite-react";
import { FaPlus, FaTimes } from 'react-icons/fa';
import Select from 'react-select';

function Addroom({ openModal, setOpenModal }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [roomNumber, setRoomNumber] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles([...uploadedFiles, file]);
    }
  };

  const handleFacilitySelect = (selectedOptions) => {
    setSelectedFacilities(selectedOptions.map(opt => opt.value));
  };

  const roomTypes = ["Single", "Double", "Triple", "Quad", "Queen", "King", "Twin"];
  const availableFacilities = ["WiFi", "TV", "Air Conditioning", "Mini Fridge", "Room Service", "Balcony", "Heater"];

  const facilityOptions = availableFacilities.map(facility => ({
    value: facility,
    label: facility
  }));

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('roomNumber', roomNumber);
    formData.append('roomType', selectedRoomType);
    formData.append('description', description);
    formData.append('price', price);
    selectedFacilities.forEach(f => formData.append('facilities[]', f));
    uploadedFiles.forEach(file => formData.append('images', file));

    try {
      const res = await fetch('http://localhost:5000/api/rooms', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        alert("Room added successfully!");
        setOpenModal(false);
        // reset form
        setRoomNumber('');
        setSelectedRoomType('');
        setDescription('');
        setPrice('');
        setSelectedFacilities([]);
        setUploadedFiles([]);
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to add room.");
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Add Room</Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-2 gap-4">
          {uploadedFiles.map((file, i) => (
            <img key={i} src={URL.createObjectURL(file)} className="w-full h-32 object-cover rounded" alt="uploaded" />
          ))}
          <label className="border h-32 flex justify-center items-center rounded cursor-pointer">
            +
            <input type="file" onChange={handleAddImage} className="hidden" />
          </label>
        </div>

        <input
          value={roomNumber}
          onChange={e => setRoomNumber(e.target.value)}
          placeholder="Room Number"
          className="block w-full border p-2 my-2"
        />

        <select
          value={selectedRoomType}
          onChange={e => setSelectedRoomType(e.target.value)}
          className="block w-full border p-2 my-2"
        >
          <option value="">Select Room Type</option>
          {roomTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Room Price"
          className="block w-full border p-2 my-2"
        />

        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Room Description"
          className="block w-full border p-2 my-2"
        />

        <label className="block font-medium mt-4 mb-1">Select Facilities:</label>
        <Select
          isMulti
          options={facilityOptions}
          onChange={handleFacilitySelect}
          className="my-2"
          classNamePrefix="select"
          placeholder="Choose facilities"
        />

        {selectedFacilities.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedFacilities.map((item, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                {item}
              </span>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
        <Button onClick={handleSubmit} className='text-black'>Add Room</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Addroom;
