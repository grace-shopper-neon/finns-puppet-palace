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
      <div className="container">
        <h1>This is for admins only</h1>
        <div>{user.fullName}</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users
              ? users.map((u, i) => <SingleUser num={i} key={u.id} user={u} />)
              : null}
          </tbody>
        </table>
      </div>
    ) : (
      <Redirect to="/home" />
    )
  }
}

function SingleUser({user, num}) {
  return (
    <tr>
      <th scope="row">{num}</th>
      <td>{user.fullName}</td>
      <td>{user.email}</td>
    </tr>
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
