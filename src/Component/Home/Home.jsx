import React from 'react'
import './Home.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FloatingDiv from './FloatingDiv';
import {motion} from 'framer-motion'
const Home = () => {
const transition = {duration:7,type:'spring'}
  return (
    <>
    <div className="homepage">
    <div className="emoji">
    <motion.img initial={{right:'-25rem',rotate:360}}
     whileInView={{left:'54%',rotate:-360}} transition={transition} 
    src="emojichasma.jpg" alt=""/>
    <div className='hh'>
      <h3>Hello,</h3>
      <h1>I'm <span className='name'>Manju</span><br/>Frontend Developer</h1>
      <p>I am a skilled and passionate web designer with 
      experience in creating visually appealing and user-friendly websites. </p>
      <button className='button h-btn'>Hire me</button>
      <motion.div className="h-icon" initial={{rotate:-45}}
                whileInView={{rotate:0}} transition={transition}>
      <a href="https://github.com/Manju166"><FaGithub className='s-icon'/></a>
      <a href="https://www.linkedin.com/in/manju-bhandari-b98a70233"><FaLinkedin className='s-icon'/></a>
      <a href="https://instagram.com/manjubhandari592?igshid=MzNINGNkZWQ4Mg=="><FaInstagram className='s-icon'/></a>
      </motion.div>
    </div>
    </div>
    <motion.div className="image" initial={{top:'46%',right:'50%'}} whileInView={{left:'55%'}} transition={transition} >
        <div className='floating'>
          <FloatingDiv text='React Developer'/>
        </div>
        <div className="im">
        <img src="img.jpg" alt="" />
        </div>
        </motion.div>
        <div className="blur" style={{background:"#C1F5"}}></div>
    </div>

    </>
  )
}
export default Home;
