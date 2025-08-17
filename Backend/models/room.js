const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  roomType: { type: String, required: true },
  facilities: [{ type: String }],
  description: { type: String },
  price: { type: Number },
  images: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
