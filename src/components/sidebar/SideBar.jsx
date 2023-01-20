import React, { useState, useEffect } from 'react'
import './sidebar.css';
import profile from '../../images/profile.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('http://localhost:5000/api/categories');
            setCats(res.data)
        }
        getCats();
    }, [])
  return (
    <div className='sidebar'>
        <div className="sidebar_items">
            <span className="sidebar_items-title">ABOUT ME</span>
            <img src={profile} alt="profile" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam 
                debitis commodi? Sit, animi dignissimos praesentium.
            </p>
        </div>
        <div className="sidebar_items">
            <span className="sidebar_items-title">CATEGORIES</span>
            <ul className="sidebar_items-list">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className='link'>
                        <li className="sidebar_items-list_item">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebar_items">
            <span className="sidebar_items-title">FOLLOW US</span>
            <div className="sidebar_items-social">
                <i className="sidebar_social-icons fa-brands fa-square-facebook"></i>
                <i className="sidebar_social-icons fa-brands fa-square-twitter"></i>
                <i className="sidebar_social-icons fa-brands fa-square-pinterest"></i>
                <i className="sidebar_social-icons fa-brands fa-square-github"></i>
            </div>
        </div>
    </div>
  )
}

export default SideBar