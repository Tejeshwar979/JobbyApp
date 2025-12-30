import './index.css'

const EmployementType = props => {
  const {eachItem, changeEmployeCheck} = props
  const {label, employmentTypeId} = eachItem
  const changeCheckBox = event => {
    changeEmployeCheck(event.target.value, event.target.checked)
  }
  return (
    <>
      <div className="employeType-cont">
        <input
          className="input-check "
          onChange={changeCheckBox}
          id={employmentTypeId}
          type="checkbox"
          value={employmentTypeId}
        />
        <label className="label-item" htmlFor={employmentTypeId}>
          {label}
        </label>
      </div>
    </>
  )
}

export default EmployementType
