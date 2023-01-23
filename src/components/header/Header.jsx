import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="header_titles">
            <span className='header_titles-sm'>Books & Notes</span>
            <span className='header_titles-lg'>Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header-image1" className="header_img" />
    </div>
  )
}

export default Header