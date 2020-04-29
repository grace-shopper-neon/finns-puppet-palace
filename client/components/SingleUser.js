import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser} from '../store/singleUser'
import {Link} from 'react-router-dom'

class SingleUser extends React.Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.getSingleUser(Number(this.props.match.params.userId))
    }
  }

  render() {
    const {userToView, currUser} = this.props
    if (!userToView) return <div>No user with id</div>

    // only users viewing their own page (from /home) or admins are authorized
    const authorized =
      Object.keys(currUser).length !== 0 &&
      (currUser.id === userToView.id || currUser.isAdmin)
    const {email, fullName} = userToView
    return authorized ? (
      <div className="singleUser">
        <h1 className="fullName">Name: {fullName}</h1>
        <h2 className="email">Email: {email}</h2>
        {currUser.isAdmin ? <Link to="/admin">Admin Page</Link> : null}
      </div>
    ) : (
      <div>You are not authorized to view this page</div>
    )
  }
}

const mapState = (state, ownProps) => {
  //  rendered on home page, so props are already supplied from user-home
  // - the user to view is whoever was passed as a prop
  if (ownProps.overrides) {
    return {
      userToView: ownProps.overrides,
      currUser: state.user
    }
  }
  //  rendered from /users/:id so no props were supplied
  // - the user to view must be fetched
  return {
    userToView: state.singleUser,
    currUser: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleUser: id => dispatch(fetchSingleUser(id))
  }
}

export default connect(mapState, mapDispatch)(SingleUser)
