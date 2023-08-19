import React from 'react'
import POLO from '../images/poloLandingPage.jpg'
import './landingpage.css'
import {Link} from 'react'
function Landingpage() {
    return (
        <div className='LandingPage'>
            <div className='contentlp'>
                <div className='cntntlp1'>
                    Plan your trip now
                </div>
                <div className='cntntlp2'>
                    Save <span className='cntntlp2big'>big</span> with our car rental
                </div>
                <div className='cntntlp3'>
                    Rent the car of your dreams.Unbeatable prices,unlimited miles,flexible pick-up options and much more.
                </div>
                
                <div className='cntntlp4'>
                    <button className='button1'>Book Ride ✔ </button>
                 
                    <button className='button2'>Learn More</button>
                   
                </div>
                </div>
                <div className='LPimg'>
                    <img src={POLO} alt='polo' />
                </div>

            </div>
            )
}

            export default Landingpage
