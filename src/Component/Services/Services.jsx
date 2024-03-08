import React from 'react'
import './Services.css'
import Resume from './resume.pdf'
import Card from './Card'
import { motion } from 'framer-motion'
 const Services = () => {
  const transition={duration:4,type:'spring'}
  return (
    <div >
        <div className='services' id='Services'>
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>I am proficient in working with
              React, enabling me to build dynamic and scalable
               web applications.</span>
               <a href={Resume} download>
               <button className='button s-button'>Download CV</button>
               </a>
               <div className="blur s-blur" style={{background: "#ABF1FF94", left: "-3rem",top:"18rem",width:"14rem"}}></div>
           </div>
            <div className="cards">
                <motion.div className='card'
                initial={{right:'25rem',rotate:-45}}
                whileInView={{right:'31rem',rotate:0}} transition={transition}
                 style={{right:'31rem', top:'10rem'}}>
                  <Card
                    emoji={"happyemoji.png"}
                    heading={"Design"}
                    detail={"Figma"}
                  />
                </motion.div>
                <motion.div className='card' 
                initial={{right:'19rem'}}
                whileInView={{right:'12rem'}} transition={transition}
                style={{right:'12rem'}}>
                  <Card
                    emoji={"emojichasma.jpg"}
                    heading={"Developer"}
                    detail={"Html, Css, JavaScript,React"}
                  />
                </motion.div>
                <motion.div className='card' 
                initial={{right:'21rem'}}
                whileInView={{right:'15rem'}} transition={transition}
                style={{right:'15rem', top:'21rem'}}>
                  <Card
                    emoji={"emoji.png"}
                    heading={"Animation"}
                    detail={"Framer Motion,scss"}
                  />
                </motion.div>
               <div className="blur s-blur" style={{background: "purple", left: "-38rem",top:"15rem",width:"24rem",height:"7rem",zIndex:"1"}}></div>
            </div>
        </div>
    </div>
  )
}
export default Services
