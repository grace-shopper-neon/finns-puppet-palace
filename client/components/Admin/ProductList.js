import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ProductList extends React.Component {
  render() {
    const {user, products} = this.props
    const authorized = user.isAdmin
    return (
      <div className="container">
        {authorized ? (
          <div>
            <Link to="/admin">Admin Home</Link>
            <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Cost</th>
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
      <td>{product.cost}</td>
    </tr>
  )
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(ProductList)
