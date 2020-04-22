import React from 'react'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(Number(this.props.match.params.id))
  }

  render() {
    const name = this.props.name
    const imageUrl = this.props.imageUrl
    const description = this.props.description
    const price = this.props.price

    return (
      <div>
        <h1 className="productName">{name}</h1>
        <h2> {price} </h2>
        <img src={imageUrl} className="productImage" />
        <div className="productDescription">{description}</div>
        <button type="button" className="btn">
          Add To Cart
        </button>
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
