import React from "react";
// import logo from "../../asses/ts/logo1.webp"; // make sure this path is correct

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
          
            <h2 className="text-3xl font-bold text-yellow-400">Trekend Hotel</h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Make your stay luxurious and memorable with our premium facilities and comfort.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-yellow-400 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-yellow-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-yellow-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">Contact</a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-yellow-300 transition">Rooms</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
          <p className="text-lg mb-4">
            <strong>Phone:</strong> +92 300 1234567
          </p>
          <p className="text-lg mb-4">
            <strong>Email:</strong> info@trekendhotel.com
          </p>
          <p className="text-lg">
            <strong>Address:</strong> 123 Luxury Road, Karachi, Pakistan
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 pt-6 text-center text-sm text-gray-300 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Trekend Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
