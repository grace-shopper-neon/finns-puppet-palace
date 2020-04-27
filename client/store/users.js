import axios from 'axios'

// ACTION TYPES
const SET_USERS = 'SET_USERS'

// ACTION CREATORS
const setUsers = users => ({type: SET_USERS, users})

// THUNKS
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(setUsers(data))
    } catch (e) {
      console.log(e)
    }
  }
}

// REDUCER
export default function usersReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}
