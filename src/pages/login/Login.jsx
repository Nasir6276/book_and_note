import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className="login_title">Login</span>
        <form className="login_form">
            <label>Email</label>
            <input type="text" className='login_input' placeholder='Enter Your Email' />
            <label>Password</label>
            <input type="password" className='login_input' placeholder='Enter Your Password' />
            <button className="login_button">Login</button>
        </form>
        <button className="login_register_button"><Link className="link" to="/register">Register</Link></button>
    </div>
  )
}

export default Login