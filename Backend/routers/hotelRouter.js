const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel');
const upload = require('../uploads/multer');

// Create Hotel with images
router.post('/', upload.array('images', 5), hotelController.createHotel);

// Other Routes
router.get('/', hotelController.getHotels);
router.get('/:id', hotelController.getHotelById);
router.put('/:id', hotelController.updateHotel);
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;
