import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import priceConv from '../../utility/priceConversion'
// import queryString from 'query-string'
import {fetchProducts} from '../../store/products'

import ProductForm from './ProductForm'

class ProductList extends React.Component {
  // constructor() {
  //   super()
  //   this.handlePrevious = this.handlePrevious.bind(this)
  //   this.handleNext = this.handleNext.bind(this)
  // }

  componentDidMount() {
    // const query = this.props.location.search
    this.props.getProducts()
  }

  // handlePrevious() {
  //   const queries = queryString.parse(this.props.location.search)
  //   const pageNum = Number(queries.page)
  //   if (pageNum > 1) {
  //     this.props.history.push(
  //       `${this.props.location.pathname}?page=${pageNum - 1}`
  //     )
  //     this.props.getProducts(`?page=${pageNum - 1}`)
  //   }
  // }

  // handleNext() {
  //   const queries = queryString.parse(this.props.location.search)
  //   const pageNum = Number(queries.page)
  //   if (pageNum) {
  //     this.props.history.push(
  //       `${this.props.location.pathname}?page=${pageNum + 1}`
  //     )
  //     this.props.getProducts(`?page=${pageNum + 1}`)
  //   } else {
  //     this.props.history.push(`${this.props.location.pathname}?page=${2}`)
  //     this.props.getProducts(`?page=2`)
  //   }
  // }

  render() {
    const {user, products} = this.props
    const authorized = user.isAdmin
    return (
      <div className="container">
        {authorized ? (
          <div>
            <Link to="/admin">Admin Home</Link>
            <ProductForm />
            <div className="mt-5">
              <div className="row justify-content-between mb-3">
                <div>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    // onClick={this.handlePrevious}
                  >
                    Prev
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    // onClick={this.handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Animal</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    ? products.map((p, i) => (
                        <SingleProduct num={i + 1} key={p.id} product={p} />
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>You do not have access to this page</div>
        )}
      </div>
    )
  }
}

function SingleProduct({product, num}) {
  return (
    <tr>
      <th scope="row">{num}</th>
      <td>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </td>
      <td>{product.animal}</td>
      <td>{product.color}</td>
      <td>{priceConv(product.price)}</td>
    </tr>
  )
}

const mapState = ({user, products}) => ({
  user,
  products
})

const mapDispatch = dispatch => ({
  getProducts: query => dispatch(fetchProducts(query))
})

export default connect(mapState, mapDispatch)(ProductList)
