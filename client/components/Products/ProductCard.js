import React from 'react'
import {Link} from 'react-router-dom'
import priceConv from '../../utility/priceConversion'
import {postOrderList} from '../../store/cart'
import {connect} from 'react-redux'

export class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addToCart(this.props.product.id)
  }

  render() {
    const product = this.props.product
    return (
      //added classNames that are used in Bootstrap for a demo .. do not remove
      <div className="card-body" key={product.id}>
        <div className="card">
          <div>
            <Link to={`/products/${product.id}`} className="card-link">
              <img className="card-img-top" src={product.imageUrl} />
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-subtitle mt-1">
              <b>{`${priceConv(product.price)}`}</b>
            </p>
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={this.handleClick}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addToCart: id => dispatch(postOrderList(id))
  }
}
export default connect(null, mapDispatch)(ProductCard)
