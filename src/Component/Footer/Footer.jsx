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
               <a href="https://instagram.com/manjubhandari592?igshid=MzNINGNkZWQ4Mg=="><FaInstagram size="3rem" className='s-icons'/></a>
               <a href="https://www.linkedin.com/in/manju-bhandari-b98a70233"><FaLinkedin size="3rem" className='s-icons'/></a>
                <a href="https://github.com/Manju166"><FaGithub size="3rem" className='s-icons'/></a>
                </div>
            </div>
        </div>
    </>
  )
}
export default Footer
