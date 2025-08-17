const crypto = require('crypto');

const RSAUtils = {
  // Generate RSA Key Pair
  generateKeyPair: () =>
    new Promise((resolve, reject) => {
      crypto.generateKeyPair(
        'rsa',
        {
          modulusLength: 2048, // Key length
          publicKeyEncoding: { type: 'spki', format: 'pem' }, // Public key encoding
          privateKeyEncoding: { type: 'pkcs8', format: 'pem' }, // Private key encoding
        },
        (err, publicKey, privateKey) => {
          if (err) reject(err);
          resolve({ publicKey, privateKey });
        }
      );
    }),

  // Encrypt Data with Public Key
  encrypt: (publicKey, plaintext) =>
    crypto.publicEncrypt(publicKey, Buffer.from(plaintext)),

  // Decrypt Data with Private Key
  decrypt: (privateKey, encrypted) =>
    crypto.privateDecrypt(privateKey, encrypted),

  // Sign Data with Private Key
  sign: (privateKey, message) => {
    const signer = crypto.createSign('sha256');
    signer.update(message);
    signer.end();
    return signer.sign(privateKey, 'base64');
  },

  // Verify Signature with Public Key
  verify: (publicKey, message, signature) => {
    const verifier = crypto.createVerify('sha256');
    verifier.update(message);
    verifier.end();
    return verifier.verify(publicKey, signature, 'base64');
  },
};

module.exports = RSAUtils;