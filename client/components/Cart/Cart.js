import React from 'react'
import {connect} from 'react-redux'
import {fetchCartOrders, checkoutCart} from '../../store/cart'
import {postOrder} from '../../store/orderHistory'
import SingleOrderList from './SingleOrderList'
import priceConv from '../../utility/priceConversion'
import {Link} from 'react-router-dom'

export class Cart extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    await this.props.getOrders()
  }

  async handleClick() {
    await this.props.createOrder()
    await this.props.processCart(this.props.order.id)
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
            {console.log('props in Cart.js', this.props)}
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
          <div>
            {/* Link to AllProducts page */}
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={this.handleClick}
            >
              Checkout
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block mt-3"
            >
              <Link to="/" style={{textDecoration: 'none', color: '#FFF'}}>
                Continue Shopping
              </Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  cartOrderLists: state.cart,
  order: state.order
})

const mapDispatch = dispatch => ({
  getOrders: () => dispatch(fetchCartOrders()),
  createOrder: () => dispatch(postOrder()),
  processCart: id => dispatch(checkoutCart(id))
})

export default connect(mapState, mapDispatch)(Cart)
