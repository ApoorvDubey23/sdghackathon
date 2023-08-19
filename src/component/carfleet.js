import React, { useEffect } from 'react'
import { useState } from 'react'
import AUDI from '../images/audi a s1 line.jpg'
import BMW from '../images/BMW.jpg'
import Fortuner from '../images/fortuner.jpg'
import MRCDS from '../images/mercedes.jpg'
import RR from '../images/rangerover.jpg'
import Swift from '../images/swift.jpg'
import './carfleet.css'
function Carfleet() {
const[car,setcar]=useState(AUDI);

  return (
    <div className='cf'>
        <div className='name'>
            <button className='btn2' onClick={()=>{setcar(AUDI)}}>Audi</button>
            <button className='btn2' onClick={()=>{setcar(BMW)}}>BMW</button>
            <button className='btn2' onClick={()=>{setcar(Fortuner)}}>Fortuner</button>
            <button className='btn2' onClick={()=>{setcar(MRCDS)}}>Mercedes</button>
            <button className='btn2' onClick={()=>{setcar(RR)}}>RangeRover</button>
            <button className='btn2' onClick={()=>{setcar(Swift)}}>Swift</button>
        </div>
        <div className='carpic'>
            <img src={car} alt='car'/>
        </div>
      
    </div>
  )
}

export default Carfleet
