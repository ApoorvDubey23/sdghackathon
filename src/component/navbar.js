import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div ><button className='btn1'>Home</button></div>
      <div ><button className='btn1'>About</button></div>
      <div ><button className='btn1'>Vehicles Available</button></div>
      <div ><button className='btn1'>Our Team</button></div>
      <div ><button className='btn1'>Contact Us</button></div>
      <div className='empty'></div>
      <div ><button className='btn1'>Log In</button></div>
      <div ><button className='btn1 signup'>Sign Up</button></div>
   
    </div>
  )
}

export default Navbar
