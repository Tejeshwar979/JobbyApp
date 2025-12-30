import './index.css'

const SalaryItem = props => {
  const {eachItem, fuctionChangeRadio} = props
  const {salaryRangeId, label} = eachItem
  const submitRadioChange = event => {
    fuctionChangeRadio(event.target.value)
  }
  return (
    <>
      <div className="salary-cont">
        <input
          name="salary"
          type="radio"
          id={salaryRangeId}
          value={salaryRangeId}
          onChange={submitRadioChange}
        />
        <label htmlFor={salaryRangeId}>{label}</label>
      </div>
    </>
  )
}

export default SalaryItem
