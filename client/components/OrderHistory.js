import React from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orderHistory'

class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.getOrders(this.props.userId)
  }

  render() {
    return <div></div>
  }
}

const mapState = (state, ownProps) => ({
  orders: state.orders
})

const mapDispatch = dispatch => {
  return {
    getOrders: id => dispatch(fetchOrders(id))
  }
}

export default connect(mapState, mapDispatch)(OrderHistory)
