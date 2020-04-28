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
              <a className="nav-link" href="#">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link to="/signup">
                  <a className="nav-link" href="#">
                    Sign Up
                  </a>
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li className="nav-item">
                <Link to="/login">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                {/* The navbar will show these links after you log in */}
                <Link to="/home">
                  <a href="#" className="nav-link">
                    Settings
                  </a>
                </Link>
                <Link to="/">
                  <a href="#" className="nav-link" onClick={handleClick}>
                    Logout
                  </a>
                </Link>
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
