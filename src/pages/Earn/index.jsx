import React from 'react'
import globe from '../../assets/globe.svg'
import ButtonTwo from '../../components/Button-2'
import './earn.css'

const Earn = () => {
  return (
    <section className='earn-container' id='earn'>
      <div className="left-side">
        <div className="left-top">
          <h1>START EARNING</h1>
          <p>
            A remote workplace and a growing <br />
            company is waiting for you.
          </p>
          <ButtonTwo text='APPLY NOW'/>
        </div>
        <div className="left-bottom">
          <img src={globe} alt="" />
        </div>
      </div>
      <div className="right-side">
        <div className="right-top">
          <p className='heading'>ARE YOU ACTIVE <br />
            ON SOCIAL MEDIA?
          </p>
          <p>
            Start earning by joining our affiliate <br />
            program. You'll offer products and <br />
            services made by hexabit.
          </p>
        </div>
        <div className="right-bottom">
          <div className="step-container">
            <div className='step'>
              <p>1</p>
              <p>APPLY</p>
              <p>icon</p>
            </div>
            <div className='step'>
              <p>1</p>
              <p>APPLY</p>
              <p>icon</p>
            </div>
            <div className='step'>
              <p>1</p>
              <p>APPLY</p>
              <p>icon</p>
            </div>
          </div>
          <div className='apply-btn'>
            <button>APPLY NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Earn