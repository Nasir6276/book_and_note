import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import './settings.css'
import settingsPP from '../../images/profile.png'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settings_wrapper">
            <div className="settings_title">
                <span className='settings_update_title'>Update Your Account</span>
                <span className='settings_delete_title'>Delete Your Account</span>
            </div>
            <form className="settings_form">
                <label>Profile Picture</label>
                <div className="settings_PP">
                    <img src={settingsPP} alt="profile" />
                    <label htmlFor="fileInput">
                        <i className="settings_PP_icon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Ismail' />
                <label>Email</label>
                <input type="email" placeholder='ismail@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className="settings_submit">Update</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Settings