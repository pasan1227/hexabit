import React from 'react'
import { communityLinks, footerHeadings, founderLinks } from '../../constants'
import Link from '../../components/Link'
import './footer.css'

const Footer = () => {
  
  
  return (
    <div className='footer-container'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className='footer-heading'>
            <h1>hexabit</h1>
            <p>Hexabit, a long term contributor <br />
              to the development of Web3.
            </p>
          </div>
          <div className="footer-community">
            <h2>MEET OUR COMMUNITIES</h2>
            <div className="links">
              {communityLinks.map((link) => (
                <Link to={link.to} icon={link.icon} key={link.id} />
              ))}
            </div>
          </div>
          <div className='footer-founder'>
            <h2>MEET OUR FOUNDER</h2>
            <div className="links">
              {founderLinks.map((link) => (
                <Link to={link.to} icon={link.icon} key={link.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-right-headings">
            {footerHeadings.map((heading, index) => (
              <div className="heading" key={index}>
                <h1 className='heading-h1'>{heading}</h1>
                <div className='footer-sub-heading'>
                  <span className='o'>O</span>
                  <span>NE</span>
                </div>
              </div>
            ))}
            <div className="heading">
              <h1 className='heading-h1'>CHARLIE Z 360</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  )
}

export default Footer