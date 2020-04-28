import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => {
  let stylesTitle = {
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    fontFamily: '"Helvetica Neue", sans-serif',
    fontSize: '70px'
  }

  let stylesSlogan = {
    color: '#111',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '300',
    lineHeight: '32px',
    margin: '0 0 10px',
    textAlign: 'center'
  }

  return (
    <div>
      <div>
        <h1 style={stylesTitle}>Finn's Puppet Palace</h1>
        <h3 style={stylesSlogan}>
          'Exceptional puppets to tranform your hands'
        </h3>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link">
                <Link to="/">Home</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/cart"> Cart</Link>
              </div>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/signup">Sign Up</Link>
                </div>
              </li>
            )}
            {!isLoggedIn && (
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/login">Login</Link>
                </div>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/home">Settings</Link>
                </div>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item" onClick={handleClick}>
                <div className="nav-link">
                  <Link to="/">Logout</Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
