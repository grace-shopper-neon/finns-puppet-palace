import Axios from 'axios'
const CREATE_ORDER_HISTORY = 'CREATE_ORDER_HISTORY'
const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY'

export const createOrderHistory = order => ({
  type: CREATE_ORDER_HISTORY,
  order
})

export const setOrderHistory = orders => ({
  type: SET_ORDER_HISTORY,
  orders
})

export const postOrder = () => {
  return async dispatch => {
    try {
      const {data} = await Axios.post(`/api/orders/`)
      dispatch(createOrderHistory(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchOrders = userId => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(`/api/orders/${userId}`)
      dispatch(setOrderHistory(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = []

export default function orderHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER_HISTORY:
      if (action.order) {
        return action.order
      }
      return state
    default:
      return state
  }
}
