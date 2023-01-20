import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'
import './login.css'

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'})
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
    } catch (err) {
      dispatch({type: 'LOGIN_FAILURE'})
    }
  }

  return (
    <div className='login'>
        <span className="login_title">Login</span>
        <form className="login_form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              className='login_input' 
              placeholder='Enter Your Username...'
              ref={userRef}
            />
            <label>Password</label>
            <input
              type="password"  
              className='login_input' 
              placeholder='Enter Your Password' 
              ref={passwordRef}
            />
            <button className="login_button" type='submit' disabled={isFetching}>
              Login
            </button>
        </form>
        <button className="login_register_button">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}

export default Login