import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../../store/singleProduct'

export class SingleOrderList extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.productId)
  }
  render() {
    return (
      <div>
        <div>{this.props.product.name}</div>
        <div>{this.props.quantity}</div>
      </div>
    )
  }
}

// eslint-disable-next-line no-unused-vars
const mapState = (state, ownProps) => ({
  product: state.singleProduct
})

const mapDispatch = dispatch => ({
  getSingleProduct: id => dispatch(fetchOneProduct(id))
})

export default connect(mapState, mapDispatch)(SingleOrderList)
