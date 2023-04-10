import React, { useState } from "react";
import { updateRoutine } from "../api";


export const EditRoutine = ({routineId}) => {
    // const [currentRoutine] = routines.filter(routine => routine.id === routineId)

    // const {name, goal} = currentRoutine

    const [newName, setNewName] = useState("");
    const [newGoal, setNewGoal] = useState("");
 

    async function handleEdit() {
        console.log('edited getting hit')
        const editedRoutine = {
            name: newName,
            goal: newGoal,
            routineId: routineId
      
        }
        await updateRoutine(editedRoutine)
        console.log("edit rou", editedRoutine)
        window.location.reload(); 
        
       
    }
    return (
       <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleEdit()
            
        }}>
            <lable>Update Routine: </lable>
<input
                type='text'
                placeholder={"edit name"}
                onChange={(e) => setNewName(e.target.value)} />
            <input
                type='text'
                placeholder={"edit goal"}
                onChange={(e) => setNewGoal(e.target.value)} />
            
            <button type='submit'>Submit</button>
        </form>
       </div>
    )

}