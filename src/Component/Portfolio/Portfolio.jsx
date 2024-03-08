import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'
 const Portfolio = () => {
  const transition={duration:4,type:'spring'}

  return (
    <>
        <div className="portfolio" id='Portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper
             spaceBetween={5}
             slidesPerView={3}
             grabCursor={true}
             className='portfolio-slider'
            >
              <SwiperSlide>
              <motion.img src="examp1.png" alt="" initial={{rotate:-45}}
                whileInView={{rotate:0}} transition={transition}/>
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <motion.img src="momorest.png" alt="" initial={{rotate:-45}}
                whileInView={{rotate:0}} transition={transition}/>
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <motion.img src="portfolio.png" alt="" initial={{rotate:-45}}
                whileInView={{rotate:0}} transition={transition}/>
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <motion.img src="momorest.png" alt="" initial={{rotate:-45}}
                whileInView={{rotate:0}} transition={transition}/>
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <motion.img src="portfolio.png" alt="" initial={{rotate:-45}}
                whileInView={{rotate:0}} transition={transition}/>
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}
export default Portfolio
