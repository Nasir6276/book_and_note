import React, { useState, useEffect } from 'react'
import './sidebar.css';
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
            <span className="sidebar_items-title">ABOUT BOOKS & NOTES</span>
            <img src="https://images.pexels.com/photos/990432/pexels-photo-990432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
            <p>
                Books & Notes is a free plartform for users and students. you get the latest news about activities of the campus, relevant blogs and post  
                and necessary books and handout.
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