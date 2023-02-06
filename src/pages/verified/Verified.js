
import React from 'react'
import {verified} from "./verified.scss";
import  Icon from "../user.png";
// import {Person, Mail, Lock, HowToReg} from "@material-ui/icons";

export const Verified = () => {
  return (
    <ul className='verified'>
      <h2>Campus<span>Wise</span></h2>
      <li className='form_start'>
      <form> 
        <img src={Icon} alt=""/>
        <h3>Account Verified Succesfully</h3>
        <button>Continue</button>
      </form>
      </li>
        
      </ul>
  )
}

export default Verified;
