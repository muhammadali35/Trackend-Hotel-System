const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String },
    facilities: { type: [String], default: [] },
    images: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);
