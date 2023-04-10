import React, { useState } from "react";
import { useParams , useNavigate} from 'react-router-dom'
import { addActivityToRoutine } from '../api'


export const AddActivityForm = () => {
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');
    const navigate = useNavigate();
    // const [routines, setRoutines] = useState([]);
    const {routineId} = useParams();
    const {activityId} = useParams();
  

   
    async function handleAddActivity() {
   

        const newActivity= await addActivityToRoutine({routineId,  count, duration, activityId})
        console.log('add act', newActivity)
    
     
 

  
    }
   

    return (

        <div>
            <form onSubmit={(e) => {
            e.preventDefault();
           handleAddActivity()
            }}>
                <lable>Activity:</lable>
                <select>
                <option value="1">Acvitity 1</option>
                <option value="2">Acvitity 2</option>
                <option value="3">Acvitity 3</option>
                </select>
                <br>
                </br>
                <label for="count-input">Count:</label>
                <input 
                    type="number"
                    onChange={(e) => setCount(e.target.value)}  />
                <label for="count-input">Duration:</label>
                <input 
                    type="number" 
                    onChange={(e) => setDuration(e.target.value)} />
                <br></br>
                <button type="submit">Add Avtivity</button>


               
            </form>
        </div>
      
        
    )

}