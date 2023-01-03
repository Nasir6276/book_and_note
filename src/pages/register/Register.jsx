import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
        <span className="register_title">Register</span>
        <form className="register_form">
            <label>Email</label>
            <input type="text" className='register_input' placeholder='Enter Your Email' />
            <label>Username</label>
            <input type="text" className='register_input' placeholder='Enter Your Username' />
            <label>Password</label>
            <input type="password" className='register_input' placeholder='Enter Your Password' />
            <button className="register_button">Register</button>
        </form>
        <button className="register_login_button"><Link className="link" to="/login">Login</Link></button>
    </div>
  )
}

export default Register