
// import logo from './logo.svg';
import './signup.css';
import {Link } from 'react-router-dom'
import {Person, Mail, Lock} from "@material-ui/icons";

export const Signup = () => {
  return (
    <ul className='signup'>
      <h2>Campus<span>Wise</span></h2>
      <li className='form_start'>
      <h1>Create Account</h1>
      <p className='para'>sunt in culpa qui officia deserunt molli</p>
      <form>
        <div className='box'>
          <Person  className='icons'/>
          <input type="text" placeholder='USERNAME' />
        </div>
        <div className='box'>
          <Mail className='icons'/>
          <input type="email" placeholder='EMAIL-ID' />
        </div>
        <div className='box'>
          <Lock className='icons'/>
          <input type="password" placeholder='PASSWORD' />
        </div>
        <button>Create Account</button>
      </form>
      <footer>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <br></br>
          <p>Check other pages too!</p>
          
          <Link to="/otp" className='links'>Otp</Link>&nbsp;
          <Link to="/verified"  className='links'>Verified</Link>
      </footer>
      </li>
        
      </ul>
  )
}
export default Signup;