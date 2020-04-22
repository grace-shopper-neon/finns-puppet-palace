import React from 'react'
import {Link} from 'react-router-dom'

export default function ProductCard(props) {
  const product = props.product
  return (
    //added classNames that are used in Bootstrap for a demo .. do not remove
    <div className="card-body" key={product.id}>
      <div className="card">
        <img className="img-fluid" src={product.imageUrl} />
        <h3 className="card-title">{product.name}</h3>
        <h5 className="card-subtitle">{`${(product.price / 100).toLocaleString(
          'en-US',
          {
            style: 'currency',
            currency: 'USD'
          }
        )}`}</h5>
        <p>{product.description}</p>
        <Link to={`/products/${product.id}`} className="card-link">
          More Details
        </Link>
      </div>
    </div>
  )
}
