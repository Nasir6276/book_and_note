import React, { useState, useEffect, useContext } from 'react'
import './books.css'
import AllBooks from '../../components/allbooks/AllBooks'
import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/header/Header'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context'

const Books = () => {
  const {user} = useContext(Context)
  const [books, setBooks] = useState([])
  const {search} = useLocation();

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:5000/api/books'+search)
      setBooks(res.data)
    }
    fetchBooks()
  }, [search])
  return (
    <>
          <Header />
          <div className="upload_section">
            {user && (
            <button className='upload_button'>
              <Link to='/uploads' className='link'>
                Upload
              </Link>
            </button>
            )}
          </div>
          <div className="books">
            <AllBooks books={books} />
            <SideBar />
          </div>
        </>
  )
}

export default Books