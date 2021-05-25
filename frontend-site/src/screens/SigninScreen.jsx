import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userAction";
import { useEffect } from "react";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

const Signin =(props) =>{
    const dispatch=useDispatch();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const redirect=props.location.search ?
    props.location.search.split('=')[1] :
    "/";
    const userSignin= useSelector(state => state.userSignin);   
    const {userInfo,loading,error } =userSignin;
    
   
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(signin(email,password));       //userAction
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[userInfo,props.history,redirect]);

    return ( 
        <>
           
            <div className="login-container">
                <h2>Sign in</h2>   
                {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}            
                <form onSubmit={submitHandler} className="sform">
               
                    <label htmlFor="email">E-mail</label>
                    <input type="email" 
                    id="email"                    
                    required 
                    onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    id="password"                     
                    required 
                    onChange={e => setPassword(e.target.value)} />
                    
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                        <label class="form-check-label" for="exampleCheck1">
                           By continuing, you agree to amontron's Conditions of Use and Privacy Notice.
                                
                            </label>
                    </div>
                    <button type="submit" className="btn-login">Sign in</button>
                    
                    <p>New to <i>@monTron?</i></p>
                </form>

                <Link to="/register"><button type="submit" className="btn-reg">Create New Account</button>
                 </Link>
            </div>

        </>
    )
}

export default Signin;