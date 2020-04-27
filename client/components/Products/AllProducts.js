import React from 'react'
import {fetchProducts} from '../../store/products'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <Container fluid="md">
        <Row className="show-grid">
          {this.props.products.map(product => (
            <Col md={3} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
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
