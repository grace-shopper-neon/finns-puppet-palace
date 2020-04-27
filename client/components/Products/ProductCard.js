import React from 'react'
import {Link} from 'react-router-dom'
import priceConv from '../../utility/priceConversion'

export default function ProductCard(props) {
  const product = props.product
  return (
    //added classNames that are used in Bootstrap for a demo .. do not remove
    <div className="card-body" key={product.id}>
      <div className="card">
        <div>
          <Link to={`/products/${product.id}`} className="card-link">
            <img className="card-img-top" src={product.imageUrl} />
          </Link>
        </div>
        <h4 className="card-title mt-1">{product.name}</h4>
        <h6 className="card-subtitle mt-1">
          <b>{`${priceConv(product.price)}`}</b>
        </h6>
      </div>
    </div>
  )
}
