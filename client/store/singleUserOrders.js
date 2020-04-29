import Axios from 'axios'
const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY'

export const setOrderHistory = orders => ({
  type: SET_ORDER_HISTORY,
  orders
})

export const fetchOrders = userId => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(`/api/orders/${userId}`)
      console.log(data)
      dispatch(setOrderHistory(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = []

export default function singleUserOrdersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER_HISTORY:
      if (action.orders) {
        return action.orders
      }
      return state
    default:
      return state
  }
}
