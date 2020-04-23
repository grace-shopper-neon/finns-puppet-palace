import axios from 'axios'

// ACTION TYPES
const GOT_SINGLE_PRODUCT = 'GOT_SINGLE_PRODUCT'

// ACTION CREATORS
const gotSingleProduct = singleProduct => {
  return {
    type: GOT_SINGLE_PRODUCT,
    singleProduct
  }
}

// THUNKS
export const fetchOneProduct = id => async dispatch => {
  // REVIEW: error handling
  const {data} = await axios.get(`/api/products/${id}`)
  dispatch(gotSingleProduct(data))
}

// REDUCER
const singleProductReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_SINGLE_PRODUCT:
      return action.singleProduct
    default:
      return state
  }
}

export default singleProductReducer
