import React from 'react'
import strategy from '../../assets/strategy.svg'
import Button from '../../components/Button'
import './grow.css'


const Grow = () => {
  return (
    <section className='grow-container' id='grow'>
      <div className='strategy-left'>
        <div className="heading">
          <h1>STRATEGY</h1>
          <div className='sub-heading'>
            <p className='hex'/>
            <p>NE</p>
          </div>
        </div>
        <p className='description'>A free 1-1 consultation with
          Charlie Z to <br />
          discuss your business gameplan in depth.
        </p>
        <Button icon='phone-volume' text='SPEAK WITH CHARLIE'/>
      </div>
      <div className='strategy-right'>
        <div className='image'>
          <img src={strategy} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Grow