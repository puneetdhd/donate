import React, { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        sticky z-50 w-full transition-all duration-300 ease-in-out
        ${isScrolled ? 'top-2.5' : 'top-2.5'}
      `}
    >
      <div
        className={`
          flex items-center justify-between mx-auto
          transition-all duration-300 ease-in-out
          ${isScrolled
            ? 'max-w-3xl bg-white/70 backdrop-blur-lg shadow-lg rounded-4xl p-4'
            : 'max-w-7xl bg-white/70 backdrop-blur-lg shadow-lg rounded-4xl p-4'
          }
        `}
      >
        <div className="flex-shrink-0">
          <img src={logoImage} alt="Company Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">HOME</a>
          <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">ABOUT US</a>
          <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">BRANDS</a>
          <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">REWARDS</a>
        </div>
        
        <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600">
          DONATE NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;