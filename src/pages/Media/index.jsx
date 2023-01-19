import React from 'react'
import media from '../../assets/media.svg'
import Button from '../../components/Button'
import SliderDots from '../../components/Page-navigator'
import './media.css'


const Media = () => {
  return (
    <section className='grow-container' id='media'>
      <SliderDots />
      <div className='strategy-left'>
        <div className='heading'>
          <h1>MEDIA</h1>
          <div className='sub-heading'>
            <p className='hex' />
            <span>NE</span>
          </div>
        </div>
        <p className='description'>
          A free 1-1 consultation with Charlie Z to <br />
          discuss your business gameplan in depth.
        </p>
        <Button icon='phone-volume' text='LEVEL UP MY BRAND' />
      </div>
      <div className='strategy-right'>
        <div className='image-media'>
          <img src={media} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Media