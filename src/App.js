
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { 
  Navbar,
  Home,
  Register,
  Login,
  Routines,
  Activities,
  CreateActivity,
  MY_ROUTINES
 } from './components'
import { useState, useEffect } from 'react';
import { getRoutines, getUserData } from './api';

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [routines, setRoutines] = useState("");
  const [isLoggedIn, setIsLoggedIn] =useState(true);

  function logout() {
    window.localStorage.removeItem('token');
    window.location.assign("/");

    setIsLoggedIn(false)
    setToken('');
    setUser('');

}

useEffect(() => {
  if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
  }
}, []);

async function fetchRoutines() {
  const routines = await getRoutines()
  setRoutines(routines.data)
  console.log('routine data', routines.data)
}

  async function getUser() {
    const storedToken = window.localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    return;
  }



  useEffect(() => {
    getUser();

}, [token])


  return (
 
    <div className="App">
      <div>
  
          <Navbar isLoggedIn={isLoggedIn} logout={logout} />
        
      </div>
   
      <div className='main'>
        <main>
          <Routes>
            
            <Route
              path='/'
              element={     <Home />}/>

            <Route 
              path='/register' 
              element={ <Register />}/>

            <Route
              path='/login'
              element={<Login />}/>
      

            <Route
              path='/routines'
              element={<Routines />}/>

            <Route
              path='/activities'
              element={<Activities />}/>

            <Route 
              path='/my_routines'
              element={<MY_ROUTINES  isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn} token={token}/>}/>

            
          
          </Routes>
        </main>
      </div>
      <footer></footer>
      
    </div>

  );
}

export default App;
