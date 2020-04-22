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
        <div className="container mt-5">
          <div className="card-deck">
            {this.props.products.map(product => {
              return (
                <div className="card-body" key={product.id}>
                  <div className="card">
                    <img className="img-fluid" src={product.imageUrl} />
                    <h3 className="card-title">{product.name}</h3>
                    <h5 className="card-subtitle">{product.price}</h5>
                    <p>{product.description}</p>
                  </div>
                </div>
              )
            })}
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
