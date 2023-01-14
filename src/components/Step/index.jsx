import './step.css'

const Step = ({number, stepName, icon}) => {
  return (
    <div className='step-container'>
      <h1 className='step-number'>{number}</h1>
      <h2 className='step-name'>{stepName}</h2>
      <i className={`${icon} step-icon`}></i>
    </div>
  )
}

export default Step