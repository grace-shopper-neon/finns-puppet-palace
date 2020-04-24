import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

import {fetchUsers} from '../../store/users'

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const {user, users} = this.props
    const authorized = user.isAdmin
    return authorized ? (
      <div>
        <h1>This is for admins only</h1>
        <div>{user.fullName}</div>
        <div>
          {users ? users.map(u => <SingleUser key={u.id} user={u} />) : null}
        </div>
      </div>
    ) : (
      <Redirect to="/home" />
    )
  }
}

function SingleUser({user}) {
  return (
    <div>
      <div>{user.fullName}</div>
      <div>{user.email}</div>
    </div>
  )
}

const mapState = ({user, users}) => ({
  user,
  users
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(UserList)
