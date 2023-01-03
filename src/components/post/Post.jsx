import React from 'react'
import './post.css';
import PostIMG from '../../images/img4.jpg'

const Post = () => {
  return (
    <div className='post'>
        <img className='post_img' src={PostIMG} alt="" />
        <div className="post_info">
            <div className="post_categories">
                <span className="post_category">Music</span>
                <span className="post_category">Life</span>
            </div>
            <span className="post_title">
                Lorem ipsum dolor sit amet.
            </span>
            <hr />
            <span className="post_date">1 hour ago</span>
        </div>
        <p className="post_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Veniam, facere ea officiis odio incidunt quas maiores explicabo 
            nobis, eius ratione assumenda sit natus voluptatibus, laudantium 
            mollitia nam praesentium culpa aliquid?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Veniam, facere ea officiis odio incidunt quas maiores explicabo 
            nobis, eius ratione assumenda sit natus voluptatibus, laudantium 
            mollitia nam praesentium culpa aliquid?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Veniam, facere ea officiis odio incidunt quas maiores explicabo 
            nobis, eius ratione assumenda sit natus voluptatibus, laudantium 
            mollitia nam praesentium culpa aliquid?
        </p>
    </div>
  )
}

export default Post