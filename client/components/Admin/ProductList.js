import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import priceConv from '../../utility/priceConversion'
import {fetchProducts} from '../../store/products'

import ProductForm from './ProductForm'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const {user, products} = this.props
    const authorized = user.isAdmin
    return (
      <div className="container">
        {authorized ? (
          <div>
            <Link to="/admin">Admin Home</Link>
            <ProductForm />
            <table className="table mt-5">
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
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(ProductList)
