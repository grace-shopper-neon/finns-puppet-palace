import React from 'react'
import {fetchProducts} from '../../store/products'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import queryString from 'query-string'
import Paginate from '../Paginate'

export class AllProducts extends React.Component {
  // TODO: Complete Pagination
  // constructor() {
  //   super()
  //   this.state = {
  //     currentPage: 1
  //   }
  //   this.paginate = this.paginate.bind(this)
  // }

  componentDidMount() {
    // const query = this.props.location.search
    this.props.getProducts()
  }

  // TODO: Complete Pagination

  // paginate(pageNumber) {
  //   this.setState({
  //     currentPage: pageNumber
  //   })
  //   console.log('inside paginate', this.state)
  // }

  render() {
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

          {/* IP Pagination  */}
          {/* <nav aria-label="Page navigation example">
            <Paginate
              currPage={this.state.currentPage}
              paginate={this.paginate}
            />
          </nav> */}
        </Container>
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({
  products: state.products
})

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
