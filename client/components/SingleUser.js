import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchSingleUser} from '../store/singleUser'

class SingleUser extends React.Component {
  componentDidMount() {
    this.props.getSingleUser(Number(this.props.match.params.id))
  }

  render() {
    const fullName = this.props.fullName
    const email = this.props.email
    const isAdmin = this.props.isAdmin
    const reviews = this.props.reviews

    return (
      <div className="singleUser">
        <h1 className="fullName">{fullName}</h1>
        <h1 className="email">{email}</h1>
        <div className="adminCheck">{isAdmin ? 'Admin' : ''}</div>
        <h2>Your Reviews</h2>
        <h3 className="reviewList">
          {reviews.map(review => (
            <div key={review.id}>
              <Link to={`/reviews/${review.id}`}>
                <h5>
                  {review.title} {review.rating}
                </h5>
              </Link>
            </div>
          ))}
        </h3>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleUser: state.singleUser
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleUser: id => dispatch(fetchSingleUser(id))
  }
}

export default connect(mapState, mapDispatch)(SingleUser)
