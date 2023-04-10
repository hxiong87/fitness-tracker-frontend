import React, { useState } from "react";
import { createActivity } from "../api";
import { useNavigate } from 'react-router-dom'

export const CreateActivity = ({setActivity}) => {
    const [name, setName]= useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const storedToken = window.localStorage.getItem('token');
console.log('activities token', storedToken)

    const handleCreateActivity= async(e) => {
        e.preventDefault();
        console.log('CreAct this is hit')
      
        const storedToken = window.localStorage.getItem('token');
        console.log("create activity", name, description)
        const newActivity = await createActivity( name, description);
        console.log("reateActivities", newActivity)

        // setActivity(newActivity)
        setActivity(prevActivity => [newActivity,...prevActivity]);

        navigate(`/activities`)
        // window.location.reload()

    }


    return (
        <div className="activity-container">
             <h2>Create activity</h2>
           
        <form onSubmit={handleCreateActivity}>
        <div className="activity-form">
            <label>Enter  name </label>
        <br></br>
          
            <input
                placeholder="routine name"
                type='text'
                value={name}
                required
                onChange={(e) => setName(e.target.value)} />
    
            <br></br>
            <label>Enter description</label>
            <br></br>
            <input
                placeholder="enter description"
                value={description}
                type='text'
                required
                onChange={(e) => setDescription(e.target.value)} />
            <br></br>
           
            </div>
           
          
            <button type='submit'>Submit</button>
        </form>
       
    </div>
    )

}