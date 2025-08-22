import React from 'react';

  import Rooms from './Room';
  import RoomFront from './RoomFront';
import Navbar from '../Home/Nav';
import Footer from '../Footer';


const RoomList = () => {
  return (
    <>
   <Navbar/>
       <RoomFront/>
       <Rooms/>
   <Footer/>
    </>
  );
}

export default RoomList;
