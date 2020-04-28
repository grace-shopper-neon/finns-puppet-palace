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

  let nav = {
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
        <div className="">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </div>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </div>
              </li>
            )}
            {!isLoggedIn && (
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/login" className="nav-link">
                    Log in
                  </Link>
                </div>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                {/* The navbar will show these links after you log in */}
                <div className="nav-link">
                  <Link to="/" className="nav-link">
                    Settings
                  </Link>
                </div>
                <div className="nav-link" onClick={handleClick}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
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
