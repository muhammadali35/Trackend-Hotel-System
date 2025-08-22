import React from 'react'
import About from '../Home/About'
import AboutAgency from './AboutAgency'
// import ReadyTour from './ReadyTour'
import Navbar from '../Home/Nav'
import Footer from '../Footer'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
        <About/>
        <AboutAgency/>
        {/* <ReadyTour/> */}
        <Footer/>
    </>
  )
}

export default AboutUs
