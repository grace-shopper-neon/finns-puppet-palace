import Axios from 'axios'
const SET_CART_ORDER_LISTS = 'SET_CART_ORDER_LISTS'

export const setCartOrders = orderLists => ({
  type: SET_CART_ORDER_LISTS,
  orderLists
})

export const fetchCartOrders = () => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(`/api/orderLists/`)
      dispatch(setCartOrders(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = []

export default function cartOrderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_ORDER_LISTS:
      return action.orderLists
    default:
      return state
  }
}
