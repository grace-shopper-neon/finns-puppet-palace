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
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className="">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/signup">
                  <a className="nav-link" href="#">
                    Sign Up
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        )}
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
