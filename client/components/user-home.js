import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, fullName, isAdmin} = props

  return (
    <div>
      <h3>Welcome, {fullName}</h3>
      <h3>Email: {email}</h3>
      <div className="adminCheck">{isAdmin ? 'Admin' : ''}</div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    fullName: state.user.fullName,
    isAdmin: state.user.isAdmin
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
