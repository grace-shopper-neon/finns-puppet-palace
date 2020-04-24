import React from 'react'
import {connect} from 'react-redux'
import {fetchCartOrders} from '../../store/cart'
import SingleOrderList from './SingleOrderList'
import ProductCard from '../Products/ProductCard'
import priceConv from '../../utility/priceConversion'

export class Cart extends React.Component {
  async componentDidMount() {
    //REFACTOR: use CartId on session
    const cartId = 2
    await this.props.getOrders(cartId)
  }

  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <div id="cartOrderList" className="list-group-item">
          <div>
            <b>Product</b>
          </div>
          <p id="orderQuantity">
            <b>Quantity</b>
          </p>
          <p id="orderTotal">
            <b>Total Price</b>
          </p>
        </div>
        <div id="orderLists" className="list-group">
          {this.props.cartOrderLists.map(order => {
            return <SingleOrderList key={order.id} order={order} />
          })}
        </div>
        <div className="list-group-item border-top-0 subtotal">
          {/* Use a reduce function to iterate over all orders and get their total price */}

          <b>
            Subtotal:{' '}
            {priceConv(
              this.props.cartOrderLists
                .map(order => order.quantity * order.product.price)
                .reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )
            )}
          </b>
        </div>
        <div>
          {/* Link to AllProducts page */}
          Continue Shopping
        </div>
        <div>Checkout</div>
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
