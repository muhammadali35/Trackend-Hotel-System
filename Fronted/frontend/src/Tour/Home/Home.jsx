import React from 'react';
import Hero from './Hero';
import About from './About';
// import Heroshpere from './HeroShpere';
import WhyChoose from './Whychoose';
import Navbar from './../Home/Nav';
import Footer from './../../Tour/Footer'


const Home = () => {
  return (
    <>
<Navbar/>
  <Hero/>
  <About/>
  <WhyChoose/>
  {/* <Heroshpere/> */}
  <Footer/>

    </>
  );
}

export default Home;
