import React from 'react';
import './header.css';
import img1 from '../../images/img2.jpg';

const Header = () => {
  return (
    <div className='header'>
        <div className="header_titles">
            <span className='header_titles-sm'>Books & Notes</span>
            <span className='header_titles-lg'>Blog</span>
        </div>
        <img src={img1} alt="header-image1" className="header_img" />
    </div>
  )
}

export default Header