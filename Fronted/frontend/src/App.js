import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Start from './pages/Start';
import BookingPage from './Tour/Rooms/BookingPage';
import Confirmation from './Tour/Rooms/Confirm';
import Home from './Tour/Home/Home';
import AboutUs from './Tour/About/AboutUs';
import Contact from './pages/Contact';
import RoomList from './Tour/Rooms/RoomList';
import RoomDetail from './Tour/Rooms/RoomDetail';




function App() {
  return (
<>
    
    <Routes>
       <Route path='/' element={<Start />} /> 
       <Route path="/login" element={<UserLogin />} /> 
      <Route path='/signup' element={<UserSignup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/rooms' element={<RoomList />} />
<Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    
      </>
  );
}

export default App;
