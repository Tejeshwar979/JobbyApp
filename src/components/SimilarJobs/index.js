import {FaRegStar} from 'react-icons/fa'

import {IoLocationOutline} from 'react-icons/io5'

import {MdEmail} from 'react-icons/md'

import './index.css'

const SimilarJobs = props => {
  const {eachItem} = props
  const {
    company_logo_url,
    employment_type,
    job_description,
    location,
    rating,
    title,
  } = eachItem
  return (
    <>
      <div>
        <div className="jobs-cont">
          <div className="image-title-cont">
            <img src={company_logo_url} />
            <div className="title-rating-star-cont">
              <h1 className="title-style">{title}</h1>
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
          </div>
          <hr />
          <h1>Description</h1>
          <h1 className="jobs-descriptions-cont ">{job_description}</h1>
        </div>
      </div>
    </>
  )
}

export default SimilarJobs
