const RSAUtils = require('../rsaUtils');

let keys = {}; // In-memory key pair (for demo only)

exports.generateKeys = async (req, res) => {
  try {
    keys = await RSAUtils.generateKeyPair();
    res.json({ message: 'Keys generated successfully', keys });
  } catch (err) {
    res.status(500).json({ error: 'Error generating keys', details: err.message });
  }
};

exports.encryptData = (req, res) => {
  try {
    const { plaintext } = req.body;
    const encrypted = RSAUtils.encrypt(keys.publicKey, plaintext);
    res.json({ encrypted: encrypted.toString('base64') });
  } catch (err) {
    res.status(500).json({ error: 'Error encrypting data', details: err.message });
  }
};

exports.decryptData = (req, res) => {
  try {
    const { encrypted } = req.body;
    const decrypted = RSAUtils.decrypt(keys.privateKey, Buffer.from(encrypted, 'base64'));
    res.json({ decrypted: decrypted.toString() });
  } catch (err) {
    res.status(500).json({ error: 'Error decrypting data', details: err.message });
  }
};

exports.signData = (req, res) => {
  try {
    const { message } = req.body;
    const signature = RSAUtils.sign(keys.privateKey, message);
    res.json({ signature });
  } catch (err) {
    res.status(500).json({ error: 'Error signing data', details: err.message });
  }
};

exports.verifySignature = (req, res) => {
  try {
    const { message, signature } = req.body;
    const isVerified = RSAUtils.verify(keys.publicKey, message, signature);
    res.json({ verified: isVerified });
  } catch (err) {
    res.status(500).json({ error: 'Error verifying signature', details: err.message });
  }
};
