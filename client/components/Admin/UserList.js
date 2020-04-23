import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

function UserList({user}) {
  const authorized = user.isAdmin
  return authorized ? (
    <div>
      <h1>This is for admins only</h1>
      <div>{user.fullName}</div>
    </div>
  ) : (
    <Redirect to="/home" />
  )
}

const mapState = ({user}) => {
  return {
    user
  }
}

export default connect(mapState)(UserList)
