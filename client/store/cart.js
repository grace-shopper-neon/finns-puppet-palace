import Axios from 'axios'
const SET_CART_ORDER_LISTS = 'SET_CART_ORDER_LISTS'
const ADD_ORDER_LIST = 'ADD_ORDER_LIST'

export const setCartOrders = orderLists => ({
  type: SET_CART_ORDER_LISTS,
  orderLists
})

export const addOrderList = orderList => ({
  type: ADD_ORDER_LIST,
  orderList
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

export const postOrderList = productId => {
  return async dispatch => {
    try {
      const {data} = await Axios.post(`/api/orderLists/`, {productId})
      dispatch(addOrderList(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const putOrderListQuantity = (id, quantity) => async dispatch => {
  try {
    await Axios.put(`/api/orderLists/${id}`, {quantity})
    const {data} = await Axios.get(`/api/orderLists/`)
    dispatch(setCartOrders(data))
  } catch (err) {
    console.error(err)
  }
}

export const checkoutCart = orderId => {
  return async dispatch => {
    try {
      await Axios.put(`/api/orderLists/`, {orderId})
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
    case ADD_ORDER_LIST: {
      return [...state, action.orderList]
    }
    default:
      return state
  }
}
