import React from 'react'
import {connect} from 'react-redux'
// import {fetchSingleUser} from '../store/singleUser'

class SingleUser extends React.Component {
  // componentDidMount() {
  //   this.props.getSingleUser(Number(this.props.match.params.userId))
  // }

  render() {
    const {email, fullName} = this.props.user

    return (
      <div className="singleUser">
        <h1 className="fullName">User: {fullName}</h1>
        <h2 className="email">User Email: {email}</h2>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  console.log(ownProps.overrides)
  if (ownProps.overrides) {
    return {
      user: ownProps.overrides
    }
  }
  return {
    user: state.singleUser
  }
}

// const mapDispatch = dispatch => {
//   return {
//     getSingleUser: id => dispatch(fetchSingleUser(id))
//   }
// }

export default connect(mapState)(SingleUser)
