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
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="well well-sm">
                <div className="row">
                  <div className="col-xs-12 col-md-6 text-center">
                    <h1 className="rating-num">{averageRating}</h1>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                    <div>
                      <span className="glyphicon glyphicon-user"></span>#
                      reviews: {reviews.length}
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <div className="row rating-desc">
                      <div className="col-xs-3 col-md-3 text-right">
                        <span className="glyphicon glyphicon-star"></span>5
                      </div>
                      <div className="col-xs-8 col-md-9">
                        <div className="progress progress-striped">
                          <div
                            className="progress-bar progress-bar-success"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width: `${20}%`}}
                          >
                            <span className="sr-only">80%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-3 col-md-3 text-right">
                        <span className="glyphicon glyphicon-star"></span>4
                      </div>
                      <div className="col-xs-8 col-md-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-success"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width: '60%'}}
                          >
                            <span className="sr-only">60%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-3 col-md-3 text-right">
                        <span className="glyphicon glyphicon-star"></span>3
                      </div>
                      <div className="col-xs-8 col-md-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-info"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width: '40%'}}
                          >
                            <span className="sr-only">40%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-3 col-md-3 text-right">
                        <span className="glyphicon glyphicon-star"></span>2
                      </div>
                      <div className="col-xs-8 col-md-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-warning"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width: '20%'}}
                          >
                            <span className="sr-only">20%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-3 col-md-3 text-right">
                        <span className="glyphicon glyphicon-star"></span>1
                      </div>
                      <div className="col-xs-8 col-md-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-danger"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width: '15%'}}
                          >
                            <span className="sr-only">15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="averageRating">
          <h4> AVERAGE RATING: {averageRating} </h4>
          {averageStars}
        </div>
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
