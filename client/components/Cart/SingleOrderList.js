import React from 'react'
import {Link} from 'react-router-dom'
import priceConv from '../../utility/priceConversion'

export default class SingleOrderList extends React.Component {
  render() {
    const order = this.props.order
    const product = this.props.order.product
    // const imageUrl =
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/256px-Creative-Tail-Animal-dog.svg.png'

    return (
      <div id="cartOrderList" className="list-group-item">
        <div>
          <p id="orderProductName">{product.name}</p>
          <img
            id="cartImage"
            className="img-thumbnail"
            src={product.imageUrl}
          ></img>
        </div>
        <p id="orderQuantity">{order.quantity}</p>
        <p id="orderTotal">{priceConv(order.quantity * product.price)}</p>
      </div>
    )
  }
}
