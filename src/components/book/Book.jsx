import React from 'react'
import { Link } from 'react-router-dom'
import './book.css'

const Book = ({book}) => {
  const PF = 'http://localhost:5000/images/'
  return (
    <div className='book'>
      {book.image && (
        <img className='uploadImg' src={PF + book.image} alt='postimg' />
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