import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import users from './users'
import singleUser from './singleUser'
import productsReducer from './products'
import singleProductReducer from './singleProduct'
import singleReviewReducer from './singleReview'
import allReviewsReducer from './allReviews'
import cart from './cart'

const reducer = combineReducers({
  user,
  users,
  singleUser,
  products: productsReducer,
  singleProduct: singleProductReducer,
  singleReview: singleReviewReducer,
  reviews: allReviewsReducer,
  cart: cart
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
