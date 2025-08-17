const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    cardHolder: {
      type: String,
      required: true,
    },
    persons: {
      type: Number,
      required: true,
    },
    paid: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "bookings" }
);

module.exports = mongoose.model("Booking", bookingSchema);
