import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context'
import './singlebook.css'

const SingleBook = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [book, setBook] = useState({});
    const { user } = useContext(Context)
    const PF = 'http://localhost:5000/images/'

    useEffect(() => {
        const getBook = async () => {
            const res = await axios.get('http://localhost:5000/api/books/' + path)
            setBook(res.data);
        }
        getBook()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/books/` + path, {
            data: { username: user.username }
            })
            window.location.replace('/books');
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className='singleBook'>
        <div className="singleBookWrapper">
            {book.image && (
                <img className='upload_img' src={PF + book.image} alt='postimg' />
            )}
            <h1 className='singleBookTitle'>
                {book.title}
                {book.username === user?.username && (
                    <div className="singleBookEdit">
                        <i className="singlepost_icon fa-solid fa-trash-can" onClick={handleDelete}></i>
                    </div>
                )}
            </h1>
            <div className="singlepost_info">
                <span className="singlepost_author">
                    Author: 
                    <Link to={`/books?user=${book.username}`} className='link' >
                        <b>{book.username}</b>
                    </Link>
                </span>
                <span className="singlepost_Date">{new Date(book.createdAt).toDateString()}</span>
            </div>
            {book.link && (
                <button className="downloadButton">
                <a href={`${book.link}`} className='link' >
                    Download
                </a>
                </button>
            )} 
        </div>
    </div>
  )
}

export default SingleBook