const express = require('express');
const router = express.Router();
const { submitContactForm ,getAllMessages } = require('../controllers/contact');

router.post('/contact', submitContactForm);

router.get('/contact', getAllMessages); // GET /api/contact




module.exports = router;
