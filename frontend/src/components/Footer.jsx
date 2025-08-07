import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/footerImg.jpg')" }}
    >
      <div
        className="relative w-full h-[516px] inset-0 bg-black opacity-55 flex flex-col items-start justify-start p-8"
      ></div>
       <div className="absolute top-[20px] left-[30px] z-30">
    <img src="/logo.png" alt="Logo" className="w-[120px] h-[120px]" />
  </div>
        <div className="absolute top-[20px] right-[30px] z-20">
          <div className="w-[175px] h-[54px] bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500">
            <a
              href="#"
              className="text-black font-bold text-[24px] w-[181px] h-[78px] flex items-center justify-center"
            >
              DONATE
            </a>
          </div>
        </div> 
        <div className="absolute top-1/2 left-[30px] transform -translate-y-1/2 text-white">
          <h3 className="text-xl font-semibold mb-4 ">CONTACT US</h3>
          <p className="flex items-center gap-2 ">
            <span>📞</span> +91 12345 67890
          </p>
          <p className="flex items-center gap-2 ">
            <span>📧</span> contact@loremipsum.com
          </p>
             <div className="social-icons flex gap-4 mt-4 text-white text-2xl">
            <a href="#" className="hover:scale-110 hover:text-yellow-300 transition-transform">
              <FaInstagram />
            </a>
            <a href="#" className="hover:scale-110 hover:text-yellow-300 transition-transform">
              <FaTwitter />
            </a>
            <a href="#" className="hover:scale-110 hover:text-yellow-300 transition-transform">
              <FaFacebook />
            </a>
            <a href="#" className="hover:scale-110 hover:text-yellow-300 transition-transform">
              <FaYoutube />
            </a>
          </div>
        </div>
      
    </div>

  )
}
export default Footer
