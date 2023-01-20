import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        username,
        password
      })
      res.data && window.location.replace('login');
    } catch (err) {
      setError(true);
    }
  }
  return (
    <div className='register'>
        <span className="register_title">Register</span>
        <form className="register_form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
              type="text" 
              className='register_input' 
              placeholder='Enter Your Email' 
              onChange={e=>setEmail(e.target.value)} 
            />
            <label>Username</label>
            <input 
              type="text" 
              className='register_input' 
              placeholder='Enter Your Username'
              onChange={e=>setUsername(e.target.value)} 
            />
            <label>Password</label>
            <input 
              type="password" 
              className='register_input'
              placeholder='Enter Your Password'
              onChange={e=>setPassword(e.target.value)} 
            />
            <button className="register_button">Register</button>
        </form>
        <button className="register_login_button" type='submit'><Link className="link" to="/login">Login</Link></button>
        {error && <span style={{color: 'red', marginTop: '10px'}}>Something went wrong!</span>}
    </div>
  )
}

export default Register