import React from 'react'
import './sidebar.css';
import profile from '../../images/profile.png';

const SideBar = () => {
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
                <li className="sidebar_items-list_item">Life</li>
                <li className="sidebar_items-list_item">Music</li>
                <li className="sidebar_items-list_item">Style</li>
                <li className="sidebar_items-list_item">Sport</li>
                <li className="sidebar_items-list_item">Movies</li>
                <li className="sidebar_items-list_item">Tech</li>
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