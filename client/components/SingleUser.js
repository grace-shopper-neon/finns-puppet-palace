import React from 'react'
import {connect} from 'react-redux'

class SingleUser extends React.Component {
  componentDidMount() {
    this.props.getSingleUser(Number(this.props.match.params.id))
  }

  render() {
    return <div />
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(mapState, mapDispatch)(SingleUser)
