import React from 'react'
import {fetchProducts} from '../../store/products'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import queryString from 'query-string'

export class AllProducts extends React.Component {
  componentDidMount() {
    const query = this.props.location.search
    this.props.getProducts(query)
  }

  render() {
    const page = queryString.parse(this.props.location.search).page || 1
    return (
      <div>
        <Container fluid="md">
          <Row className="show-grid">
            {this.props.products.map(product => (
              <Col md={3} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li
                className={
                  Number(page) === 1 ? 'page-item disabled' : 'page-item'
                }
              >
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => {
  return {
    getProducts: query => dispatch(fetchProducts(query))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
