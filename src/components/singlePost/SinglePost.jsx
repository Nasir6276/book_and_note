import React from 'react'
import './singlepost.css'
import postIMG from '../../images/img3.jpg'

const SinglePost = () => {
  return (
    <div className='singlepost'>
        <div className="singlepost_wrapper">
            <img src={postIMG} alt="" className="singlepost_img" />
            <h1 className="singlepost_title">
                Lorem ipsum, dolor sit amet.
                <div className="singlepost_edit">
                    <i className="singlepost_icon fa-regular fa-pen-to-square"></i>
                    <i className="singlepost_icon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlepost_info">
                <span className="singlepost_author">Author: <b>Nasir</b></span>
                <span className="singlepost_Date">1 hour ago</span>
            </div>
            <p className='singlepost_description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus ipsum voluptatum sequi! Impedit nam pariatur 
                et provident voluptatem modi vel nihil repellendus illo 
                ipsa sapiente, minus fugiat saepe rem! Delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus ipsum voluptatum sequi! Impedit nam pariatur 
                et provident voluptatem modi vel nihil repellendus illo 
                ipsa sapiente, minus fugiat saepe rem! Delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus ipsum voluptatum sequi! Impedit nam pariatur 
                et provident voluptatem modi vel nihil repellendus illo 
                ipsa sapiente, minus fugiat saepe rem! Delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus ipsum voluptatum sequi! Impedit nam pariatur 
                et provident voluptatem modi vel nihil repellendus illo 
                ipsa sapiente, minus fugiat saepe rem! Delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus ipsum voluptatum sequi! Impedit nam pariatur 
                et provident voluptatem modi vel nihil repellendus illo 
                ipsa sapiente, minus fugiat saepe rem! Delectus.
            </p>
        </div>
    </div>
  )
}

export default SinglePost