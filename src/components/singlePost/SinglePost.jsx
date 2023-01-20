import React, { useContext, useEffect, useState } from 'react'
import './singlepost.css'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/Context'

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})
    const PF = 'http://localhost:5000/images/'
    const {user} = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/posts/${path}`)
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
                data: {username:user.username}
            });
            window.location.replace('/');
        } catch (err) {
            
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
                username:user.username, 
                title, 
                desc
            });
            setUpdateMode(false)
        } catch (err) {
            
        }
    }

  return (
    <div className='singlepost'>
        <div className="singlepost_wrapper">
            {post.photo && (
                <img src={PF + post.photo} alt="" className="singlepost_img" />
            )}{updateMode ? 
                <input 
                type='text' 
                value={title} 
                className='singlepost_title-input' 
                autoFocus 
                onChange={(e) => setTitle(e.target.value)}
            /> : (
                    <h1 className="singlepost_title">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlepost_edit">
                            <i className="singlepost_icon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                            <i className="singlepost_icon fa-solid fa-trash-can" onClick={handleDelete}></i>
                        </div>
                    )}
                    </h1>
                    )
                }
            <div className="singlepost_info">
                <span className="singlepost_author">
                    Author: <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link>
                </span>
                <span className="singlepost_Date">{new Date(post.creaedAt).toDateString}</span>
            </div>{updateMode ? 
                <textarea className='singlepost_description-input' 
                    value={desc} onChange={(e)=>setDesc(e.target.value)} 
                /> : (
                <p className='singlepost_description'>
                    {desc}
                </p>
                )}
                {updateMode && (
                <button className="single_post-button" onClick={handleUpdate}>
                    Update
                </button>
                )}
            </div>
    </div>
  )
}

export default SinglePost