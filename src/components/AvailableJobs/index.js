import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import Jobsitem from '../Jobsitem'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const JwtToken = Cookies.get('JwtToken')

class AvailableJobs extends Component {
  state = {
    isLoading: true,
    data: [],
    radio: '1000000',
    searchkey: '',
  }

  componentDidMount = () => {
    this.setState(
      {
        radio: this.props.radio,
        searchkey: this.props.searchkey,
      },
      this.fetchjobs,
    )
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.radio !== this.props.radio ||
      prevProps.searchkey !== this.props.searchkey ||
      prevProps.elements !== this.props.elements
    ) {
      this.setState(
        {
          radio: this.props.radio,
          searchkey: this.props.searchkey,
        },
        this.fetchjobs,
      )
    }
  }

  fetchjobs = async () => {
    const {searchkey, radio} = this.state
    const {elements} = this.props
    const elementsjoin = elements.join(',')
    console.log('Token :', JwtToken)
    const url = `https://apis.ccbp.in/jobs?employment_type=${elementsjoin}&minimum_package=${radio}&search=${searchkey}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const dataupd = data.jobs
    this.setState({isLoading: false, data: dataupd})
  }

  loader = () => {
    return (
      <Loader
        className="loader-style"
        type="Oval"
        color="#4f46e5"
        height={60}
        width={60}
      />
    )
  }

  jobsPortal = () => {
    const {data} = this.state
    console.log(data)
    return (
      <>
        <div className="cont-jobs">
          {data.map(eachItem => (
            <Jobsitem eachItem={eachItem} />
          ))}
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <div>{isLoading ? this.loader() : this.jobsPortal()}</div>
      </>
    )
  }
}

export default AvailableJobs
