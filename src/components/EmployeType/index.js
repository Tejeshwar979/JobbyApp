import {Component} from 'react'

import EmployementType from '../EmployementType'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const EmployeType = props => {
  const {availableCheckBoxChange} = props
  const changeEmployeCheck = (value, check) => {
    availableCheckBoxChange(value, check)
  }
  return (
    <>
      <div>
        <h1 className="employe-heading">Type Of Employement</h1>
        {employmentTypesList.map(eachItem => (
          <EmployementType
            eachItem={eachItem}
            changeEmployeCheck={changeEmployeCheck}
          />
        ))}
      </div>
    </>
  )
}

export default EmployeType
