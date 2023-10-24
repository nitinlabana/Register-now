import React from 'react'
import SLIDE1 from './photo/SLIDE1.jpg'

function Register() {
  return (
    <>
    <div className="text">
        <h2>Analytics 101</h2>
        <p>This free workshop you how to track
            important metrics in your business
        </p>
        <h4>Your host</h4>
        <div className="photo">
            <img src={SLIDE1} alt="" />
        </div>
        <h3>CEO ,company</h3>
        <h5>Nitin</h5>
    </div>

    <div className="form">
        <h2>Register Now</h2>
        <p>Enter you information to register for the workshop</p>
         <input type="text" placeholder='First name'  className='nameinput'/>
         <input type="text" placeholder='Last name' className='lastinput' />
         <input type="email" placeholder='Your email' className='emailinput'/>
         <h3>Select Day:</h3>
        <input type="date"name='bday'  className='dateinput'/>
        <button className='btn'>Register</button>
        
    </div>
    </>
  )
}

export default Register