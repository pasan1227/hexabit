import React from 'react'
import ButtonTwo from '../../components/Button-2'
import './podcast.css'

const Podcast = () => {
  return (
    <section className='podcast-container' id='podcast'>
      <div className="podcast-left">
        <div className='podcast-left-top'>
          <div className='podcast-left-top-content'>
            <h1>LOGO</h1>
            <h1>YOUR GO-TO<br />
              WEB3 PODCAST
            </h1>
          </div>
            <ButtonTwo text='BE A GUEST' icon='microphone-lines'/>
        </div>
        <div className='podcast-left-bottom'>bottom</div>
      </div>
      <div className="podcast-right">right</div>
    </section>
  )
}

export default Podcast