import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, UserList} from './components'
import AllProducts from './components/Products/AllProducts'
import SingleProduct from './components/Products/SingleProduct'
import SingleUser from './components/SingleUser'
import {me} from './store'
import Cart from './components/Cart/Cart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/products/:productId" component={SingleProduct} />
        <Route path="/users/:userId" component={SingleUser} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            <Route path="/home" component={UserHome} />
            <Route path="/admin" component={UserList} />
          </Switch>
        )}
        {/* Displays our All Products as a default home page*/}
        <Route component={AllProducts} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
