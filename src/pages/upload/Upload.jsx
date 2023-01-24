import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react'
import { Context } from '../../context/Context';
import './upload.css'

const Upload = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            username: user.username,
            title,
            link
        };
        if(file) {
            const data = new FormData();
            const filename= Date.now() + file.name;
            data.append("name", filename);
            data.append('file', file)
            newBook.image = filename;
            try {
                await axios.post('http://localhost:5000/api/upload', data)
            } catch (err) {
                
            }
        }
        try {
            const res = await axios.post('http://localhost:5000/api/books', newBook)
            window.location.replace('/book/' + res.data._id);
        } catch (err) {
            
        }
    }
    
  return (
    <div className='upload'>
        {file && (
            <img className='upload_img' src={URL.createObjectURL(file)} alt='postimg' />
        )}   
        <form className='uploadForm' onSubmit={handleSubmit}>
            <div className="uploadFormGroup">
                <label htmlFor="fileUpload">
                    <i className="uploadIcon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input 
                    type="file" 
                    id='fileUpload' 
                    style={{display:'none'}}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input 
                    type="text" 
                    placeholder='Title of book or note...' 
                    className='uploadInput' 
                    autoFocus={true}
                    onChange={e=> setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='Download link'
                    className='uploadInput'
                    onChange={e=> setLink(e.target.value)}
                />
            </div>
            <button className='uploadSubmit' type='submit' >Upload</button>
        </form>
    </div>
  )
}

export default Upload