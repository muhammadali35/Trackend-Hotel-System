const express = require("express");
const forge = require("node-forge");
const Booking = require("../models/booking"); // <-- Import model
const router = express.Router();

// Hardcoded private key (PKCS#1 format)
const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQBDEQMUSFducfIANbnb2UDVW3AVbvV4Awe/DjJCTJq7ESmR+yM6
68EVPENtHtE5VrNX/aXtTs8q9wKYvfbHOCLvIhybCTkqD7s+jyTQhXDNJFAe0RG8
xpTs1gQDau+i5WFxfWT++0WUajZuDhVz/zAQS9Ltk6MACNpgMPF9wMHKXQQNQVIo
040k2UqvY5zsP8rCm2R3haZqBzE/jBxwjTkaxvOU+UWHiTxxwuhupbGCOF9DPL1K
8oZeA8tIu8nvjPfTqyFP15I+eJuQZNMp7238nC+TaFTwFefy7Uckj+y552XAtyEq
9nBFrdIVlpC6VwrhL6kyXjerha2YDxNjiAx5AgMBAAECggEAN8tdXnBYnH+bLuWD
fA0fzOBHPO2UtYT/2sh6s4F7cIl0pgfiZVBgz8PU7GEo+qTQizFv6x8XZs0ckenn
9hETrxIX7jscHYv84KzBmeCJ2YCOTzTrprsmhmn96MH8Hu7pxDrn3OE6H6DFK4X3
/wqb99K85f1fK9YxprjRDydfkXQ6sqnSk2Bm5mWsx7zS2wIQr3GJAqbmoUo4dwqY
HiekdA+bjCqFfhkocobxPGd8HgpjRD67zY3tP5YDpSJwDxCTsEq6ZVKdrEbR3wmN
oBMT+H3MQJr5SIG74X77nx6Wv6mdS8OsNJEXgtFpy/G82nmOhFO/+qZLf+Zno1VC
U45oIQKBgQCE0vPbaBj1Vuk+qiFYftW7avTItYIo0e+krz2apUxTK+O2sWghhuOK
lvHXMyaoi//OE2amxzEG/lGGTKuxgJRwNsBXvAsBsUiR+mzreDOq3hGHfLNYW0ML
otwqNqZJaDQngUNw85Uau4ZwQXk3BNx+fNdg6KkkqsmcEc1/shTzzQKBgQCBQubr
w8kg5UVYugDsimPCnP2hRPLaiHPVKqzs02CqAMk6ORjgH6SVhkQAUqQUMf/0LkI2
WQnvBa43X0Gp0pzTcr3UtICNNrADZeQDLr+j7OdIc624AOMazVgcYls86Y44coOW
QmFJbRNsi9/H/gnryIYNHX6d6MUfji195yRnXQKBgQCBH47fahhxUXdYaw4VuN/Q
3g5vnDyXsFdW8uFhmHZVmKI7tcW0aiyES295tIlNayRYUvYFBjn8QXpBpAF5grVL
TX65C95rW8xf1WLTmrwnzNCftTOonrfT9RQxmYUYccvZ58kHYlU+crUkJhJP0VMF
SBodZLEiK0HpjkkHbbj+tQKBgH6hVu4DOKdkVCJO3hbcoEyIVaRGko9p++gJzayY
i2sgKAJE60ytUyQ0i6uxShKKxQ+mvbDWW3fwnbKbPA2tSXuQPc4CIqm0uIwrpktD
4fQqYo3E3ZuUKugX4Mi1xmIPAAfmj2iFkR9Iny3IfatEAN4e7MwuZ9s0rOBz/bcI
2M31AoGAFt1M3hLZHAhAokomKwExlmITiNI8sbYxN01nU0Ft+dBY0+niU4zN7o5M
c6mTMQliG6XnzyLW36bWrMntskIs5IACmB/R/UmDBIADAS0sJ2nSTMlk16HLZFdO
BJYGB1JOf77rGSJFpiHFrUKFAiHpYZCdzhi384YcK7VGWnXAdms=
-----END RSA PRIVATE KEY-----`;


// Validate key
if (!privateKeyPem.includes("PRIVATE KEY")) {
  throw new Error("Invalid or empty private key");
}

// Parse the private key
const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);

// Booking route
router.post("/", async (req, res) => {
  try {
    const { encryptedCardData, room, formData, totalPrice } = req.body;

const encryptedBytes = forge.util.decode64(encryptedCardData);
const decrypted = privateKey.decrypt(encryptedBytes); // ✅ PKCS1_v1_5 (default)
const cardData = JSON.parse(decrypted);


    console.log("Decrypted Card Data:", cardData);
      console.log("Saving booking:", {
      room,
      formData,
      totalPrice,
      cardData,
    });

    // ✅ Save to MongoDB
    const newBooking = new Booking({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      roomType: room.roomType,
      totalPrice,
      cardHolder: cardData.name,
      persons: formData.persons,
      paid: true,
    });

    await newBooking.save();

    res.status(200).json({
      message: "Booking successful!",
      cardHolder: cardData.name,
    });
  } catch (err) {
  console.error("Decryption error:", err.message);
  console.error("Stack trace:", err.stack);
  res.status(500).json({ error: "Failed to confirm booking", detail: err.message });
}

});

  router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err.message);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});
module.exports = router;
