import React from 'react'
import { Link } from 'react-router-dom'
import './book.css'

const Book = ({book}) => {
  return (
    <div className='book'>
      {book.file && (
        <i className='fileIcon fa-solid fa-file-lines'></i>
      )} 
        <div className="bookInfo">
          <Link to={`/book/${book._id}`} className='link' >
            <span className='bookTitle'>{book.title}</span>
          </Link>   
          <hr />
          <span className='bookDate'>
            {new Date(book.createdAt).toDateString()}
          </span>
        </div>
    </div>
  )
}

export default Book