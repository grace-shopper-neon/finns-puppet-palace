import axios from 'axios'

// ACTIONS
const GET_SINGLE_USER = 'GET_SINGLE_USER'

// ACTION CREATORS
const getSingleUser = singleUser => ({
  type: GET_SINGLE_USER,
  singleUser
})

// THUNKS
export const fetchSingleUser = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/users/${id}`)
      dispatch(getSingleUser(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function singleUserReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.singleUser
    default:
      return state
  }
}
