import React from 'react'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../../store/singleProduct'
import {postOrderList} from '../../store/cart'
import AllReviews from '../AllReviews'
import priceConv from '../../utility/priceConversion'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getSingleProduct(Number(this.props.match.params.productId))
  }

  handleClick() {
    this.props.addToCart(this.props.singleProduct.id)
  }

  render() {
    const singleProduct = this.props.singleProduct
    const name = singleProduct.name || ' '
    const imageUrl = singleProduct.imageUrl || ' '
    const description = singleProduct.description || ' '
    const price = singleProduct.price || 0

    return (
      <div className="singleProduct">
        <h1 className="productName">{name}</h1>
        <img src={imageUrl} className="productImage" />
        <h2> {priceConv(price)} </h2>
        <div className="productDescription">{description}</div>
        <button type="button" className="btn" onClick={this.handleClick}>
          Add To Cart
        </button>
        <AllReviews />
      </div>
    )
  }
}

// eslint-disable-next-line no-unused-vars
const mapState = (state, ownProps) => {
  return {
    singleProduct: state.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchOneProduct(id)),
    addToCart: id => dispatch(postOrderList(id))
  }
}
export default connect(mapState, mapDispatch)(SingleProduct)
