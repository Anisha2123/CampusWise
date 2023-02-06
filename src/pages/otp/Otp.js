

import React from 'react'
import './otp.css';
import {Person, Mail, Lock} from "@material-ui/icons";
import left from "../left.png";
import right from "../right.png";


export const Otp = () => {
  return (
    <ul className='otp'>
      <div className='one'>
        <img src={left}></img>

      </div>
      <div className='two'>
      <h2>Campus<span>Wise</span></h2>
    <li className='form_start'>
    <h1>Account Verification</h1>
    <p className='para'>Enter 4 digit verification code sent to *****12@gmail.com</p>
    <div className='code'>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </div>
    <footer>
      <p>Resend code in 2:00</p>
    </footer>
    <form>
      <button>Verify</button>
    </form>
    </li>

      </div>
      <div className='three'>
      <img src={right}></img>
        
      </div>
    
      
    </ul>
  )
}

export default Otp;
