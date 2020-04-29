import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SingleUser from './SingleUser'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user} = props
  return (
    <div className="container">
      <h3>Welcome, {user.fullName}</h3>
      <SingleUser overrides={user} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
  fullName: PropTypes.string,
  isAdmin: PropTypes.bool
}
