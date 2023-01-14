import React from 'react'
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

              <Link to='' icon='tiktok' />
              <Link to='' icon='linkedin' />
              <Link to='' icon='twitter' />
              <Link to='' icon='instagram' />
            </div>
          </div>
          <div className='footer-founder'>
            <h2>MEET OUR FOUNDER</h2>
            <div className="links">
              <Link to='' icon='spotify' />
              <Link to='' icon='youtube' />
              <Link to='' icon='linkedin' />
              <Link to='' icon='twitter' />
            </div>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-right-headings">
            <div className="heading">
              <h1 className='heading-h1'>STRATEGY</h1>
              <div className='footer-sub-heading'>
                <span className='o'>O</span>
                <span>NE</span>
              </div>
            </div>
            <div className="heading">
              <h1 className='heading-h1'>MEDIA</h1>
              <div className='footer-sub-heading'>
                <span className='o'>O</span>
                <span>NE</span>
              </div>
            </div>
            <div className="heading">
              <h1 className='heading-h1'>CHAIN</h1>
              <div className='footer-sub-heading'>
                <span className='o'>O</span>
                <span>NE</span>
              </div>
            </div>
            <div className="heading">
              <h1 className='heading-h1'>XPLOR</h1>
              <div className='footer-sub-heading'>
                <span className='o'>O</span>
                <span>NE</span>
              </div>
            </div>
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