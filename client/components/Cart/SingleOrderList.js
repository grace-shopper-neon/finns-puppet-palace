import React from 'react'
import {Link} from 'react-router-dom'

export default class SingleOrderList extends React.Component {
  render() {
    const order = this.props.order
    const product = this.props.order.product

    return (
      <div>
        <div>{product.name}</div>
        <div>{order.quantity}</div>
      </div>
    )
  }
}
