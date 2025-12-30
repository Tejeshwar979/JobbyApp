import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

class Profile extends Component {
  state = {isLoading: true, profileDetails: {}}

  componentDidMount = async () => {
    const jwtToken = Cookies.get('JwtToken')

    const url = 'https://apis.ccbp.in/profile'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)

    console.log(data.profile_details)

    this.setState({isLoading: false, profileDetails: data.profile_details})
  }

  displayProfile = () => {
    const {profileDetails} = this.state
    const {name, profile_image_url, short_bio} = profileDetails
    return (
      <>
        <div className="profile-cont ">
          <h1>{name}</h1>
          <img src={profile_image_url} />
          <p>{short_bio}</p>
        </div>
      </>
    )
  }

  Loader = () => {
    return (
      <Loader
        className="loader-profile-cont"
        type="Oval"
        color="#4f46e5"
        height={60}
        width={60}
      />
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <div>{isLoading ? this.Loader() : this.displayProfile()}</div>
      </>
    )
  }
}

export default Profile
