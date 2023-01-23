import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './singlebook.css'

const SingleBook = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [book, setBook] = useState({});

    useEffect(() => {
        const getBook = async () => {
            const res = await axios.get('http://localhost:5000/api/books/' + path)
            setBook(res.data);
        }
        getBook()
    }, [path])
  return (
    <div className='singleBook'>
        <div className="singleBookWrapper">
            {book.file && (
                <i className='file_Icon fa-solid fa-file-lines'></i>
            )}
            <h1 className='singleBookTitle'>
                {book.title}
                <div className="singleBookEdit">
                    <i className="singlepost_icon fa-solid fa-trash-can"></i>
                </div>
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
        </div>
    </div>
  )
}

export default SingleBook