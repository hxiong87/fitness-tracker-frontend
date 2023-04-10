import React, { useState } from "react";
import { registerUser } from "../api";
import { Link } from 'react-router-dom'

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const props = {username, password}

    const handleRegisterUser = async(e) => {
        e.preventDefault();

        const newUser = await registerUser(props);
        alert(newUser.message)

        setUsername("");
        setPassword("");

    }


    return (
   
        <form onSubmit={handleRegisterUser} className="registration-container"
        >
            <div className="registration-div">
                <h1>Welcome to Fitness Tracker</h1>
                <h2>Register Here!</h2>
                <label>Username:</label>
                <br></br>
                <input 
                 type="text"
                 placeholder="Username"
                 className="register-input"
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)} 
                />
                <br></br>
             
                <label>Password:</label>
                <br></br>
                <input
                 type="password"
                 placeholder="Password"
                 className="register-input"
                 minLength={8} required
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)} 
                />
                <br>
                </br>
                <button className="register-btn"type="submit">Register</button>
                <br>
                </br>
                <p><Link to="/login"> Log In Here! </Link> </p>

            </div>
        </form>
    )

}