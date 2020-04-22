import React from 'react'
import {fetchProducts} from '../../store/products'
import {connect} from 'react-redux'

export class AllProducts extends React.Component {
  componentDidMount() {
    console.log(this.props.getProducts)
    this.props.getProducts()
  }

  render() {
    if (!this.props.products) {
      return (
        <div>
          <h1>Products</h1>
        </div>
      )
    }
    return (
      <div>
        <h1>Products</h1>
        <div>
          {this.props.products.map(product => {
            return (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.imageUrl} />
                <h4>{product.price}</h4>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
