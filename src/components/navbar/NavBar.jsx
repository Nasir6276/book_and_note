import React, { useContext } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const NavBar = () => {
    const {user, dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }
  return (
    <div className='navbar'>
        <div className="navbar_social-media">
            <i className="navbar_social-media_icons fa-brands fa-square-facebook"></i>
            <i className="navbar_social-media_icons fa-brands fa-square-twitter"></i>
            <i className="navbar_social-media_icons fa-brands fa-square-pinterest"></i>
            <i className="navbar_social-media_icons fa-brands fa-square-github"></i>
        </div>
        <div className="navbar_menu">
            <ul className="navbar_menu-items">
                <li className="navbar_menu-items_list">
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className="navbar_menu-items_list">
                    <Link className='link' to='/'>ABOUT</Link>
                </li>
                <li className="navbar_menu-items_list">
                    <Link className='link' to='/'>BOOKS</Link>
                </li>
                <li className="navbar_menu-items_list">
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className="navbar_menu-items_list" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="navbar_profile">
            {user ? (
                <Link to='/settings'>
                    <img className='navbar_profile-image' src={PF+user.profilePic} alt='profile' />
                </Link>
            ) : (
                <ul className="navbar_menu-items">
                    <li className="navbar_menu-items_list">
                        <Link className='link' to='/login'>LOGIN</Link>
                    </li>
                    <li className="navbar_menu-items_list">
                        <Link className='link' to='/register'>REGISTER</Link>
                    </li>
                </ul>
            )}  
            <i className="navbar_profile-search fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default NavBar