import Axios from 'axios'
const CREATE_ORDER_HISTORY = 'CREATE_ORDER_HISTORY'

export const createOrderHistory = orders => ({
  type: CREATE_ORDER_HISTORY,
  orders
})

export const postOrder = orderLists => {
  return async dispatch => {
    try {
      const {data} = await Axios.post(`/api/orders/`, orderLists)
      dispatch(createOrderHistory(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = []

export default function cartOrderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER_HISTORY:
      return [...state, action.orders]
    default:
      return state
  }
}
