import React from 'react'

const SingleProduct = props => {
  const name = props.name
  const imageUrl = props.imageUrl
  const description = props.description
  const price = props.price

  return (
    <div>
      <h1 className="productName">{name}</h1>
      <h2> {price} </h2>
      <img src={imageUrl} className="productImage" />
      <div className="productDescription">{description}</div>
      <button type="button" className="btn">
        Add To Cart
      </button>
    </div>
  )
}

export default SingleProduct
