import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="Home-bg">
          <Header />
          <div className="main-home-cont">
            <h1 className="heading ">
              Find The Job <br /> That Fits You Life{' '}
            </h1>
            <p className="paragraph ">
              Millions of People are searching for jobs , salary Information ,
              Company reviews , Find The Jobs That Fits Your abilities and
              Potential
            </p>
            <button className="logout-btn">Find Jobs</button>
          </div>
        </div>
      </>
    )
  }
}

export default Home
