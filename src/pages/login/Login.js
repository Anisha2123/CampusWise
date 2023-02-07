


import './login.css';
import {Link } from 'react-router-dom'
import {Person, Mail, Lock} from "@material-ui/icons";

export const Login = () => {
  return (
    <ul className='login'>
      <h2>Kiit<span>Connect</span></h2>
      <li className='form_start'>
      <h1>Welcome Again!</h1>
      <p className='para'>sunt in culpa qui officia deserunt molli</p>
      <form>
        <div className='box' id='email'>
          <Mail className='icons'/>
          <input type="email" placeholder='EMAIL-ID' />
        </div>
        <div className='box'>
          <Lock className='icons'/>
          <input type="password" placeholder='PASSWORD' />
        </div>
        <button>Login</button>
      </form>
      <footer>
        <p>Don't have an account? 
          <Link to="/signup">Create one?</Link></p><br></br>
          <p>Check other pages too!</p>
          
          <Link to="/otp" className='links'>Otp</Link>&nbsp;
          <Link to="/verified"  className='links'>Verified</Link>
      </footer>
      </li>
        
      </ul>
  )
}
export default Login;