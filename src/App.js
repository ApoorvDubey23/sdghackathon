import React from 'react'
import Navbar from './component/navbar'
import Landingpage from './component/landingpage'
import Carfleet from './component/carfleet'
import { Link, Route, Routes } from 'react-router-dom'; 
function App() {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Carfleet/>
    </div>
   
    
  
  )
}

export default App
