import SalaryItem from '../SalaryItem'

import './index.css'

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const SalaryType = props => {
  const {submitRadioChangeJobs} = props
  const fuctionChangeRadio = value => {
    submitRadioChangeJobs(value)
  }
  return (
    <>
      <div>
        <h1 className="salary-type-heading">Salary Type</h1>
        {salaryRangesList.map(eachItem => (
          <SalaryItem
            eachItem={eachItem}
            fuctionChangeRadio={fuctionChangeRadio}
          />
        ))}
      </div>
    </>
  )
}

export default SalaryType
