import React from 'react'
 const Card = ({emoji,heading,detail}) => {
  return (
    <>
        <div className="card">
        <img src={emoji} alt="" height={50}/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className='c-btn'>LEARN MORE</button>
        </div>
    </>
  )
}
export default Card;
