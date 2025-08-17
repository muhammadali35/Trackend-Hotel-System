const Hotel = require('../models/hotel');

// Add Hotel
exports.createHotel = async (req, res) => {
    try {
        const imagePaths = req.files.map(file => file.path); // ['uploads/abc.jpg', ...]

        const hotel = new Hotel({
            ...req.body,
            images: imagePaths
        });

        const savedHotel = await hotel.save();
        res.status(201).json(savedHotel);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Hotels
exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Single Hotel
exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Hotel
exports.updateHotel = async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedHotel) return res.status(404).json({ message: 'Hotel not found' });
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Hotel
exports.deleteHotel = async (req, res) => {
    try {
        const deleted = await Hotel.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Hotel not found' });
        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
