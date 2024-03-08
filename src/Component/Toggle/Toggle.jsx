import React from 'react'
import './Toggle.css'
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { type } from '@testing-library/user-event/dist/type';
 const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const handleClick=()=>{
        theme.dispatch({type:'toggle'})
    }
  return (
    <>
    <div className="toggle" onClick={handleClick}>
    <FaMoon />
    <GoSun />
        <div className="t-button" 
        style={darkMode?{left:'2px'}:{right:'2px'}}>
            
        </div>
    </div>
    </>
  )
}
export default Toggle
