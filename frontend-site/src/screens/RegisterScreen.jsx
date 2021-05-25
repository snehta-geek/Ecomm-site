import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { register } from "../actions/userAction";

const RegisterScreen = (props) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const {userInfo,loading,error} = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

    return (
        <>
            {/* <h1 className="ecom-brand">Amazon.in</h1> */}
            <div className="register-container">
                <h2>Create Account</h2>
                <form onSubmit={submitHandler} className="back">
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}

                    <label htmlFor="name">Name</label>
                    <input type="name"
                        id="name"
                        required
                        onChange={e => setName(e.target.value)} />

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

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password"
                        id="confirmPassword"
                        required
                        onChange={e => setConfirmPassword(e.target.value)} />


                    <button type="submit" className="btn-login">Create Account</button>

                    <h6>Already have an account? <Link to={`/signin?redirect=${redirect}`}>
                         Sign in</Link>
                    </h6>
                </form>


            </div>

        </>
    )
}

export default RegisterScreen;