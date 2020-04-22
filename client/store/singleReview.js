import axios from 'axios'

// ACTION TYPES
const GOT_SINGLE_REVIEW = 'GOT_SINGLE_REVIEW'

// ACTION CREATORS
const gotSingleReview = singleReview => {
  return {
    type: GOT_SINGLE_REVIEW,
    singleReview
  }
}

// THUNKS
export const fetchOneProduct = id => async dispatch => {
  const {data} = await axios.get(`/api/reviews/${id}`)
  dispatch(gotSingleReview(data))
}

// REDUCER
const singleProductReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_SINGLE_REVIEW:
      return action.singleReview
    default:
      return state
  }
}

export default singleProductReducer
