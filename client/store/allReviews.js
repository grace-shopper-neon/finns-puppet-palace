import axios from 'axios'

// ACTION TYPES
const GET_PRODUCT_REVIEWS = 'GET_PRODUCT_REVIEWS'

// ACTION CREATORS
const setReviews = reviews => {
  return {
    type: GET_PRODUCT_REVIEWS,
    reviews
  }
}

// THUNKS
export const fetchProductReviews = id => {
  return async function(dispatch) {
    const {data} = await axios.get(`/api/reviews/product/${id}`)
    dispatch(setReviews(data))
  }
}

// REDUCER
export default function allReviewsReducer(state = [], action) {
  switch (action.type) {
    case GET_PRODUCT_REVIEWS:
      return action.reviews
    default:
      return state
  }
}
