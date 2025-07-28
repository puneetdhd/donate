import React from 'react';
const heroImageUrl = '/hero.png'; 

const Hero = () => {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-center text-white filter grayscale -mt-[88px]"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider">CREATE AN IMPACT</h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-orange-500 tracking-wider">DONATE NOW</h2>
      </div>
    </div>
  );
};

export default Hero;