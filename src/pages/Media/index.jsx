import React from 'react'
import media from '../../assets/media.svg'
import Button from '../../components/Button'
import SliderDots from '../../components/Page-navigator'
import './media.css'


const Media = () => {
  return (
    <section className='media-container' id='media'>
      <div className='media-left'>
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
          We'll accelerate your community <br />
          growth on social media by leveraging <br />
          the right branding and marketing <br />
          strategies.
        </p>
        <Button icon='phone-volume' text='LEVEL UP MY BRAND' />
      </div>
      <div className='media-center'>
        <p>
          Our team enhances your brand <br />
          identity to make your message <br />
          relevant and attractive for your <br />
          targeted audience.
        </p>
      </div>
      <div className='media-right'>
        <div className='image-media'>
          <img src={media} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Media