import React from "react";
import logoicon from '/Users/leeka/fitness-tracker-front-end/src/fitnesstrackerlogo.png'
import { Link } from "react-router-dom"
export const Navbar = ({isLoggedIn, logout}) => {

    // function logout() {
    //     window.localStorage.removeItem('fitness_tracker_JWT');
    //     window.location.assign("/");
    // }
    return (
       <div className="home-component">
        <header>
            <nav className="nav">
                <img src={logoicon} alt="web logo"/>

                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/routines">Routines</Link></li>
                    {isLoggedIn && <li><Link to="/my_routines">My Routines</Link></li>}
                    <li><Link to='/' onClick={() => logout()}>Logout</Link></li>
                    <br></br>
                  
                  <li className="login"><Link to="/login" >Login</Link></li>
                    <li className="login"><Link to="/register">Register</Link></li>
                   
                 
                    


                </ul>
             

            </nav>
        </header>
       </div>
    )

}




