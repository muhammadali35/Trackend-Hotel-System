const express = require('express');
const router = express.Router();
const rsaController = require('../controllers/rsaController');

router.post('/generate-keys', rsaController.generateKeys);
router.post('/encrypt', rsaController.encryptData);
router.post('/decrypt', rsaController.decryptData);
router.post('/sign', rsaController.signData);
router.post('/verify', rsaController.verifySignature);

module.exports = router;
