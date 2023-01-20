import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import './settings.css'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'

const Settings = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        dispatch({type: 'UPDATE_START'})
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if(file) {
            const data = new FormData();
            const filename= Date.now() + file.name;
            data.append("name", filename);
            data.append('file', file)
            updatedUser.profilePic = filename;
            try {
                await axios.post('http://localhost:5000/api/upload', data)
            } catch (err) {
                
            }
        }
        try {
            const res = await axios.put('http://localhost:5000/api/users/'+user._id, updatedUser)
            setSuccess(true);
            dispatch({type: 'UPDATE_SUCCESS', payload: res.data});
        } catch (err) {
            dispatch({type: 'UPDATE_FAILURE'})
        }
    }
  return (
    <div className='settings'>
        <div className="settings_wrapper">
            <div className="settings_title">
                <span className='settings_update_title'>Update Your Account</span>
                <span className='settings_delete_title'>Delete Your Account</span>
            </div>
            <form className="settings_form" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settings_PP">
                    <img 
                        src={file ? URL.createObjectURL(file) : PF+user.profilePic} 
                        alt="profile" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settings_PP_icon fa-regular fa-circle-user"></i>
                    </label>
                    <input 
                        type="file" 
                        id='fileInput' 
                        style={{display: 'none'}}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={e=>setPassword(e.target.value)}/>
                <button className="settings_submit" type='submit'>Update</button>
                {success && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile updated successfully..</span>}
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Settings