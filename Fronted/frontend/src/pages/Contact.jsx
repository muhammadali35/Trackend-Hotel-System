import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Navbar from '../Tour/Home/Nav';
import Footer from '../Tour/Footer';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("❗ Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post( 'http://localhost:5000/api/contact', formData);
      if (res.status === 200) {
        setStatus("✅ Your message has been sent!");
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      setStatus("❗ Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-yellow-50 py-12 px-6 lg:px-20 mt-20">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden grid md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="bg-yellow-500 text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">📞 Get in Touch</h2>
            <p className="mb-6 text-yellow-100 text-sm leading-relaxed">
              Whether you have questions, suggestions, or just want to say hello – we’d love to hear from you!
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <span>contact@yourtour.com</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 mt-1" />
                <span>Office #123, Gulberg, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">✉️ Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md font-medium hover:bg-yellow-600 transition duration-300"
              >
                🚀 Send Message
              </button>
              {status && (
                <p className={`text-sm mt-2 ${status.includes("✅") ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
