import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
 const Footer = () => {
  return (
    <>
        <div className="footer">
            <img src="wave.jpg" alt=""/>
            <div className="f-content">
                <span>manjubhandariabc@gmail.com</span>
                <div className="f-icons">
                <FaInstagram size="3rem" className='s-icons'/>
                <FaLinkedin size="3rem" className='s-icons'/>
                <FaGithub size="3rem" className='s-icons'/>
                </div>
            </div>
        </div>
    </>
  )
}
export default Footer
