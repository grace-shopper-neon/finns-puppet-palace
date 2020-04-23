import Axios from 'axios'
const SET_CART_ORDER_LISTS = 'SET_CART_ORDER_LISTS'

export const setCartOrders = orderLists => ({
  type: SET_CART_ORDER_LISTS,
  orderLists
})

export const fetchCartOrders = cartId => {
  return dispatch => {
    try {
      // const {data} = await Axios.get(`/api/orderList/${cartId}`)
      const data = [
        {
          id: 1,
          quantity: 10,
          cartId: 1,
          productId: 1
        },
        {
          id: 2,
          quantity: 5,
          cartId: 1,
          productId: 2
        },
        {
          id: 2,
          quantity: 1,
          cartId: 1,
          productId: 3
        }
      ]
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
