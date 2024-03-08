import React from 'react'
import './Navbar.css'
// import {Link} from  "react-router-dom";
import {motion} from 'framer-motion';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';
const Navbar = () => {
    const navbar =[
        {
            name:"Home",
            link:'home',
        },
        {
            name: "Services",
            link: 'services',
        },
        {
            name: "Portfolio",
            link: 'portfolio',
        },
        {
            name: "Experience",
            link: 'experience'
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
                <Link key={index} to={link.link} spy={true} smooth={true} className="nav-link">{link.name}</Link>
           ))}
        </div>
            <Toggle/>
            <button className='button'><Link spy={true} to='Contact' smooth={true}>Contact Me</Link></button>
    </motion.div>
    </>
  )
}
export default Navbar