


import './login.css';
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
        <p>Don't have an account? <a href="#">Create one</a></p>
      </footer>
      </li>
        
      </ul>
  )
}
export default Login;