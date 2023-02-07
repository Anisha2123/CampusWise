
// import React from 'react'
import {Link } from 'react-router-dom'
import './home.css';
export const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='link'>
      {/* <Link to='/' className='links'>Home</Link> */}
      <Link to='/login' className='links'>Login</Link>
      <Link to='/signup' className='links'>Signup</Link>
      <Link to='/otp' className='links'>Otp</Link>
      <Link to='/verified' className='links'>Verified</Link>
      
      </div>

      </div>
    </>
    
    
      
  )
}
export default Home;