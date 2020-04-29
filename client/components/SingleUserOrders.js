import React from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/singleUserOrders'
import priceConv from '../utility/priceConversion'

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
                <li key={order.id}>
                  {`${date.getMonth() +
                    1}/${date.getDay()}/${date.getFullYear()}`}{' '}
                  <ul>
                    {' '}
                    {order['order-lists'].map(orderList => (
                      <div key={orderList.id}>
                        <li>Product: {orderList.product.name}</li>
                        <ul>
                          <li>Quantity: {orderList.quantity}</li>
                          <li>
                            Price Per Unit: {priceConv(orderList.product.price)}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
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
