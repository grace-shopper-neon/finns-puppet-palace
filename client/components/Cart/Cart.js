import React from 'react'
import {connect} from 'react-redux'

export default class Cart extends React.Component {
  componentDidMount() {}

  render() {
    const cartId = 1
    return (
      <div>
        <h1>Your Cart</h1>
        <div id="orderLists">{/* <OrderList /> */}</div>
        <div>Subtotal:</div>
        <div>Checkout</div>
        <div>Continue Shopping</div>
      </div>
    )
  }
}
