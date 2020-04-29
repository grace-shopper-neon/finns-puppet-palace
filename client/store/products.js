import Axios from 'axios'
// import queryString from 'query-string'

// ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

// ACTION CREATORS
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

const addProduct = product => ({type: ADD_PRODUCT, product})

// THUNKS
export const fetchProducts = () => {
  return async dispatch => {
    try {
      // const {data} = await Axios.get(`/api/products/${query}`)
      console.log('inside thunk')
      const {data} = await Axios.get(`/api/products/`)
      dispatch(setProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const postProduct = product => {
  return async dispatch => {
    try {
      const {data} = await Axios.post('/api/products', product)
      dispatch(addProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}

// REDUCER
const initialState = []

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    case ADD_PRODUCT: {
      return [...state, action.product]
    }
    default:
      return state
  }
}
