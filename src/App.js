import React, { useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Component from './Component/Component'
// import Home from './Component/Home/Home'
// import Services from './Component/Services/Services'
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App' style={{
      background:darkMode? 'black':'white',
      color:darkMode? 'white':'black'
    }}>
    <BrowserRouter> 
    <Navbar />
      <Routes>
      <Route  path="/" element={<Component/>}/>
          {/* <Route path="/home" element={<Home />} /> */}
         {/* <Route path='/services' element={<Services/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App