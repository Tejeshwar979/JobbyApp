import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', isWrong: false}
  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = jwtToken => {
    Cookies.set('JwtToken', jwtToken, {expires: 30})
    const {history} = this.props
    return history.replace('/Home')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'

    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    const jwtToken = data.jwt_token

    console.log(jwtToken)

    console.log(data)

    if (response.ok === true) {
      this.setState({isWrong: false})
      this.onSuccess(jwtToken)
    } else {
      this.setState({isWrong: true})
    }
  }

  render() {
    const {isWrong} = this.state
    return (
      <>
        <div className="Login-form-external-bg">
          <div className="login-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
            <form onSubmit={this.submitForm}>
              <p>USERNAME</p>
              <input
                className="input-style"
                onChange={this.changeUsername}
                placeholder="name"
                type="text"
              />
              <p>PASSWORD</p>
              <input
                className="input-style"
                onChange={this.changePassword}
                placeholder="password"
                type="password"
              />
              <div>
                <button className="button-style " type="submit">
                  Submit
                </button>
              </div>
              {isWrong && <p>Username Password is Incorrect</p>}
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login
