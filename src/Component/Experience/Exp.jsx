import React from 'react'
import './Exp.css'
import { motion } from 'framer-motion'
const Exp = () => {
  const transition={duration:20,type:'spring'}

  return (
    <>
        <div className='experience'>
        <motion.div className="achievement">
          <motion.div className="circle" initial={{rotate:360}}
                whileInView={{rotate:-360}} transition={transition}>
          <div className="c">0-1</div>
         </motion.div>
          <span>years</span>
          <span>Experience</span>
        </motion.div>
        <div className="achievement">
          <motion.div className="circle" initial={{rotate:360}}
                whileInView={{rotate:-360}} transition={transition}>
          <div className="c">10+</div>
         </motion.div>
          <span>completed</span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <motion.div className="circle" initial={{rotate:360}}
                whileInView={{rotate:-360}} transition={transition}>
          <div className="c">3+</div>
          </motion.div>
          <span>months</span>
          <span>Training</span>
        </div>
        </div>
    </>
  )
}
export default Exp