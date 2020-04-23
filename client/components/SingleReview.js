import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchOneReview} from '../store/singleReview'

class SingleReview extends React.Component {
  componentDidMount() {
    this.props.getSingleReview(Number(this.props.match.params.id))
  }

  render() {
    // REVIEW: these props vs singleReview prop?
    const title = this.props.title
    const body = this.props.body
    const rating = this.props.rating
    const user = this.props.user

    return (
      <div className="singleReview">
        <h3>{title}</h3>
        <Link to={`/users/${user.id}`}>{user.fullName}</Link>
        <h4>{rating}</h4>
        <p>{body}</p>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleReview: state.singleReview
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleReview: id => dispatch(fetchOneReview(id))
  }
}

export default connect(mapState, mapDispatch)(SingleReview)
