// 📁 File: src/pages/UserLogin.jsx

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { user, token } = response.data;
        setUser(user);
        localStorage.setItem('token', token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Invalid email or password');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div
      className="p-7 h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-white/95 p-6 rounded-xl shadow-lg w-full max-w-md">
        <img
          className="w-20 mb-6 mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User Icon"
        />
        <h2 className="text-2xl font-bold text-center mb-6">User Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
