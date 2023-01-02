import React from 'react';
import "./User.css";
import { PermIdentity, CalendarToday, Phone, Mail, Home, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">

                <h1 className="userTitle">Edit User</h1>

                <Link to="/newuser">
                    <button className="userAddButton">Create</button>
                </Link>
                
            </div>

            <div className="userContainer">

                <div className="userShow">

                    <div className="userShowTop">
                        <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alt="" className="userShowImg" />

                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Mohamed Infath</span>
                            <span className="userShowUserJob">Software Engineer</span>
                        </div>
                    </div>

                    <div className="userShowBottem">

                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShoeInfoTitle">MohamedInfath99</span>
                        </div>


                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShoeInfoTitle">02.01.2023</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>


                        <div className="userShowInfo">
                            <Phone className='userShowIcon' />
                            <span className="userShoeInfoTitle">07783636633</span>
                        </div>


                        <div className="userShowInfo">
                            <Mail className='userShowIcon' />
                            <span className="userShoeInfoTitle">mohamedinfath99@gmail.com</span>
                        </div>


                        <div className="userShowInfo">
                            <Home className='userShowIcon' />
                            <span className="userShoeInfoTitle">Kalmunai, Sri Lanka</span>
                        </div>

                    </div>

                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>

                    <form className="userUpdateForm">

                        <div className="userUpdateLeft">

                            <div className="userUpdateItem">
                                <label>User name </label>
                                <input type="text" placeholder='MohamedInfath99' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label>Full name </label>
                                <input type="text" placeholder='Mohamed Infath' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label>Email </label>
                                <input type="text" placeholder='mohamedinfath99@gmail.com' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label>Phone number </label>
                                <input type="text" placeholder='07783636633' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label>Address </label>
                                <input type="text" placeholder='Kalmunai, Sri Lanka' className='userUpdateInput' />
                            </div>

                        </div>



                        <div className="userUpdateRight">
                            <div className="userUpdtedUpload">
                                <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alr="" className='userUpdateImg' />

                                <label htmlFor="file"><Publish className='publishClassName' /></label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    )
}

