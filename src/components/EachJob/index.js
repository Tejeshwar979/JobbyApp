import {Component} from 'react'

import {FaRegStar} from 'react-icons/fa'

import {IoLocationOutline} from 'react-icons/io5'

import {MdEmail} from 'react-icons/md'

import SimilarJobs from '../SimilarJobs'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import './index.css'

import Skills from '../skills'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

class EachJob extends Component {
  state = {isLoading: true, jobDetails: {}, similarJobs: []}

  componentDidMount = () => {
    this.fetchEachJobData()
  }

  fetchEachJobData = async () => {
    const JwtToken = Cookies.get('JwtToken')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)

    const detailedData = data.job_details

    const similarJobsData = data.similar_jobs

    this.setState({
      isLoading: false,
      jobDetails: detailedData,
      similarJobs: similarJobsData,
    })
  }

  loader = () => {
    return (
      <Loader
        className="loader-eachJob-cont"
        type="Oval"
        color="#4f46e5"
        height={60}
        width={60}
      />
    )
  }

  showEachJobs = () => {
    const {jobDetails, similarJobs} = this.state
    const {
      company_logo_url,
      company_website_url,
      employment_type,
      job_description,
      life_at_company,
      location,
      package_per_annum,
      rating,
      skills,
      title,
    } = jobDetails

    const {description, image_url} = life_at_company

    return (
      <>
        <div className="jobs-cont">
          <div className="image-title-cont">
            <img src={company_logo_url} />
            <div className="title-rating-star-cont">
              <h1>{title}</h1>
              <div className="rating-star">
                <FaRegStar className="star-icon-style" />
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-employement-package-cont">
            <div className="location-employement-cont">
              <div className="loacation-cont">
                <IoLocationOutline />
                <p>{location}</p>
              </div>
              <div className="employment_type-cont">
                <MdEmail />
                <p>{employment_type}</p>
              </div>
            </div>
            <div className="package-cont">
              <p>{package_per_annum}</p>
            </div>
          </div>
          <hr />
          <div className="description-anchor-cont">
            <h1>Description</h1>
            <a href={company_website_url} target="_blank">
              Visit
            </a>
          </div>
          <h1 className="jobs-description ">{job_description}</h1>
          <h1 className="skills-name">Skills</h1>
          <div className="skills-cont">
            {skills.map(eachItem => (
              <Skills eachItem={eachItem} />
            ))}
          </div>
          <h1>Life At Company</h1>
          <div className="description-image-cont ">
            <h1 className="descrition-name">{description}</h1>
            <img src={image_url} />
          </div>
        </div>
        <div>
          <h1 className="similar-jobs-name">Similar Jobs</h1>
          <div className="similar-jobs-cont">
            {similarJobs.map(eachItem => (
              <SimilarJobs eachItem={eachItem} />
            ))}
          </div>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <div className="main-eachjob-cont">
          <Header />
          <div>{isLoading ? this.loader() : this.showEachJobs()}</div>
        </div>
      </>
    )
  }
}

export default EachJob
