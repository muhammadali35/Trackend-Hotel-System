import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import hero1 from './../../assests/heropic.jpg';
import hero2 from './../../assests/heropic.jpg';

const Hero = () => {
  const slides = [hero1, hero2];

  return (
    <div className="relative">
      <Swiper spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 5000 }}>
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="text-center p-6 bg-black bg-opacity-40 rounded-lg max-w-[80%]">
                <h2 className="text-3xl md:text-5xl font-bold">Welcome to Trekend Hotel</h2>
                <p className="text-xl md:text-3xl mt-2">Comfort & Luxury Await You</p>
                <p className="mt-4 text-base md:text-lg">
                  Over <span className="text-yellow-400 font-semibold">8700+ guests served</span> — Book your perfect room today!
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
