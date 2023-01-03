import React from 'react'
import SideBar from '../../components/sidebar/SideBar';
import SinglePost from '../../components/singlePost/SinglePost';
import './single.css';

const Single = () => {
  return (
    <div className='single'>
        <SinglePost />
        <SideBar />
    </div>
  )
}

export default Single