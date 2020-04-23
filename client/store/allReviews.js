import axios from 'axios'

// ACTION TYPES
const SET_REVIEWS = 'SET_REVIEWS'

// ACTION CREATORS
const setReviews = reviews => {
  return {
    type: SET_REVIEWS,
    reviews
  }
}

// THUNKS
export const fetchReviews = id => {
  return async function(dispatch) {
    const {data} = await axios.get(`/api/reviews/product/${id}`)
    dispatch(setReviews(data))
  }
}

// REDUCER
export default function allReviewsReducer(state = [], action) {
  switch (action.type) {
    case SET_REVIEWS:
      return [...state, ...action.reviews]
    default:
      return state
  }
}
