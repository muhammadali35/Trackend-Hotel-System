import React from 'react'
import Login from './Components/Login/Login'
import Forgetpas from './Components/Forgetpas/Forgetpas'
import Signup from './Components/Signup/Signup'
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import Hotel from './Components/Hotel/Hotel'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Edithotel from './Components/Edithotel/Edithotel'
import Addhotel from './Components/Addhotel/Addhotel'
import Rooms from './Components/Rooms/Rooms'
import Addroom from './Components/Rooms/Addroom'
import Booking from './Components/Booking/Booking'
import Editroom from './Components/Editroom/Editroom'
import History from './Components/Paymenthistory/History'
import Profile from './Components/Profile/Profile'
import EditHotelPage from './Components/Edithotel/Edithotel'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/Forgetpas' element={<Forgetpas/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route element={<Layout/>}>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Hotel' element={<Hotel/>}/>
   <Route path="/edit-hotel/:id" element={<EditHotelPage />} />
        <Route path='/Addhotel' element={<Addhotel/>}/>
        <Route path='/Rooms' element={<Rooms/>}/>
        <Route path='/Addroom' element={<Addroom/>}/>
        <Route path='/Booking' element={<Booking/>}/>
      <Route path="/Editroom/:id" element={<Editroom />} />
        <Route path='/History' element={<History/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Contact' element={<Contact/>}/>



        </Route>
      </Routes>
      
    </div>
  )
}

export default App