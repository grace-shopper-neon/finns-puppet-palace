import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import productsReducer from './products'
import singleProductReducer from './singleProduct'
import singleReviewReducer from './singleReview'
import allReviewsReducer from './allReviews'

const reducer = combineReducers({
  user,
  products: productsReducer,
  singleProduct: singleProductReducer,
  singleReview: singleReviewReducer,
  reviews: allReviewsReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
