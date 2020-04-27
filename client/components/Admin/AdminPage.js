import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function AdminPage(props) {
  const {user} = props
  const authorized = user.isAdmin
  return (
    <div className="container">
      {authorized ? (
        <div>
          <h2>{`${user.fullName}'s Admin Page`}</h2>
          <Link to="/admin/userlist">View Users</Link>
        </div>
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
