import React from 'react'
import SingleReview from './SingleReview'
import {connect} from 'react-redux'
import {fetchReviews} from '../store/allReviews'

class AllReviews extends React.Component {
  componentDidMount() {
    this.props.getReviews()
  }

  render() {
    console.log(this.props.reviews)
    return (
      <div className="allReviews">
        {this.props.reviews.map(review => (
          <SingleReview key={review.id} review={review} />
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatch = dispatch => {
  return {
    getReviews: () => dispatch(fetchReviews())
  }
}

export default connect(mapState, mapDispatch)(AllReviews)
