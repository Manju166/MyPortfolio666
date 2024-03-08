import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
 const Portfolio = () => {
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
              <img src="examp1.png" alt="" />
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <img src="momorest.png" alt="" />
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <img src="portfolio.png" alt="" />
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <img src="momorest.png" alt="" />
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
              <SwiperSlide>
              <img src="portfolio.png" alt="" />
              <div className="blur s-blur2" style={{background: "rgb(99, 196, 234)", left: "-1rem",top:"-2rem",width:"5rem",height:"7rem"}}></div>
              <div className="blur s-blur" style={{background: "purple", left: "15rem",top:"4rem",width:"5rem",height:"7rem"}}></div>
              </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}
export default Portfolio
