import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

import {withRouter, Link} from 'react-router-dom'

class Header extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('JwtToken')
    return history.replace('/')
  }
  render() {
    return (
      <>
        <nav className="nav-cont">
          <img
            className="content-style"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
          <div className="content-style">
            <Link className="cont-links" to="/Home">
              Home
            </Link>
            <Link className="cont-links" to="/Jobs">
              Jobs
            </Link>
          </div>
          <div className="content-style">
            <button className="logout-btn" onClick={this.onLogout}>
              Logout
            </button>
          </div>
        </nav>
      </>
    )
  }
}

// const Header = () => {}

export default withRouter(Header)
