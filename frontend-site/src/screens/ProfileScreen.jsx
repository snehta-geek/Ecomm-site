import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { detailsUser, updateUserProfile } from "../actions/userAction";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useState } from "react";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstant";

const ProfileScreen = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;
    const  userUpdateProfile= useSelector(state => state.userUpdateProfile);
    const {loading: loadingUpdate, error:errorUpdate, success: successUpdate}= userUpdateProfile;


    const dispatch = useDispatch();

    useEffect(() => {
        if(!user) {
            dispatch({type:USER_UPDATE_PROFILE_RESET});
            dispatch(detailsUser(userInfo._id));
        }
        else{
            setName(user.name);
            setEmail(user.email);
        }
        
    }, [dispatch, userInfo._id,user]);
  
const submitHandler =(e) =>{
    e.preventDefault();
    if(password !== confirmPassword){
        alert('Password and Confirm Password are not matched');
    }
    else{
        dispatch(updateUserProfile({userId: user._id, name, email, password}));
    }
}
    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {loading ? <LoadingBox></LoadingBox>               //it shows message when update profile page opens/loading/error,it shows message when user put their updated data
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                        :
                        <div className="update-container">
                            {loadingUpdate && <LoadingBox></LoadingBox>}           
                            {errorUpdate && (
                                <MessageBox variant="danger">{errorUpdate}</MessageBox>
                            )}
                            {successUpdate && ( 
                            <MessageBox variant="success">
                                Profile Updated Successfully</MessageBox>)}
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input type="name"
                                    id="name"
                                    className="input"
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    id="email"
                                    className="input"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    id="password"
                                    className="input"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}  />
                            </div>

                            <div className="field">
                                <label htmlFor="confirmPassword" className="cpwd">Confirm Password</label>
                                <input type="password"
                                    id="confirmPassword"
                                    className="input"
                                    placeholder="Confirm Password"
                                    onChange={e => setConfirmPassword(e.target.value)}  />
                            </div>
                    <div className="field"><button type="submit" className="btn-update">Update Profile</button>
                    </div>
                        </div>}
            </form>
        </>
    )
};

export default ProfileScreen;