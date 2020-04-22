import React from 'react'
import {connect} from 'react-redux'

import {fetchOneProduct} from '../../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.getSingleProduct(Number(this.props.match.params.id))
  }

  render() {
    const singleProduct = this.props.singleProduct
    console.log(singleProduct)
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
        {/* <AllReviews key={this.props.id} /> */}
      </div>
    )
  }
}

const mapState = state => {
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
