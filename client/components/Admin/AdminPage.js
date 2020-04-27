import React from 'react'
import {connect} from 'react-redux'

function AdminPage(props) {
  const {user} = props
  const authorized = user.isAdmin
  return (
    <div className="container">
      {authorized ? (
        <h2>{`${user.fullName}'s Admin Page`}</h2>
      ) : (
        <div>You do not have access to this page</div>
      )}
    </div>
  )
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(AdminPage)
