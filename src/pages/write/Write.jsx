import React from 'react'
import './write.css'
import postImg from '../../images/img5.jpg'

const Write = () => {
  return (
    <div className='write'>
        <img className='write_img' src={postImg} alt='postimg' />
        <form className="write_form">
            <div className="write_form-group">
                <label htmlFor="file_input">
                    <i className="write_icon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input type='file' id='file_input' style={{display:'none'}} />
                <input type="text" placeholder='Title' className='write_input' autoFocus={true}/>
            </div>
            <div className="write_form-group">
                <textarea placeholder='Write...' type='text' className='write_input write_text'>
                    
                </textarea>
            </div>
            <button className="write_submit">Publish</button>
        </form>
    </div>
  )
}

export default Write