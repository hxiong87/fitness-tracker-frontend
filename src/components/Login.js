import React, { useState } from "react";
import { loginUser } from "../api";
import { Link } from 'react-router-dom'

export const Login = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // console.log("login",username, password)

    const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(username,password);
    const token = result.token;
    console.log("login token", token)
    window.localStorage.setItem('token', token);
     window.location.assign("/my_routines")
    }

    return (
        <div className="login-container">
        
        <h1> Log In</h1>
      
        <form className="form"
           onSubmit={handleLogin}
        >
       <label>Username:</label>
       <br></br>
            <input
                type="text"
                placeholder="Username"
                className="form-input"
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <br></br>
            <label>Password:</label>
       <br></br>
            <input
                    type="password"
                    placeholder="Password"
                    className="form-input"
                    minLength={8} required 
                    value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
            />
           <br></br>
            <button className="submit-form" type="submit" >Submit</button>
            <div className="register-link">
                <p>Don't have an acount?<Link to="/register"> Register Here! </Link> <span className='link' >
               
                </span>
                </p>
            </div>
        </form>

    </div>
    )

}