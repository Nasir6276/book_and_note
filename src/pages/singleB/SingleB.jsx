import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import SingleBook from '../../components/singleBook/SingleBook'
import './singleb.css'

const SingleB = () => {
  return (
    <div className='singleB'>
        <SingleBook />
        <SideBar />
    </div>
  )
}

export default SingleB