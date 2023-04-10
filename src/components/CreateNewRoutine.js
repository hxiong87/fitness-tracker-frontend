import React, { useState } from "react";
import { useParams , useNavigate} from 'react-router-dom'
import { createRoutine, getRoutines } from '../api'


export const CreateNewRoutine = ({fetchRoutines }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const navigate = useNavigate();
    const [routines, setRoutines] = useState([]);
    // const {routineId} = useParams();
  

    async function fetchRoutines() {

        const results = await getRoutines()
        console.log("cn",results)
        setRoutines(results);
     
       
  
    }
   
    async function addRoutine() {
   
        const storedToken = window.localStorage.getItem('token');
        const newRoutine = await createRoutine(name, goal)
        console.log('CNroutines', newRoutine)
        setRoutines([newRoutine,...routines])
        fetchRoutines();
     
 

        navigate('/routines')
    }
   

    return (
    <div className="new-routine-form">
        <h4>Create New Routine</h4>
        <form onSubmit={(e) => {
          e.preventDefault();
            addRoutine();
            
        }}>
            <label>Enter routine name</label>
            <br></br>
            <input
                placeholder="routine name"
                value={name}
                type='text'
                onChange={(e) => setName(e.target.value)} />
            <br></br>
            <label>Enter goal </label>
            <br></br>
            <input
                placeholder="enter goal"
                value={goal}
                type='text'
                onChange={(e) => setGoal(e.target.value)} />
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )

}