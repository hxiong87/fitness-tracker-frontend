import React from "react";
import { deleteRoutine } from '../api'
import { useNavigate } from "react-router-dom";

export const DeleteRoutine = (routineId) => {
    const navigate = useNavigate();
    const handleDelete = async () => {
        console.log('delete is getting hit')
        // e.preventDefault();
       
        const token = window.localStorage.getItem('token')
        deleteRoutine(routineId)
      
        
        console.log('delete routineId', routineId)
        // window.location.reload(); 
        alert('routine deleted')
         navigate(`/routines`)
       
    }


    return (
        <div>
            
        
            <label>Delete Routine: </label>
            <button onClick={handleDelete}>Delete</button>
        </div>

    )

}