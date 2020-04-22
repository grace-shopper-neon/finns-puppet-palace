import React from 'react'
import {fetchProducts} from '../../store/products'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'

export class AllProducts extends React.Component {
  componentDidMount() {
    console.log(this.props.getProducts)
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className="container mt-5">
          <div className="card-deck">
            {this.props.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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
