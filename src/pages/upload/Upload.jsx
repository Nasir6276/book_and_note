import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react'
import { Context } from '../../context/Context';
import './upload.css'

const Upload = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            username: user.username,
            title,
        };
        if(file) {
            const data = new FormData();
            const filename= Date.now() + file.name;
            data.append("name", filename);
            data.append('file', file)
            newBook.file = filename;
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
    const pdfBlob = new Blob([file], {type: 'application/pdf'})
  return (
    <div className='upload'>
        {pdfBlob && (
            <i className='file_icon fa-solid fa-file-lines'></i>
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
                    accept="application/pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input 
                    type="text" 
                    placeholder='Title of book or note...' 
                    className='uploadInput' 
                    autoFocus={true}
                    onChange={e=> setTitle(e.target.value)}
                />
            </div>
            <button className='uploadSubmit' type='submit' >Upload</button>
        </form>
    </div>
  )
}

export default Upload