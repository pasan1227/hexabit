import React from 'react'
import './newsletter.css'
import swipe22 from '../../assets/newsletters/swipe22.svg';
import swipe23 from '../../assets/newsletters/swipe23.svg';
import swipe24 from '../../assets/newsletters/swipe24.svg';
import swipe25 from '../../assets/newsletters/swipe25.svg';
import newsLogo from '../../assets/news-logo.svg';
import ButtonTwo from '../../components/Button-2';

const Newsletter = () => {
  return (
    <section className='newsletter-container' id='newsletter'>
      <div className='container'>
        <div className='col-1'>
          <div className='image-left-top'>
            <img src={swipe23} alt='' />
          </div>
          <div className='image-left-bottom'>
            <img src={swipe24} alt='' />
          </div>
        </div>

        <div className='col-2'>
          <div className='content'>
            <img src={newsLogo} alt="" />
            <ButtonTwo text='CLICK TO READ' icon='less-than' />
            <h2>
              THE MOST UP-TO-DATE NEWS <br />
              AND INSIGHTS ABOUT DIGITAL ASSETS
            </h2>
          </div>
        </div>

        <div className='col-3'>
          <div className='image-right-top'>
            <img src={swipe22} alt='' />
          </div>
          <div className='image-right-bottom'>
            <img src={swipe25} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter