import './index.css'

const Skills = props => {
  const {eachItem} = props
  const {name, image_url} = eachItem
  return (
    <>
      <div className="name-skillimage">
        <img className="skill-icon" src={image_url} />
        <h1 className="name-cont">{name}</h1>
      </div>
    </>
  )
}

export default Skills
