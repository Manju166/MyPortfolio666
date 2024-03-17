import React, { useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Component from './Component/Component'
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
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App