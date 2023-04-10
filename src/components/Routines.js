import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";



export const Routines = ({isLoggedIn}) => {

    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        const fetchRoutines = async () => {
            const routines = await getRoutines();
            setRoutines(routines)
            console.log('routines', routines);
            // console.log('routines 2', routines.find(item => item.id === 2 ))
            // console.log('activities', routines[0].activities[0].name)
        } 
        fetchRoutines();
      
    },[])



    
    return (
 
    <div className="routines-container">
    <h1>Routines</h1>

   

         {routines.map((routine, id,) => {
            return (
            <div className="routine" key={id}>
   
                 <h4>ROUTINE:</h4><p > {routine.name}</p>
                 <p>Creator:{routine.creatorName}</p>
                 <p>Goal: {routine.goal}</p>


        {routine.activities.map((acitivity, id) => (
            <div className="activities" key={id}>

               <h4>ACTIVITY:</h4><p>{acitivity.name}</p>
               <p> Description: {acitivity.description}</p>
               <p>Duration: {acitivity.duration}</p>


            
            </div>
            
            ))}
  
          
         
          
       
    


        
       <hr></hr>
        
     
       </div>
      );
    })}
      
    </div>
    


    )
    
      


}