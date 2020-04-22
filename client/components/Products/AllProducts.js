import React from 'react'
import {fetchProducts} from '../../store/productsReducer'
import {connect} from 'react-redux'

export class AllProducts extends React.Component {
  render() {
    return (
      <div>
        <h1>Products</h1>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
