import React from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/singleUserOrders'

class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.getOrders(this.props.userId)
  }

  render() {
    return (
      <div>
        <h1>Order History</h1>
        {this.props.orders.length ? (
          <ul>
            {this.props.orders.map(order => {
              const date = new Date(order.createdAt)
              return (
                <li key={order.id}>{`${date.getMonth() +
                  1}/${date.getDay()}/${date.getFullYear()}`}</li>
              )
            })}
          </ul>
        ) : (
          <p>No Order History</p>
        )}
      </div>
    )
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
