import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleUser} from '../store/singleUser'

class SingleUser extends React.Component {
  componentDidMount() {
    this.props.getSingleUser(Number(this.props.match.params.userId))
  }

  render() {
    console.log('This is SingleUser data:', this.props)
    console.log('This is the email', this.props.email)
    const singleUser = this.props.singleUser
    const isAdmin = this.props.isAdmin

    return (
      <div className="singleUser">
        <h1 className="fullName">User: {singleUser.fullName}</h1>
        <h2 className="email">User Email: {singleUser.email}</h2>
        <div className="adminCheck">
          {' '}
          Admin Status: {isAdmin ? 'Admin' : 'Normal User'}
        </div>
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
