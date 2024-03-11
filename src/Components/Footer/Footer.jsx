import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-main'>
      <div className="footer_left">
      &#169; Designed & build by Vibek Mandal
      </div>
      <div className="footer_right">
        <a href="">
          <IoLogoLinkedin/>
  
        </a>
        <a href="">
          <FaGithub />
  
        </a>
        <a href="">
          <TfiEmail />
  
        </a>
      </div>
    </div>
  )
}

export default Footer