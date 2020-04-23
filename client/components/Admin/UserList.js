import React from 'react'
import {connect} from 'react-redux'

function UserList({user}) {
  const authorized = user.isAdmin
  return authorized ? (
    <div>
      <h1>This is for admins only</h1>
      <div>{user.fullName}</div>
    </div>
  ) : (
    <div>You are not authorized to view this page</div>
  )
}

const mapState = ({user}) => {
  return {
    user
  }
}

export default connect(mapState)(UserList)
