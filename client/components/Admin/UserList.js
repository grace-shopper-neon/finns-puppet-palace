import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchUsers} from '../../store/users'

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const {user, users} = this.props
    const authorized = user.isAdmin
    return (
      <div className="container">
        {authorized ? (
          <div>
            <Link to="/admin">Admin Home</Link>
            <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {users
                  ? users.map((u, i) => (
                      <SingleUser num={i} key={u.id} user={u} />
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        ) : (
          <div>You do not have access to this page</div>
        )}
      </div>
    )
  }
}

function SingleUser({user, num}) {
  return (
    <tr>
      <th scope="row">{num}</th>
      <td>
        <Link to={`/users/${user.id}`}>{user.fullName}</Link>
      </td>
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
