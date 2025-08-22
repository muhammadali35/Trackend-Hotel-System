// 📁 File: src/pages/UserSignup.jsx

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email,
        password,
      };

      const response = await axios.post(
        'http://localhost:5000/users/register',
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
     setUser({
    email: data.user.email,
    fullName: {
      firstName: data.user.fullname.firstname,
      lastName: data.user.fullname.lastname,
    }
  });

        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      alert(
        error?.response?.data?.message || 'Signup failed. Please try again.'
      );
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div
      className="p-7 h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-white/90 p-6 rounded-lg shadow-md">
        <img
          className="w-20 mb-6 mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
          alt="Tour Logo"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-semibold mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#f0f0f0] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#f0f0f0] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-semibold mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#f0f0f0] mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-semibold mb-2">Enter Password</h3>
          <input
            className="bg-[#f0f0f0] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold mb-4 rounded-lg px-4 py-2 w-full text-lg transition">
            Create account
          </button>
        </form>

        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 font-medium">
            Login here
          </Link>
        </p>
      </div>

      <p className="text-[10px] leading-tight text-white text-center">
        This site is protected by reCAPTCHA and the{' '}
        <span className="underline">Google Privacy Policy</span> and{' '}
        <span className="underline">Terms of Service apply</span>.
      </p>
    </div>
  );
};

export default UserSignup;
