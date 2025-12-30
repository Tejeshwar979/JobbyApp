import {Component} from 'react'

import Profile from '../Profile'

import Header from '../Header'

import EmployeType from '../EmployeType'

import SalaryType from '../SalaryType'

import AvailableJobs from '../AvailableJobs'

import {FiSearch} from 'react-icons/fi'

import './index.css'

class Jobs extends Component {
  state = {search: '', searchkey: '', radio: '1000000', elements: []}

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  availableCheckBoxChange = (value, check) => {
    this.setState(prevState => {
      if (check) {
        return {elements: [...prevState.elements, value]}
      }
      return {elements: prevState.elements.filter(item => item !== value)}
    })
  }

  submitSearch = () => {
    const {search} = this.state
    this.setState({searchkey: search})
  }

  submitRadioChangeJobs = value => {
    this.setState({radio: value})
  }

  render() {
    const {searchkey, radio, elements} = this.state
    return (
      <>
        <Header />
        <div className="body-cont">
          <div className="profile-sort-cont">
            <Profile />
            <EmployeType
              availableCheckBoxChange={this.availableCheckBoxChange}
            />
            <SalaryType submitRadioChangeJobs={this.submitRadioChangeJobs} />
          </div>
          <div>
            <div className="input-icon">
              <input
                placeholder="search"
                className="search-input-style"
                type="search"
                onChange={this.changeSearch}
              />
              <FiSearch onClick={this.submitSearch} className="icon-style" />
            </div>
            <div>
              <AvailableJobs
                elements={elements}
                radio={radio}
                searchkey={searchkey}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
