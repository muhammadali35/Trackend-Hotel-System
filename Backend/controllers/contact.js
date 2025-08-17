const Contact = require('../models/contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contactEntry = new Contact({ name, email, message });
    await contactEntry.save();

    res.status(200).json({ message: '✅ Message saved successfully' });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ message: '❗ Server error' });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
