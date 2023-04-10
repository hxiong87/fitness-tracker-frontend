const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api/'

//Post /users/register
export const registerUser = async({username, password}) => {
    try {
        const response = await fetch(
          `${BASE_URL}/users/register`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            
              username: username,
              password: password,
            
          })
        });
        const result = await response.json();
        console.log("register user",result)
        console.log("token", result.token)
        localStorage.setItem('token', result.token)
        return result
      } catch (err) {
        console.error(err);
      }
}

// /user/login

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              password,
          })
        });
        const result = await response.json();
        // console.log("api login",result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// GET user/me

export const getUserData = async () => {
    try {
      const token = window.localStorage.getItem('token')
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      // console.log("api getUser",result);
      return result
    } catch (err) {
      console.error(err);
    }
  }


 // GET /users/:username/routines

 export const getUserRoutine = async (username) => {
  const token = window.localStorage.getItem('token')
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    // console.log("api get user routine",result);
    return result
  } catch (err) {
    console.error(err);
  }
}

// GET /routines

export const getRoutines = async () => {
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
  });
  
  const result = await response.json();
  // console.log("api get routines",result);
  return result
  } catch (err) {
  console.error(err);
  }
  }

  //POST /routines

 export const createRoutine = async (name, goal, ispublic) => {
  try {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: true
      })
    });
    const result = await response.json();
    console.log("api create routines", result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//DELETE /routines/:routineId

export const deleteRoutine = async ({routineId}) => {
  console.log('api delete routineID', routineId)
  const token = window.localStorage.getItem('token')
  // console.log('delete token', token)
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log("api delete routine result",result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//PATCH /routines/:routineId

export const updateRoutine= async ( {routineId, name , goal}) => {

  const token = window.localStorage.getItem('token')
  console.log('api patch parameters', routineId, name, goal)
  try {
    
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        goal 
       
   
      })
    });
    const result = await response.json();
    console.log("api routine patch",result);
    return result
  } catch (err) {
    console.error(err);
  }
}
  




  

//GET /activities
 export const getAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    // console.log("api getactvities", result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//POST /routines/:routineId/activities
 export const addActivityToRoutine = async ({routineID,  activityId, count, duration}) => {
  console.log('addRA parameters',routineID, activityId, count, duration )
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineID}/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activityId,
        count, 
        duration,
      })
    });
    const result = await response.json();
    console.log("api addRA",result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//POST /activities

export const createActivity = async ( name , description) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        description: description
      }) 
    });

    const result = await response.json();

    console.log("api create actvity",result);
    return result
  } catch (err) {
    console.error(err);
  }
}
   



