import React from 'react'
import {fetchProducts} from '../../store/products'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import {Row, Col, Grid} from 'react-bootstrap'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        {/* <div className="card-deck"> */}
        {this.props.products.map((product, index) =>
          !((index + 1) % 4) || index === 0 ? (
            <div className="row">
              {' '}
              <div className="col-md-4 cols-sm-6 col-xs-12">
                <ProductCard key={product.id} product={product} />
              </div>
            </div>
          ) : (
            <div className="col-md-4 cols-sm-6 col-xs-12">
              <ProductCard key={product.id} product={product} />
            </div>
          )
        )}
        {/* </div> */}
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
