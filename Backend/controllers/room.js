const Room = require('../models/room');

// CREATE room
const createRoom = async (req, res) => {
  try {
    const { roomNumber, roomType, facilities, description, price } = req.body;
    const imagePaths = req.files.map(file => file.path);

    const newRoom = new Room({
      roomNumber,
      roomType,
      facilities: Array.isArray(facilities) ? facilities : [facilities],
      description,
      price,
      images: imagePaths,
    });

    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    console.error('Create Room Error:', error);
    res.status(500).json({ error: 'Failed to create room' });
  }
};

// GET all rooms
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().sort({ createdAt: -1 });
    res.status(200).json(rooms);
  } catch (error) {
    console.error('Get Rooms Error:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
};

// GET room by ID
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// DELETE room
const deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error('Delete Room Error:', error);
    res.status(500).json({ error: 'Failed to delete room' });
  }
};

// ✅ UPDATE room
const updateRoom = async (req, res) => {
  const roomId = req.params.id;
  if (!roomId || roomId === 'undefined') {
    return res.status(400).json({ error: 'Room ID is missing or invalid.' });
  }

  try {
    const { roomNumber, roomType, facilities, description, price } = req.body;
    const imagePaths = req.files ? req.files.map(file => file.path) : [];

    const updatedData = {
      roomNumber,
      roomType,
      price,
      description,
      facilities: Array.isArray(facilities) ? facilities : [facilities],
    };

    if (imagePaths.length > 0) {
      updatedData.images = imagePaths; // replace old images if new uploaded
    }

    const updatedRoom = await Room.findByIdAndUpdate(roomId, updatedData, {
      new: true,
    });

    if (!updatedRoom) return res.status(404).json({ error: 'Room not found' });

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error("Update Room Error:", error);
    res.status(500).json({ error: "Failed to update room" });
  }
};

module.exports = {
  createRoom,
  getRooms,
  getRoomById,
  deleteRoom,
  updateRoom,
};
