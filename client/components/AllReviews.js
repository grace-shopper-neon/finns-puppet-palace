import React from 'react'
import {connect} from 'react-redux'
import {fetchProductReviews} from '../store/allReviews'
import SingleReview from './SingleReview'
import {withRouter} from 'react-router-dom'

class AllReviews extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.productId
    this.props.getReviews(id)
  }

  render() {
    return (
      <div className="allReviews ">
        {this.props.reviews.map(review => {
          return <SingleReview key={review.id} review={review} />
        })}
      </div>
    )
  }
}

// eslint-disable-next-line no-unused-vars
const mapState = (state, ownProps) => {
  return {
    reviews: state.reviews,
    singleProduct: state.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    getReviews: productId => dispatch(fetchProductReviews(productId))
  }
}

export default connect(mapState, mapDispatch)(withRouter(AllReviews))

// export default withRouter(AllReviews)
