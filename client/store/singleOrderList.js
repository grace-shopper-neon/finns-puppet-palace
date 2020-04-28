import axios from 'axios'

// ACTION TYPES
const UPDATE_ORDER_LIST = 'UPDATE_ORDER_LIST'

// ACTION CREATORS
const updateOrderList = orderList => {
  return {
    type: UPDATE_ORDER_LIST,
    orderList
  }
}

// THUNKS
export const putOrderListQuantity = (id, quantity) => async dispatch => {
  const {data} = await axios.put(`/api/orderLists/${id}`, {quantity})
  dispatch(updateOrderList(data))
}

// REDUCER
export default function singleOrderListReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_ORDER_LIST:
      if (action.orderList) {
        return action.orderList
      } else {
        return {}
      }
    default:
      return state
  }
}
