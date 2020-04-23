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

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/256px-Creative-Tail-Animal-dog.svg.png'

// THUNKS
export const fetchOneProduct = id => async dispatch => {
  const {data} = await axios.get(`/api/products/${id}`)
  // const data = {
  //   id: 1,
  //   name: 'Dragon',
  //   description: 'get three dragons for the price of one!',
  //   imageUrl: imageUrl,
  //   price: 1000
  // }
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
