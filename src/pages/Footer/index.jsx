import React from 'react'
import img from '../../assets/4.webp'
import Link from '../../components/Link'
import { communityLinks, footerHeadings, founderLinks } from '../../constants'
import './footer.css'

const Footer = () => {

  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <div className='footer-heading'>
            <h1>hexabit</h1>
            <p>
              Hexabit, a long term contributor <br />
              to the development of Web3.
            </p>
          </div>
          <div className='footer-community'>
            <h2>MEET OUR COMMUNITIES</h2>
            <div className='links'>
              {communityLinks.map((link) => (
                <Link to={link.to} icon={link.icon} key={link.id} />
              ))}
            </div>
          </div>
          <div className='footer-founder'>
            <h2>MEET OUR FOUNDER</h2>
            <div className='links'>
              {founderLinks.map((link) => (
                <Link to={link.to} icon={link.icon} key={link.id} />
              ))}
            </div>
          </div>
        </div>
        <div className='footer-top-right'>
          <div className='footer-right-headings'>
            {footerHeadings.map((heading) => (
              <div className='heading' key={heading.id}>
                <img src={heading.img} alt="" />
                <h1 className='heading-h1'>{heading.name}</h1>
                <div className='footer-sub-heading'>
                  <p className='hex' />
                  <span>NE</span>
                </div>
              </div>
            ))}
            <div className='heading'>
              <img src={img} alt="" />
              <h1 className='heading-h1'>CHARLIE Z 360</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-form-container'>
          <div className='footer-form-content'>
            <h2>CHARLIE'S MORNING BREW</h2>
            <div className='footer-form'>
              <form>
                <input type='text' placeholder='ENTER YOUR EMAIL' />
                <button>SIP THE BREW</button>
              </form>
            </div>
          </div>
          <div className='footer-links'>
            <a href=''>FAQs</a>
            <a href=''>Chat with us</a>
            <a href=''>Terms and conditions</a>
            <a href=''>Privacy policy</a>
            <a href=''>Join our team</a>
          </div>
          <div className='footer-paragraph'>
            <p>From Austin TX the new Sillicon Valley to the world ❤</p>
            <p>
              &copy;{new Date().getFullYear()} Hexabit Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer