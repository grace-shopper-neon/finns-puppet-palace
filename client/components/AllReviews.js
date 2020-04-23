import React from 'react'
import {connect} from 'react-redux'
import {fetchReviews} from '../store/allReviews'
import {Link} from 'react-router-dom'

class AllReviews extends React.Component {
  componentDidMount() {
    this.props.getReviews(1)
  }

  render() {
    return (
      <div className="allReviews">
        {this.props.reviews.map(review => (
          <div className="singleReview" key={review.id}>
            <br></br>
            <Link to={`/users/${review.user.id}`}>{review.user.fullName}</Link>
            <h4>Rating: {review.rating}</h4>
            <p>{review.description}</p>
            rid:{review.productId}
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    reviews: state.reviews,
    productId: state.productId
  }
}

const mapDispatch = dispatch => {
  return {
    getReviews: productId => dispatch(fetchReviews(productId))
  }
}

export default connect(mapState, mapDispatch)(AllReviews)
