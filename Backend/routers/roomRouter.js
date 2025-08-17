const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {
  createRoom,
  getRooms,
  deleteRoom,
  updateRoom,
    getRoomById

} = require('../controllers/room');
 const upload=require('../uploads/multer')

// Multer setup
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
// });
// const upload = multer({ storage });

// Routes
router.post('/', upload.array('images'), createRoom);
router.get('/', getRooms);
router.delete('/:id', deleteRoom);
router.put('/:id', upload.array('images'), updateRoom);
router.get('/:id', getRoomById);


module.exports = router;
