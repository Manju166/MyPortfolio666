import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Component from './Component/Component'
function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
      <Routes>
      <Route  path="/" element={<Component/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path='About' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App