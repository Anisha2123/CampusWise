// import logo from './logo.svg';
// import React from 'react';
import "./App.css";
// import ReactDOM from 'react-dom/client';
import {Navigate,Routes,Route, BrowserRouter } from 'react-router-dom';
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Verified from "./pages/verified/Verified";
import Otp from "./pages/otp/Otp";
import Home from "./Home";

function App() {
  return (
    <div className="App">  


<BrowserRouter>
{/* <Home /> */}

<Routes>
  {/* <Route path='/' element={<Navigate replace to="/home"/>} /> */}
  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/otp' element={<Otp />} />
  <Route path='/verified' element={<Verified />} />
  
  
</Routes> 

</BrowserRouter>





    </div>
  );
}

export default App;
