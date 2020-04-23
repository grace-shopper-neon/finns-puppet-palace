import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchOneReview} from '../store/singleReview'

const dummy = {
  id: 2,
  rating: 2,
  description:
    'Consequuntur cum occaecati magnam quia aut. Facere neque necessitatibus eius quo eius debitis. Quae est commodi accusantium tenetur impedit doloribus natus et praesentium.',
  createdAt: '2020-04-22T23:16:56.635Z',
  updatedAt: '2020-04-22T23:16:56.635Z',
  userId: 9,
  productId: 1,
  user: {
    id: 9,
    fullName: 'Juvenal Leannon',
    email: 'Leila6@hotmail.com',
    isAdmin: false,
    googleId: null,
    createdAt: '2020-04-22T23:16:56.554Z',
    updatedAt: '2020-04-22T23:16:56.554Z'
  }
}
class SingleReview extends React.Component {
  componentDidMount() {
    // this.props.getSingleReview(Number(this.props.match.params.id))
    this.props.getSingleReview(1)
    console.log(this.props, 'asdf')
  }

  render() {
    // const singleReview = this.props.
    // console.log(this.props.getSingleReview(2))
    const singleReview = this.props.singleReview
    console.log(this.props)
    // const title = singleReview.title
    // const body = singleReview.body
    // const rating = singleReview.rating
    // const user = singleReview.user

    return (
      <div className="singleReview">
        {/* <h3>{title}</h3> */}
        <br></br>
        <Link to={`/users/${dummy.user.id}`}>{dummy.user.fullName}</Link>
        <h4>Rating: {dummy.rating}</h4>
        <p>{dummy.description}</p>
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
