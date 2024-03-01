import React from 'react'
import './Home.css';
import { LiaHireAHelper } from "react-icons/lia";
const Home = () => {
  return (
    <>
    <div className="homepage">
    <div className='hh'>
      <h3>Hello,</h3>
      <h1>I'm <span className='name'>Manju</span><br/>Frontend Developer</h1>
      <p>I am a skilled and passionate web designer with 
      experience in creating visually appealing and user-friendly websites. </p>
      <button className='hirebtn'><LiaHireAHelper className='hireicon'/>Hire me</button>
    </div>
    <div className="image">
        <div className="im">
        <img src="img.jpg" alt="" />
        </div>
        </div>
    </div>
    </>
  )
}
export default Home;
