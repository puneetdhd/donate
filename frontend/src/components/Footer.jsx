import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='landing-pg'>
      <div className='black-rectangle'>
        <div className='button-logo'>
          <a href="#donate" className="donate-btn">DONATE NOW</a>
        </div>
        <div className='content'>
          <h2>CONTACT US</h2>
          <p className='contactDetails'>
            📞 +91 12345 67890<br></br>✉️ contact@lorenipsum.com
          </p>
          <div className='social-icons'>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
