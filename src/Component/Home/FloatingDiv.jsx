import React from 'react'
import './Home.css'
import { FaCrown } from "react-icons/fa";
 const FloatingDiv = ({text}) => {
  return (
    <>
        <div className="floatingdiv">
            <FaCrown className='crown'/>
            <span>{text}</span>
        </div>
    </>
  )
}
export default FloatingDiv
