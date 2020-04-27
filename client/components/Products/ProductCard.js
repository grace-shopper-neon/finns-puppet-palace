import React from 'react'
import {Link} from 'react-router-dom'
import priceConv from '../../utility/priceConversion'

export default function ProductCard(props) {
  const product = props.product
  const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/256px-Creative-Tail-Animal-dog.svg.png'
  return (
    //added classNames that are used in Bootstrap for a demo .. do not remove
    <div className="card-body" key={product.id}>
      <div className="card">
        <div>
          <Link to={`/products/${product.id}`} className="card-link">
            <img className="card-img-top" src={product.imageUrl} />
          </Link>
        </div>
        <h4 className="card-title">{product.name}</h4>
        <h6 className="card-subtitle mt-1">{`${priceConv(product.price)}`}</h6>
      </div>
    </div>
  )
}
