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
    const reviews = this.props.reviews

    const averageRating =
      reviews.reduce((accum, review) => {
        return review.rating + accum
      }, 0) / reviews.length

    const averageRounded = Math.round(averageRating)

    let averageStars = []

    for (let i = 0; i < averageRounded; i++) {
      averageStars.push(
        <i className="fas fa-star fa-lg" style={{color: '#fcdb03'}} key={i}></i>
      )
    }

    for (let i = 0; i < 5 - averageRounded; i++) {
      averageStars.push(
        <i
          className="fa fa-star-o fa-lg"
          style={{color: '#fcdb03'}}
          key={i + 5}
        ></i>
      )
    }

    return (
      <div className="allReviews">
        <br></br>
        <div className="averageRating">
          <h4> AVERAGE RATING: {averageRating} </h4>
          {averageStars}
        </div>
        <h2 className="text-center">Reviews of this product</h2>
        {reviews.map(review => {
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
