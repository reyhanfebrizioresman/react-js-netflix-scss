import React from 'react'
import './Login.scss'
const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="signIn">Sign In</button>
                    <span>New to Netflix ? <b>Sign Up Now</b></span>
                    <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a
                    bot. <b>Learn more</b>.
                </small>
                </form>
            </div>
        </div>
    )
}

export default Login
