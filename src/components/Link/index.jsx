import './link.css'

const Link = ({to, icon}) => {
  return (
    <a className='brand' href={to}>
      <i className={`fa-brands fa-${icon} link-icon`}></i>
    </a>
  )
}

export default Link