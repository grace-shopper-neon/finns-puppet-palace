import React from 'react'
import {Link} from 'react-router-dom'
import priceConv from '../../utility/priceConversion'
import {connect} from 'react-redux'
import {putOrderListQuantity} from '../../store/singleOrderList'

export class SingleOrderList extends React.Component {
  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.deleteOrder(this.props.order.id, this.props.order.quantity)
  }

  render() {
    const order = this.props.order
    const product = this.props.order.product
    console.log('single order list', this.props.singleOrderList)
    // const imageUrl =
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/256px-Creative-Tail-Animal-dog.svg.png'

    return (
      <div id="cartOrderList" className="list-group-item">
        <div>
          <Link
            to={`/products/${product.id}`}
            style={{textDecoration: 'none', color: 'black'}}
          >
            <p id="orderProductName">{product.name}</p>
          </Link>
          <Link to={`/products/${product.id}`}>
            <img
              id="cartImage"
              className="img-thumbnail"
              src={product.imageUrl}
            ></img>
          </Link>
        </div>
        <p id="orderQuantity">{order.quantity}</p>
        <p id="orderTotal">{priceConv(order.quantity * product.price)}</p>
        <svg
          onClick={this.handleClick}
          className="bi bi-trash deleteButton"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
          <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )
  }
}

const mapState = state => ({
  singleOrderLists: state.SingleOrderList,
  singleOrderList: state.singleOrderList
})

const mapDispatch = dispatch => ({
  deleteOrder: (id, quantity) => dispatch(putOrderListQuantity(id, quantity))
})

export default connect(mapState, mapDispatch)(SingleOrderList)
