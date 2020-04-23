import React from 'react'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(Number(this.props.match.params.productId))
  }

  render() {
    const singleProduct = this.props.singleProduct
    console.log(singleProduct)
    // REVIEW: consider what should be shown when the product hasn't loaded yet.
    // maybe: https://www.npmjs.com/package/react-spinners (there are many such packages available)
    const name = singleProduct.name || ' '
    const imageUrl = singleProduct.imageUrl || ' '
    const description = singleProduct.description || ' '
    const price = singleProduct.price || 0

    return (
      <div className="singleProduct">
        <h1 className="productName">{name}</h1>
        <img src={imageUrl} className="productImage" />
        <h2>
          {' '}
          {(price / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}{' '}
        </h2>
        <div className="productDescription">{description}</div>
        <button type="button" className="btn">
          Add To Cart
        </button>
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
    getSingleProduct: id => dispatch(fetchOneProduct(id))
  }
}
export default connect(mapState, mapDispatch)(SingleProduct)
