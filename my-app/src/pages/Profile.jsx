import React from 'react'
import usersImage from '../assets/profilePic.jpg'
import '../App.css'
import { TbSettings } from 'react-icons/tb'
import { RxPlus } from 'react-icons/rx'
import SideBar from '../components/sideBar'
function profile() {
    return (
        <>
            <SideBar />
            <div className='profileContainer'>
                <div className='headerContainer'>
                    <div className='ProfilePicture'>
                        <img src={usersImage} alt="" className="imageProfile" />
                    </div>
                    <div className='allBio'>
                        <div className='bio'>
                            <h1 className='userName'>_bayr_aaaaa</h1>
                            <button className='editProfileButton'>Edit profile</button>
                            <TbSettings className='settingsButton' />
                        </div>
                        <div className='bio'>
                            <p className='social'>69 posts</p>
                            <p className='social'>69M followers</p>
                            <p className='social'>0 following</p>
                        </div>
                        <div className='bio'>
                            <p className='name'>Батбаяр.Б</p>
                        </div>

                    </div>

                </div>
                <div className='highlightContainer'>
                    <div className='borderBottom'>
                        <div >
                            <RxPlus style={{ width: "100px", height: "100px", color: "darkgray", border: "1px solid darkgray", borderRadius: "50%" }} />
                            <p className='newText'>New</p>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default profile