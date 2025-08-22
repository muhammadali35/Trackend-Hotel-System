import React, {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from './../../assests/logo1.webp';
import { UserDataContext } from '../../context/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserDataContext); 
  console.log("user ya ha",user);
  
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl fixed top-0 left-0 right-0 z-50 rounded-b-2xl">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full border-2 border-white shadow-md"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          Trekend
        </h1>
      </div>

      {/* Desktop Nav Centered */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-8 text-white font-medium text-lg">
          <li>
            <Link to="/home" className="hover:text-gray-800 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/rooms" className="hover:text-gray-800 transition duration-300">Rooms</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-800 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-800 transition duration-300">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right Side (User / Auth Buttons) */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <>
            <span className="text-white font-semibold">{user.name}</span>
            <button 
              onClick={handleLogout} 
              className="text-white font-medium hover:text-gray-800 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white font-medium hover:text-gray-800 transition duration-300">Login</Link>
            <Link to="/signup" className="text-white font-medium hover:text-gray-800 transition duration-300">Signup</Link>
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-yellow-400 text-white font-medium text-lg p-4 flex flex-col gap-3 md:hidden shadow-md">
          <li>
            <Link to="/home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-800">Home</Link>
          </li>
          <li>
            <Link to="/rooms" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-800">Rooms</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-800">About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-800">Contact</Link>
          </li>

          {user ? (
            <>
              <li className="font-semibold">Hi, {user.name}</li>
              <li>
                <button 
                  onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} 
                  className="hover:text-gray-800"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-800">Login</Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-800">Signup</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
