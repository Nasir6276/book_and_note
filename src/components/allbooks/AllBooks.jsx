import React from 'react'
import Book from '../book/Book'
import './allbooks.css'

const AllBooks = ({books}) => {
  return (
    <div className='all_books'>
      {books.map((b) => (
        <Book book={b} />
      ))}
    </div>
  )
}

export default AllBooks