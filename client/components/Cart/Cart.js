import React from 'react'
import {connect} from 'react-redux'
import {fetchCartOrders} from '../../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    //get OrderLists with cartID with thunk
    const cartId = 1
    this.props.getOrders(cartId)
  }

  render() {
    console.log(this.props.cartOrderLists)
    return (
      <div>
        <h1>Your Cart</h1>
        <div id="orderLists">
          {this.props.cartOrderLists.map(order => {
            return (
              <div key={order.id}>
                <div>{order.quantity}</div>
              </div>
            )
          })}
        </div>
        <div>Subtotal:</div>
        <div>Checkout</div>
        <div>Continue Shopping</div>
      </div>
    )
  }
}

const mapState = state => ({
  cartOrderLists: state.cart
})

const mapDispatch = dispatch => ({
  getOrders: id => dispatch(fetchCartOrders(id))
})

export default connect(mapState, mapDispatch)(Cart)
