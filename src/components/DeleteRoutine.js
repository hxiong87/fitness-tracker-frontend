import React from "react";
import { deleteRoutine } from '../api'
import { useNavigate } from "react-router-dom";

export const DeleteRoutine = (routineId) => {
    const navigate = useNavigate;
    const handleDelete = async (e) => {
        console.log('delete is getting hit')
        e.preventDefault();
       
        const token = window.localStorage.getItem('token')
        deleteRoutine(routineId)
      
        
        console.log('delete routineId', routineId)
        window.location.reload(); 
        //  navigate(`/my_routines`)
       
    }


    return (
        <div>
            <label>Delete Routine: </label>
            <button onClick={handleDelete}>Delete</button>
        </div>

    )

}