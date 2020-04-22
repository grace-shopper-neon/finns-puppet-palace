import React from 'react'

export default function ProductCard(props) {
  const product = props.product
  return (
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
      </div>
    </div>
  )
}
