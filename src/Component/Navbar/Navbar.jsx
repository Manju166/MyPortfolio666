import React from 'react'
import './Navbar.css'
import { GrContact } from "react-icons/gr";
import {Link} from  "react-router-dom";
import {motion} from 'framer-motion';
const Navbar = () => {
    const navbar =[
        {
            name:"Home",
            link:'home',
        },
        {
            name: "About Us",
            link: 'about',
        },
        {
            name: "Portfolio",
            link: 'portfolio',
        },
        {
            name: "Client",
            link: 'client'
        }
      ]
  return (
    <>
    <motion.div className="navbar" initial={{opacity:0}}
    animate={{opacity:4}}
    transition={{delay:0.3,duration:3.5}}>
        <div className="logo">
            <img src="manjulogo.jpg" alt="logo"/>
        </div>
        <div className="nav">
           {navbar.map((link,index)=>(
                <Link key={index} to={link.link} className="nav-link">{link.name}</Link>
           ))}
        </div>
            <button className='contbtn'>
            <GrContact className='conIcon'/>
            Contact Me</button>
    </motion.div>
    </>
  )
}
export default Navbar