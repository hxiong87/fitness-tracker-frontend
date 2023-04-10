import React, { useState, useEffect } from "react";
import { getAllActivities, createActivity } from "../api";
import { CreateActivity } from "./CreateActivity";

import { useNavigate } from "react-router-dom";
const token = window.localStorage.getItem('token');
export const Activities = () => {
    const [activity, setActivity] = useState([]);
 
    // const [name , setName]= useState("");
    // const [description, setDescription] = useState("");
    // const navigate = useNavigate();
    // const storedToken = window.localStorage.getItem('token');
  

    const getActivities = async () => {
        const activity = await getAllActivities();
        setActivity(activity);
        console.log('activities result', activity)
    };

    useEffect(() => {
        getActivities();
      }, []);

     

    return (
        <div>
            <div>
            <CreateActivity  setActivity={setActivity}/>
            </div>
   
     
       <h1>Activities</h1>
       
             {activity.map((activity, id) => {
          return (
            <div className="activities" key={id}>
              <p id="activity-name">{activity.name}</p>
              <p id="activity-description">{activity.description}</p>
              <hr></hr>
            </div>
          );
        })}


        </div>
       
    )

}