import React from 'react'
import {Link} from 'react-router-dom'

export default function SingleOrderList(props) {
  const orderList = props.orderList
  return (
    //added classNames that are used in Bootstrap for a demo .. do not remove
    <div className="card-body" key={orderList.id}>
      <div className="card">
        <img className="img-fluid" src={orderList.imageUrl} />
        <h3 className="card-title">{orderList.name}</h3>
        <h5 className="card-subtitle">{`${(
          orderList.price / 100
        ).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}`}</h5>
        <p>{orderList.description}</p>
        <Link to={`/products/${product.id}`} className="card-link">
          More Details
        </Link>
      </div>
    </div>
  )
}
