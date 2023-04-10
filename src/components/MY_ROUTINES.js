import React, { useState, useEffect } from "react";
import { getUserData, getUserRoutine } from "../api"
import { AddActivityForm } from "./AddActivityForm";
import { CreateNewRoutine} from "./CreateNewRoutine";
import { DeleteRoutine } from "./DeleteRoutine";
import { EditRoutine } from "./EditRoutine";
import { useParams } from "react-router-dom";

export const MY_ROUTINES = ({isLoggedIn, setIsLoggedIn}) => {
    const [info, setInfo] = useState('');
    const [myRoutines, setMyRoutines] = useState([]);
    // const [isLoggedIn, setIsLoggedIn] =useState(true);
    // const {activityId} = useParams();


    const getUserInfo = async () => {
       const storedToken = window.localStorage.getItem('token')
       const user = await getUserData(storedToken);
       console.log("my routines user", user)
       console.log('my routines token', storedToken)

       if(user){
        setInfo(user);
        setIsLoggedIn(true);
       }
    };

    const getMyRoutines = async () => {

        try {
          if (info && info.username) {
    
            const data = await getUserRoutine(info.username);
            if (data) {
              setMyRoutines(data);
              console.log('my routines getting hit')
              console.log("my routines", data)
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        getUserInfo();
      }, []);
    
      useEffect(() => {
        getMyRoutines();
      },[info]);

  

    return (
   
   

        <div>
   
      <h1>Welcome to your routines!</h1>
 
      <CreateNewRoutine myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
      <h4>User Routines:</h4>
      { myRoutines.map((routine, index) => {
            return (
              <div id="myroutine" key={`profile:${routine.id} ${index}`}>
                <p>Routine: {routine.name}</p>
                <p>Goal: {routine.goal}</p>
             
                <EditRoutine  routineId={routine.id} setMyRoutines={setMyRoutines}/>
                <br></br>
                <DeleteRoutine  routineId={routine.id} setMyRoutines={setMyRoutines}/>
                <br></br>
                <AddActivityForm routineId={routine.id} />
                <hr></hr>
              </div>
            );
          })
      }
      
       
    </div>
      
        
    )

}