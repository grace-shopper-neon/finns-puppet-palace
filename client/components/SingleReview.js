import React from 'react'
import {Link} from 'react-router-dom'

export default function SingleReview(props) {
  const review = props.review
  const stars = []

  for (let i = 0; i < props.review.rating; i++) {
    stars.push(
      <i className="fas fa-star fa-spin" style={{color: '#fcdb03'}} key={i}></i>
    )
  }

  for (let i = 0; i < 5 - props.review.rating; i++) {
    stars.push(
      <i className="fa fa-star-o" style={{color: '#fcdb03'}} key={i}></i>
    )
  }

  return (
    <div className="singleReview" key={review.id}>
      <br></br>
      <Link to={`/users/${review.user.id}`}>{review.user.fullName}</Link>
      <h4>Rating: {review.rating}</h4>
      {stars}
      <p>{review.description}</p>
      productId:{review.productId}
    </div>
  )
}
